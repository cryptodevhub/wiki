import Link from 'next/link'
import { CubeIcon } from '@heroicons/react/outline'

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <CubeIcon className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" />
            <span className="ml-3 text-xl">CryptoDevHub</span>
          </a>
        </Link>
        <nav className="md:ml-auto md:mr-0 flex flex-wrap items-center text-base justify-center">
          <Link href="/start-here">
            <a className="mr-5 hover:text-gray-900">👋 Start Here</a>
          </Link>
          <Link href="/learn-blockchain-development">
            <a className="mr-5 hover:text-gray-900">🧑‍🏫 Learn</a>
          </Link>
          <Link href="/blockchain-development-tools">
            <a className="mr-5 hover:text-gray-900">🧑‍💻 Build</a>
          </Link>
          <Link href="/blockchain-developer-jobs">
            <a className="mr-5 hover:text-gray-900">💰 Jobs</a>
          </Link>
          <Link href="/blockchain-media">
            <a className="md:mr-0 mr-5 hover:text-gray-900">📺 Media</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
