<template>
  <div class="col-lg-12">
    <div class="row">
      <div class="col-lg-3">
        <h3>Sign In</h3>
        <input v-model="signin" class="form-control" placeholder="Enter name or email">
        <button class="btn btn-primary" @click="login">Submit</button>
      </div>
      <div class="col-lg-3">
        <h3>Create a User</h3>
        <input v-model="name" type="text" class="form-control" placeholder="Name" required>
        <input v-model="email" type="email" class="form-control" placeholder="Email" required>
        <button class="btn btn-primary" @click="createUser">Submit</button>
      </div>
    </div>
    <hr>
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
  props: ['users', 'loggedin'],
  methods: {
    createUser() {
      if (this.name === '' || this.email === ''){
        alert("Must submit at least one character!")
      }
      else{
        this.$emit('create-user', {name : this.name, email: this.email})
        this.name = ''
        this.email = ''
      }
    },
    login(){
      //checks to see if the signin is valid, then logs the user in if it is
      var nameCheck = this.users.filter(user => user.name == this.signin)
      var emailCheck = this.users.filter(user => user.email == this.signin)
      if (nameCheck.length > 0){
        this.$emit('login', { name: nameCheck[0].name, email: nameCheck[0].email })
        this.signin = ''
      }
      else if (emailCheck.length > 0){
        this.$emit('login', { name: emailCheck[0].name, email: emailCheck[0].email })
        this.signin = ''
      }
      else{
        alert("Sorry, those credentials don't match!")
        this.signin = ''
      }
    }
  }
}
</script>

<style scoped>
div{
  margin-top: .5em;
  margin-left: 2em;
}
button{
  margin-top: 1em;
}
img{
  max-width: 18.750em;
  max-height: 18.750em;
}
</style>
