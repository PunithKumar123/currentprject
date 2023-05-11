import React from 'react'
import photo4 from '/home/nineleaps/project1/src/Assets/photo4.jpg'
import photo5 from '/home/nineleaps/project1/src/Assets/photo5.jpg'
import photo6 from '/home/nineleaps/project1/src/Assets/photo6.png'

const Banner = () => {
  return (
    <>
    <div><div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={photo4} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={photo5} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={photo6} className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div></div>
  </>
  )
}

export default Banner