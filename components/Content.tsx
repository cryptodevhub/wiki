import Link from 'next/link'

import { Content as Data } from '../lib/content'

export default function Content({ content }: { content: Data }) {
  const { title, description, slug, tags } = content

  return (
    <div className="card bg-base-100 shadow-sm w-full h-full">
      <div className="card-body">
        <h2 className="card-title">
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
        <p className="line-clamp-2">{description}</p>
        <ul>
          {tags.slice(0, 3).map((tag) => (
            <li
              key={tag}
              className="mr-2 badge badge-outline hover:badge-primary hover:badge-outline"
            >
              <Link href={`/tags/${tag}`}>
                <a>{tag}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="card-actions justify-end">
          <Link href={`/${slug}`}>
            <a className="btn btn-link">Details</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
