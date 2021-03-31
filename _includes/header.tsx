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
      <Tabs initialValue="1">
        {config.menu.map((item: MenuItem, idx: number) => {
          return (
            <Tabs.Item label={item.title} value={menuLink(item)}>
            </Tabs.Item>
          )
        })}
      </Tabs>
    </Page.Header>
  )
}

const menuLink = (item: MenuItem): string => {
  return `
    <Link
      color
      href={${item.link}}>
      {${item.title}}
    </Link>
  `
}

export async function getStaticProps() {
  const { menu } = await getConfig()
  return {
    props: {
      menu,
    }
  }
}
