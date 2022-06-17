import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { GetStaticPaths, GetStaticProps } from 'next'

import ContentCard from '../components/Content'
import { getContentBySlug, getAllContentSlugs, Content, getContentByTags } from '../lib/content'

export default function Show({
  content,
  embedded,
  related
}: {
  content: Content
  embedded: Content[]
  related: Content[]
}) {
  let embedding = <></>
  let recommendations = <></>

  if (embedded.length) {
    embedding = (
      <section>
        <ul className="grid gap-8 grid-cols-3 mt-8">
          {embedded.map((content) => (
            <li key={content.slug}>
              <ContentCard content={content} />
            </li>
          ))}
        </ul>
      </section>
    )
  }

  if (related.length) {
    recommendations = (
      <section>
        <div className="divider my-14" />
        <h2 className="text-center text-2xl mb-6">You might also enjoy</h2>
        <section>
          <ul className="grid gap-8 grid-cols-3">
            {related.slice(0, 3).map((content) => (
              <li key={content.slug}>
                <ContentCard content={content} />
              </li>
            ))}
          </ul>
        </section>
      </section>
    )
  }

  return (
    <>
      <NextSeo title={content.title} description={content.description} />
      <article>
        <div className="text-center mb-8">
          <h1 className="font-bold text-4xl">
            <a href={content.url} target="_blank" rel="noreferrer">
              {content.title}
            </a>
          </h1>
        </div>
        {content.body && (
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content.body }} />
        )}
        {embedding}
        <div className="flex items-center justify-between my-6">
          <ul className="flex">
            {content.authors.map((author, index) => (
              <li key={author}>{(index ? ', ' : '') + author}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <ul>
            {content.tags.map((tag) => (
              <li
                key={tag}
                className="mr-2 badge badge-outline hover:badge-primary hover:badge-outline"
              >
                <Link href={tag}>
                  <a>{tag}</a>
                </Link>
              </li>
            ))}
          </ul>
          {content.url && (
            <a href={content.url} target="_blank" className="btn btn-primary" rel="noreferrer">
              Go to Website
            </a>
          )}
        </div>
        {recommendations}
      </article>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllContentSlugs()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const content = getContentBySlug(params.slug as string)

    let related: Content[] = []
    let embedded: Content[] = []
    if (content) {
      if (content.embedded) {
        embedded = getContentByTags(content.embedded.tags, content.embedded.operator).filter(
          (item) => item.slug !== content.slug
        )
      }
      related = getContentByTags(content.tags, 'or').filter((item) => item.slug !== content.slug)
    }

    return {
      props: {
        content,
        embedded,
        related
      }
    }
  }
  return {
    props: {}
  }
}
