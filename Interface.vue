<template>
    <div class="col-lg-3 interface">
        <div class="row newrow">
          <h4>{{ user.name }}'s Message Board</h4>
        </div>
        <div class="row newrow">
            <div v-for="message of user.messages"  :key="message">
                <p>{{message}}<br></p>
            </div>
        </div>
        <div class="row newrow">
            <h5>Write a new message!</h5>
            <input type="text" v-model="message" class="form-control"/>
            <button class="btn btn-primary" @click="sendMessage">Submit</button>
        </div>
        <button class="btn btn-danger newrow" @click="logout">Logout</button>
      </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      message: ''
    }
  },
  props: ['user'],
  methods: {
      logout() {
        this.$emit('logout', this.user)
      },
      sendMessage() {
          this.$emit('send-message', {user: this.user, message: this.message})
          this.message = ''
      }
  }
}
</script>

<style scoped>
    .interface{
        margin: 2em;
        border-style: solid;
    }
    .newrow{
        margin: 1em 0.5em;
    }
</style>
