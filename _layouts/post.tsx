import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import DefaultLayout from './default'
import CodeBlock from '../components/codeblock'
 
export default function PostLayout({ title, content }) {
  return (
    <DefaultLayout>
      <article>
        <h3>{title}</h3>
        <ReactMarkdown
          source={content}
          renderers={{ code: CodeBlock }}
          allowDangerousHtml
        />
        <div><Link href='/blog'>back to blog</Link></div>
      </article>
    </DefaultLayout>
  )
}
