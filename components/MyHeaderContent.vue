<template lang="html">
  <div>
    <div class="banner" id="home"></div>
  	<header class="header">
  		<div class="container-fluid">
  			<div class="row">
  				<div class="top-nav"></div>
  				<div class="top-click">
  					<a href="#"><i class="fa fa-plus"></i></a>
  					<a href="#"><i class="fa fa-minus"></i></a>
  				</div>
  			</div>
  		</div>
  		<div class="container">
  			<div class="row">
  				<div class="col-md-8 col-md-offset-2 no-padding">
  					<div class="col-md-12 text-center user">
  						<img src="img/avatar.jpg" alt="Me" class="img-circle">
  						<h1>Shi Cheng</h1>
  						<h4>Web Developer living in Atlanta</h4>
  						<div class="social-icons">
  							<a href="#"><i class="fa fa-facebook"></i></a>
  							<a href="#"><i class="fa fa-twitter"></i></a>
  							<a href="#"><i class="fa fa-instagram"></i></a>
  							<a href="#"><i class="fa fa-linkedin"></i></a>
  							<a href="#"><i class="fa fa-google-plus"></i></a>
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
  name: 'HeaderContent',
  components: {
    Navbar
  }
}
</script>

<style lang="css">
</style>
