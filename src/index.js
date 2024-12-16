import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router";

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <BrowserRouter> 
    <App />
  </BrowserRouter>
);

//Это основной компонент который рендерит страницу, он стоит выше всех по дереву поэтому через него 
//подлючается роутинг (Навигация по страницам на сайте) и store (хранилище данных с их последовательной мутацией)