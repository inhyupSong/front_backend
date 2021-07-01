<template>
  <div v-if="currentObject" class="edit-form">
    <h4>Object</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentObject.title"
        />
        <div class="form-group">
          <label><strong>Status:</strong></label>
          {{
            currentObject.published
              ? 'Published'
              : 'Pending'
          }}
        </div>
      </div>
    </form>

    <button
      class="badge badge-primary mr-2"
      v-if="currentObject.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button
      v-else
      class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button
      class="badge badge-danger mr-2"
      @click="deleteObject"
    >
      Delete
    </button>

    <button
      type="submit"
      class="badge badge-success"
      @click="updateObject"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Object.</p>
  </div>
</template>

<script>
import GenericRESTDataService from '../services/GenericRESTDataService';

export default {
  name: 'object',
  data() {
    return {
      currentObject: null,
      message: '',
    };
  },
  methods: {
    getObject(id) {
      GenericRESTDataService.get(id)
        .then(response => {
          this.currentObject = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentObject.id,
        title: this.currentObject.title,
        description: this.currentObject
          .description,
        published: status,
      };

      GenericRESTDataService.update(
        this.currentObject.id,
        data
      )
        .then(response => {
          this.currentObject.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateObject() {
      GenericRESTDataService.update(
        this.currentObject.id,
        this.currentObject
      )
        .then(response => {
          console.log(response.data);
          this.message =
            'The Object was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteObject() {
      GenericRESTDataService.delete(
        this.currentObject.id
      )
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: 'objects' });
        })
        .catch(e => {
          console.log(e);
        });
    },

    mounted() {
      this.message = '';
      this.getObject(this.$route.params.id);
    },

    /* mounted() {
      GenericRESTDataService.getAll()
        .then(result => { this.jsonObjects = result })
    }, */
  },
};
</script>
