const asyncHandler = require('express-async-handler');

const Blog = require('../models/blogModel');
const User = require('../models/userModel');

// @desc Get goals
// @route GET /api/goals
// @access Private
const getBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find({ user: req.user.id })

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
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json(blog)
})


// @desc Update goals
// @route PUT /api/goals
// @access Private
const updateBlog = asyncHandler(async (req, res) => {
    const blogToUpdate = await Blog.findById(req.params.id)

    if(!blogToUpdate) {
        res.status(400)
        throw new Error('Blog not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the blog user
    if(blogToUpdate.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
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
    const blogToRemove = await Blog.findById(req.params.id)

    if(!blogToRemove) {
        res.status(400)
        throw new Error('Blog not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the blog user
    if(blogToRemove.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await blogToRemove.remove()

    res.status(200).json({ id: req.params.id })
})



module.exports = {
    getBlogs,
    setBlog,
    updateBlog,
    deleteBlog
}
