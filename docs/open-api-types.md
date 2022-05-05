# Open API Types

Parts of this application integrate with first-party and third-party REST APIs. In order for us to do this safely, we can use provided Open API schemas to generate types in TypeScript.

The following command is an example of how to generate these types for the GitHub API.

```bash
npx openapi-typescript https://raw.githubusercontent.com/github/rest-api-description/main/descriptions/api.github.com/api.github.com.yaml --output src/api/github/types/index.ts --export-type true
```

To do this for another API, simply replace the URL for the Open API schema, and update the output directory to the appropriate folder.
