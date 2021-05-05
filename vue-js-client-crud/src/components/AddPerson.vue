<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="person.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="sex">Sex</label>
        <input
          class="form-control"
          id="sex"
          required
          v-model="person.sex"
          name="sex"
        />
      </div>

      <div class="form-group">
        <label for="firstname">firstname</label>
        <input
          class="form-control"
          id="firstname"
          required
          v-model="person.firstname"
          name="firstname"
        />
      </div>

      <div class="form-group">
        <label for="lastname">lastname</label>
        <input
          class="form-control"
          id="lastname"
          required
          v-model="person.lastname"
          name="lastname"
        />
      </div>



      <button @click="savePerson" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newPerson">Add</button>
    </div>
  </div>
</template>

<script>
import PersonDataService from '../services/PersonDataService';

export default {
  name: 'add-person',
  data() {
    return {
      /* here to change */
      person: {
        id: null,
        title: '',
        sex: '',
        firstname: '',
        lastname: '',
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    savePerson() {
      var data = {
        title: this.person.title,
        sex: this.person.sex,
        firstname: this.person.firstname,
        lastname: this.person.lastname,
      };

      PersonDataService.create(data)
        .then(response => {
          this.person.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    newPerson() {
      this.submitted = false;
      this.person = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
