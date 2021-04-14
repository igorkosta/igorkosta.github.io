import matter from 'gray-matter';
// import config from '../config'

interface MenuItem {
  title: string
  link: string
}

interface SocialLink {
  name: string
  url: string
}

interface OSProject {
  name: string
  url: string
  description: string
}

interface Config {
  title: string
  description: string
  social: Array<SocialLink>
  menu: Array<MenuItem>
  about: string
  openSource: {
    intro: string
    projects: Array<OSProject>
  }
}

interface Post {
  slug?: string
  title: string
  excerpt?: string
  content?: string
  tags?: Array<string>
}

const extractFirstSentence = (content: string) => {
  // every empty line is counted as well
  return content.split('\n').slice(0, 5).join('\n')
}
export async function getAllPosts(): Promise<Array<Post>> {
  try {
    const context = require.context('../_posts', false, /\.md$/)
    const posts = []
    for (const key of context.keys()) {
      const post = key.slice(2)
      const { default: fileContent } = await import(`../_posts/${post}`)
      const { data: { title }, content } = matter(fileContent, { excerpt: true })

      posts.push({
        slug: post.replace('.md', ''),
        title,
        content,
        excerpt: extractFirstSentence(content),
      })
    }
    return posts
  } catch (error) {
    console.error(`Couldn't load posts:`, error)
  }
}

export async function getPostBySlug(slug: string): Promise<Post> {
  try {
    const { default: fileContent } = await import(`../_posts/${slug}.md`)
    const { data: { title, tags }, content } = matter(fileContent)
    return {
      title,
      content,
    }
  } catch (error) {
    console.error(`Couldn't load post: ${slug}`, error)
  }
}

export async function getConfig(): Promise<Config> {
  try {
    const { default: config } = await import('../config')
    const {
      title,
      description,
      menu,
      about,
      openSource,
      social
    } = config
    console.log('OS', openSource)
    return {
      title,
      description,
      menu,
      about,
      openSource,
      social
    }
  } catch (error) {
    console.error(`Couldn't load config:`,  error)
  }
}

