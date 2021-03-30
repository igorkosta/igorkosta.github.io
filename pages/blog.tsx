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
  description,
  posts,
}: {
  title: string
  description: string
  posts: Array<Post>
}) {
  return (
    <DefaultLayout title={'Blog'} description={description}>
      <h1>List of posts:</h1>
      {posts.map((post: Post, idx: number) => {
        return (
          <Link key={idx} href={'/blog/' + post.slug}>
            <Card width="400px">
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
export async function getStaticProps(): BlogProps {
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
