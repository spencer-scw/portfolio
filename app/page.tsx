import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <img src="/times-wide.png" classname="mb-8"></img>
      <h1 className="mb-2 mt-8 text-2xl font-semibold tracking-tighter text-[#4b7d08] dark:text-[#72a336]">
        Spencer Wilson
      </h1>
      <p className="mb-4">
        {`I'm a Data Scientist and Software Engineer. I graduated in April 2025 from BYU with a Bachelor's of Statistics. I'm passionate about machine learning, big data, and software development. I'm always trying to learn more and try new things. This portfolio is a showcase of a few of the projects I've worked on and things I'm excited about!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
