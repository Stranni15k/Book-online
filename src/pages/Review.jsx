import React, { Component } from 'react'
import Header from '../components/header/Header'

import "./../style/style.css"

import review1 from './../Image/Обзор/Review1.png'
import review2 from './../Image/Обзор/Review2.png'
import review3 from './../Image/Обзор/Review3.png'
import review4 from './../Image/Обзор/Review4.png'
import review5 from './../Image/Обзор/Review5.png'
import review6 from './../Image/Обзор/Review6.png'
import review7 from './../Image/Обзор/Review7.png'
import review8 from './../Image/Обзор/Review8.png'

export default class Review extends Component {
  render() {
    return (
      <>
      <Header/>
      
<main>
  <div className="container" style={{marginTop: 30}}> 
    <div className="books"> 
      <div className="row"> 
        <h1 style={{fontSize: 24, textAlign: 'center'}}>Книжные обзоры и рецензии </h1>
        <div className="col-md-3 mx-aut"> 
          <div className="container"> <img className="book-image rounded mx-auto d-block" src={review1} />
            <div className="book-type-blue text-center">Быстро - значит хорошо!</div>
            <div className="book-title text-center">Предприниматель Джефф Уокер расскажет об успешном запуске бизнеса.</div>
            <div className="book-desc text-center">15 октября</div>
          </div>
        </div>
        <div className="col-md-3 mx-aut"> 
          <div className="container"> <img className="book-image rounded mx-auto d-block" src={review2} />
            <div className="book-type-blue text-center">«Я не лошадь» Геннадия Аверьянова.<br/> Книга для тех, кто «не вывозит»<div>
                <div className="book-title text-center">Предприниматель Джефф Уокер расскажет об успешном запуске бизнеса.</div>
                <div className="book-desc text-center">14 октября</div>
            </div>
          </div>
        </div>
        </div>
        <div className="col-md-3 mx-aut"> 
          <div className="container"> <img className="book-image rounded mx-auto d-block" src={review3} />
            <div className="book-type-blue text-center">Нижние этажи цивилизации</div>
            <div className="book-title text-center">В издательстве «Олимп-Бизнес» вышла книга журналиста Уилл Ханта.</div>
            <div className="book-desc text-center">11 октября </div>
          </div>
        </div>
        <div className="col-md-3 mx-aut"> 
          <div className="container"> <img className="book-image rounded mx-auto d-block" src={review4} />
            <div className="book-type-blue text-center">Быстро - значит хорошо!</div>
            <div className="book-title text-center">Вспоминаем книжную серию перед выходом фильма</div>
            <div className="book-desc text-center">9 октября</div>
          </div>
        </div>
      </div>
    </div>
    <div className="container" style={{marginTop: 30}}> 
      <div className="books"> 
        <div className="row"> 
          <div className="col-md-3 mx-aut"> 
            <div className="container"> <img className="book-image rounded mx-auto d-block" src={review5} />
              <div className="book-type-blue text-center">Новая книга Майкла Роуча о законах Совершенной Мудрости</div>
              <div className="book-title text-center">Рассказываем о книге мотивационного спикера, духовного наставник и учителя тибетского буддизма Майкла Роуча.</div>
              <div className="book-desc text-center">9 октября</div>
            </div>
          </div>
          <div className="col-md-3 mx-aut"> 
            <div className="container"> <img className="book-image rounded mx-auto d-block" src={review6} />
              <div className="book-type-blue text-center">Истории из школьных коридоров и учительской, о которых не рассказывают учителя</div>
              <div className="book-title text-center">Автор книги «Дневник учителя» Райан Уилсон 10 лет проработал в разных школах в неблагополучных районах Англии.</div>
              <div className="book-desc text-center">7 октября  </div>
            </div>
          </div>
          <div className="col-md-3"> 
            <div className="container"> <img className="book-image rounded mx-auto d-block" src={review7} />
              <div className="book-type-blue text-center">Пятьдесят слов дождя</div>
              <div className="book-title text-center">О книга рассказывает Анаит Григорян, писательница и переводчица.</div>
              <div className="book-desc text-center">4 октября</div>
            </div>
          </div>
          <div className="col-md-3"> 
            <div className="container"> <img className="book-image rounded mx-auto d-block" src={review8} />
              <div className="book-type-blue text-center">Школа кондитерской магии</div>
              <div className="book-title text-center">Рассказываем о волшебных десертах из мира Гарри Поттера.</div>
              <div className="book-desc text-center">25 сентября</div>
            </div>
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
