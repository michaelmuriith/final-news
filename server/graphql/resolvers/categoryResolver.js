const Category = require("../../models/category");

module.exports = {
  Query: {
    getCategory: async (parent, args) => {
      try {
        const { id } = args;
        const category = await Category.findById(id);
        if (!category) {
          const error = new Error("Category not found!");
          error.code = 404;
          throw error;
        }

        return category;
      } catch (error) {
        throw new Error(error);
      }
    },
    getCategories: async (parent, args) => {
      try {
        const categories = await Category.find();
        return categories;
      } catch (error) {
        throw new Error(error);
      }
    },
  },

  Mutation: {
    createCategory: async (parent, args) => {
      try {
        const { categoryInput } = args;
        return await Category.create(categoryInput);
      } catch (error) {
        throw new Error(error);
      }
    },
    updateCategory: async (parent, args) => {
      try {
        const { id, categoryInput } = args;
        const category = await Category.findById(id);
        if (!category) {
          const error = new Error("Not found!");
          error.code = 404;
          throw error;
        }
        return await Category.findOneAndUpdate(id, categoryInput, { new: true });
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteCategory: async (parent, args) => {
      try {
        const { id } = args;
        const category = await Category.findById(id);
        if (!category) {
          const error = new Error("Not found!");
          error.code = 404;
          throw error;
        }
        await Category.findByIdAndDelete(id);
        return true;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
