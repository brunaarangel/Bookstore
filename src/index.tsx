import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from 'react-redux';
import store from "../src/components/store";
import Routes from './Routes';
import './index.css';
import App from './App';
import NavbarNavigatio from './Navbar/NavbarNavigatio';
import Footer from './Footer/Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <NavbarNavigatio />
          <App />
          <Routes />
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

