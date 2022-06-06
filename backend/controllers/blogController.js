const asyncHandler = require('express-async-handler');

// @desc Get goals
// @route GET /api/goals
// @access Private
const getBlogs = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get goals' })
})

// @desc Set goals
// @route POST /api/goals
// @access Private
const setBlog = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400).json({ message: 'Please add a text field' })
    }

    res.status(200).json({ message: 'Set goal' })
})


// @desc Update goals
// @route PUT /api/goals
// @access Private
const updateBlog = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
})


// @desc Delete goals
// @route DELETE /api/goals
// @access Private
const deleteBlog = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
})



module.exports = {
    getBlogs,
    setBlog,
    updateBlog,
    deleteBlog
}
