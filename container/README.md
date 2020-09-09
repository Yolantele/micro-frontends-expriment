# Micro Services

Entry point and container application for a micro frontends demo.

This is a React application, which renders a navigation bar, and uses React Router to select a microfrontend to render onto the page.

# Getting started

1.  Clone the repo
2.  `yarn`
3.  `yarn start`

You can run the container on its own, but for it to actually do anything you'll
also need to be running:

- the [`content`](https://github.com/micro-frontends-demo/content) server - holds content such as server, stylesheets, data for fetch calls.

- the [`browse`](https://github.com/micro-frontends-demo/browse/) micro frontend

# Run the tests

- `yarn test`
