<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by Id"
          v-model="searchedId"
        />
        <div class="input-group-append"></div>
        <button
          class="btn btn-outline-secondary"
          type="button"
          @click="searchId"
        >
          Search
        </button>
        <tr>
          <button
            class="btn btn-success"
            @click="duplicatesCleanup()"
            :disabled="boxCheckedObjects.length <= 1"
          >
            Duplicates Cleanup
          </button>

          <!-- <router-link
            tag="button"
            class="btn btn-success"
            :to="'/duplicatesCleanup?data=' + JSON.stringify(boxCheckedObjects.map(o => o.id))"
            :disabled="boxCheckedObjects.length <= 1"
          >
            Duplicates Cleanup
          </router-link> -->
        </tr>
      </div>
    </div>

    <div class="col-md-6">
      <h4>List</h4>
      <ul class="list-group">
        <!-- <p>name: {{ boxCheckedObjects }}</p> -->
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(jsonObject, index) in jsonObjects"
          :key="index"
          @click="setActiveJsonObject(jsonObject, index)"
        >
          <label>
            <th>
              <input
                type="checkbox"
                v-model="boxCheckedObjects"
                :value="jsonObject"
                :disabled="
                  boxCheckedObjects.length >= 2 &&
                  boxCheckedObjects.indexOf(jsonObject) === -1
                "
              />
            </th>
            <th>ID:</th>
            <td>{{ jsonObject.id }}</td>
            <th>Title:</th>
            <td>{{ jsonObject.title }}</td>
          </label>
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
                ><strong>{{ key }} </strong></label
              >
              <td>{{ value }}</td>
            </tr>
          </table>
        </div>
        <tr>
          <a
            class="badge badge-danger mr-2"
            :href="'/objects/' + currentJsonObject.id"
            >Edit</a
          >
        </tr>
      </div>

      <!-- <div v-if="boxCheckedObjects">
        <h4>Object</h4>
        <div>
          <table>
            <tr v-for="(value, key) in boxCheckedObjects" v-bind:key="key">
              <label
                ><strong>{{ key }} </strong></label
              >
              <td>{{ value }}</td>
            </tr>
          </table>
        </div>
      </div> -->

      <div v-else>
        <br />
        <p>Please click on a Object...</p>
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
      jsonobject: [],
      jsonObjects: [],
      searchedId: null,

      currentJsonObject: null,
      currentIndex: -1,

      boxCheckedObject: null,
      boxCheckedIndex: -1,

      boxCheckedObjects: [],
      // Here saved the checked Books
    };
  },
  methods: {
    retrieveObjects() {
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
    setActiveJsonObject(jsonObject, index) {
      this.currentJsonObject = jsonObject;
      this.currentIndex = index;
    },
    /* setBoxCheckedJsonObject(jsonObject, index) {
      this.boxCheckedObject = jsonObject;
      this.boxCheckedIndex = index;
    },
 */
    refreshList() {
      this.retrieveGenericRessource();
      this.currentObject = null;
      this.currentIndex = -1;
    },

    searchId() {
      if (this.searchedId !== '') {
        GenericRESTDataService.findById(this.searchedId).then(result => {
          this.jsonObjects = result;
          this.searchedId = '';
        });
      } else {
        if (this.searchedID == null)
          GenericRESTDataService.getAll().then(result => {
            this.jsonObjects = result;
          });
      }
    },

    duplicatesCleanup() {
      //this.boxCheckedObjects = 'GO THERE';

      this.$router.push({
        name: 'duplicatesCleanup',
        params: {
          boxCheckedObjects: this.boxCheckedObjects, // or anything you want
        },
      });
      /* this.currentJsonObject = null;
      this.currentIndex = null;
      console.log(this.boxCheckedObjects)
      console.log(this.jsonObjects)*/
    },
  },

  mounted() {
    this.retrieveObjects();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
th {
  border-left: 1px solid #dddddd;
  text-align: left;
  padding: 5px;
}
td {
  padding-right: 15px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#duplicates-cleanup {
  margin-right: -30px;
}
</style>
