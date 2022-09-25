Run the build first

> npm run build

Then

npm run start

```
type Movie {
  _id: ID!
  title: String!
  rating: Float!
  year: Int!
  }
```

The query type is for data fetching operations, the mutation type is for operations for creating or modifying data, and the subscription type is for real-time data fetching operations.

https://www.koyeb.com/tutorials/deploy-a-graphql-api-with-mongodb-atlas-and-apollo-server-on-koyeb

#### get movies

```graphql
query {
  getMovies {
    _id
    title
    rating
    year
  }
}
```

// Create new movie

```graphql
mutation {
  createMovie(title: "bang", rating: 34, year: 1998) {
    _id
    title
    rating
    year
  }
}
```

#### create new movie=== mutation

```graphql
mutation ($title: String!, $rating: Float!, $year: Int!) {
  createMovie(title: "iuyt", rating: 23, year: 1990) {
    _id
  }
}
```

### Delete movie

```graphql
mutation ($deleteMovieId: ID!) {
  deleteMovie(id: "6330626546af1a4efcc8fbb5") {
    _id
  }
}
```

### Update movie

```graphql
mutation ($updateMovieId: ID!, $title: String!, $rating: Float!, $year: Int!) {
  updateMovie(
    id: "633067652bcedeffcf8aae64"
    title: "up"
    rating: 12
    year: 1990
  ) {
    title
    rating
    year
  }
}
```
