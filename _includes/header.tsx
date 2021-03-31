import { Page, Link } from '@geist-ui/react'
import config from '../config'
import { getConfig } from '../api'

interface MenuItem {
  title: string
  link: string
}

export default function Header() {
  return (
    <Page.Header>
      {config.menu.map((item: MenuItem, idx: number) => {
        return (
          <Link key={idx} href={item.link}>
            {item.title}
          </Link>
        )
      })}
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
