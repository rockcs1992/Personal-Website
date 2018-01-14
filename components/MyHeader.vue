<template lang="html">
<div>
  <topbar></topbar>
	<header-content></header-content>
</div>
</template>

<script>
import Topbar from '~/components/Topbar'
import HeaderContent from '~/components/MyHeaderContent'

export default {
  name: 'MyHeader',
  components: {
    Topbar,
    HeaderContent
  }
}
</script>

<style lang="css">
</style>
