import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>Hi Hivy Front Lite</h1>
      <p>Very lite...</p>
      <Link to="requests" className="btn btn-primary btn-lg">Display list requests</Link>
      <br />
      <br />
      <Link to="request" className="btn btn-primary btn-lg">New request</Link>
    </div>
  );
};

export default HomePage;
