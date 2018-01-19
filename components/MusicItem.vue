<template lang="html">
  <div :class="classObject" data-myorder="order">
    <div class="single-work">
      <img :src="image" alt="#">
      <div class="overlay">
        <h3>{{ title }}</h3>
        <a href="#" type="button" data-toggle="modal" :data-target="`#myModal${order}`"><i class="fa fa-search-plus"></i></a>
        <!-- Modal -->
        <div class="modal fade" :id="`myModal${order}`" role="dialog">
          <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content text-center">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4>{{ title }}</h4>
              </div>
              <div class="col-md-12">
                <div class="modal-body col-md-8 col-md-offset-2">
                  <no-ssr v-if="video">
                    <youtube :video-id="videoId"></youtube>
                  </no-ssr>
                  <no-ssr v-if="audio">
                    <iframe width="100%" height="300" scrolling="no" frameborder="no" :src="audio"></iframe>
                  </no-ssr>
                  <no-ssr>
                    <p v-html="description"></p>
                  </no-ssr>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close <i class="fa fa-times"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getIdFromURL } from 'vue-youtube-embed'

export default {
  name: 'MusicItem',
  props: ['title', 'category', 'image', 'description', 'url', 'period', 'order', 'technology', 'video', 'audio'],
  data () {
    return {
      classObject: {
        'col-md-4': true,
        'col-sm-6': true,
        'mix': true,
        [this.category]: true,
        'all': true
      }
    }
  },
  computed: {
    videoId () {
      return getIdFromURL(this.video)
    }
  }
}
</script>

<style lang="css">
</style>
