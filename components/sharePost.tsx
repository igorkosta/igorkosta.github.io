import { Link, Spacer } from '@geist-ui/react'
import {
  Twitter,
  Facebook,
  Linkedin
} from '@geist-ui/react-icons'

export default function sharePost({ slug }: { slug: string }) {
  return (
    <div style={{ display: 'flex' }}>
      <Link
        href={`https://twitter.com/share?url=https://igorkosta.github.io/blog/${slug}`}
        target="_blank"
        style={{ marginLeft: 'auto' }}
      >
        <Twitter size={20} />
      </Link>
      <Spacer inline x={.35} />
      <Link
        href={`http://www.facebook.com/sharer.php?u=https://igorkosta.github.io/blog/${slug}`}
        target="_blank"
      >
        <Facebook size={20} />
      </Link>
      <Spacer inline x={.35} />
      <Link
        href={`https://www.linkedin.com/sharing/share-offsite/?url=true&amp;url=https://igorkosta.github.io/blog/${slug}`}
        target="_blank"
      >
        <Linkedin size={20} />
      </Link>
      <Spacer inline x={.35} />
  </div>
  )
}
