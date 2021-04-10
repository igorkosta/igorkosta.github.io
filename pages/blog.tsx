import DefaultLayout from '../_layouts/default'
import { Card, Divider, Link, Text } from '@geist-ui/react'
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
  preview: string
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
      description={description}
    >
      {posts.map((post: Post, idx: number) => {
        return (
          <Link key={idx} href={'/blog/' + post.slug}>
            <Card>
              <Text h4>{post.title}</Text>
              <Divider y={0} />
              <p dangerouslySetInnerHTML={{ __html: post.preview }} />
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
