# TypeScript Project with Nodemon and ts-node

This is a simple TypeScript project configured to use [Nodemon](https://nodemon.io/) and [ts-node](https://github.com/TypeStrong/ts-node) for automatic reloading during development.

## Prerequisites

Before you begin, make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your system.

## Getting Started

1. Initialize a new Node.js project and install the necessary dependencies:

   ```bash
   npm init -y
   npm install --save-dev typescript nodemon ts-node
   ```

2. Create a TypeScript configuration file:
   ```bash
   npx tsc --init
   ```

3. Open the tsconfig.json file and configure it according to your project's needs.
4. In your package.json file, add a start script that uses Nodemon and ts-node:

   ```package.json
   "scripts": {
      "start": "nodemon --exec ts-node src/index.ts"
   },
   ```
   Replace "src/index.ts" with the path to your TypeScript entry file.

5. To start your project with automatic reloading during development, use the following command:
   ```bash
     npm start
   ```

