import React from 'react'
import '/home/nineleaps/project1/src/card/card css/styleStartup.css'

const cardStartup = () => {
  return (
   <>
<h1 className='title-st'>Startup</h1>
    <main class="page-content">
  <div class="card">
    <div class="content">
      <h2 class="title">Startup 1</h2>
      <p class="copy">Check out all the acheivemeents of the company</p>
      <button class="btn">View Details</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Startup 2</h2>
      <p class="copy">Great products can do great things</p>
      <button class="btn">View Details</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Startup 3</h2>
      <p class="copy">Connecting people digitally</p>
      <button class="btn">Invest Now</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Startup 4</h2>
      <p class="copy">Delevering trust</p>
      <button class="btn">Invest Now</button>
    </div>
  </div>
</main>
</>
  )
}

export default cardStartup;