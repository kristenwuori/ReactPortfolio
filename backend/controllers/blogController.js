const asyncHandler = require('express-async-handler');

const Blog = require('../models/blogModel');

// @desc Get goals
// @route GET /api/goals
// @access Private
const getBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find()

    res.status(200).json(blogs)
})

// @desc Set goals
// @route POST /api/goals
// @access Private
const setBlog = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400).json({ message: 'Please add a text field' })
    }

    const blog = await Blog.create({
        text: req.body.text
    })

    res.status(200).json(blog)
})


// @desc Update goals
// @route PUT /api/goals
// @access Private
const updateBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id)

    if(!blog) {
        res.status(400)
        throw new Error('Blog not found')
    }

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, 
        { 
            new: true 
        })

    res.status(200).json(updatedBlog)
})


// @desc Delete goals
// @route DELETE /api/goals
// @access Private
const deleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id)

    if(!blog) {
        res.status(400)
        throw new Error('Goal not found')
    }

    await Blog.remove()

    res.status(200).json({ id: req.params.id })
})



module.exports = {
    getBlogs,
    setBlog,
    updateBlog,
    deleteBlog
}
