<template>

<div>
      <img src="./assets/Layer17.png" data-speedX="0.5" data-speedY="0.3" class="paralax bg-img">
      <img src="./assets/Layer16.png" data-speedX="0.24" data-speedY="0.24" class="paralax mountain-img1">
      <img src="./assets/Layer15.png" data-speedX="0.22" data-speedY="0.22" class="paralax mountain-img2">
      <img src="./assets/Layer14.png" data-speedX="0.16" data-speedY="0.16" class="paralax mountain-img3">
      <img src="./assets/Layer13.png" data-speedX="0.14" data-speedY="0.14" class="paralax mountain-img4">
      <img src="./assets/Layer12.png" data-speedX="0.125" data-speedY="0.125" class="paralax mountain-img5">
      <img src="./assets/Layer11.png" data-speedX="0.12" data-speedY="0.12" class="paralax mountain-img6">
      <img src="./assets/Layer10.png" data-speedX="0.1" data-speedY="0.1" class="paralax mountain-img7">
      <img src="./assets/Layer9.png" data-speedX="0.08" data-speedY="0.08" class="paralax mountain-img8">
      <img src="./assets/Layer8.png" data-speedX="0.04" data-speedY="0.04" class="paralax mountain-img9">
      <div class="text paralax" data-speedX="0.03" data-speedY="0.03">
        <h1>Fa</h1>
        <h2>Szimulátor</h2>
      </div>
      <img src="./assets/Layer7.png" data-speedX="0.0123" data-speedY="0.0123" class="paralax mountain-img10">
      <img src="./assets/Layer6.png" data-speedX="0.002" data-speedY="0.002" class="paralax mountain-img11">
      <img src="./assets/Layer5.png" data-speedX="0.004" data-speedY="0.004" class="paralax mountain-img12">
      <img src="./assets/Layer4.png" data-speedX="0.016" data-speedY="0.016" class="paralax mountain-img13">
      <img src="./assets/Layer3.png" data-speedX="0.02" data-speedY="0.02" class="paralax mountain-img14">
      <img src="./assets/Layer2.png" data-speedX="0.05" data-speedY="0.05" class="paralax mountain-img15">
      <img src="./assets/Layer1.png" data-speedX="0.06" data-speedY="0.06" class="paralax mountain-img16">
      
    </div>
  <RouterView/>
</template>


<script setup>
import {RouterView} from 'vue-router';
import { ref, onMounted } from 'vue';

const paralax_el = ref([]);
let xvalue = 0, yvalue = 0;

onMounted(() => {
  paralax_el.value = document.querySelectorAll('.paralax');

  window.addEventListener('mousemove', (e) => {
    xvalue = e.clientX - window.innerWidth / 2;
    yvalue = e.clientY - window.innerHeight / 2;

    paralax_el.value.forEach((el) => {
      let speedx = el.getAttribute('data-speedX');
      let speedy = el.getAttribute('data-speedY');
      el.style.transform = `translateX(calc(-50% + ${-xvalue * speedx}px)) translateY(calc(-50% + ${yvalue * speedy}px))`;
    });
  });
});
</script>


<style scoped>


.page-background {
  background-image: linear-gradient(to right, #86b91f30, #00ebd85d);
}

.main{
  position: relative;
  background-color: gray;
  height: 100vh;
  width: 100vw;  
  overflow: hidden;
  z-index: -200;
}

.bg-img {
  position: absolute;
  z-index: -9;
  width: 3000px;  
  top: 50%;
  left: 50%;
  pointer-events: none;
}
.mountain-img1 {
  position: absolute;
  width: 1750px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -8;
  pointer-events: none;
}
.mountain-img2 {
  position: absolute;
  width: 1750px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -7;
  pointer-events: none;
}
.mountain-img3 {
  position: absolute;
  width: 1750px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -6;
  pointer-events: none;
}
.mountain-img4 {
  position: absolute;
  width: 1750px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -5;
  pointer-events: none;
}
.mountain-img5 {
  position: absolute;
  width: 1750px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -4;
  pointer-events: none;
}
.mountain-img6 {
  position: absolute;
  width: 1750px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -3;
  pointer-events: none;
}
.mountain-img7 {
  position: absolute;
  width: 1750px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
  pointer-events: none;
}
.mountain-img8 {
  position: absolute;
  width: 1750px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  pointer-events: none;
}
.mountain-img9 {
  position: absolute;
  width: 1750px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  pointer-events: none;
}
.mountain-img10 {
  position: absolute;
  width: 1750px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  pointer-events: none;
}
.mountain-img11 {
  position: absolute;
  width: 1750px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  pointer-events: none;
}
.mountain-img12 {
  position: absolute;
  width: 1750px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  pointer-events: none;
}
.mountain-img13 {
  position: absolute;
  width: 1750px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  pointer-events: none;
}
.mountain-img14 {
  position: absolute;
  width: 1750px;
  top: calc(50% - 200px);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;
  pointer-events: none;
}
.mountain-img15 {
  position: absolute;
  width: 1750px;
  top: calc(50% - 200px);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 7;
  pointer-events: none;
}
.mountain-img16 {
  position: absolute;
  width: 1750px;
  top: calc(50% - 200px);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 8;
  pointer-events: none;
}
.text {
  position: absolute;
  z-index: 1;
  top: calc(50% - 225px);
  left: calc(50% - 300px);
  transform: translate(-50%, -50%);
  text-align: center;
  text-transform: uppercase;
  color:black;
  pointer-events: none;
}
.text h2{
  font-weight: 100;
  font-size: 6.5rem;
  
}
.text h1{
  font-weight: 800;
  line-height: 0.88;
  font-size: 8rem;
}
</style>