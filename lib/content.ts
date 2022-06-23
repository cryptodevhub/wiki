import fs from 'fs'
import path from 'path'
import html from 'remark-html'
import { remark } from 'remark'
import matter from 'gray-matter'

import { getSlug, getAllFilePaths } from '../scripts/shared'

const CONTENT_DIR_PATH = path.join(process.cwd(), 'content')

export function getContentBySlug(slug: string): Content | undefined {
  const filePaths = getAllFilePaths(CONTENT_DIR_PATH)

  let found
  for (const filePath of filePaths) {
    const content = getContent(filePath)
    if (getSlug(filePath) === slug) {
      found = content
      break
    }
  }

  return found
}

export function getContentByTags(tags: string[], operator: Operator): Content[] {
  const filePaths = getAllFilePaths(CONTENT_DIR_PATH)

  const all: Content[] = filePaths.map((filePath: string) => getContent(filePath))

  let filtered
  if (operator === 'or') {
    filtered = all.filter((content) => {
      return tags.some((tag) => content.tags.includes(tag))
    })
  } else {
    filtered = all.filter((content) => {
      return tags.every((tag) => content.tags.includes(tag))
    })
  }

  return sort(filtered)
}

export function getAllContent(): Content[] {
  const filePaths = getAllFilePaths(CONTENT_DIR_PATH)

  const all: Content[] = filePaths.map((filePath: string) => getContent(filePath))

  return sort(all)
}

export function getAllContentSlugs(): Slug[] {
  const filePaths = getAllFilePaths(CONTENT_DIR_PATH)

  return filePaths.map((filePath: string) => ({
    params: {
      slug: getSlug(filePath)
    }
  }))
}

function getContent(filePath: string): Content {
  const slug = getSlug(filePath)
  const content = fs.readFileSync(filePath, 'utf-8')

  const parsed = matter(content)
  const processed = remark().use(html).processSync(parsed.content)

  return {
    slug,
    title: parsed.data.title,
    description: parsed.data.description,
    authors: parsed.data.authors,
    tags: parsed.data.tags,
    created: parsed.data.created,
    updated: parsed.data.updated,
    body: processed.toString(),
    url: parsed.data.url || null,
    embedded: parsed.data.embedded || null
  }
}

function sort(content: Content[]): Content[] {
  return content.sort(({ updated: a }, { updated: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    }
    return 0
  })
}

export type Content = {
  title: string
  description: string
  authors: string[]
  slug: string
  tags: string[]
  created: string
  updated: string
  body: string
  url?: string
  embedded?: Embedded
}

type Operator = 'and' | 'or'

type Embedded = {
  tags: string[]
  operator: Operator
}

type Slug = {
  params: {
    slug: string
  }
}
