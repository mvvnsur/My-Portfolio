<template>
  <div class="sidebar d-flex flex-wrap justify-content-center">
    <div class="sidebar__title d-flex flex-column justify-content-start align-items-center py-5">
      <!-- <h3>Murtazaliev Mansur</h3>
      <h5 class="my-1">«Web-developer»</h5> -->
      <button data-text="Awesome" class="button">
        <span class="actual-text">&nbsp;Mansur&nbsp;</span>
        <span class="hover-text" aria-hidden="true">&nbsp;Mansur&nbsp;</span>
      </button>
    </div>
    <div class="sidebar__content">
      <img src="@/../public/img/meee.jpg">
    </div>
    <div class="area" >
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .sidebar{
    width: 30%;
    height: 821px;
    background-color: #12403C;                                                                                                            
    color: white;
    &__content{
      z-index: 10;
      img{
        border-radius: 50%;
        border: 2px solid white;
        width: 240px;
        height: 262px;
        transition: .2s;
      }
      img:hover{
        transform: scale(1.1);
        cursor: pointer;
        box-shadow: 0 0 20px 0 #c9c9c9;
      }
    }
  }
.button {
  margin: 0;
  height: auto;
  background: transparent;
  padding: 0;
  border: none;
  z-index: 10;
}
.button {
  --border-right: 6px;
  --text-stroke-color: rgba(255,255,255,0.6);
  --animation-color: #37FF8B;
  --fs-size: 2em;
  letter-spacing: 3px;
  text-decoration: none;
  font-size: var(--fs-size);
  position: relative;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px var(--text-stroke-color);
}
/* this is the text, when you hover on button */
.hover-text {
  position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: var(--animation-color);
  width: 0%;
  inset: 0;
  border-right: var(--border-right) solid var(--animation-color);
  overflow: hidden;
  transition: 0.5s;
  -webkit-text-stroke: 1px var(--animation-color);
}
.button:hover .hover-text {
  width: 100%;
  filter: drop-shadow(0 0 23px var(--animation-color))
}
.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
    
}

.circles li:nth-child(1){
    left: 15%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}

.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 12%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 13%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 3%;
    width: 90px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 5%;
    width: 120px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 14%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 10%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 10%;
    width: 130px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}
@keyframes animate {

    0%{
        transform: translateY(200px) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}
</style>