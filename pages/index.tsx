import DefaultLayout from '../components/layouts/default'
import { Dot, Row, Avatar, Text, Link } from '@geist-ui/react'
import { getConfig } from '../api'

export default function Home({ social, about }) {
  return (
    <DefaultLayout
      title={'About'}
      size={'small'}
      description={'Short writeup about my experience'}
    >
      <Row gap={0.8} justify="center" style={{ marginBottom: '15px' }}>
        <Avatar src={'/images/igor.jpg'} size="large" />
      </Row>
      <Row gap={0.8} justify="center" style={{ marginBottom: '15px' }}>
        <Text b>Igor</Text>
      </Row>
      <Row gap={0.8} justify="center" style={{ marginBottom: '15px' }}>
        <Dot style={{ marginLeft: '5px' }} type="success" />
        {social &&
        social.map((network: { url: string, name: string }, idx: number) => (
          <div key={idx}>
            <Link href={network.url} target="_blank" underline>
              <Text small>{network.name}</Text>
            </Link>
            <Dot style={{ marginLeft: '10px' }} type="success" />
          </div>
        ))}
      </Row>
      <Row gap={0.8} justify="center" style={{ marginBottom: '15px' }}>
        <div dangerouslySetInnerHTML={{ __html: about }} />
      </Row>
    </DefaultLayout>
  )
}

export async function getStaticProps(): Promise<any> {
  try {
    const { social, about } = await getConfig()
    return {
      props: {
        social,
        about
      },
    }
  } catch (error) {
    console.error('Ooops')
  }
}
