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
                <a :class="{active: $nuxt.$route.path === tab.path}" :href="tab.path">
                  {{ tab.title }}
                </a>
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
          path: 'portfolio'
        },
        {
          title: 'My Music',
          path: 'music'
        },
        {
          title: 'Contact',
          path: 'contact'
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
