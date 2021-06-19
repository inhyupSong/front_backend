<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h4>Ojbecte 1</h4>
        <table>
          <tr v-for="(value, key) in firstBoxCheckedObject" v-bind:key="key">
            <label
              ><strong>{{ key }}</strong></label
            >
            <input
              type="text"
              v-model="firstBoxCheckedObject[key]"
              :disabled="isActiveFirst"
            />
          </tr>
        </table>
        <!-- ============================================================================ -->
        <button
          class="badge badge-danger mr-2"
          @click="deleteObjectFirst()"
          :disabled="buttonDisableFirst"
        >
          Delete
        </button>

        <button
          type="submit"
          class="badge badge-success"
          @click="updateObjectFirst()"
          v-on:click="comfirmAlert('Updated')"
          :disabled="buttonDisableFirst"
        >
          Update
        </button>
        <!-- ============================================================================ -->
      </div>

      <div class="col">
        <h4>Ojbecte 2</h4>
        <table>
          <tr v-for="(value, key) in secondBoxCheckedObject" v-bind:key="key">
            <label
              ><strong>{{ key }}</strong></label
            >
            <input
              type="text"
              v-model="secondBoxCheckedObject[key]"
              :disabled="isActiveSecond"
            />
          </tr>
        </table>
        <!-- ============================================================================ -->
        <button
          class="badge badge-danger mr-2"
          @click="deleteObjectSecond()"
          :disabled="buttonDisableSecond"
        >
          Delete
        </button>

        <button
          type="submit"
          class="badge badge-success"
          @click="updateObjectSecond"
          v-on:click="comfirmAlert('Updated')"
          :disabled="buttonDisableSecond"
        >
          Update
        </button>
        <!-- ============================================================================ -->
      </div>
    </div>
  </div>
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

      isActiveFirst: false,
      isActiveSecond: false,

      buttonDisableFirst: false,
      buttonDisableSecond: false
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

    comfirmAlert: function (message) {
      alert(message)
    },

    updateObjectFirst() {
      console.log(this.firstBoxCheckedObject);
      GenericRESTDataService.update(
        this.firstBoxCheckedObject.id,
        this.firstBoxCheckedObject
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

    deleteObjectFirst() {
      if (confirm("Do you really want to delete?")) {
        GenericRESTDataService.delete(
          this.firstBoxCheckedObject.id
        )
          .then(result => {
            console.log(result.data);
            //this.$router.push({ name: 'objects' });
          })
          .catch(e => {
            console.log(e);
          });
        this.isActiveFirst = true
        this.buttonDisableFirst = true
      }
    },

    updateObjectSecond() {
      console.log(this.secondBoxCheckedObject);
      GenericRESTDataService.update(
        this.secondBoxCheckedObject.id,
        this.secondBoxCheckedObject
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
    /* ============================================================ */
    deleteObjectSecond() {
      if (confirm("Do you really want to delete?")) {
        GenericRESTDataService.delete(
          this.secondBoxCheckedObject.id
        )
          .then(result => { console.log(result.data) })
          .catch(e => {
            console.log(e);
          });
        this.isActiveSecond = true
        this.buttonDisableSecond = true
      }
    },

    /* ============================================================ */
  },
  mounted() {
    this.getObjectById_first(this.firstObjectId);
    this.getObjectById_second(
      this.secondObjectId
    );
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
