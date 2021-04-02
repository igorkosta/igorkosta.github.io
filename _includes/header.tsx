import { Tabs, Page, Link } from '@geist-ui/react'
import config from '../config'
import { getConfig } from '../api'

interface MenuItem {
  title: string
  link: string
}

export default function Header() {
  return (
    <Page.Header>
      <Tabs>
        {config.menu.map((item: MenuItem, idx: number) => {
        return (
          <Link key={idx} href={item.link}>
            <Tabs.Item label={item.title} value={item.title}>
              {item.title}
            </Tabs.Item>
          </Link>
          )
        })}
      </Tabs>
    </Page.Header>
  )
}

export async function getStaticProps() {
  const { menu } = await getConfig()
  return {
    props: {
      menu,
    }
  }
}
