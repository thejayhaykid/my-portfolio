<template>
  <div class="main-wrapper">
    <div id="side-nav" class="navbar navbar-expand-lg navbar-dar bg-primary fixed-top">
      <b-navbar toggleable="lg" type="dark">
        <router-link to="/">
          <span class="d-block d-lg-none">Jake Hayes</span>
          <span class="d-none d-lg-block">
            <figure class="image is-128x128">
              <img id="main-img" class="is-rounded" src="@/assets/main.jpg">
            </figure>
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

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

</style>
