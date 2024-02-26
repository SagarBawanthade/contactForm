import './App.css';
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/submitContactForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message }),
      });

      const data = await response.json();
      toast("Successfully submitted form");
      console.log(data);

      // You can handle the response here and provide feedback to the user
    } catch (error) {
      console.error('Error submitting contact form:', error);
    }
  };



  return (
    <div className="container">

      <form onSubmit={handleSubmit}>
        <label for="exampleFormControlInput1" className="form-label">Name</label>
        <input
          type="name"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)} /><br />

        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}></textarea><br />

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <ToastContainer />


    </div>
  );
}

export default App;
