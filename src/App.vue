<template>
  <div class="main-wrapper">
    <div id="side-nav" class="navbar navbar-expand-lg navbar-dar bg-primary fixed-top">
      <b-navbar toggleable="lg" type="dark">
        <router-link to="/">
          <span class="d-block d-lg-none">Jake Hayes</span>
          <span class="d-none d-lg-block">
            <b-img id="main-img" v-bind="mainProps" rounded="circle" alt="" src="@/assets/main.jpg"></b-img>
          </span>
        </router-link>
      </b-navbar>
    </div>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'My portfolio'
    }
  }
}
</script>

<style>

#side-nav {
  text-align: center;
  position: fixed;
  top: 0;
  left:0;
  display: flex;
  flex-direction: column;
  width: 17rem;
  height: 100vh;
}

.bg-primary {
  background-color: #D26363 !important;
}

.fixed-top {
  position: fixed;
  top: 0;
  right:0;
  left: 0;
  z-index: 1030;
}

#main-img {
  max-width: 10rem;
  max-height: 10rem;
  border: .5rem solid rgba(255,255,255,.2)
}

</style>
