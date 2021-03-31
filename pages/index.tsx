import DefaultLayout from '../_layouts/default'
import { Text } from '@geist-ui/react'

export default function Home() {
  return (
    <DefaultLayout title={'Main'}>
      <Text>
        Hello, I am using <Text b>Geist UI</Text> !
      </Text>
    </DefaultLayout>
  )
}
