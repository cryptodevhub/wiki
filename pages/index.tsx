import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'

import Search from '../components/Search'
import Listing from '../components/Listing'
import { getContentByTags, Content } from '../lib/content'

export default function Home({
  courses,
  tutorials,
  libraries,
  tools,
  jobs,
  security
}: {
  courses: Content[]
  tutorials: Content[]
  libraries: Content[]
  tools: Content[]
  jobs: Content[]
  security: Content[]
}) {
  return (
    <>
      <NextSeo
        title="Home"
        description="The one-stop-shop for Blockchain- and Crypto developers. Learn Blockchain development, get a job in Crypto, grow your network."
      />
      <section className="text-gray-600 body-font">
        <div className="flex py-12 justify-center">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              CryptoDevHub
            </h1>
            <p className="mb-8 leading-relaxed">
              Welcome to CryptoDevHub — Your one-stop-shop to learn all about Blockchain development
              and Crypto Technologies.
            </p>
            <div className="flex justify-center">
              <Link href="/start-here">
                <a className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  Start Here
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Search />
      </section>
      <section>
        <Listing
          title="Courses"
          body="Learn Web3 development with the following courses."
          slug="tags/course"
          max={6}
          content={courses}
        />
        <Listing
          title="Tutorials"
          body="Learn how to build dApps on Blockchains like Ethereum, Polygon or Avalanche."
          slug="ethereum-virtual-machine-tutorials"
          max={6}
          content={tutorials}
        />
        <Listing
          title="Libraries"
          body="The best libraries to use during Web3 development."
          slug="ethereum-virtual-machine-libraries"
          max={6}
          content={libraries}
        />
        <Listing
          title="Tools"
          body="Tools that simplify dApp development."
          slug="ethereum-virtual-machine-tools"
          max={6}
          content={tools}
        />
        <Listing
          title="Jobs"
          body="Job Boards you can browse to land your dream job in Crypto."
          slug="tags/job"
          max={6}
          content={jobs}
        />
        <Listing
          title="Security"
          body="Learn about Smart Contract security to harden your projects."
          slug="ethereum-virtual-machine-security"
          max={6}
          content={security}
        />
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const courses = getContentByTags(['course'], 'and')
  const tutorials = getContentByTags(['evm', 'tutorial'], 'and')
  const libraries = getContentByTags(['evm', 'library'], 'and')
  const tools = getContentByTags(['evm', 'tool'], 'and')
  const jobs = getContentByTags(['job'], 'and')
  const security = getContentByTags(['evm', 'security'], 'and')

  return {
    props: {
      courses,
      tutorials,
      libraries,
      tools,
      jobs,
      security
    }
  }
}
