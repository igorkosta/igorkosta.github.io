import Iframe from 'react-iframe'
import DefaultLayout from '../components/layouts/default'

export default function Podcast() {
  return (
    <DefaultLayout
      title={'Blog'}
      description={'Blog posts about this and that'}
    >
      <Iframe
        url="https://embed.acast.com/5f81c67a64c318148ddf099a?cover=true&ga=false&feed=true"
        frameBorder={0}
        allow="autoplay"
        position="relative"
        width="100%"
        height="500"
      />
    </DefaultLayout>
)}
