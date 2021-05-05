<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title" v-model="title" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="searchTitle">
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Persons List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(person, index) in persons"
          :key="index"
          @click="setActivePerson(person, index)"
        >
          {{ person.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllPersons">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentPerson">
        <h4>Person</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentPerson.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentPerson.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentPerson.published ? 'Published' : 'Pending' }}
        </div>

        <a class="badge badge-warning" :href="'/persons/' + currentPerson.id">
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Person...</p>
      </div>
    </div>
  </div>
</template>

<script>
import PersonDataService from '../services/PersonDataService';

export default {
  name: 'persons-list',
  data() {
    return {
      persons: [],
      currentPerson: null,
      currentIndex: -1,
      title: '',
    };
  },
  methods: {
    retrievePersons() {
      PersonDataService.getAll()
        .then(response => {
          this.persons = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrievePersons();
      this.currentPerson = null;
      this.currentIndex = -1;
    },

    setActivePerson(person, index) {
      this.currentPerson = person;
      this.currentIndex = index;
    },

    removeAllPersons() {
      PersonDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },

    searchTitle() {
      PersonDataService.findByTitle(this.title)
        .then(response => {
          this.persons = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrievePersons();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
