const { ApolloServer } = require("apollo-server");
const userSchema = require("./user/schema/user.graphql");
const userResolvers = require("./user/resolvers/userResolvers");
const UsersAPI = require("./user/datasource/user");

const typeDefs = [userSchema];
const resolvers = [userResolvers];

const server = new ApolloServer({
  typeDefs, // Definição dos tipos (e queries) disponíveis
  resolvers, //Definição das funções que implementam a busca e ações
  introspection: true, //Ativa a documentação automática a partir dos schemas.
  playground: true, //Ativa o modo playground, uma ferramenta para execução e exploração das opções
  dataSources: () => {
    return {
      usersAPI: new UsersAPI(),
    };
  },
});

server
  .listen()
  .then((url) => console.log(`Servidor rodando na porta ${url.port}`));
