<template>
  <div class="nav d-flex justify-content-between m-5">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/about" class="nav-link px-3">About Me</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/skills" class="nav-link px-3">Skills</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/portfolio" class="nav-link px-3">Portfolio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contacts" class="nav-link px-3">Contacts</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="social__media d-flex justify-content-evenly">
      <a href="https://t.me/mvvnsur" target="_blank">
        <img src="@/../public/img/telegram.png" width="30px">
      </a>
      <a href="https://instagram.com/mvvnsur?igshid=NTdlMDg3MTY= " target="_blank">
        <img src="@/../public/img/inst.png" width="30px">
      </a>
      <a href="https://wa.me/79382019133" target="_blank">
        <img src="@/../public/img/whats.png" width="30px">
      </a>
      <a href="" target="_blank">
        <img src="@/../public/img/git.png" width="30px">
      </a>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
</script>

<style lang="scss" scoped>
  .nav{
    width: 70%;
    font-size: 23px;
    cursor: pointer;
    color: #12403C;
    .nav-link{
      color: #12403C;
    }
    .social__media{
      z-index: 10;
      width: 200px;
    }
  }
  .router-link-active{
    // border-bottom: #12403C 4px solid;
    border-radius: 3px;
    border: 2px solid #12403C;
  }
  .social__media img:hover{
    transform: scale(1.2);
    transition: .2s;
  }
</style>