import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter} from "react-router-dom";
import './index.css';

import { AuthProvider } from "./context/authContext";
import client from "./apolloClient";
import { ApolloProvider } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <ApolloProvider client={client} >
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </ApolloProvider>
  </AuthProvider>,
);
