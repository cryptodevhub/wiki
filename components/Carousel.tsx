import Link from 'next/link'

import ContentCard from './Content'
import { Content } from '../lib/content'

export default function Carousel({ title, body, slug, max, content }: Props) {
  if (content.length === 0) return <></>

  return (
    <section>
      <div className="text-center mb-4">
        <h2 className="text-2xl text-primary">
          <Link href={`/${slug}`}>
            <a>{title}</a>
          </Link>
        </h2>
        <p className="text-md mt-2">{body}</p>
      </div>
      <ul className="carousel carousel-center rounded-box">
        {content.slice(0, max).map((item) => (
          <li key={item.slug} className="carousel-item mx-2 w-fit">
            <ContentCard content={item} />
          </li>
        ))}
      </ul>
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
