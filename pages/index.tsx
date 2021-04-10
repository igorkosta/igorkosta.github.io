import DefaultLayout from '../_layouts/default'
import { Dot, Row, Avatar, Text, Link } from '@geist-ui/react'
import config from '../config'

export default function Home() {
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
        {config.social &&
        config.social.map((network: { url: string, name: string }) => (
          <>
            <Link href={network.url} target="_blank" underline>
              <Text small>{network.name}</Text>
            </Link>
            <Dot style={{ marginLeft: '10px' }} type="success" />
          </>
        ))}
      </Row>
      <Row gap={0.8} justify="center" style={{ marginBottom: '15px' }}>
        <Text p>
          About me section comes - some other day!
        </Text>
      </Row>
    </DefaultLayout>
  )
}
