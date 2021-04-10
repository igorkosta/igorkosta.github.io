import DefaultLayout from '../_layouts/default'
import { Card, Divider, Link, Text, Spacer } from '@geist-ui/react'
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
      {posts.map((post: Post, idx: number) => (
        <>
          <Card key={idx}>
            <Link href={'/blog/' + post.slug} underline>
              <Text h4>{post.title}</Text>
            </Link>
              <Divider y={0} />
              <p dangerouslySetInnerHTML={{ __html: post.preview }} />
            </Card>
          <Spacer y={5} />
        </>
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
