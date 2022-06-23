/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const path = require('path')

const { domain } = require('../core.config')
const { getSlug, getAllFilePaths } = require('./shared')

const PAGES_DIR_PATH = path.join(__dirname, '..', 'pages')
const PUBLIC_DIR_PATH = path.join(__dirname, '..', 'public')
const CONTENT_DIR_PATH = path.join(__dirname, '..', 'content')

function main() {
  const pagesFilePaths = getAllFilePaths(PAGES_DIR_PATH)
  const contentFilePaths = getAllFilePaths(CONTENT_DIR_PATH)

  const contentPaths = contentFilePaths.map((filePath) => getSlug(filePath))

  // TODO: Update filtering to use regex
  const pagePaths = pagesFilePaths.reduce((accum, filePath) => {
    // Get relative path
    let path = filePath.split(PAGES_DIR_PATH).pop()
    // Remove trailing slash
    path = path.replace('/', '')
    // Remove file extension
    path = path.split('.').shift()
    // Filter out files in `api` directory
    if (path.startsWith('api')) {
      return accum
    }
    // Filter out files that start with `_`
    else if (path.includes('_')) {
      return accum
    }
    // Filter out files named `index`
    else if (path.includes('index')) {
      return accum
    }
    // Filter out files that include `[]`
    else if (path.includes('[') && path.includes(']')) {
      return accum
    }

    accum.push(path)

    return accum
  }, [])

  const paths = [...contentPaths, ...pagePaths]

  const urls = [
    // Root domain
    getSnippet(''),
    ...paths.map((path) => getSnippet(path))
  ]

  let content = '<?xml version="1.0" encoding="utf-8" standalone="yes" ?>'
  content += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join(
    '\n'
  )}</urlset>`

  fs.writeFileSync(path.join(PUBLIC_DIR_PATH, 'sitemap.xml'), content)
}

function getSnippet(path) {
  return `<url><loc>${domain}/${path}</loc></url>`
}

main()
