// @desc Get goals
// @route GET /api/goals
// @access Private
const getBlogs = (req, res) => {
    res.status(200).json({ message: 'Get goals' })
}

// @desc Set goals
// @route POST /api/goals
// @access Private
const setBlog = (req, res) => {
    if(!req.body.text) {
        res.status(400).json({ message: 'Please add a text field' })
    }

    res.status(200).json({ message: 'Set goal' })
}


// @desc Update goals
// @route PUT /api/goals
// @access Private
const updateBlog = (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
}


// @desc Delete goals
// @route DELETE /api/goals
// @access Private
const deleteBlog = (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
}



module.exports = {
    getBlogs,
    setBlog,
    updateBlog,
    deleteBlog
}
