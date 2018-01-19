<template lang="html">
  <section class="works text-center page">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h2>My Music Works/Performance</h2>
				</div>
        <music-item v-for="(project,index) in projects"
          key="index"
          :title="project.title"
          :image="project.image"
          :url="project.url"
          :description="project.description"
          :category="project.category"
          :period="project.period"
          :technology="project.technology"
          :video="project.video"
          :audio="project.audio"
          :order="index+1">
        </music-item>
      </div>
    </div>
  </section>
</template>

<script>
import MusicItem from '~/components/MusicItem'
import { music } from '../static/projects'

export default {
  components: {
    MusicItem
  },
  data () {
    return {
      projects: music
    }
  }
}
</script>

<style lang="css">
.works h2 {
  margin-bottom: 30px;
}
</style>
