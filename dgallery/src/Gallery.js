import React, { Component } from 'react'
import './style/Gallery.css';
import panda1 from './panda/panda1.jpg';
import panda2 from './panda/panda4.jpeg';
import panda3 from './panda/panda5.jpeg';

export default class Gallery extends Component {
  
  render() {
    let data = [
      {
        id:1,
        imageSrc:panda1,
      },
      {
        id:2,
        imageSrc:panda2,
      },
      {
        id:3,
        imageSrc:panda3,
      }
    ]
    return (
      <div>
      {
        <div className='imgGallery'>
        {data.map((item, index)=>{
          return(
            <div className='pics' key={index}>
              <img src={item.imageSrc} alt="fuck you" style={{width:'100%'}}/>
            </div>
          )
        })}
        </div>
      }
      </div>
    )
  }
}

