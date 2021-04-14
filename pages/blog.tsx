import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { Card, Spacer, Text } from '@geist-ui/react'
import DefaultLayout from '../components/layouts/default'
import { getAllPosts } from '../api'

interface BlogProps {
  props: {
    posts: Array<Post>
  }
}
interface Post {
  slug?: string
  title: string
  excerpt?: string
  content?: string
}

export default function Blog({
  posts,
  }: {
  posts: Array<Post>
}) {
  return (
    <DefaultLayout
      title={'Blog'}
      description={'Blog posts about this and that'}
    >
    {posts && posts.map((post: Post, idx: number) => (
      <div key={idx}>
        <Card>
          <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
            <Text h4 style={{cursor: 'pointer', textDecoration: 'underline'}}>{post.title}</Text>
          </Link>
          <ReactMarkdown
            source={post.excerpt}
            allowDangerousHtml
          />
        </Card>
        <Spacer y={1}/>
      </div>
    ))}
    </DefaultLayout>
  )
}
export async function getStaticProps(): Promise<BlogProps> {
  try {
    const posts = await getAllPosts()
    return {
      props: {
        posts
      },
    }
  } catch (error) {
    console.error('Ooops')
  }
}
