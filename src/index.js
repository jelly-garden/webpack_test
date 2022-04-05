import { add, hello } from './util';
import './style.css';
import './header.css';

const text = hello('<h1>안녕하세요</h1>');
const num = add(1, 2);

document.getElementById('root').innerHTML = text + num;
