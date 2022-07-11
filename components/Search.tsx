import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Search({ q }: { q?: string }) {
  const router = useRouter()
  const [query, setQuery] = useState<string>(q || '')

  useEffect(() => {
    if (q) {
      setQuery(q)
    }
  }, [q])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    router.push({
      pathname: '/search',
      query: {
        q: query
      }
    })
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.currentTarget.value)
  }

  return (
    <div className="flex rounded-lg h-full bg-gray-100 p-4">
      <div className="flex-grow">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="What are you looking for? (e.g. Smart Contract, Tutorial, Security, ...)"
            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={query}
            onChange={handleChange}
          ></input>
        </form>
      </div>
    </div>
  )
}
