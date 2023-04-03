import type { NextApiRequest, NextApiResponse } from "next";
import { axios, stringifyParams } from 'lib'
const SALESFORCE_API_URL = 'https://login.salesforce.com'
const SALESFORCE_CLIENT_ID = '3MVG9n_HvETGhr3CN3Ym9h6O2qTNs0GBCfAUUxbNQPkLqPX3LkNIxihnWhGjgJXH5fMU5FMM_yZd.Bg35kjvz'
const SALESFORCE_CLIENT_SECRET = '5E4EEA34173A39A1B0D747B715F30C82780F00C4CD939F48A7EAA6152A0DFD1C'
const SALESFORCE_REDIRECT_URL = 'http://localhost:3000/api/test'

axios.defaults.headers.common['Content-Type'] =
  'application/x-www-form-urlencoded'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            const salesforceAccessTokenResponse = await axios.post(
                `${SALESFORCE_API_URL}/services/oauth2/token`,
                stringifyParams({
                    code: req.query.code,
                    grant_type: 'authorization_code',
                    client_id: SALESFORCE_CLIENT_ID,
                    client_secret: SALESFORCE_CLIENT_SECRET,
                    redirect_uri: SALESFORCE_REDIRECT_URL,
                })
            );
            res.send(salesforceAccessTokenResponse.data);
        } catch (error: any) {
            console.log(error);
        }
    }
    if (req.method === 'POST') {
        try {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + req.body.access_token
            const salesforceLeads = await axios.get(
                `${req.body.instance_url}/services/data/v57.0/query?q=SELECT+Id,+name,+email,Title+FROM+Lead`
            );
            console.log(salesforceLeads);
            res.send(salesforceLeads.data);
            console.log("req.body", req.body);
        } catch (error) {
            console.log(error)
        }
    }
}
