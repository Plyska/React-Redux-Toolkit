import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { ModalContextProvider } from './context/ModalContext';
import ModalLayout from './layout/ModalLayout';
import "./index.css"

const store = setupStore();

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store} >
    <ModalContextProvider>
      <ModalLayout>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalLayout>
    </ModalContextProvider>
  </Provider>

);