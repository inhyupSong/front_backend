<!-- <template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="person.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="sex">Sex</label>
        <input
          class="form-control"
          id="sex"
          required
          v-model="person.sex"
          name="sex"
        />
      </div>

      <div class="form-group">
        <label for="firstname">firstname</label>
        <input
          class="form-control"
          id="firstname"
          required
          v-model="person.firstname"
          name="firstname"
        />
      </div>

      <div class="form-group">
        <label for="lastname">lastname</label>
        <input
          class="form-control"
          id="lastname"
          required
          v-model="person.lastname"
          name="lastname"
        />
      </div>

      <button @click="savePerson" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newPerson">Add</button>
    </div>
  </div>
</template>
 -->

 <template>
  <div class="submit-form">
    <header>
      <h1>Add Person</h1>
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
                      v-model="person.title"
                      name="title"
                    />
                  </td><br /><br />
                </tr>

                <tr>
                  <td>
                    <label for="sex">Sex</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="sex"
                      required
                      v-model="person.sex"
                      name="sex"
                    />
                  </td><br /><br />
                </tr>
                <tr>
                  <td>
                    <label for="firstname">First Name</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="firstname"
                      required
                      v-model="person.firstname"
                      name="firstname"
                    />
                  </td><br /><br />
                </tr>

                <tr>
                  <td>
                    <label for="lastname">Last Name</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="lastname"
                      required
                      v-model="person.lastname"
                      name="lastname"
                    />
                  </td><br /><br />
                </tr>

                <tr>
                  <td>
                    <label for="street">Street</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="street"
                      required
                      v-model="person.street"
                      name="street"
                    />
                  </td><br /><br />
                </tr>

                <tr>
                  <td>
                    <label for="house_nr">House Nr.</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="house_nr"
                      required
                      v-model="person.house_nr"
                      name="house_nr"
                    />
                  </td><br /><br />
                </tr>

                <tr>
                  <td>
                    <label for="region">Region</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="region"
                      required
                      v-model="person.region"
                      name="region"
                    />
                  </td><br /><br />
                </tr>
              </table>
            </div>

            <div class="col">
              <table>
                <tr>
                  <td>
                    <label for="post_nr">Post Nr.</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="post_nr"
                      required
                      v-model="person.post_nr"
                      name="post_nr"
                    />
                  </td><br /><br />
                </tr>

                <tr>
                  <td>
                    <label for="state">State</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="state"
                      required
                      v-model="person.state"
                      name="state"
                    />
                  </td><br /><br />
                </tr>

                <tr>
                  <td>
                    <label for="country">Country</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="country"
                      required
                      v-model="person.country"
                      name="country"
                    />
                  </td><br /><br />
                </tr>

                <tr>
                  <td>
                    <label for="email">Email</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      required
                      v-model="person.email"
                      name="email"
                    />
                  </td><br /><br />
                </tr>

                <tr>
                  <td>
                    <label for="phone_nr">Phone Nr.</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="phone_nr"
                      required
                      v-model="person.phone_nr"
                      name="phone_nr"
                    />
                  </td><br /><br />
                </tr>

                <tr>
                  <td>
                    <label for="mobile_nr">Mobile Nr.</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="mobile_nr"
                      required
                      v-model="person.mobile_nr"
                      name="mobile_nr"
                    />
                  </td><br /><br />
                </tr>

                <tr>
                  <td>
                    <label for="extra_infos">Extra Infos</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="extra_infos"
                      required
                      v-model="person.extra_infos"
                      name="extra_infos"
                    />
                  </td><br /><br />
                  
                </tr>
              </table>
            </div>
          </div>
        </form>
        <br /><br />
        <div id="submit-button">
        <button @click="savePerson" class="btn btn-success">Submit</button>
        </div>
      </div>

      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newPerson">Add</button>
      </div>
    </div>
  </div>
</template>
<script>
import PersonDataService from '../services/PersonDataService';

export default {
  name: 'add-person',
  data() {
    return {
      /* here to change */
      person: {
        id: null,
        title: '',
        sex: '',
        firstname: '',
        lastname: '',
        street: '',
        house_nr: '',
        region: '',
        post_nr: '',
        state: '',
        country: '',
        email: '',
        phone_nr: '',
        mobile_nr: '',
        extra_infos: '',

        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    savePerson() {
      var data = {
        title: this.person.title,
        sex: this.person.sex,
        firstname: this.person.firstname,
        lastname: this.person.lastname,
        street: this.person.street,
        house_nr: this.person.house_nr,
        region: this.person.region,
        post_nr: this.person.post_nr,
        state: this.person.state,
        country: this.person.country,
        email: this.person.email,
        phone_nr: this.person.phone_nr,
        mobile_nr: this.person.mobile_nr,
        extra_infos: this.person.extra_infos,
      };

      PersonDataService.create(data)
        .then(response => {
          this.person.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    newPerson() {
      this.submitted = false;
      this.person = {};
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
