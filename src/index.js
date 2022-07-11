import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Blog from './Blog'

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <nav class="navigation">
      <ul>
        <li><tab class="active">Mary</tab></li>
        <li><tab>Danielle</tab></li>
      </ul>
    </nav>
    <h1>Create New Blogs</h1>
    <Blog />
  </React.StrictMode>
);
