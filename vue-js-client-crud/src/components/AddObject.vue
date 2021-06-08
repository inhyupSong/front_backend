<template>
  <div class="submit-form">
    <header>
      <h1>Add Book</h1>
    </header>

    <div class="field-table">
      <div v-if="!submitted">
        <table>
          <tr v-for="(value, key) in genericObject" v-bind:key="key">
            <div v-if="value !== null">
              <label
                ><strong>{{ key }}</strong></label
              >
              <td>
                <input
                  type="text"
                  class="form-control"
                  required
                  v-model="genericObject[key]"
                />
              </td>
            </div>
          </tr>
        </table>

        <br /><br />
        <div id="submit-button">
          <button @click="saveBook" class="btn btn-success">Submit</button>
        </div>
      </div>

      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newBook">Add</button>
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
      /* genericObject: {
        variable_0: null,
        variable_1: '',
        variable_2: '',
        variable_3: '',
        variable_4: '',
        variable_5: '',
      }, */
      submitted: false,
    };
  },
  methods: {
    saveBook() {
      /*  var data = {
         variable_1: this.genericObject.variable_1,
         variable_2: this.genericObject.variable_2,
         variable_3: this.genericObject.variable_3,
         variable_4: this.genericObject.variable_4,
         variable_5: this.genericObject.variable_5,
       }; */

      GenericRESTDataService.create(this.genericObject)
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
      return config.attribiutesTest[key]
    },

    newBook() {
      this.submitted = false;
      this.genericObject = { ...config.newEntity };
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
  margin-left: 10rem;
}

#submit-button {
  margin-right: 160px;
}
</style>
