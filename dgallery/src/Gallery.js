import React, { Component } from 'react'
import './style/Gallery.css';
import panda1 from './panda/panda1.jpg';
import panda2 from './panda/panda4.jpeg';
import panda3 from './panda/panda5.jpeg';

export default class Gallery extends Component {
  render() {
    let imageList = ["https://static.vecteezy.com/system/resources/previews/014/469/059/large_2x/happy-holidays-text-in-frame-made-from-snowflakes-marsh-mellow-and-puansettia-on-yellow-background-vertical-forma-photo.jpg",
"https://m.media-amazon.com/images/I/81MP+hCvRNL._SL1500_.jpg",
"https://rukminim1.flixcart.com/image/416/416/kuzuoi80/flash/ring-flash/s/j/p/selfie-ring-light-with-tripod-stand-for-live-stream-led-video-original-imag7zz8k5rmz8zu.jpeg?q=70",
"https://www.researchgate.net/publication/349013545/figure/fig1/AS:987420149432321@1612430717781/Mellow-Babies-research-project-Services-groups-and-participants-flow-chart.jpg"]
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
        {imageList.map((item, index)=>{
          return(
            <div className='pics' key={index}>
              <img src={item} alt="fuck you" style={{width:'100%'}}/>
            </div>
          )
        })}
        </div>
      }
      </div>
    )
  }
}

