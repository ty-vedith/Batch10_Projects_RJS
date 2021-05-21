import React from "react";
import { Fragment } from "react";
import "./Card.css"

 function Card() {
    return (
        <div>
  
   <h1 className='text-center text-danger text-capitalized my-5'>Please Choose A Flavour</h1>
   <div className="container">
  <div className="row row-cols-2">
  <div className="col"><div class="card" >
  <div class="card-body">
    <h5 style={{color:"red"}} class="card-title">Flavour 1</h5>
    <p class="card-text">Calm me Lalander</p>
    <a href="#" class="btn btn-primary">ADD</a>
  </div>
</div></div>
    <div className="col"><div class="card" >
  <div class="card-body">
    <h5 style={{color:"red"}} class="card-title">Flavour 2</h5>
    <p class="card-text">Sassy Charcoal</p>
    <a href="#" class="btn btn-primary">ADD</a>
  </div>
</div></div>
    <div className="col"><div class="card" >
  <div class="card-body">
    <h5 style={{color:"red"}} class="card-title">Flavour 3</h5>
    <p class="card-text">Naughty Orange</p>
    <a href="#" class="btn btn-primary">ADD</a>
  </div>
</div></div>
    <div className="col"><div class="card" >

  <div class="card-body">
    <h5 style={{color:"red"}} class="card-title">Flavour 4</h5>
    <p class="card-text">Creemy Coffee</p>
    <a href="#" class="btn btn-primary">ADD</a>
  </div>
</div>
</div>
</div>
</div>

{/* <div className="container">
  <div className="row row-cols-4">
    <div className="col"><div class="card" >
  <img src="https://picsum.photos/213/300" class="card-img-top" alt="..."height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
    <div className="col"><div class="card" >
  <img src="https://picsum.photos/211/300" class="card-img-top" alt="..."height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
    <div className="col"><div class="card" >
  <img src="https://picsum.photos/210/300" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
    <div className="col"><div class="card" >
  <img src="https://picsum.photos/214/300" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
  </div>
</div> */}

        </div>
    )
}


export default Card;