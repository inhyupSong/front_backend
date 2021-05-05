<template>
  <div v-if="currentPerson" class="edit-form">
    <h4>Person</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" v-model="currentPerson.title" />
      </div>
      <div class="form-group">
        <label for="sex">Sex</label>
        <input type="text" class="form-control" id="sex" v-model="currentPerson.sex" />
      </div>
      <div class="form-group">
        <label for="firstname">First name</label>
        <input type="text" class="form-control" id="firstname" v-model="currentPerson.firstname" />
      </div>
      <div class="form-group">
        <label for="lastname">Last name</label>
        <input type="text" class="form-control" id="lastname" v-model="currentPerson.lastname" />
      </div>
      <div class="form-group">
        <label for="street">street</label>
        <input type="text" class="form-control" id="street" v-model="currentPerson.street" />
      </div>
      <div class="form-group">
        <label for="house_nr">house_nr</label>
        <input type="text" class="form-control" id="house_nr" v-model="currentPerson.house_nr" />
      </div>
      <div class="form-group">
        <label for="region">region</label>
        <input type="text" class="form-control" id="region" v-model="currentPerson.region" />
      </div>
      <div class="form-group">
        <label for="Post_nr">Post_nr</label>
        <input type="text" class="form-control" id="Post_nr" v-model="currentPerson.Post_nr" />
      </div>
      <div class="form-group">
        <label for="state">state</label>
        <input type="text" class="form-control" id="state" v-model="currentPerson.state" />
      </div>
      <div class="form-group">
        <label for="country">country</label>
        <input type="text" class="form-control" id="country" v-model="currentPerson.country" />
      </div>
      <div class="form-group">
        <label for="email">email</label>
        <input type="text" class="form-control" id="email" v-model="currentPerson.email" />
      </div>
      <div class="form-group">
        <label for="phone_nr">phone_nr</label>
        <input type="text" class="form-control" id="phone_nr" v-model="currentPerson.phone_nr" />
      </div>
      <div class="form-group">
        <label for="mobile_nr">mobile_nr</label>
        <input type="text" class="form-control" id="mobile_nr" v-model="currentPerson.mobile_nr" />
      </div>
      <div class="form-group">
        <label for="extra_infos">extra_infos</label>
        <input type="text" class="form-control" id="extra_infos" v-model="currentPerson.extra_infos" />
      </div>
      

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentPerson.published ? 'Published' : 'Pending' }}
      </div>
    </form>

    <button class="badge badge-primary mr-2" v-if="currentPerson.published" @click="updatePublished(false)">
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2" @click="updatePublished(true)">
      Publish
    </button>

    <button class="badge badge-danger mr-2" @click="deletePerson">
      Delete
    </button>

    <button type="submit" class="badge badge-success" @click="updatePerson">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Person...</p>
  </div>
</template>

<script>
import PersonDataService from '../services/PersonDataService';

export default {
  name: 'person',
  data() {
    return {
      currentPerson: null,
      message: '',
    };
  },
  methods: {
    getPerson(id) {
      PersonDataService.get(id)
        .then(response => {
          this.currentPerson = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentPerson.id,
        title: this.currentPerson.title,
        description: this.currentPerson.description,
        published: status,
      };

      PersonDataService.update(this.currentPerson.id, data)
        .then(response => {
          this.currentPerson.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePerson() {
      PersonDataService.update(this.currentPerson.id, this.currentPerson)
        .then(response => {
          console.log(response.data);
          this.message = 'The person was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deletePerson() {
      PersonDataService.delete(this.currentPerson.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: 'people' });
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = '';
    this.getPerson(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
