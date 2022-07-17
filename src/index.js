import {saludar} from './js/componentes';
import './styles.css';
import webpacklogo from'./assets/img/webpack-logo.png';
const nombre="Fernando";
saludar(nombre);

const img=document.createElement('img');
console.log(webpacklogo);
img.src=webpacklogo;
document.body.append(img);
