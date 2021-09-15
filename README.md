# Express / Create React App boilerplate

### Setup in root directory

+ Install Create React App with `npx create-react-app client`

+ Add the following to the .env file: 
```js
PORT=4040
DANGEROUSLY_DISABLE_HOST_CHECK=true
```

+ Install concurrently with `npm install concurrently --save` and add this to package.json:
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

### HOST is 0.0.0.0
+ Client runs on port 3000: http://0.0.0.0:3000
+ Server runs on port 4040: http://0.0.0.0:4040
+ Host can also be set to IP address. See [www.whatsmydns.net](https://www.whatsmydns.net/#A/express-create-react-app.rolandjlevy.repl.co)

### Setup in client directory - in package.json
+ Add the following:
`"proxy": "http://0.0.0.0:4040"`
+ Change the start script to:  `"start": "PORT=3000 HOST=0.0.0.0 react-scripts start"`

### Links

- https://www.freecodecamp.org/news/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0/
- https://www.section.io/engineering-education/how-to-setup-nodejs-express-for-react/
- https://create-react-app.dev/docs/proxying-api-requests-in-development/
- https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
- https://pusher.com/tutorials/consume-restful-api-react/
- https://okteto.com/blog/build-your-react-app-in-okteto-cloud/