<template>
  <div>
    <SystemBar />
    <AppBar />
    <NavigationDrawer />
    <Footer />
    <BottomNavigation />
  </div>
</template>

<script>
  import SystemBar from '../components/SystemBar'
  import AppBar from '../components/AppBar'
  import NavigationDrawer from '../components/NavigationDrawer'
  import Footer from '../components/Footer'
  import BottomNavigation from '../components/BottomNavigation'

  export default {
    name: 'Home',

    components: {
      SystemBar,
      AppBar,
      NavigationDrawer,
      Footer,
      BottomNavigation,
    },
  }
</script>
