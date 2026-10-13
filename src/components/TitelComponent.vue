<template>
    <h1 class="title-big">{{ name }}</h1>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>
