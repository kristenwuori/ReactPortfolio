const mongoose = require('mongoose');

const blogSchema = mongoose.Schema(
    {
        // user: {
        //     // type: mongoose.Schema.Types.ObjectId,
        //     type: String,
        //     required: true,
        //     // ref: 'User'
        // },
        text: {
            type: String,
            required: [true, 'Please add a text value']
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Blog', blogSchema)
