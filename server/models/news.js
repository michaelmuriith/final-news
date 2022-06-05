const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema(
  {
    headline: {
      type: String,
      required: true,
    },
    coverImage: {
        type: String,
        required: false,
    },
    description: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
    categoryId: {
        type: String,
        required: true
    },
    tagId: {
      type: String,
      required: true
    },
    authorId: {
        type: String,
        require: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", newsSchema);