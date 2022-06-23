<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
      </nav>
    </div>
  </header>
  <div class="container">
    <div class="row">
      <div class="col-6 mx-auto border teamchat">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style>
body{
  font-size: 1vw;
}
.height {
  height: 100vh;
}
.form {
  position: relative;
}
.form .fa-search {
  position: absolute;
  top: 8px;
  right: 2px;
  color: #9ca3af;

}
.form span {
  position: absolute;
  right: 17px;
  top: 13px;
  border-left: 1px solid #d1d5db;

}
.left-pan {
  padding-left: 7px;
}
.left-pan i {
  padding-left: 10px;
}
.form-input {
  height: 55px;
  text-indent: 5px;
  border-radius: 10px;
}
.form-input:focus {
  box-shadow: #be5f12;
  border: none;
}
.teamchat {
  text-align: center;
}
.teamChatUnderline {
  width: 15%;
  margin: auto auto 4px;
}
</style>
