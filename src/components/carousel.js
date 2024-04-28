import React from "react";
export default function Carousel(){
    return (
    <>
    <div id="carouselExampleCaptions" class="carousel slide ">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn.speedsize.com/e0ef94ef-bbea-450b-a400-575c3145c135/https://www.tilebar.com/media/wysiwyg/Homepage/Hero/hp-february-banner-desktop.jpg" class="d-block w-100" style={{height:"750px"}} alt=":::::: black logo :::::::"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>PAVING THE WAY</h5>
        <p>it's time to start living your (outdoor) dreams explore pavers & outdoor tile, designed to impress , built to last</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://static.pxlecdn.com/photos/620470162/original/TILEBAR_PARAMUS_SHOT2_BASE_4114-outside.jpg" class="d-block w-100" style={{height:"750px"}} alt=":::::: black logo :::::::"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>YOUR ULTIMATE DESIGN RESOURCE</h5>
        <p>open monday-friday from 9:00am to 5:00pm</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://i.vimeocdn.com/video/1754157343-e7124c5f1ebfd0a9422093fabace7a500f71a37b77bd4aed469b0b6ab6e017ee-d?mw=1800&mh=688&q=70" class="d-block w-100" style={{height:"750px"}} alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>VISIT OUR SHOWROOM </h5>
        <p>something seeing is believing. visit out statr-of-the-art showrooms in paramus, baltimore</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </>

    )
}