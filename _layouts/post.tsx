import DefaultLayout from './default'
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
        <div dangerouslySetInnerHTML={{ __html: content}}/>
        <div><Link href='/blog'>back to blog</Link></div>
      </article>
    </DefaultLayout>
  )
}
