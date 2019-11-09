<template>
    <div>
        <CateList></CateList>
        <CateGroup></CateGroup>
        <NavBar :num="2"></NavBar>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import CateList from "./CateList.vue" 
import CateGroup from "./CateGroup.vue"


export default {
    name:'cate',
    components:{
        NavBar,
        CateList,
        CateGroup,
    }
}
</script>

<style lang="scss" scoped>

</style>
