import Link from 'next/link'

// IMPORTANT: Keep in sync with `Header.tsx`

export default function Footer() {
  return (
    <div className="bg-neutral text-neutral-content">
      <footer className="max-w-7xl mx-auto footer p-10">
        <div>
          <span className="footer-title">Learn</span>
          <Link href="/tags/course">
            <a className="link link-hover">Courses</a>
          </Link>
          <Link href="/tags/tutorial">
            <a className="link link-hover">Tutorials</a>
          </Link>
          <Link href="/tags/guide">
            <a className="link link-hover">Guides</a>
          </Link>
        </div>
        <div>
          <span className="footer-title">Build</span>
          <Link href="/tags/framework">
            <a className="link link-hover">Frameworks</a>
          </Link>
          <Link href="/tags/library">
            <a className="link link-hover">Libraries</a>
          </Link>
          <Link href="/tags/tool">
            <a className="link link-hover">Tools</a>
          </Link>
          <Link href="/tags/reference">
            <a className="link link-hover">References</a>
          </Link>
          <Link href="/tags/security">
            <a className="link link-hover">Security</a>
          </Link>
        </div>
        <div>
          <span className="footer-title">Career</span>
          <Link href="/tags/job">
            <a className="link link-hover">Jobs</a>
          </Link>
        </div>
        <div>
          <span className="footer-title">Media</span>
          <Link href="/tags/blog">
            <a className="link link-hover">Blogs</a>
          </Link>
          <Link href="/tags/podcast">
            <a className="link link-hover">Podcasts</a>
          </Link>
          <Link href="/tags/newsletter">
            <a className="link link-hover">Newsletters</a>
          </Link>
        </div>
        <div>
          <span className="footer-title">Topics</span>
          <Link href="/tags/nft">
            <a className="link link-hover">NFTs</a>
          </Link>
          <Link href="/tags/web3">
            <a className="link link-hover">Web3</a>
          </Link>
          <Link href="/tags/defi">
            <a className="link link-hover">DeFi</a>
          </Link>
          <Link href="/tags/metaverse">
            <a className="link link-hover">Metaverse</a>
          </Link>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <a
            className="link link-hover"
            href="https://twitter.com/cryptodevhub"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            className="link link-hover"
            href="https://cryptodevhub.io/discord"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>
          <a
            className="link link-hover"
            href="https://github.com/cryptodevhub"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
      <footer className="footer footer-center p-4 border-t border-base-300">
        <div className="items-center grid-flow-col">
          <p>Copyright {new Date().getFullYear()}, All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}
