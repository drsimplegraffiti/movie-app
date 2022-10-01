![Capture](https://user-images.githubusercontent.com/70065792/192149916-5abd4977-6129-41a9-8084-86bbf41f43ee.PNG)

##### Run the build first

> npm run build

Then the following command

> npm run start

---

### Example of type definition

```
type Movie {
  _id: ID!
  title: String!
  rating: Float!
  year: Int!
  }
```

The query type is for data fetching operations, the mutation type is for operations for creating or modifying data, and the subscription type is for real-time data fetching operations.

### get all movies

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
  createMovie(title: "bang bang theory", rating: 34, year: 1998) {
    _id
    title
    rating
    year
  }
}
```

#### create new movie== mutation

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
