    addNews: async (parent, args) => {
      try {
        const { newsData } = args;
        return await News.create(newsData);
      } catch (error) {
        throw new Error(error);
      }
    },