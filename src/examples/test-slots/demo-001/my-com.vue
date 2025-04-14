<template>
    <div>
        
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("插槽:", this.$slots)
        console.log("插槽:", this.$slots.asd)
        console.log("插槽:", this.$slots.qwe)
    }
}
</script>

<style scoped>

</style>
