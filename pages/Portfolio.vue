<template lang="html">
  <section class="works text-center">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h2>My latest Works</h2>
					<ul class="list-inline">
						<li class="filter active" data-filter=".all">All</li>
						<li class="filter" data-filter=".web-development">Web Development</li>
						<li class="filter" data-filter=".music">Music</li>
						<li class="filter" data-filter=".website-customization">Website Customisation</li>
					</ul>
				</div>
        <portfolio-item v-for="(project,index) in projects"
          key="index"
          :title="project.title"
          :img="project.image"
          :url="project.url"
          :description="project.description"
          :category="project.category"
          :period="project.period"
          :technology="project.technology"
          :order="index+1">
        </portfolio-item>
      </div>
    </div>
  </section>
</template>

<script>
import PortfolioItem from '~/components/PortfolioItem'
import projects from '../static/projects'

export default {
  components: {
    PortfolioItem
  },
  data () {
    return {
      projects
    }
  }
}
</script>

<style lang="css">
</style>
