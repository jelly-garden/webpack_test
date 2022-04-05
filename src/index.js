import { add, hello } from './util';

const text = hello('안녕');
const num = add(1, 2);

document.getElementById('root').innerHTML = text + num;
