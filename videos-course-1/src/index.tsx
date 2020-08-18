import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

type propsType = {
  name?: string,
  id?: number,
  message?: string
}

type dialogPersonType = {
  id: number,
  name: string
}

type messageDataType = {
  id: number,
  message: string
}

type postType = {
  id: number,
  message: string,
  likesCount: number
}

let dialogsData: Array<dialogPersonType> = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Tony' },
  { id: 3, name: 'Zuk' },
  { id: 4, name: 'Dick' }
];

let messagesData: Array<messageDataType> = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'Hi' },
  { id: 3, message: 'Konichiwa' },
  { id: 4, message: 'Guten Tag' },
];

let postData: Array<postType> = [
  { id: 1, message: 'Hi, how are you?', likesCount: 10 },
  { id: 2, message: 'First', likesCount: 12 }
]

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
