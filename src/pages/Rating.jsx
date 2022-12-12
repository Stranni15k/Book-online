import React, { Component } from 'react'
import Header from '../components/header/Header'

import year from "./../Image/Главная/Года.png";
import month from "./../Image/Главная/Месяца.png";
import week from "./../Image/Главная/Недели.png";
import preorder from "./../Image/Главная/Предзаказы.png";
import novelties from "./../Image/Главная/Новинки.png";

import new1 from "./../Image/Рейтинги/Издатель 1.png";
import new2 from "./../Image/Рейтинги/Издатель 2.png";
import new3 from "./../Image/Рейтинги/Издатель 3.png";
import new4 from "./../Image/Рейтинги/Издатель 4.png";
import new5 from "./../Image/Рейтинги/Издатель 5.png";
import new6 from "./../Image/Рейтинги/Издатель 6.png";
import new7 from "./../Image/Рейтинги/Издатель 7.png";
import new8 from "./../Image/Рейтинги/Издатель 8.png";
import new9 from "./../Image/Рейтинги/Издатель 9.png";

export default class Rating extends Component {
  render() {
    return (
      <>
      <Header/>
        <main>
        <div className="container">
            <div className="container" style={{marginTop: 30}}>
            <div className="books">
                <div className="row">
                <h1 style={{fontSize: 36, textAlign: 'center'}}>Рейтинги книг 2022 года</h1>
                <h2 style={{textAlign: 'center'}}>Общая категория</h2>
                <div className="col-md-3 mx-aut">
                    <div className="container"> <img className="book-image rounded mx-auto d-block" src={year} /></div>
                </div>
                <div className="col-md-3 mx-aut">
                    <div className="container"> <img className="book-image rounded mx-auto d-block" src={month} /></div>
                </div>
                <div className="col-md-3">
                    <div className="container"> <img className="book-image rounded mx-auto d-block" src={week} /></div>
                </div>
                <div className="col-md-3">
                    <div className="container"> <img className="book-image rounded mx-auto d-block" src={preorder} /></div>
                </div>
                <div className="col-md-3">
                    <div className="container"> <img className="book-image rounded mx-auto d-block" src={novelties} /></div>
                </div>
                </div>
            </div>
            </div>
            <div className="container" style={{marginTop: 30}}>
            <div className="books">
                <div className="row">
                <h2 style={{textAlign: 'center'}}>Лучшие книги издательств</h2>
                <div className="col-md-3 mx-aut">
                    <div className="container"> <img className="book-image rounded mx-auto d-block" src={new1} /></div>
                </div>
                <div className="col-md-3 mx-aut">
                    <div className="container"> <img className="book-image rounded mx-auto d-block" src={new2} /></div>
                </div>
                <div className="col-md-3">
                    <div className="container"> <img className="book-image rounded mx-auto d-block" src={new3} /></div>
                </div>
                <div className="col-md-3">
                    <div className="container"> <img className="book-image rounded mx-auto d-block" src={new4} /></div>
                </div>
                <div className="col-md-3">
                    <div className="container"> <img className="book-image rounded mx-auto d-block" src={new5} /></div>
                </div>
                <div className="col-md-3">
                    <div className="container"> <img className="book-image rounded mx-auto d-block" src={new6} /></div>
                </div>
                <div className="col-md-3">
                    <div className="container"> <img className="book-image rounded mx-auto d-block" src={new7} /></div>
                </div>
                <div className="col-md-3">
                    <div className="container"> <img className="book-image rounded mx-auto d-block" src={new8} /></div>
                </div>
                <div className="col-md-3">
                    <div className="container"> <img className="book-image rounded mx-auto d-block" src={new9} /></div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </main>

      </>
    )
  }
}