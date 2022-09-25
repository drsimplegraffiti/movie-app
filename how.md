 <!-- index.js -->

```javascript
import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

<!-- resolvers.js -->

```javascript
const movies = [
  {
    _id: '12345',
    title: 'Sinder Twindler',
    year: 2022,
    rating: 6.5,
  },
];

export const resolvers = {
  Query: {
    getMovies: (_root, _args, _context, _info) => {
      return movies;
    },
    getMovie: (_root, { id }, _context, _info) => {
      return movies.find(({ _id }) => _id === id);
    },
  },
  Mutation: {
    createMovie: (_root, args, _context, _info) => {
      const randomId = Math.random().toString().split('.')[1];
      const newMovie = { ...args, _id: randomId };
      movies.push(newMovie);
      return newMovie;
    },
  },
};
```

<!-- typeDefs.js -->

```javascript
import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Movie {
    _id: ID!
    title: String!
    rating: Float!
    year: Int!
  }

  type Query {
    getMovies: [Movie!]!
    getMovie(id: ID!): Movie!
  }

  type Mutation {
    createMovie(title: String!, rating: Float!, year: Int!): Movie!
  }
`;
```

<!-- .babel.rc -->

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": "3.0.0"
      }
    ]
  ]
}
```

```package.json
{
  "name": "apollo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start:dev": "babel-node src/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.18.10",
    "@babel/core": "^7.19.1",
    "@babel/node": "^7.19.1",
    "@babel/preset-env": "^7.19.1"
  }
}


```

#### Tut source:

https://www.koyeb.com/tutorials/deploy-a-graphql-api-with-mongodb-atlas-and-apollo-server-on-koyeb
