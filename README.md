npm install

npx json-server --watch api/data/dados.json

# Resources

http://localhost:3000/users
http://localhost:3000/roles

# GraphQL

- especificação + linguagem de query para APIs
- ambiente que executa queries
- é agnóstico com relação a protocolos

- Shcemas são baseados em como os dados são usados, não como estão armazenados.

- Otimizar relação front x back
- Ajudar a resolver os problemas de underfetch e overfetch
- Desenvolvimento mais ágil para o backend

## Dependências:

- graphql: especificação
- apollo-server: implementação e ferramentas GraphQL
- apollo-datasource-rest: biblioteca para facilitar acesso a APIs REST

- SDL (Schema Definition Language)
  é a linguagem de definição de tipos do GraphQL. Usando essa linguagem, o GraphQL fica agnóstico a lingagens de implementação.

## Schemas e Resolvers

Os Schemas definiem os tipos de dados e o que podemos fazer (Query, Mudations, etc) enquanto o Resolvers são a implementação do _como_ esses dados e operações serão fornecidos.

## Diferentes Schemas

Se quisermos separar schemas dentro do GraphQL, podemos definir os tipos em diferentes módulos, porém, precisamos fazer um merge deles para passá-lo ao Apollo Server. Isso pq precisamos mergear a String que define os tipos em uma Stirng única. Podemos fazer isso com a função mergeTypeDefs do graphql-tools.

Já os resolvers, podemos defini-los separadamente e apenas passá-los no array de resolvers.
