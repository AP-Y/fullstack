const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', (_request, response) => {
  Blog.find({})
    .then(blogs => {
      response.json(blogs)
    })
    .catch(error => next(error))
})

blogRouter.post('/', (request, response) => {
  const blog = new Blog(request.body)

  blog.save()
    .then(savedBlog => {
      response.status(201).json(savedBlog)
    })
    .catch(error => next(error))
})

blogRouter.delete('/:id', (request, response) => {
  Blog.findByIdAndDelete(request.params.id)
    .then(_result => response.status(204).end())
    .catch(_error => next(error))
})

module.exports = blogRouter