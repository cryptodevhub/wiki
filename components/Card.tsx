import Link from 'next/link'

export default function Card({ title, body, url, cta, variant = 'regular' }: Props) {
  return (
    <div
      className={`card shadow-sm w-full h-full ${
        variant === 'regular' ? 'bg-base-100' : 'bg-primary text-primary-content'
      }`}
    >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="line-clamp-2">{body}</p>
        <div className="card-actions justify-center">
          {url.startsWith('http') ? (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className={`btn ${variant === 'regular' ? 'btn-primary' : ''}`}
            >
              {cta}
            </a>
          ) : (
            <Link href={url.startsWith('/') ? url : `/${url}`}>
              <a className={`btn ${variant === 'regular' ? 'btn-primary' : ''}`}>{cta}</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

type Props = {
  title: string
  body: string
  url: string
  cta: string
  variant?: 'regular' | 'primary'
}
