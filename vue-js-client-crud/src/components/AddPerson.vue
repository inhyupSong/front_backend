<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" required v-model="person.title" name="title" />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input class="form-control" id="description" required v-model="person.description" name="description" />
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
      person: {
        id: null,
        title: '',
        description: '',
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    savePerson() {
      var data = {
        title: this.person.title,
        description: this.person.description,
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
