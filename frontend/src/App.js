import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');  // Connexion au backend

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Écouter les messages provenant du serveur
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit('chat message', message);  // Envoyer le message au backend
      setMessage('');
    }
  };

  return (
    <div className="App">
      <h1>Chat en temps réel</h1>
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <input 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Votre message..." 
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
  <h1>Hello world</h1>
}

export default App;
