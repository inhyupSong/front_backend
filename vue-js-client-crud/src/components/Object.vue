<template>
  <div v-if="currentJsonObject" class="edit-form">
    <h4>ojbect</h4>
    <form>
      <table>
        <tr
          v-for="(value,
          key) in currentJsonObject"
          v-bind:key="key"
        >
          <label
            ><strong>{{ key }}</strong></label
          >
          <input
            type="text"
            v-model="currentJsonObject[key]"
          />
        </tr>
      </table>
    </form>

    <!-- <table>
        <tr v-for="(value, key) in currentJsonObject" v-bind:key="key">
          <label
            ><strong>{{ key }}</strong></label
          >
          <td>{{ value }}</td>
        </tr>
      </table> -->

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
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import GenericRESTDataService from '../services/GenericRESTDataService';
import config from '../config';

export default {
  name: 'jsonObject',
  data() {
    return {
      currentJsonObject: null,
      message: '',
      index: 0,
    };
  },
  methods: {
    getObjectById(id) {
      GenericRESTDataService.get(id)
        .then(response => {
          this.currentJsonObject =
            response.data[
              config.singleResourceName
            ];
          console.log(this.currentJsonObject);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateObject() {
      console.log(this.currentJsonObject);
      GenericRESTDataService.update(
        this.currentJsonObject.id,
        this.currentJsonObject
      )
        .then(response => {
          console.log(response);
          this.message =
            'The Oject was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteObject() {
      GenericRESTDataService.delete(
        this.currentJsonObject.id
      )
        .then(result => {
          console.log(result.data);
          this.$router.push({ name: 'objects' });
          this.retrieveBooks();
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = '';
    this.getObjectById(this.$route.params.id);
    //console.log(currentJsonObject.value);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
