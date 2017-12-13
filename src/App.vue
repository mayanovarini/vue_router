<template>
  <div id="app">
    <Navigation />
    <router-view/>
    <router-link to="friends">Friends</router-link>
    <router-link to="/">Say Hello!</router-link>

    <FooterComponent />

  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Friends from './components/Friends'
import FooterComponent from './components/Footer'
import HelloWorld from './components/HelloWorld'


export default {
  name: 'app',
  components: {
    Navigation,
    FooterComponent,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
