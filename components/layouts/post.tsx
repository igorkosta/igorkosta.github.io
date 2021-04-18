import ReactMarkdown from 'react-markdown'
import DefaultLayout from './default'
import CodeBlock from '../codeblock'
 
export default function PostLayout({ title, content }) {
  return (
    <DefaultLayout title={title}>
      <article>
        <h3>{title}</h3>
        <ReactMarkdown
          source={content}
          renderers={{ code: CodeBlock }}
          allowDangerousHtml
        />
      </article>
    </DefaultLayout>
  )
}
