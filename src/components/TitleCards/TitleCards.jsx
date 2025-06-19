import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = (props) => {

const [api,setApi]=useState([])

useEffect(()=>{
console.log(props.title)
    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzM1ZWRiNDQzODU5MTU4NDRmNTM4MzYzMTY3Mjg1YiIsIm5iZiI6MTc0OTgxOTIwMi42OTYsInN1YiI6IjY4NGMxZjQyNWFhMzc1NzJkNDI5NDYzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4EcAu4O-fGr9PjNqAv9Q9jyq-SZbdh1bkF7eeXGAGlw'
  }
};

fetch(`https://api.themoviedb.org/3/movie/${props.category?props.category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApi(res.results))
  .catch(err => console.error(err));
  
  
},[])
  return (
    <div className='title-cards'>
      <h2>{props.title?props.title:"Popular On Netflix"}</h2>
      <div className="card-list" >
        {api.map((card,i)=>{
          return(
            <Link to={`/player/${card.id}`} className="card" key={i}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          )
        })}
      </div>

      
    </div>
  )
}

export default TitleCards
