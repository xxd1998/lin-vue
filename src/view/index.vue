<template>
    <div>
        <my-nav/>
        <side-bar/>
    </div>
</template>
<script>
import SideBar from './../components/sidebar'
import MyNav from './../components/nav'
export default {
     components: {
        MyNav,
        SideBar
        
    },
}
</script>