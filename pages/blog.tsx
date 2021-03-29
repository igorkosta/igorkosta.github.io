import DefaultLayout from '../_layouts/default'
import Link from 'next/link'
import { getConfig, getAllPosts } from '../api'

interface Blog {
  posts: Array
  title: string
  description: string
}

export default function Blog({ title, description, posts }: Blog) {
  return (
    <DefaultLayout title={title} description={description}>
      <p>List of posts:</p>
      <ul>
        {posts.map((post, idx) => {
          return (
            <li key={idx}>
              <Link href={'/blog/' + post.slug}>
                <a>{post.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </DefaultLayout>
  )
}
 
export async function getStaticProps(): Blog {
  try {
    const config = await getConfig()
    const allPosts = await getAllPosts()
    return {
      props: {
        posts: allPosts,
        title: config.title,
        description: config.description,
      },
    }
  } catch (error) {
    console.error('Ooops')
  }
}
