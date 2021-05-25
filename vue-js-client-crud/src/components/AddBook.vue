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
                    <label for="title">Title</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      required
                      v-model="book.title"
                      name="title"
                    />
                  </td><br /><br />
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
import BookDataService from '../services/BookDataService';

export default {
  name: 'add-book',
  data() {
    return {
      book: {
        id: null,
        title: '',


        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveBook() {
      var data = {
        title: this.book.title,
      };

      BookDataService.create(data)
        .then(response => {
          this.book.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    newBook() {
      this.submitted = false;
      this.book = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 80%;
  margin: auto;
}

.field-table{
  margin-top: 3rem;
  margin-left: 10rem;
}

#submit-button{
  margin-right: 160px;
}
</style>
