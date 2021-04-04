import PostLayout from '../../_layouts/post'
import { getAllPosts, getPostBySlug } from '../../api'

export default function Post({ title, content }) {
  return <PostLayout title={title} content={content} />
}

export async function getStaticProps(context) {
  const post = await getPostBySlug(context.params.slug)
  return {
    props: post,
  }
}

export async function getStaticPaths() {
  let paths = await getAllPosts()
  paths = paths.map((post) => {
    return {
      params: { slug: post.slug },
    }
  })
  return {
    paths,
    fallback: false,
  }
}