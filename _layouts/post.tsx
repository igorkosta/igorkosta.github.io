import ReactMarkdown from 'react-markdown'
import DefaultLayout from './default'
import CodeBlock from '../components/codeblock'
import Head from 'next/head'
import Link from 'next/link'
 
export default function PostLayout({ title, content }) {
  return (
    <DefaultLayout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h3>{title}</h3>
        <ReactMarkdown source={content} renderers={{ code: CodeBlock }} />
        <div><Link href='/blog'>back to blog</Link></div>
      </article>
    </DefaultLayout>
  )
}
