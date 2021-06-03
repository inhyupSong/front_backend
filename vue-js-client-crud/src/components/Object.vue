<template>
  <div v-if="currentJsonObject" class="edit-form">
    <h4>ojbect</h4>
    <form>
      <!-- <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" v-model="currentJsonObject.title" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="author" v-model="currentJsonObject.author" />
      </div>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="abstract" v-model="currentJsonObject.abstract" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="length" v-model="currentJsonObject.length" />
      </div>
      <div class="form-group">
        <label for="description">rating</label>
        <input type="text" class="form-control" id="rating" v-model="currentJsonObject.rating" />
      </div> -->
      <table>
        <tr v-for="(value, key) in currentJsonObject" v-bind:key="key">
          <label
            ><strong>{{ key }}</strong></label
          >
          <td>{{ value }}</td>
        </tr>
      </table>

      <!-- <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentJsonObject.published ? 'Published' : 'Pending' }}
      </div> -->
    </form>

    <!-- <button class="badge badge-primary mr-2" v-if="currentJsonObject.published" @click="updatePublished(false)">
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2" @click="updatePublished(true)">
      Publish
    </button> -->

    <button class="badge badge-danger mr-2" @click="deleteObject">
      Delete
    </button>

    <button type="submit" class="badge badge-success" @click="updateObject">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import GenericRESTDataService from '../services/GenericRESTDataService';

export default {
  name: 'object',
  data() {
    return {
      currentJsonObject: null,
      message: '',
    };
  },
  methods: {
    getObject(id) {
      GenericRESTDataService.get(id)
        .then(response => {
          this.currentJsonObject = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    /* updatePublished(status) {
      var data = {
        id: this.currentTutorial.id,
        title: this.currentTutorial.title,
        description: this.currentTutorial.description,
        published: status,
      };

      TutorialDataService.update(this.currentTutorial.id, data)
        .then(response => {
          this.currentTutorial.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }, */

    updateTutorial() {
      TutorialDataService.update(this.currentJsonObject.id, this.currentJsonObject)
        .then(response => {
          console.log(response.data);
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteTutorial() {
      TutorialDataService.delete(this.currentJsonObject.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: 'obejcts' });
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = '';
    this.getObject(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
