<template>
  <div>
    <h4>ojbect</h4>
    <form>
      <table>
        <tr
          v-for="(value,
          key) in firstBoxCheckedObject"
          v-bind:key="key"
        >
          <label
            ><strong>{{ key }}</strong></label
          >
          <input
            type="text"
            v-model="firstBoxCheckedObject[key]"
          />
        </tr>
      </table>

      <table>
        <tr
          v-for="(value,
          key) in secondBoxCheckedObject"
          v-bind:key="key"
        >
          <label
            ><strong>{{ key }}</strong></label
          >
          <input
            type="text"
            v-model="secondBoxCheckedObject[key]"
          />
        </tr>
      </table>
    </form>

    <!--  <button
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
    <p>{{ message }}</p> -->
  </div>

  <!--   <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div> -->
</template>

<script>
import GenericRESTDataService from '../services/GenericRESTDataService';
import config from '../config';

export default {
  props: ['boxCheckedObjects'],

  name: 'boxCheckedObject',
  data() {
    return {
      message: '',
      index: 0,
      firstBoxCheckedObject: null,
      secondBoxCheckedObject: null,
      firstObjectId: this.boxCheckedObjects[0],
      secondObjectId: this.boxCheckedObjects[1],
    };
  },

  methods: {
    getObjectById_first(id) {
      GenericRESTDataService.get(id)
        .then(response => {
          this.firstBoxCheckedObject =
            response.data[
              config.singleResourceName
            ];
          console.log(this.firstBoxCheckedObject);
        })
        .catch(e => {
          console.log(e);
        });
    },

    getObjectById_second(id) {
      GenericRESTDataService.get(id)
        .then(response => {
          this.secondBoxCheckedObject =
            response.data[
              config.singleResourceName
            ];
          console.log(
            this.secondBoxCheckedObject
          );
        })
        .catch(e => {
          console.log(e);
        });
    },

    /* updateObject() {
      console.log(this.boxCheckedObject);
      GenericRESTDataService.update(
        this.boxCheckedObject.id,
        this.boxCheckedObject
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
        this.boxCheckedObject.id
      )
        .then(result => {
          console.log(result.data);
          this.$router.push({ name: 'objects' });
          this.retrieveBooks();
        })
        .catch(e => {
          console.log(e);
        });
    }, */
  },
  mounted() {
    this.getObjectById_first(this.firstObjectId);
    this.getObjectById_second(
      this.secondObjectId
    );
  },
};
/* import GenericRESTDataService from '../services/GenericRESTDataService';
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
          this.currentJsonObject = response.data[config.singleResourceName];
          console.log(this.currentJsonObject);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateObject() {
      console.log(this.currentJsonObject)
      GenericRESTDataService.update(this.currentJsonObject.id, this.currentJsonObject)
        .then(response => {
          console.log(response);
          this.message = 'The Oject was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteObject() {
      GenericRESTDataService.delete(this.currentJsonObject.id)
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
    console.log("TEST WORLD")
    this.message = '';
    this.getObjectById(this.$route.params.id);
    //console.log(currentJsonObject.value);
  },
}; */
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
