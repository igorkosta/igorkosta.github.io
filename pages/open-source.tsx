import NextLink from 'next/link'
import { Row, Col } from '@geist-ui/react'
import DefaultLayout from '../components/layouts/default'
import { getConfig } from '../api'

interface OpenSource {
  name: string
  url: string
  description: string
}
interface Link {
  name: string
  image: string
  url: string
}

export default function Blog({
  links, intro, projects
}: {
  links: Array<Link>, intro: string, projects: Array<OpenSource>
}) {
  return (
    <DefaultLayout>
      <Row>
        {links && links.map((link: Link, idx: number) =>(
        <Col key={idx} style={{ textAlign: 'center' }}>
          <a href={link.url} target="_blank">
            <img width={100} src={link.image} />
          </a>
        </Col>
      ))}
      </Row>
      <div dangerouslySetInnerHTML={{ __html: intro }} />
      <ul>
      {projects && projects.map((os: OpenSource, idx: number) => (
        <li key={idx}>
          <NextLink href={os.url}>{os.name}</NextLink> - {os.description}
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
