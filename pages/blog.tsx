import DefaultLayout from '../_layouts/default'
import Link from 'next/link'
import { Card, Divider, Text } from '@geist-ui/react'
import { getConfig, getAllPosts } from '../api'

interface BlogProps {
  props: {
    posts: Array<Post>
    title: string
    description: string
  }
}
interface Post {
  title: string
  slug: string
  content: string
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
      description={description}>
      {posts.map((post: Post, idx: number) => {
        return (
          <Link key={idx} href={'/blog/' + post.slug}>
            <Card>
              <Card.Content>
                <Text b>{post.title}</Text>
              </Card.Content>
              <Divider y={0} />
              <Card.Content>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </Card.Content>
            </Card>
          </Link>
        )
      })}
    </DefaultLayout>
  )
}
export async function getStaticProps(): Promise<BlogProps> {
  try {
    const { menu, title, description } = await getConfig()
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
