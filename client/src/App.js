import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  // fetching the GET route from the Express server
  const callBackendAPI = async (url) => {
    const response = await fetch(url);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      callBackendAPI('/api/message')
      .then(result => setData(result))
      .catch(err => console.log(err));
    }
  });
  
  const [postText, setPostText] = useState('');
  const [responseToPost, setResponseToPost] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseToPost({ post: 'Loading...' });
    const response = await fetch('/api/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({post: postText}),
    });
    const body = await response.text();
    setResponseToPost({ post: body });
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Data from GET route: {data && JSON.stringify(data, null, 2)}</p>

        <form onSubmit={handleSubmit}>
          <p><strong>Post to Server:</strong></p>
          <input
            type="text"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{responseToPost.post}</p>
      </header>
    </div>
  );
}

export default App;
