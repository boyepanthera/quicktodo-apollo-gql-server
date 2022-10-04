const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

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
      { models: { User } }
    ) {
      const userExistence = await User.findOne({ email });
      if (userExistence) {
        throw new UserInputError('account already exist');
      }
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: bcrypt.hashSync(password, 10),
      });
      return user;
    },
    async loginUser(root, { email, password }, { models }) {
      const user = await models.User.findOne({
        email,
      });
      if (!user) {
        throw new UserInputError('account not found, register instead');
      }
      const passwordCorrect = bcrypt.compareSync(password, user.password);
      if (!passwordCorrect) {
        throw new UserInputError('incorrect password');
      }
      const token = JWT.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: '2h',
          issuer: 'quicktodo-gql-server',
        }
      );
      return {
        id: user.id,
        token,
      };
    },
  },
};

module.exports = resolvers;
