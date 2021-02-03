const userResolvers = {
  Query: {
    users: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
    user: (root, { id }, { dataSources }) => dataSources.usersAPI.getUser(id),
  },
};

module.exports = userResolvers;
