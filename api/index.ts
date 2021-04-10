import matter from 'gray-matter';
import marked from 'marked'
import config from '../config'

interface MenuItem {
  title: string
  link: string
}

interface Config {
  title: string
  description: string
  menu: Array<MenuItem>
}

interface Post {
  slug?: string
  title?: string
  preview?: string
  content?: string
}

export async function getConfig(): Promise<Config> {
  return config
}

export async function getAllPosts(): Promise<Array<Post>> {
  try {
    const context = require.context('../_posts', false, /\.md$/)
    const posts = []
    for (const key of context.keys()) {
      const post = key.slice(2)
      const fileContent = await import(`../_posts/${post}`)
      const meta = matter(fileContent.default)
      const content = marked(meta.content)
      const preview = marked(meta.content.substring(0, 100))
      posts.push({
        slug: post.replace('.md', ''),
        title: meta.data.title,
        preview,
        content,
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
    const { data: { title }, content } = matter(fileContent)
    return {
      title,
      content,
    }
  } catch (error) {
    console.error(`Couldn't load post: ${slug}`, error)
  }
}
