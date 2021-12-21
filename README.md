## Hoseki Front End Coding Challenge

I built the application with Next.js; you can start it locally with these scripts:

```sh
yarn build
yarn start
```

or you can check the deployed version at https://hoseki-frontend-coding-challenge.vercel.app/.

I used the [@types/giphy-api](https://www.npmjs.com/package/@types/giphy-api) package to extract the response types to save time because GIPHY has large payloads, which I didn't want to define in TypeScript manually. I created a simple wrapper client for the `trending` and `search` endpoints. This client is exposed through REST API endpoints on the backend to hide the GIPHY API key from the frontend. The frontend uses the same client inside React Query hooks which add convenient loading state and cache management.

I created the UI components with Chakra UI.

React Testing Library and Jest were used to test the components.
