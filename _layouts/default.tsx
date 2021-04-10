import Head from 'next/head'
import { Page } from '@geist-ui/react'
import Footer from '../_includes/footer'

interface Props {
  title?: string
  description?: string
  size?: string
  children?: React.ReactNode
}

export default function DefaultLayout(props: Props) {
  return (
    <main>
      <Head>
        <title>{props.title}</title>
        <meta name='description' content={props.description}/>
      </Head>
      <Page size={props.size} dotBackdrop>
        {props.children}
        <Footer />
      </Page>
    </main>
  )
}
