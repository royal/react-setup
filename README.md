This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Installation
## Prerequisites

You'll need the following installed:
- [Node.js](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/installation)
- [Docker](https://docs.docker.com/engine/install/)

## Getting Started

First, install the package dependencies:

```bash
pnpm install
```

Once installed, run the development server:

```bash
pnpm dev
```

This will build and run the application. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Development

## Directory Structure

The directory structure is as follows:

```text
/public
  /images
/src
  /api
  /components
    /...component
  /hooks
    /api
    /context
  /pages
    /...page
  /utils
/tests
```

## Types

Types should be placed in a `/types` subfolder next to the implementation of that type. For example:
- `/api/types` for API request/response types
- `/hooks/context/types` for state in a custom hook with `useState`

Types for component props should go inline, in the same file as the component. The type should only be exported if used by another component.
