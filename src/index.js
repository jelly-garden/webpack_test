import { add, hello } from './util';
import './style.css';
import './header.css';
import logo from './images/logo.png';

const text = hello('<h1>안녕하세요</h1>');
const num = add(1, 2);
const img = `<img src="${logo}" alt="웹팩" />`;

document.getElementById('root').innerHTML = img + text + num;
