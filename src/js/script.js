'use strict';

//slider for bestsellers
(function(){
  var left = 0;
  document.querySelector('.goods-slider__control--prev-sales').onclick = motionToRight;
  document.querySelector('.goods-slider__control--next-sales').onclick = motionToLeft;
  var bestsellerContainer = document.querySelector('.thumbnail-list--sales-hits');
  console.log(bestsellerContainer);
  var bestsellersCount = document.getElementsByClassName('product-item--sales-hits').length;
  console.log("bestsellersCount is " + bestsellersCount);
  
  var container = document.querySelector('.container--sales');
  var containerWidth = getComputedStyle(container).width;
  //console.log(containerWidth.indexOf('px'));
  var numberLength = containerWidth.indexOf('px');
  //console.log("numberLength " + numberLength);
  var containerWidthNumber = parseInt(containerWidth.substring(0, numberLength),10);
 console.log("containerWidthNumber " + containerWidthNumber);


  function motionToLeft(){
    console.log("motionToLeft");
    console.log(left);
    if(left > containerWidthNumber - 285*(bestsellersCount)){
      left += -285;
      console.log("движение влево после присвоения значения left");
      console.log("left is " + left);
      bestsellerContainer.style.left = left + 'px';
    }
  }
  function motionToRight(){
    console.log("motionToRight");
    if (left < 0)
    {
      left += 285;
      console.log("движение вправо после присвоения значения left");
      console.log("left is " + left);
      bestsellerContainer.style.left = left + 'px';
    }
  }
})();

//slider for novelties
(function(){
  var left = 0;
  document.querySelector('.goods-slider__control--prev-novelties').onclick = motionToRight;
  document.querySelector('.goods-slider__control--next-novelties').onclick = motionToLeft;
  var bestsellerContainer = document.querySelector('.thumbnail-list--novelties');
  console.log(bestsellerContainer);
  var bestsellersCount = document.getElementsByClassName('product-item--novelty').length;
  console.log("bestsellersCount is " + bestsellersCount);
  
  var container = document.querySelector('.container--novelties');
  var containerWidth = getComputedStyle(container).width;
  //console.log(containerWidth.indexOf('px'));
  var numberLength = containerWidth.indexOf('px');
  //console.log("numberLength " + numberLength);
  var containerWidthNumber = parseInt(containerWidth.substring(0, numberLength),10);
 console.log("containerWidthNumber " + containerWidthNumber);


  function motionToLeft(){
    console.log("motionToLeft");
    console.log(left);
    if(left > containerWidthNumber - 285*(bestsellersCount)){
      left += -285;
      console.log("движение влево после присвоения значения left");
      console.log("left is " + left);
      bestsellerContainer.style.left = left + 'px';
    }
  }
  function motionToRight(){
    console.log("motionToRight");
    if (left < 0)
    {
      left += 285;
      console.log("движение вправо после присвоения значения left");
      console.log("left is " + left);
      bestsellerContainer.style.left = left + 'px';
    }
  }
})();

//advertise-slider
(function(){
  console.log('start');
  var index = 1;
showSlides(index);
function minusSlide(){
  console.log('minus slide');
  index -= 1;
  showSlides(index);
};
function plusSlide(){
  console.log('plus slide');
  index +=1;
  showSlides(index);
};
function showSlides(n){
  let z;
  let slides = document.getElementsByClassName('advertise-slide');
  let indikators= document.getElementsByClassName('advertise-slider__indicators-item');
  document.querySelector('.advertise-slider__controls-item--prev').onclick = minusSlide;
  document.querySelector('.advertise-slider__controls-item--next').onclick = plusSlide;
  if (n > slides.length){
    index = 1;
  }
  if (n < 1){
    index = slides.length;
  }
  for (z=0; z< slides.length; z++){
    slides[z].style.display = 'none';
    indikators[z].style.borderColor = 'gray';
  }
  slides[index - 1].style.display = 'block';
  indikators[z].style.borderColor = 'green';
};
})();

