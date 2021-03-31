import Head from 'next/head'
import { Page, Text } from '@geist-ui/react'
import Header from '../_includes/header'

interface Props {
  title?: string
  description?: string
  children?: React.ReactNode
}

export default function DefaultLayout(props: Props) {
  return (
    <main>
      <Head>
        <title>{props.title}</title>
        <meta name='description' content={props.description}/>
      </Head>
      <Page size="mini">
        <Header />
         {props.children}
        <Page.Footer>
          <Text b>Footer</Text>
        </Page.Footer>
      </Page>
    </main>
  )
}
