<template>
  <div class="submit-form">
    <header>
      <h1>Add Book</h1>
    </header>

    <div class="field-table">
      <div v-if="!submitted">
        <form>
          <div class="row">
            <div class="col">
              <table>
                <!-- v-if="counterIncrement(index)" -->

                <tr> <!-- v-for="field in fields"> :key="field.message"> 
                  <p v-if="counterIncrement(index)"></p> 
                  <td>{{ field.message }}</td>-->
                  <label>id</label>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="object.message"
                      required
                      v-model="jsonObject.variable_1"
                      name="title"
                    />
                  </td>
                  <br /><br />
                  <td>
                    <label>author</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      required
                      v-model="object.variable_2"
                      name="title"
                    />
                  </td>
                  <br /><br />

                  <td>
                    <label>abstract</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      required
                      v-model="object.variable_3"
                      name="title"
                    />
                  </td>
                  <br /><br />

                  <td>
                    <label>length</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      required
                      v-model="object.variable_4"
                      name="title"
                    />
                  </td>
                  <br /><br />

                  <td>
                    <label>rating</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      required
                      v-model="object.variable_5"
                      name="title"
                    />
                  </td>
                  <br /><br />
                </tr>
              </table>
            </div>
          </div>
        </form>
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

export default {
  name: 'add-object',
  data() {
    return {
      fields: [
        { message: 'id' },
        { message: 'title' },
        { message: 'abstract' },
        { message: 'author' },
        { message: 'length' },
        { message: 'rating' }
      ],
      jsonObject: {
        variable_0: null,
        variable_1: '',
        variable_2: '',
        variable_3: '',
        variable_4: '',
        variable_5: '',
      },
      submitted: false,

      counter: 0,
    };

  },
  methods: {
    counterIncrement(index) {
      this.counter += 1;
    },

    saveBook() {
      var data = {
        variable_1: this.object.variable_1,
        variable_2: this.object.variable_2,
        variable_3: this.object.variable_3,
        variable_4: this.object.variable_4,
        variable_5: this.object.variable_5,
      };

      GenericRESTDataService.create(data)
        .then(result => {
          this.object.variable_0 = result;
          this.submitted = true;
        }).catch(e => {
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

    newBook() {
      this.submitted = false;
      this.object = {};
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



<!-- ORIGINAL: it works
<template>
  <div class="submit-form">
    <header>
      <h1>Add Book</h1>
    </header>

    <div class="field-table">
      <div v-if="!submitted">
        <form>
          <div class="row">
            <div class="col">
              <table>
                <tr>
                  <td>
                    <label>Title</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      required
                      v-model="object.title"
                      name="title"
                    />
                  </td>
                  <br /><br />

                  <td>
                    <label>author</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      required
                      v-model="object.author"
                      name="title"
                    />
                  </td>
                  <br /><br />

                  <td>
                    <label>abstract</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      required
                      v-model="object.abstract"
                      name="title"
                    />
                  </td>
                  <br /><br />

                  <td>
                    <label>length</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      required
                      v-model="object.length"
                      name="title"
                    />
                  </td>
                  <br /><br />

                  <td>
                    <label>rating</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      required
                      v-model="object.rating"
                      name="title"
                    />
                  </td>
                  <br /><br />
                </tr>
              </table>
            </div>
          </div>
        </form>
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

export default {
  name: 'add-object',
  data() {
    return {
      object: {
        id: null,
        title: '',
        author: '',
        abstract: '',
        length: '',
        rating: '',
      },
      submitted: false,
    };
  },
  methods: {
    saveBook() {
      var data = {
        title: this.object.title,
        author: this.object.author,
        abstract: this.object.abstract,
        length: this.object.length,
        rating: this.object.rating,
      };

      GenericRESTDataService.create(data)
        .then(response => {
          this.object.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    newBook() {
      this.submitted = false;
      this.object = {};
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
