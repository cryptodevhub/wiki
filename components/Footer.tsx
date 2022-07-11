import Link from 'next/link'
import { CubeIcon } from '@heroicons/react/outline'

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <CubeIcon className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" />
            <span className="ml-3 text-xl">CryptoDevHub</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            The one-stop-shop for Blockchain- and Crypto developers.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Learn
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/tags/course">
                  <a className="text-gray-600 hover:text-gray-800">Courses</a>
                </Link>
              </li>
              <li>
                <Link href="/tags/tutorial">
                  <a className="text-gray-600 hover:text-gray-800">Tutorials</a>
                </Link>
              </li>
              <li>
                <Link href="/tags/guide">
                  <a className="text-gray-600 hover:text-gray-800">Guides</a>
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Build
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/tags/framework">
                  <a className="text-gray-600 hover:text-gray-800">Frameworks</a>
                </Link>
              </li>
              <li>
                <Link href="/tags/library">
                  <a className="text-gray-600 hover:text-gray-800">Libraries</a>
                </Link>
              </li>
              <li>
                <Link href="/tags/tool">
                  <a className="text-gray-600 hover:text-gray-800">Tools</a>
                </Link>
              </li>
              <li>
                <Link href="/tags/reference">
                  <a className="text-gray-600 hover:text-gray-800">References</a>
                </Link>
              </li>
              <li>
                <Link href="/tags/security">
                  <a className="text-gray-600 hover:text-gray-800">Security</a>
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Career
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/tags/job">
                  <a className="text-gray-600 hover:text-gray-800">Jobs</a>
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Topics
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/tags/nft">
                  <a className="text-gray-600 hover:text-gray-800">NFTs</a>
                </Link>
              </li>
              <li>
                <Link href="/tags/web3">
                  <a className="text-gray-600 hover:text-gray-800">Web3</a>
                </Link>
              </li>
              <li>
                <Link href="/tags/defi">
                  <a className="text-gray-600 hover:text-gray-800">DeFi</a>
                </Link>
              </li>
              <li>
                <Link href="/tags/metaverse">
                  <a className="text-gray-600 hover:text-gray-800">Metaverse</a>
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} CryptoDevHub —
            <a
              href="https://twitter.com/pmmuens"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @pmmuens
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              href="http://twitter.com/cryptodevhub"
              rel="noopener noreferrer"
              className="ml-3 text-gray-500"
              target="_blank"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
