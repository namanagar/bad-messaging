<template>
    <div class="col-sm-3">
        <div class="row">
          <h3>Welcome, {{ user.name }}</h3>
        </div>
        <button class="btn btn-danger" @click="$emit('logout')">Logout</button>
      </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      name: '',
      email: '',
      signin: ''
    }
  },
  props: ['user'],
  methods: {
  }
}
</script>

<style scoped>
</style>
