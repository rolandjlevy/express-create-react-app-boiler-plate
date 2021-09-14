const express = require('express');
const app = express();
const port = process.env.PORT || 4080;

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello world'})
});

app.post('/api/post', (req, res) => {
  res.send(
    `POST request received. This is what was sent: ${req.body.post}`,
  );
});

app.listen(port, () => {
  console.log('Listening on port', port);
})