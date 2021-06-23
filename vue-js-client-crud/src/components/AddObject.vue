<template>
  <div class="submit-form">
    <div class="row">
      <header>
        <h1>Add Book</h1>
      </header>

      <div class="field-table">
        <div v-if="!submitted">
          <table>
            <div v-if="value !== null">
              <tr
                v-for="(value,
                key) in genericObject"
                v-bind:key="key"
              >
                <td
                  v-bind:style="{
                    textAlign: 'left',
                    paddingRight: '1em',
                  }"
                >
                  <label
                    ><strong>{{
                      key
                    }}</strong></label
                  >
                </td>

                <td>
                  <input
                    type="text"
                    class="form-control"
                    required
                    v-model="genericObject[key]"
                    v-bind:style="{
                      textAlign: 'right',
                    }"
                  />
                </td>
              </tr>
            </div>
          </table>

          <br /><br />
          <div id="submit-button">
            <button
              @click="saveBook"
              class="btn btn-success"
            >
              Submit
            </button>
          </div>
        </div>

        <div v-else>
          <h4>You submitted successfully!</h4>
          <button
            class="btn btn-success"
            @click="newBook"
          >
            Add
          </button>
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
    saveBook() {
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

    newBook() {
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
  margin-left: 17rem;
}

#submit-button {
  margin-right: 350px;
}
</style>
