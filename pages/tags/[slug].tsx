import { NextSeo } from 'next-seo'
import { GetStaticPaths, GetStaticProps } from 'next'

import Card from '../../components/Card'
import { toTitleCase } from '../../lib/utils'
import { getAllContentTags, Content, getContentByTags } from '../../lib/content'

export default function Show({ slug, content }: { slug: string; content: Content[] }) {
  const title = toTitleCase(slug).replace(/-/g, ' ')
  const description = `Content tagged with "${slug}"`

  return (
    <>
      <NextSeo title={title} description={description} />
      <article className="text-gray-600 body-font">
        <div className="flex pt-12 justify-center">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">{title}</h1>
          </div>
        </div>
        <section>
          <ul className="grid gap-8 pt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {content.map((content) => (
              <li key={content.slug}>
                <Card content={content} />
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllContentTags()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const slug = params.slug as string
    const content = getContentByTags([slug], 'and')
    return {
      props: {
        slug,
        content
      }
    }
  }
  return {
    props: {}
  }
}
