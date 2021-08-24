<template>
        <b-notification type="is-success is-light" aria-close-label="Close notification">
            {{msg}}
        </b-notification>
</template>

<script>
export default {
    props:{
        msg:{
            type: String,
            required: true,
        }
    }
}
</script>

<style>

</style>