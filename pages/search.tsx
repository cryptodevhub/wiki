import lunr from 'lunr'
import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Card from '../components/Card'
import SearchComponent from '../components/Search'
import { getAllContent, Content } from '../lib/content'

export default function Search({ index, documents }: Props) {
  const router = useRouter()
  const idx = lunr.Index.load(JSON.parse(index))
  const [query, setQuery] = useState<string>('')
  const [result, setResult] = useState<lunr.Index.Result[]>([])

  useEffect(() => {
    if (router.isReady) {
      const q = router.query.q
      if (q) {
        setQuery(q as string)
      }
    }
  }, [router.isReady, router.query.q])

  useEffect(() => {
    if (query && query.length > 0) {
      let result: lunr.Index.Result[] = []
      try {
        result = idx.search(query)
      } catch (e) {}
      setResult(result)
    } else {
      setResult([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return (
    <>
      <NextSeo
        title="Search"
        description="Find Blockchain development tutorials, guides, tools, articles and more."
      />
      <section className="text-gray-600 body-font">
        <div className="flex pt-12 justify-center">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Search
            </h1>
            <p className="mb-8 leading-relaxed">
              Find Blockchain development tutorials, guides, tools, articles and more.
            </p>
          </div>
        </div>
        <SearchComponent q={query} />
        {result.length > 0 && (
          <ul className="grid gap-8 pt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {result.map((item) => (
              <li key={item.ref}>
                <Card content={documents[item.ref] as Content} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getAllContent()
  const documents: Record<string, unknown> = {}

  const index = lunr(function () {
    this.ref('slug')
    this.field('title', { boost: 10 })
    this.field('description')
    this.field('tags')

    content.forEach((item) => {
      this.add(item)
      documents[item.slug] = item
    }, this)
  })

  return {
    props: {
      documents,
      index: JSON.stringify(index.toJSON())
    }
  }
}

type Props = {
  index: string
  documents: Record<string, Document>
}

type Document = {
  title: string
  description: string
  tags: string[]
}
