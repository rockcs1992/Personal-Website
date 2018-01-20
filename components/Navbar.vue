<template lang="html">
  <div class="col-md-12">
    <div class="main-nav">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse text-center" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li v-for="(tab, index) in tabs">
                <nuxt-link :class="{active: $nuxt.$route.path === tab.path}" :to="tab.path">
                  {{ tab.title }}
                </nuxt-link>
              </li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      tabs: [
        {
          title: 'About',
          path: '/'
        },
        {
          title: 'My Projects',
          path: '/Portfolio/'
        },
        {
          title: 'My Music',
          path: '/Music/'
        },
        {
          title: 'Contact',
          path: '/Contact/'
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
