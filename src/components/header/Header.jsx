import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

import React, { Component } from 'react'
import logosite from "./../../Image/logo.png"
import { Link, Router } from 'react-router-dom';


export default class Header extends Component {
  render() {
    return (
        <header id="header">
        <nav className="navbar navbar-expand-lg navbar-default" style={{backgroundColor: 'grey'}}>
            <div className="container"><Link className="navbar-brand" to="/"><img src={logosite} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" style={{backgroundColor: 'white', color: "black"}} aria-expanded="false" aria-label="Toggle navigation">Навигация</button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <Link className="navigation-item" to="/">Главная</Link>
                    <Link className="navigation-item" to="/Catalog">Каталог</Link>
                    <Link className="navigation-item" to="/Review">Обзоры</Link>
                    <Link className="navigation-item" to="/Rating">Рейтинг</Link>
                    <Link className="navigation-item" to="/Contacts">Контакты</Link>
                    <Link className="navigation-item" to="/About">О нас</Link>
                </div>
            </div>
            </div>
        </nav>
        </header>
    )
  }
}