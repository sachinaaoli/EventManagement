import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { MainRouter } from './components/router/MainRouter';
import { AppContextProvier } from './components/ContextApi';
import { Provider } from 'react-redux';
import Store, { persistor } from './Redux/Store';
import { PersistGate } from "redux-persist/integration/react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Suspense fallback="...loading">
    <Provider store={Store}>
      <PersistGate loading={"loading..."} persistor={persistor}>
        <AppContextProvier>
          <RouterProvider router={MainRouter} />
        </AppContextProvier>
      </PersistGate>
    </Provider>
  </Suspense>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
