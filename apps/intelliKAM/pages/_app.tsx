import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import { FC, useState } from 'react'
import fetcher from 'fetcher'
import { SWRConfig } from 'swr'
import '../styles/global.css'
import { CNOptions, NotificationContext } from '../contexts/Notification'
import Notifier from '../components/Notifier'

type AppProps = {
  Component: FC
  pageProps: {
    session: Session | null
  }
}

const swrConfigOpts = {
  fetcher,
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const notificationState = useState<CNOptions>(null)
  return (
    <SessionProvider session={session}>
      <SWRConfig value={swrConfigOpts}>
        <NotificationContext.Provider value={notificationState}>
          <Component {...pageProps} />
          <Notifier />
        </NotificationContext.Provider>
      </SWRConfig>
    </SessionProvider>
  )
}
