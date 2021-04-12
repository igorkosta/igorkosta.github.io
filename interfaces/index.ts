export interface MenuItem {
  title: string
  link: string
}

export interface MenuItem {
  title: string
  link: string
}

export interface Config {
  title: string
  description: string
  menu: Array<MenuItem>
}

export interface Post {
  slug: string
  title: string
  excerpt?: string
  content?: string
}

export interface BlogProps {
  props: {
    posts: Array<Post>
    title: string
    description: string
  }
}
