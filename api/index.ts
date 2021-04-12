import matter from 'gray-matter';
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
  title: string
  excerpt?: string
  content?: string
}

export async function getConfig(): Promise<Config> {
  return config
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
    const { data: { title }, content } = matter(fileContent)
    return {
      title,
      content,
    }
  } catch (error) {
    console.error(`Couldn't load post: ${slug}`, error)
  }
}
