import ReactMarkdown from 'react-markdown'
import DefaultLayout from '../_layouts/default'
import { Card, Link, Text } from '@geist-ui/react'
import { getConfig, getAllPosts } from '../api'

interface BlogProps {
  props: {
    posts: Array<Post>
    title: string
    description: string
  }
}
interface Post {
  slug?: string
  title: string
  excerpt?: string
  content?: string
}

export default function Blog({
  title,
  description,
  posts,
  }: {
  title: string
  description: string
  posts: Array<Post>
}) {
  return (
    <DefaultLayout
      title={title}
      description={description}
    >
    {posts && posts.map((post: Post, idx: number) => (
      <Card key={idx}>
        <Link key={idx} href={'/blog/' + post.slug} underline>
          <Text h4>{post.title}</Text>
        </Link>
        <ReactMarkdown
          source={post.excerpt}
          allowDangerousHtml
        />
      </Card>
    ))}
    </DefaultLayout>
  )
}
export async function getStaticProps(): Promise<BlogProps> {
  try {
    const { title, description } = await getConfig()
    const posts = await getAllPosts()
    return {
      props: {
        posts,
        title,
        description,
      },
    }
  } catch (error) {
    console.error('Ooops')
  }
}
