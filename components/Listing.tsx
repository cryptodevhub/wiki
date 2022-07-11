import Link from 'next/link'
import { ArrowSmRightIcon } from '@heroicons/react/outline'

import Card from './Card'
import { Content } from '../lib/content'

export default function Listing({ title, body, slug, max, content }: Props) {
  if (content.length === 0) return <></>

  return (
    <section className="text-gray-600 body-font">
      <div className="py-16">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1 uppercase">
            <Link href={`/${slug}`}>
              <a>{title}</a>
            </Link>
          </h2>
          <h3 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">{body}</h3>
        </div>
        <ul className="flex flex-wrap -m-4">
          {content.slice(0, max).map((item) => (
            <li key={item.slug} className="p-4 md:w-1/3 w-full">
              <Card content={item} />
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Link href={`/${slug}`}>
            <a className="text-purple-500 hover:text-purple-600 inline-flex items-center">
              Browse All <ArrowSmRightIcon className="w-4 h-4 ml-1" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

type Props = {
  title: string
  body: string
  slug: string
  max: number
  content: Content[]
}
