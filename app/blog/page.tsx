import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter text-[#4b7d08] dark:text-[#72a336]">My Blog</h1>
      <BlogPosts />
    </section>
  )
}
