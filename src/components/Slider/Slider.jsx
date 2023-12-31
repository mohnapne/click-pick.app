import React from 'react'

export default function Slider() {
  <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
  const swiper = new Swiper(".mySwiper", {
    zoom: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  return (
    <div>
      <div
        style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
        class="swiper mySwiper"
      >
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="swiper-zoom-container">
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-zoom-container">
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-zoom-container">
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-zoom-container">
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-zoom-container">
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-zoom-container">
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-zoom-container">
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-zoom-container">
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-zoom-container">
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </div>
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  )
}
