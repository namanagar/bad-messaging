// set up for Firebase
var config = {
  apiKey: "AIzaSyDX186BsqjiUn0CKo8lbObDKs1BIqcMs4w",
  authDomain: "bad-messaging.firebaseapp.com",
  databaseURL: "https://bad-messaging.firebaseio.com",
  projectId: "bad-messaging",
  storageBucket: "",
  messagingSenderId: "672389396957"
};
// global access to initialized app database
var db = firebase.initializeApp(config).database()
// global reference to remote data
var usersRef = db.ref('users')
var loggedInRef = db.ref('loggedInUser')

// connect Firebase to Vue
Vue.use(VueFire)
//Main Vue instance for the app
new Vue({
  el: '#my-app',
  data: {
  },
  firebase: {
    users: usersRef,
    loggedInUser: loggedInRef,
  },
  components: {
    'user': httpVueLoader('User.vue'),
    'interface': httpVueLoader('Interface.vue')
  },
  computed: {
  },
  methods: {
    //These methods are pretty straightforward based on the name, just updating firebase values based on user changes
    createUser(user){
      this.$firebaseRefs.users.push(user)
    },
    login(user){
      console.log(user)
      /*this.$firebaseRefs.loggedInUser.child('name').set(user.name)
      this.$firebaseRefs.loggedInUser.child('email').set(user.email)
      */
      this.$firebaseRefs.loggedInUser.push(user)
    },
    logout(user){
      this.$firebaseRefs.loggedInUser.child(user['.key']).remove()
    }
  }
})
