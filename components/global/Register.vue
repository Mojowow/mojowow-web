<template>
  <div>
    <div v-if="isSubmitted" class="card">
      <div class="card-body">
        <h4 class="card-title">We sent you an EMail!</h4>
        <p>
          We sent an EMail to: <b>{{ userData.email }}</b>
        </p>
        <p>
          Please check your inbox and spam folder and click the link in that
          EMail
        </p>
        <button class="btn btn-primary" @click.prevent="back">Back</button>
      </div>
    </div>
    <div v-else class="form-group">
      <!-- Username -->
      <label for="username">Enter Username</label>
      <input
        id="username"
        v-model.lazy="userData.username"
        type="text"
        class="form-control"
      />
      <!-- EMail -->
      <label for="email">Your Email Address</label>
      <input
        id="email"
        v-model="userData.email"
        type="text"
        class="form-control"
      />
      <!-- Password -->
      <label for="password">Enter Password</label>
      <input
        id="password"
        v-model.lazy="userData.password"
        type="password"
        class="form-control"
      />
      <!-- Submit -->
      <button class="btn btn-primary" @click.prevent="submitted">Register</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        username: '',
        email: '',
        password: '',
      },
      isSubmitted: false,
    }
  },
  methods: {
    submitted() {
      this.isSubmitted = true
    },
    back() {
      this.isSubmitted = false
    },
  },
}
</script>
