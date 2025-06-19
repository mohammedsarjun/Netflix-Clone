import React, { useEffect,useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    const [apiData,setApiData] = useState({
        name:"",
        published_at:"",
        key:"",
        type:""
    })
    useEffect(()=>{
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzM1ZWRiNDQzODU5MTU4NDRmNTM4MzYzMTY3Mjg1YiIsIm5iZiI6MTc0OTgxOTIwMi42OTYsInN1YiI6IjY4NGMxZjQyNWFhMzc1NzJkNDI5NDYzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4EcAu4O-fGr9PjNqAv9Q9jyq-SZbdh1bkF7eeXGAGlw'
  }
};

fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
    },[])
   
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{
        navigate(-1)
      }} />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width="90%" height="90%" frameBorder="0" title='trailer'  allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
