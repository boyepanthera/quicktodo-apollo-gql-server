const bcrypt = require('bcryptjs');

const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.User.findById(id);
    },
  },

  Mutation: {
    async registerUser(
      root,
      { firstName, lastName, email, password },
      { models }
    ) {
      return models.User.create({
        firstName,
        lastName,
        email,
        password: bcrypt.hash(password, 10),
      });
    },
    // async loginUser(root, { email, password }, { models }) {
    //   const user = await models.User.find({
    //     email,
    //   });
    //   if(!user.length ){

    //   }
    // },
  },
};

module.exports = resolvers;
