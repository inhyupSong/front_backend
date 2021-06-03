<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by Id" v-model="searchedId" />
        <div class="input-group-append"></div>
        <button class="btn btn-outline-secondary" type="button" @click="searchId">
          Search
        </button>
      </div>
    </div>

    <div class="col-md-6">
      <h4>List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(jsonObject, index) in jsonObjects"
          :key="index"
          @click="setActiveJsonObject(jsonObject, index)"
        >
          {{ jsonObject.title }}
        </li>
      </ul>
      <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllBooks">
        Remove All
      </button> -->

      <!-- <div>
            <tr v-for="(value, key) in jsonObject" v-bind:key="key">
              <td>{{ key }}</td>
              <td>{{ value }}</td>
            </tr>
          </div>
        </li>
      </ul> -->
    </div>

    <div class="col-md-6">
      <div v-if="currentJsonObject">
        <h4>Object</h4>
        <div>
          <table>
            <tr v-for="(value, key) in currentJsonObject" v-bind:key="key">
              <label
                ><strong>{{ key }}</strong></label
              >
              <td>{{ value }}</td>
            </tr>
          </table>
        </div>
        <tr>
          <button class="badge badge-danger mr-2" @click="deleteObject">Delete</button>
          <a class="badge badge-danger mr-2" :href="'/objects/' + currentJsonObject.id">Edit</a>

          <!-- <button class="badge badge-warning" :href="'/books/' + currentJsonObject.id"> -->
          <!-- <button class="badge badge-warning" @click="editBook">
            Edit
          </button> -->
        </tr>
      </div>

      <div v-else>
        <br />
        <p>Please click on a Book...</p>
      </div>
    </div>
  </div>
</template>

<script>
import GenericRESTDataService from '../services/GenericRESTDataService';

export default {
  name: 'DataList',
  data() {
    return {
      jsonObjects: [],
      currentJsonObject: null,
      currentIndex: -1,
      searchedId: null,

      //title: this.currentBook.title,
    };
  },
  methods: {
    retrieveBooks() {
      GenericRESTDataService.getAll().then(result => {
        this.jsonObjects = result;
      });

      /* same to above
      .then(response => {
        this.books = response.data.books;
      })
      .catch(e => {
        console.log(e);
      }); */
    },
    /* async mounted() {
      this.jsonObjects = await GenericRESTDataService.getAll()
      }*/
    setActiveJsonObject(jsonObject, index) {
      this.currentJsonObject = jsonObject;
      this.currentIndex = index;
    },

    refreshList() {
      this.retrieveGenericRessource();
      this.currentBook = null;
      this.currentIndex = -1;
    },

    searchId() {
      if (this.searchedId !== '') {
        GenericRESTDataService.findById(this.searchedId).then(result => {
          this.jsonObjects = result;
          this.searchedId = '';
        });
      } else if (this.searchedID == null) {
        GenericRESTDataService.getAll().then(result => {
          this.jsonObjects = result;
        });
      }
    },
    deleteObject() {
      GenericRESTDataService.delete(this.currentJsonObject.id)
        .then(result => {
          console.log(result.data);
          this.$router.push({ name: 'objects' });
        })
        .catch(e => {
          console.log(e);
        });
    },
  },

  mounted() {
    this.retrieveBooks();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
