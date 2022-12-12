import React, { Component } from 'react'
import Header from '../components/header/Header'

import year from "./../Image/Главная/Года.png";
import month from "./../Image/Главная/Месяца.png";
import week from "./../Image/Главная/Недели.png";
import preorder from "./../Image/Главная/Предзаказы.png";

import preview1 from "./../Image/Главная/Превью 1.jpg";
import preview2 from "./../Image/Главная/Превью 2.jpg";

import new1 from "./../Image/Главная/Новинка 1.png";
import new2 from "./../Image/Главная/Новинка 2.png";
import new3 from "./../Image/Главная/Новинка 3.png";
import new4 from "./../Image/Главная/Новинка 4.png";
import new5 from "./../Image/Главная/Новинка 5.png";
import new6 from "./../Image/Главная/Новинка 6.png";

import "./../style/style.css";
import Banner from '../components/banner';
export default class index extends Component {
    
  render() {
    return (
      <>
      <Header/>
        <main>
        <div className="container">
            <div className="subscribe">
            <div className="row">
                <div className="col-md-8" style={{marginTop: 50}}>
                <Banner/>
                </div>
                <div className="col-lg-4">
                <div className="row text-center" style={{width: 390, marginTop: 40}}><img className="fispecialstocklm-image text-center" src={preview1} style={{marginTop: 10}} /></div>
                <div className="row text-center" style={{width: 390, marginTop: 15}}><img className="fispecialstocklm-image text-center" src={preview2} /></div>
                </div>
            </div>
            </div>
        </div>
        <div className="container" style={{marginTop: 30}}>
            <div className="books">
            <div className="row">
                <h1 style={{fontSize: 24}}>Новинки</h1>
                <div className="col-md-2 mx-auto">
                <div className="container"> <img className="book-image rounded mx-auto d-block" src={new1} />
                    <div className="book-type text-center">949 р.</div>
                    <div className="book-title text-center">KGBT+</div>
                    <div className="book-desc text-center">Виктор Пелевин  </div>
                </div>
                </div>
                <div className="col-md-2 mx-auto">
                <div className="container"> <img className="book-image rounded mx-auto d-block" src={new2} />
                    <div className="book-type text-center">1 250р.</div>
                    <div className="book-title text-center">Благословение небожителей. Том 2</div>
                    <div className="book-desc text-center">Тунсю Мосян</div>
                </div>
                </div>
                <div className="col-md-2">
                <div className="container"> <img className="book-image rounded mx-auto d-block" src={new3} />
                    <div className="book-type text-center">1 016 р.</div>
                    <div className="book-title text-center">Семь сестер. Сестра солнца</div>
                    <div className="book-desc text-center">Люсинда Райли</div>
                </div>
                </div>
                <div className="col-md-2">
                <div className="container"> <img className="book-image rounded mx-auto d-block" src={new4} />
                    <div className="book-type text-center">1 325</div>
                    <div className="book-title text-center">Бессмертный</div>
                    <div className="book-desc text-center">Кориандр </div>
                </div>
                </div>
                <div className="col-md-2">
                <div className="container"><img className="book-image rounded mx-auto d-block" src={new5} />
                    <div className="book-type text-center">77 р.</div>
                    <div className="book-title text-center">Мост. Реальная история женщины, которая запуталась</div>
                    <div className="book-desc text-center">Нэнси Роммельман</div>
                </div>
                </div>
                <div className="col-md-2">
                <div className="container"><img className="book-image rounded mx-auto d-block" src={new6} />
                    <div className="book-type text-center">1 250р.</div>
                    <div className="book-title text-center">Благословение небожителей. Том 3</div>
                    <div className="book-desc text-center">Тунсю Мосян</div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="container" style={{marginTop: 30}}>
            <div className="books">
            <div className="row">
                <h1 style={{fontSize: 24}}>Рейтинг</h1>
                <div className="col-md-3 mx-aut">
                <div className="container"> <img className="book-image rounded mx-auto d-flex" src={year} /></div>
                </div>
                <div className="col-md-3 mx-aut">
                <div className="container"> <img className="book-image rounded mx-auto d-flex" src={week} /></div>
                </div>
                <div className="col-md-3">
                <div className="container"> <img className="book-image rounded mx-auto d-flex" src={month} /></div>
                </div>
                <div className="col-md-3">
                <div className="container"> <img className="book-image rounded mx-auto d-flex" src={preorder} /></div>
                </div>
            </div>
            </div>
        </div>
        </main>
      </>
    )
  }
}
