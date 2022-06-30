/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const CONTENT_DIR_PATH = path.join(__dirname, '..', 'content')

function getTagFrequencies() {
  const tags = getAllTags(CONTENT_DIR_PATH)

  const frequency = tags.reduce((accum, tag) => {
    if (accum[tag] !== undefined) {
      accum[tag] += 1
    } else {
      accum[tag] = 1
    }
    return accum
  }, {})

  return frequency
}

function getAllTags(dirPath) {
  const filePaths = getAllFilePaths(dirPath)

  const tags = filePaths
    .map((filePath) => {
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const frontMatter = matter(fileContent)
      if (frontMatter.data.tags?.length > 0) {
        return frontMatter.data.tags
      }
    })
    .reduce((accum, tags) => [...accum, ...tags], [])
    .map((tag) => slugify(tag))

  return tags
}

function getAllDistinctTags(dirPath) {
  const tags = getAllTags(dirPath)
  return Array.from(new Set(tags))
}

function getAllFilePaths(dirPath, fileArray = []) {
  const items = fs.readdirSync(dirPath)

  items.forEach((item) => {
    const filePath = path.join(dirPath, item)
    if (fs.statSync(filePath).isDirectory()) {
      fileArray = getAllFilePaths(filePath, fileArray)
    } else {
      fileArray.push(filePath)
    }
  })

  return fileArray
}

function getSlug(filePath) {
  return filePath.split(path.sep).pop().replace(/\.md$/, '')
}

// Adaption of https://stackoverflow.com/a/1054862
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[-]+/g, '-')
    .replace(/[^\w-]+/g, '')
}

module.exports = {
  slugify,
  getSlug,
  getAllTags,
  getAllFilePaths,
  getTagFrequencies,
  getAllDistinctTags,
  CONTENT_DIR_PATH
}
