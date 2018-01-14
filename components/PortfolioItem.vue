<template lang="html">
  <div :class="classObject" data-myorder="order">
    <div class="single-work">
      <img src="img/varidada.png" alt="#">
      <div class="overlay">
        <h3>{{ title }}</h3>
        <a href="#" type="button" data-toggle="modal" data-target="#myModal1"><i class="fa fa-search-plus"></i></a>
        <!-- Modal -->
        <div class="modal fade" id="myModal1" role="dialog">
          <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content text-center">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4>{{ title }}</h4>
              </div>
              <div class="col-md-12">
                <div class="modal-body col-md-8 col-md-offset-2">
                  <img src="img/Varidada.png" alt="#">
                  <ul class="list-inline">
                    <li>{{ url }}</li>
                    <li>{{ period }}</li>
                    <li>{{ technology }}</li>
                  </ul>
                    <p>{{ description }}</p>
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

export default {
  name: 'PortfolioItem',
  props: ['title', 'category', 'image', 'description', 'url', 'period', 'technology'],
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
  }
}
</script>

<style lang="css">
</style>
