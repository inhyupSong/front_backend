<template>
  <div v-if="currentJsonObject" class="edit-form">
    <div class="row">
      <header><h1>Object Edit</h1></header>
      <div class="field-table">
        <form>
          <table>
            <tr
              v-for="(value,
              key) in currentJsonObject"
              :key="key"
            >
              <td
                :style="{
                  textAlign: 'left',
                  paddingRight: '1em',
                }"
              >
                <label
                  ><strong>{{
                    key | capitalize
                  }}</strong></label
                >
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="currentJsonObject[key]"
                />
              </td>
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
        <div class="button-area">
          <p>
            Update confirmed: {{ message }} +
            {{ counter }}
          </p>
          <button
            class="badge badge-danger mr-2"
            @click="deleteObject"
          >
            Delete
          </button>

          <button
            type="submit"
            class="badge badge-success"
            v-on:click="counter += 1"
            @click="updateObject"
          >
            Update
          </button>
        </div>
      </div>
    </div>
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
      counter: 0,
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
          this.message = 'Update';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteObject() {
      if (
        confirm(
          'Attention! \nDo you really want to delete? \nThis Object will be deleted permanently.'
        )
      )
        GenericRESTDataService.delete(
          this.currentJsonObject.id
        )
          .then(result => {
            console.log(result.data);
            this.$router.push({
              name: 'objects',
            });
            this.retrieveObjects();
          })
          .catch(e => {
            console.log(e);
          });
    },
    comfirmAlert: function(message) {
      alert(message);
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

.button-area {
  margin-top: 2em;
}
.field-table {
  margin-top: 3rem;
  margin-left: 1rem;
}
</style>
