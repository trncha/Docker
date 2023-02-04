import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
// การสร้าง Component แบบ External Component
// import HelloComponent from './components/HelloComponent';

// การสร้าง Component แบบ Functional
// function HelloComponent() {
//   return <h1>Hello Function React</h1>
// }

// การสร้าง Component แบบ Class Component
// class HelloComponent extends React.Component {
//   render() {
//     return <h1>Hello Component React</h1>
//   }
// }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
  // <HelloComponent/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
