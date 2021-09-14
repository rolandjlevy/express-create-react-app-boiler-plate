# Notes

> Express / Create React App boilerplate


### Project runs on 172.18.0.17
- Get IP address from [www.whatsmydns](https://www.whatsmydns.net/#A/express-create-react-app.rolandjlevy.repl.co)
+ Running on port 3000 for client: http://172.18.0.17:3000
+ Running on port 4080 for server: http://172.18.0.17:4080

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