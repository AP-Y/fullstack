const logger = require('./logger')
const lodash = require('lodash')

const dummy = (_blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => {
    return sum + blog.likes
  }, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  return blogs.reduce((favBlog, blog) => {
    return blog.likes > favBlog.likes
      ? blog
      : favBlog
  }, blogs[0])
}

const mostAuthor = (authorsEntries) => {
  return authorsEntries.reduce((mostAuth, auth) => {
    return auth[1] > mostAuth[1]
      ? auth
      : mostAuth
  }, authorsEntries[0])
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const authors = lodash.countBy(blogs, blog => blog.author)
  const authorsEntries = Object.entries(authors)
  const mostAuth = mostAuthor(authorsEntries)

  return {
    author: mostAuth[0],
    blogs: mostAuth[1]
  }
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const authors = lodash.groupBy(blogs, blog => blog.author)
  const authorsEntries = Object.entries(authors).map(authEntry =>
    [authEntry[0], totalLikes(authEntry[1])]
  )
  const mostAuth = mostAuthor(authorsEntries)

  return {
    author: mostAuth[0],
    likes: mostAuth[1]
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}