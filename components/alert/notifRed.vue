<template>
          <b-notification
            type="is-danger is-light"
            aria-close-label="Close notification"
            role="alert">
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