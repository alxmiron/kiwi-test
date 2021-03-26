# Kiwi.com test

This is a test task for [Kiwi.com](https://www.kiwi.com/) Senior Frontend Engineer position.

This [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Assignment

The backend should provide an endpoint that converts a given numeric string into a list of corresponding words in the style of [T9](https://en.wikipedia.org/wiki/T9_(predictive_text)) or [Phonewords](https://en.wikipedia.org/wiki/Phoneword). The frontend should allow the user to enter a number, query the backend for the corresponding expansions, and display them.
Additional requirement is that list of results should be filtered to include only real words based on a dictionary.

I used [wordlist-english module](https://www.npmjs.com/package/wordlist-english) to build a dictionary, obtained from the [SCOWL](http://wordlist.aspell.net/) project.

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run production version locally, use:

```bash
yarn build
yarn start
```

## Testing

To run unit test use:

```bash
yarn test:unit
```

To run integration test with production app use:

```bash
yarn build
yarn test:int
```

## Deployed on Vercel

Check out [kiwicom-test.vercel.app](https://kiwicom-test.vercel.app/) to see deployed production app

## Tech stack

* [TypeScript](https://www.typescriptlang.org/)
* [ReactJS](https://reactjs.org/)
* [NextJS](https://nextjs.org/)
* [GraphQL](https://graphql.org/), [Apollo](https://www.apollographql.com/)
* [Orbit UI](https://orbit.kiwi)
* [Jest](https://jestjs.io/), [CypressIO](https://www.cypress.io/)