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
          <!--      <button
            class="btn btn-success"
            @click="duplicatesCleanup()"
            :disabled="
              boxCheckedObjects.length <= 1
            "
          >
            Duplicates Cleanup -->

          <router-link
            tag="button"
            class="btn btn-success"
            :to="
              `/duplicatesCleanup?id1=${boxCheckedObjects[0]}&id2=${boxCheckedObjects[1]}`
            "
            :disabled="
              boxCheckedObjects.length <= 1
            "
          >
            Duplicates Cleanup
          </router-link>
          <!-- </button> -->

          <!-- <router-link
            tag="button"
            class="btn btn-success"
            :to="{
              name: 'duplicatesCleanup',
              params: { boxCheckedObjects },
            }"
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
          :class="{
            active: index == currentIndex,
          }"
          v-for="(jsonObject,
          index) in jsonObjects"
          :key="index"
          @click="
            setActiveJsonObject(jsonObject, index)
          "
        >
          <label>
            <th>
              <span
                v-bind:style="{
                  textAlign: 'left',
                  paddingRight: '1em',
                }"
              >
                <input
                  type="checkbox"
                  v-model="boxCheckedObjects"
                  :value="jsonObject.id"
                  :disabled="
                    boxCheckedObjects.length >=
                      2 &&
                      boxCheckedObjects.indexOf(
                        jsonObject.id
                      ) === -1
                  "
                />
              </span>
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
          <table
            class="list-group-item"
            v-bind:style="{
              width: '40em',
              marginBottom: '1em',
            }"
          >
            <tr
              v-for="(value,
              key) in currentJsonObject"
              v-bind:key="key"
            >
              <label
                class="list-item"
                v-bind:style="{
                  textAlign: 'left',
                  paddingRight: '2em',
                  boder: '1px',
                }"
                ><strong
                  >{{ key | capitalize }}
                </strong></label
              >
              <td>
                {{ value }}
              </td>
            </tr>
          </table>
        </div>
        <tr>
          <h5>
            <a
              class="badge badge-warning mr-2"
              :href="
                '/objects/' + currentJsonObject.id
              "
              >Obejct edit</a
            >
          </h5>
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
    };
  },
  methods: {
    retrieveObjects() {
      GenericRESTDataService.getAll().then(
        result => {
          this.jsonObjects = result;
        }
      );
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

    refreshList() {
      this.retrieveGenericRessource();
      this.currentObject = null;
      this.currentIndex = -1;
    },

    searchId() {
      if (this.searchedId !== '') {
        GenericRESTDataService.findById(
          this.searchedId
        ).then(result => {
          this.jsonObjects = result;
          this.searchedId = '';
        });
      } else {
        if (this.searchedID == null)
          GenericRESTDataService.getAll().then(
            result => {
              this.jsonObjects = result;
            }
          );
      }
    },

    /* duplicatesCleanup() {
      //this.boxCheckedObjects = 'GO THERE';

      this.$router.push({
        name: 'duplicatesCleanup',
        params: {
          boxCheckedObjects: this
            .boxCheckedObjects,
        },
      });
      /*


      this.currentJsonObject = null;
      this.currentIndex = null;
      console.log(this.boxCheckedObjects)
      console.log(this.jsonObjects)
    }, */
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
  text-align: left;
  padding: 1px;
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
