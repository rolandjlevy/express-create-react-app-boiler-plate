# Express / Create React App boilerplate

### Project runs on 172.18.0.17
+ Running on port 3000 for client: http://172.18.0.17:3000
+ Running on port 4080 for server: http://172.18.0.17:4080
- Get IP address from [www.whatsmydns.net](https://www.whatsmydns.net/#A/express-create-react-app.rolandjlevy.repl.co)

### Setup in root directory

+ Install react with `npx create-react-app client`

+ Install concurrently with `npm install concurrently --save` and add the following to package.json:
```js
  "scripts": {
    "client": "cd client && yarn start",
    "server": "nodemon server.js",
    "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\""
  },
```

+ Create a `.replit` file with the following:

```js
language = "nodejs"
run = "npm run dev"
```
+ Create the following variable in the .env file: `DANGEROUSLY_DISABLE_HOST_CHECK=true`

### Setup in client directory
+ Add the following to package.json:
`"proxy": "http://172.18.0.17:4080"`
+ Add the post number the start script in package.json to `"start": "PORT=3000 react-scripts start"`

### Links

- https://www.freecodecamp.org/news/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0/
- https://www.section.io/engineering-education/how-to-setup-nodejs-express-for-react/
- https://create-react-app.dev/docs/proxying-api-requests-in-development/
- https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
- https://pusher.com/tutorials/consume-restful-api-react/