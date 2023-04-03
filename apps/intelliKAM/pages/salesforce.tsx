import { Button } from 'ui'
import { useRouter } from 'next/router'
import { axios, stringifyParams } from 'lib'
import { useState, useEffect } from "react"

const getAccessToeknDetails = async (code: string) => {
  try {
    const response: any = await axios.get(
      `http://localhost:3000/api/salesforce?code=${code}`
    )
    return response.data;
  } catch (error) {
    console.error('salesforce Oauth Error:', error)
  }
}

export default function Docs() {
  const [accessTokenDetails, setAccessToken] = useState([]);
  const [leadsData, setLeadsData] = useState([]);
  const getAccessToken = async (code: any) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/salesforce?code=${code}`);
      setAccessToken(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  const getLeadsData = async (accessTokenDetails: any) => {
    try {
      console.log("accessTokenDetails", accessTokenDetails);
      const leadsData: any = await axios.post(`http://localhost:3000/api/salesforce`,
        stringifyParams({
          access_token: accessTokenDetails.access_token,
          instance_url: accessTokenDetails.instance_url
        })
      );
      setLeadsData(leadsData.data.records)
    } catch (error) {
      console.log(error)
    }
  }
  const router = useRouter();
  if (router.query.code) {
    let code = router.query.code as string;
    getAccessToken(code);
  }

  
  useEffect(()=>{
    if (accessTokenDetails) {
      getLeadsData(accessTokenDetails);
    }
  },[accessTokenDetails])


  const connectWithSalesForce = async () => {
    window.location.assign('https://login.salesforce.com/services/oauth2/authorize?client_id=3MVG9n_HvETGhr3CN3Ym9h6O2qTNs0GBCfAUUxbNQPkLqPX3LkNIxihnWhGjgJXH5fMU5FMM_yZd.Bg35kjvz&redirect_uri=http://localhost:3000/api/test&response_type=code');
  }
  console.log('leadsData',leadsData);
  return (
    <>
      {
        leadsData && leadsData.length > 0 ?
        <div>
          <table>
            <tbody>
              <tr>
                <th>Serial Number</th>
                <th>Id</th>
                <th>Name</th>
                <th>Title</th>
                <th>Type</th>
                <th>Email</th>
              </tr>
              {
                leadsData.map((leads: any, index: number) => {
                  return (
                  <tr>
                    <td>{index+1}</td>
                    <td>{leads.Id}</td>
                    <td>{leads.Name}</td>
                    <td>{leads.Title}</td>
                    <td>{leads.attributes.type}</td>
                    <td>{leads.Email}</td>
                  </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        : 
          <div>
            <Button />
            <div>
              <button onClick={connectWithSalesForce}>Connect with salesforce</button>
            </div>
          </div>
      }
    </>
  )
}
