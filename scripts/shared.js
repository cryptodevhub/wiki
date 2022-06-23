/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const CONTENT_DIR_PATH = path.join(__dirname, '..', 'content')

function getTagFrequencies() {
  const filePaths = getAllFilePaths(CONTENT_DIR_PATH)

  const tags = filePaths.map((filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    const frontMatter = matter(fileContent)

    return frontMatter.data.tags
  })

  const flattened = tags.reduce((accum, tagArray) => {
    return [...accum, ...tagArray]
  }, [])

  const frequency = flattened.reduce((accum, tag) => {
    if (accum[tag] !== undefined) {
      accum[tag] += 1
    } else {
      accum[tag] = 1
    }
    return accum
  }, {})

  return frequency
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

module.exports = {
  getSlug,
  getAllFilePaths,
  getTagFrequencies,
  CONTENT_DIR_PATH
}
