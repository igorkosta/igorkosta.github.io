import Link from 'next/link'
import DefaultLayout from '../components/layouts/default'
import { getConfig } from '../api'

interface OpenSource {
  name: string
  url: string
  description: string
}

export default function Blog({
  intro, projects
}: {
  intro: string, projects: Array<OpenSource>
}) {
  return (
    <DefaultLayout>
      <div dangerouslySetInnerHTML={{ __html: intro }} />
      <ul>
      {projects && projects.map((os: OpenSource, idx: number) => (
        <li key={idx}>
          <Link href={os.url}>{os.name}</Link> - {os.description}
        </li>
      ))}
      </ul>
    </DefaultLayout>
  )
}

export async function getStaticProps(): Promise<any> {
  try {
    const { openSource: props } = await getConfig()
    return {
      props
    }
  } catch (error) {
    console.error('Ooops')
  }
}
