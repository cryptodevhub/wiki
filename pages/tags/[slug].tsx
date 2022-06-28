import { NextSeo } from 'next-seo'
import { GetStaticPaths, GetStaticProps } from 'next'

import ContentCard from '../../components/Content'
import { toTitleCase } from '../../lib/utils'
import { getAllContentTags, Content, getContentByTags } from '../../lib/content'

export default function Show({ slug, content }: { slug: string; content: Content[] }) {
  const title = toTitleCase(slug)
  const description = `Content tagged with "${slug}"`

  return (
    <>
      <NextSeo title={title} description={description} />
      <article>
        <div className="text-center mb-8">
          <h1 className="font-bold text-4xl">{title}</h1>
          <p className="text-md mt-4">{description}</p>
        </div>
        <section>
          <ul className="grid gap-8 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {content.map((content) => (
              <li key={content.slug}>
                <ContentCard content={content} />
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
