import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { GetStaticPaths, GetStaticProps } from 'next'

import Card from '../components/Card'
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
        <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {embedded.map((content) => (
            <li key={content.slug}>
              <Card content={content} />
            </li>
          ))}
        </ul>
      </section>
    )
  }

  if (related.length) {
    recommendations = (
      <section>
        <h2 className="text-center text-2xl mb-6">You might also enjoy</h2>
        <section>
          <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {related.slice(0, 3).map((content) => (
              <li key={content.slug}>
                <Card content={content} />
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
      <article className="text-gray-600 body-font">
        <div className="flex pt-12 justify-center">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">
              <a href={content.url} target="_blank" rel="noreferrer">
                {content.title}
              </a>
            </h1>
          </div>
        </div>
        <div className="mb-4">
          {content.body && (
            <div
              className="py-6 prose max-w-none"
              dangerouslySetInnerHTML={{ __html: content.body }}
            />
          )}
          {embedding}
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex">
            {content.authors.map((author, index) => (
              <li key={author}>{(index ? ', ' : '') + author}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between flex-wrap">
          <ul>
            {content.tags.map((tag) => (
              <li
                key={tag}
                className="text-sm mr-2 px-2 inline-flex border border-gray-400 rounded-full hover:border-gray-600 mt-2"
              >
                <Link href={`/tags/${tag}`}>
                  <a>{tag}</a>
                </Link>
              </li>
            ))}
          </ul>
          {content.url && (
            <div className="flex w-full md:w-fit justify-center mt-8 md:mt-0">
              <a
                href={content.url}
                target="_blank"
                className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
                rel="noreferrer"
              >
                Go to Website
              </a>
            </div>
          )}
        </div>
        <div className="my-16">{recommendations}</div>
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
