import Head from 'next/head'
import { Spacer, Page } from '@geist-ui/react'
import Header from '../_includes/header'
import Footer from '../_includes/footer'

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
      <Page size="medium" dotBackdrop>
        {props.children}
        <Footer />
      </Page>
    </main>
  )
}
