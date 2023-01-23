<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'contact'}">Contact</router-link>
  </nav>
  <router-view/>
      <video class="video" autoplay loop muted>
      <source src="./assets/video0.mp4" type="video/webm" />
    </video>
</template>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #424e5a;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
} 
nav a.router-link-exact-active {
  color: white;
  background-color: rgba(38, 135, 199, 0.75);
}

video {
  z-index: -1000;
  left: 50%;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  object-fit: cover;
}

</style>