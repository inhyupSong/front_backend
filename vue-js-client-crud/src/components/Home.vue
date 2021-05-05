<template>
  <div v-if="currentPerson" class="edit-form">
    <h4>Person</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" v-model="currentPerson.title" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" v-model="currentPerson.description" />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentPerson.published ? 'Published' : 'Pending' }}
      </div>
    </form>

    <button class="badge badge-primary mr-2" v-if="currentPerson.published" @click="updatePublished(false)">
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2" @click="updatePublished(true)">
      Publish
    </button>

    <button class="badge badge-danger mr-2" @click="deletePerson">
      Delete
    </button>

    <button type="submit" class="badge badge-success" @click="updatePerson">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Person...</p>
  </div>
</template>

<script>
import PersonDataService from '../services/PersonDataService';

export default {
  name: 'person',
  data() {
    return {
      currentPerson: null,
      message: '',
    };
  },
  methods: {
    getPerson(id) {
      PersonDataService.get(id)
        .then(response => {
          this.currentPerson = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentPerson.id,
        title: this.currentPerson.title,
        description: this.currentPerson.description,
        published: status,
      };

      PersonDataService.update(this.currentPerson.id, data)
        .then(response => {
          this.currentPerson.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePerson() {
      PersonDataService.update(this.currentPerson.id, this.currentPerson)
        .then(response => {
          console.log(response.data);
          this.message = 'The person was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deletePerson() {
      PersonDataService.delete(this.currentPerson.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: 'people' });
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = '';
    this.getPerson(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
