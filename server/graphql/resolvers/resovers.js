const Note = require("../../models/note");

module.exports = {
  Query: {
    getNote: async (parent, args) => {
      try {
        const { id } = args;
        const note = await Note.findById(id);
        if (!note) {
          const error = new Error("No note found!");
          error.code = 404;
          throw error;
        }

        return note;
      } catch (error) {
        throw new Error(error);
      }
    },
    getNotes: async (parent, args) => {
      try {
        const notes = await Note.find();
        return notes;
      } catch (error) {
        throw new Error(error);
      }
    },
  },

  Mutation: {
    createNote: async (parent, args) => {
      try {
        const { noteInput } = args;
        return await Note.create(noteInput);
      } catch (error) {
        throw new Error(error);
      }
    },
    updateNote: async (parent, args) => {
      try {
        const { id, noteInput } = args;
        const note = await Note.findById(id);
        if (!note) {
          const error = new Error("No note found!");
          error.code = 404;
          throw error;
        }
        return await Note.findOneAndUpdate(id, noteInput, { new: true });
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteNote: async (parent, args) => {
      try {
        const { id } = args;
        const note = await Note.findById(id);
        if (!note) {
          const error = new Error("No note found!");
          error.code = 404;
          throw error;
        }
        await Note.findByIdAndDelete(id);
        return true;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
