<template lang="html">
  <div>
    <div class="banner" id="home"></div>
  	<header class="header">
  		<div class="container">
  			<div class="row">
  				<div class="col-md-8 col-md-offset-2 no-padding">
  					<div class="col-md-12 text-center user">
  						<img src="~/static/img/avatar.jpg" alt="Me" class="img-circle">
  						<h1>Shi Cheng</h1>
  						<h4>Web Developer living in Atlanta</h4>
  						<div class="social-icons">
  							<a href="https://github.com/rockcs1992/" target="_blank"><i class="fa fa-github"></i></a>
  							<a href="https://www.linkedin.com/in/shi-cheng-22334a116" target="_blank"><i class="fa fa-linkedin"></i></a>
                <a href="~assets/files/CV.pdf" target="_blank"><i class="fa fa-file-pdf-o"></i></a>
              </div>
  					</div>
            <navbar></navbar>
  				</div>
  			</div>
  		</div>
  	</header><!-- end of header section -->
  </div>

</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  name: 'MyHeader',
  components: {
    Navbar
  }
}
</script>

<style lang="css">
</style>
