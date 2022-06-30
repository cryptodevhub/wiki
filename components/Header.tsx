import Link from 'next/link'
import { SearchIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, ChevronRightIcon, MenuIcon } from '@heroicons/react/solid'

// IMPORTANT: Keep in sync with `Footer.tsx`

export default function Header() {
  return (
    <div className="bg-base-100 shadow">
      <header className="max-w-7xl mx-auto navbar">
        <nav className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <MenuIcon className="h-5 w-5" />{' '}
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
            >
              <li>
                <Link href="/start-here">
                  <a>Start Here</a>
                </Link>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Learn
                  <ChevronRightIcon className="fill-current" width={20} height={20} />
                </a>
                <ul className="rounded-box p-2 bg-base-100">
                  <li>
                    <Link href="/tags/course">
                      <a>Courses</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tags/tutorial">
                      <a>Tutorials</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tags/guide">
                      <a>Guides</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Build
                  <ChevronRightIcon className="fill-current" width={20} height={20} />
                </a>
                <ul className="rounded-box p-2 bg-base-100">
                  <li>
                    <Link href="/tags/framework">
                      <a>Frameworks</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tags/library">
                      <a>Libraries</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tags/tool">
                      <a>Tools</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tags/reference">
                      <a>References</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tags/security">
                      <a>Security</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Career
                  <ChevronRightIcon className="fill-current" width={20} height={20} />
                </a>
                <ul className="rounded-box p-2 bg-base-100">
                  <li>
                    <Link href="/tags/job">
                      <a>Jobs</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Media
                  <ChevronRightIcon className="fill-current" width={20} height={20} />
                </a>
                <ul className="rounded-box p-2 bg-base-100">
                  <li>
                    <Link href="/tags/blog">
                      <a>Blogs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tags/podcast">
                      <a>Podcasts</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tags/newsletter">
                      <a>Newsletters</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Topics
                  <ChevronRightIcon className="fill-current" width={20} height={20} />
                </a>
                <ul className="rounded-box p-2 bg-base-100">
                  <li>
                    <Link href="/tags/nft">
                      <a>NFTs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tags/web3">
                      <a>Web3</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tags/defi">
                      <a>DeFi</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tags/metaverse">
                      <a>Metaverse</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link href="/">
            <a className="btn btn-ghost normal-case text-xl">CryptoDevHub</a>
          </Link>
        </nav>
        <nav className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 z-50">
            <li>
              <Link href="/start-here">
                <a>Start Here</a>
              </Link>
            </li>
            <li tabIndex={0}>
              <a>
                Learn
                <ChevronDownIcon className="fill-current" width={20} height={20} />
              </a>
              <ul className="rounded-box p-2 bg-base-100">
                <li>
                  <Link href="/tags/course">
                    <a>Courses</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tags/tutorial">
                    <a>Tutorials</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tags/guide">
                    <a>Guides</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <a>
                Build
                <ChevronDownIcon className="fill-current" width={20} height={20} />
              </a>
              <ul className="rounded-box p-2 bg-base-100">
                <li>
                  <Link href="/tags/framework">
                    <a>Frameworks</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tags/library">
                    <a>Libraries</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tags/tool">
                    <a>Tools</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tags/reference">
                    <a>References</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tags/security">
                    <a>Security</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <a>
                Career
                <ChevronDownIcon className="fill-current" width={20} height={20} />
              </a>
              <ul className="rounded-box p-2 bg-base-100">
                <li>
                  <Link href="/tags/job">
                    <a>Jobs</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <a>
                Media
                <ChevronDownIcon className="fill-current" width={20} height={20} />
              </a>
              <ul className="rounded-box p-2 bg-base-100">
                <li>
                  <Link href="/tags/blog">
                    <a>Blogs</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tags/podcast">
                    <a>Podcasts</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tags/newsletter">
                    <a>Newsletters</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <a>
                Topics
                <ChevronDownIcon className="fill-current" width={20} height={20} />
              </a>
              <ul className="rounded-box p-2 bg-base-100">
                <li>
                  <Link href="/tags/nft">
                    <a>NFTs</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tags/web3">
                    <a>Web3</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tags/defi">
                    <a>DeFi</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tags/metaverse">
                    <a>Metaverse</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="navbar-end">
          <Link href="/search">
            <a className="btn btn-ghost btn-circle">
              <SearchIcon className="h-5 w-5" />{' '}
            </a>
          </Link>
        </div>
      </header>
    </div>
  )
}
