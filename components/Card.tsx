import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowSmRightIcon } from '@heroicons/react/outline'

import { Content } from '../lib/content'

// Note: We're using `useEffect` and `useState` here to enforce a client-only rendering.
//  This is necessary because we're shuffling the `tags` array which results in hydration
//  issues if done on the client- and server side.
//  See the following StackOverflow answer for more information: https://stackoverflow.com/a/72008126
export default function Card({ content }: { content: Content }) {
  const { title, description, slug, tags } = content
  const [shuffledTags, setShuffledTags] = useState<string[]>([])

  useEffect(() => {
    if (tags?.length) {
      // Adaption of https://stackoverflow.com/a/18650169
      const shuffled = tags.sort(() => 0.5 - Math.random()).slice(0, 3)
      setShuffledTags(shuffled)
    }
  }, [tags])

  return (
    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
      <div className="flex items-center mb-3">
        <h2 className="text-gray-900 text-lg title-font font-medium">
          {content.url ? (
            <a href={content.url} target="_blank" rel="noreferrer">
              {title}
            </a>
          ) : (
            <Link href={`/${slug}`}>
              <a>{title}</a>
            </Link>
          )}
        </h2>
      </div>
      <div className="flex-grow">
        <p className="leading-relaxed text-base line-clamp-2">{description}</p>
        <ul>
          {shuffledTags.map((tag) => (
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
        <div className="flex mt-4 justify-end">
          <Link href={`/${slug}`}>
            <a className="text-purple-500 hover:text-purple-600 inline-flex items-center">
              Details <ArrowSmRightIcon className="w-4 h-4 ml-1" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
