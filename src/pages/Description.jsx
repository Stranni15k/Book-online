import React, { Component } from 'react'
import Product from "../models/lines";
import Header from '../components/header/Header';
import DataService from '../service/DataService';
import { useState, useEffect } from "react";

export default function Description(props) {

    const url = 'lines/';
    const [information, setData] = useState([]);

    useEffect(() => {
        const queryString=window.location.search;
        const urlParams=new URLSearchParams(queryString);
        const id=urlParams.get('id');
        DataService.read(url+id, (data) => new Product(data))
            .then(data => setData(data
        ));
    }, []);

    return (
      <>
        <Header/>
        <main>
            <div className='container'>
                <h1>Название книги: {information.title}</h1>
                <h6>Описание: {information.description}</h6>
            </div>
        </main>
      </>
    )
  }