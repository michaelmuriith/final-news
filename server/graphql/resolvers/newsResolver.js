const News = require("../../models/news");
const path = require('path');
const fs = require('fs')


module.exports = {

  // uploadFile: async(parent, ({file}) => {
  //   const { createReadStream, filename, mimetype, encoding } = await file
    
  //   const stream = createReadStream();
  //   const pathName = path.join(__dirname, `/public/images/${filename}`)
  //   await stream.pipe(fs.createWriteStream(pathName))
  //   return {
  //     url: `http://localhost:4000/images/${pathName}`
  //   }
  // }),

  Query: {
    getSingleNews: async (parent, args) => {
      try {
        const { id } = args;
        const news = await News.findById(id);
        if (!news ) {
          const error = new Error("Not found!");
          error.code = 404;
          throw error;
        }

        return news;
      } catch (error) {
        throw new Error(error);
      }
    },
    getNews: async (parent, args) => {
      try {
        const news = await News.find();
        return news;
      } catch (error) {
        throw new Error(error);
      }
    },
  },

  Mutation: {

    addNews: async (parent, args) => {
      try {
        const { newsData } = args;
        return await News.create(newsData);
      } catch (error) {
        throw new Error(error);
      }
    },

    // addNews: async (_, {newsData : {
    //   headline,
    //   coverImage,
    //   content,
    //   categoryId,
    //   authorId
    // }}) => {
    //   try {
    //     coverImage = uploadFile(coverImage);

    //     const newArticle = new News({
    //       headline,
    //       coverImage,
    //       content,
    //       categoryId,
    //       authorId
    //     });
        
    //     const res = await newArticle.save();

    //     return {
    //       ...res._doc,
    //       id:res._id,
    //     }
    //   } catch (error) {
    //     throw new Error(error);
    //   }
    // },
    // updateNote: async (parent, args) => {
    //   try {
    //     const { id, noteInput } = args;
    //     const note = await Note.findById(id);
    //     if (!note) {
    //       const error = new Error("No note found!");
    //       error.code = 404;
    //       throw error;
    //     }
    //     return await Note.findOneAndUpdate(id, noteInput, { new: true });
    //   } catch (error) {
    //     throw new Error(error);
    //   }
    // },
    // deleteNote: async (parent, args) => {
    //   try {
    //     const { id } = args;
    //     const note = await Note.findById(id);
    //     if (!note) {
    //       const error = new Error("No note found!");
    //       error.code = 404;
    //       throw error;
    //     }
    //     await Note.findByIdAndDelete(id);
    //     return true;
    //   } catch (error) {
    //     throw new Error(error);
    //   }
    // },
  },
};
