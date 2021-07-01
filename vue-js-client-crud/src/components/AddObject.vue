<template>
  <div class="submit-form">
    <div class="row">
      <header>
        <h1>Add Object</h1>
      </header>

      <div class="field-table">
        <div v-if="!submitted">
          <table>
            <div
              :style="{ marginLeft: '15em' }"
              v-if="value !== null"
            >
              <tr
                v-for="(value,
                key) in genericObject"
                v-bind:key="key"
                :hidden="key === 'id'"
              >
                <td
                  v-bind:style="{
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

                <!-- for input, need only number 
                @keypress="isNumber($event)" -->
                <td>
                  <input
                    type="text"
                    class="form-control"
                    required
                    v-model="genericObject[key]"
                    v-bind:style="{
                      textAlign: 'left',
                    }"
                  />
                </td>
              </tr>
            </div>
          </table>

          <br /><br />
          <div
            :style="{ marginLeft: '15em' }"
            id="submit-button"
          >
            <button
              @click="saveObject"
              class="btn btn-success"
            >
              Submit
            </button>
          </div>
        </div>

        <div v-else>
          <h4>You submitted successfully!</h4>
          <button
            :style="{ margin: '2em' }"
            class="btn btn-success"
            @click="newObject"
          >
            Add one More Object
          </button>
          <router-link
            :style="{ margin: '2em' }"
            tag="button"
            class="btn btn-dark"
            to="/objects"
          >
            Back to List
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GenericRESTDataService from '../services/GenericRESTDataService';
import config from '../config';

export default {
  name: 'add-object',
  data() {
    return {
      genericObject: { ...config.newEntity },
      submitted: false,
    };
  },
  methods: {
    saveObject() {
      GenericRESTDataService.create(
        this.genericObject
      )
        .then(result => {
          this.genericObject.id = result;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });

      /* .then(response => {
        this.object.id = response.data.id;
        this.submitted = true;
      })
      .catch(e => {
        console.log(e);
      }); */
    },

    getAttributeByKey(key) {
      return config.attribiutesTest[key];
    },

    isNumber: function(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which
        ? evt.which
        : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },

    newObject() {
      this.submitted = false;
      this.genericObject = {
        ...config.newEntity,
      };
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 80%;
  margin: auto;
}

.field-table {
  margin-top: 3rem;
  margin-left: 1rem;
}

#submit-button {
  margin-right: 350px;
}
</style>
