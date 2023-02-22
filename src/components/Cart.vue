<template>
    <div>
        in cart {{ count }}
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'CartComponent',
        props: {
            count: Number
            
        }
    })
</script>

<style scoped>

</style>