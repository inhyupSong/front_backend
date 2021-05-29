<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title" />
        <div class="input-group-append"></div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Books List</h4>
      <ul class="list-group">
        <li class="list-group-item" v-for="(jsonObject, index) in jsonObjects" :key="index" @click="setActiveBook(jsonObject, index)">
          <div>
            <tr>
              <td>{{ jsonObject.jItem_1 }}</td>
            </tr>
            <tr>
              <td>{{ jsonObject.jItem_2 }}</td>
            </tr>
            <tr>
              <td>{{ jsonObject.jItem_3 }}</td>
            </tr>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import GenericRESTDataService from '../services/GenericRESTDataService';
export default {
  name: 'DataList',
  data() {
    return {
      jsonObjects: [],
    };
  },

  methods: {
    /*  
    retrieveGenericRessource() {
      GenericRESTDataService.getAll()
        .then(response => {
          this.jsonObjects = response.data.ressource;
        })
        .catch(e => {
          console.log(e);
        });
    },
 */
    refreshList() {
      this.retrieveGenericRessource();
      this.currentBook = null;
      this.currentIndex = -1;
    },
  },

  /* Calling  */
  mounted() {
    // next line should be moved to GenericRESTDataService
    GenericRESTDataService.getAll().then(response => {
      this.jsonObjects = response.data.books.map(obj => {
        return {
          jItem_1: obj.title,
          jItem_2: obj.author,
          jItem_3: obj.abstract,
        };
      });
    });
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

<!-- ORIGINAL!!!!!! 
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
      <h4>Books List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(jsonObject, index) in jsonObjects"
          :key="index"
          @click="setActiveBook(jsonObject, index)"
        >
          <div>
            <tr>
              <td>{{ jsonObject.jItem_1 }}</td>
            </tr>
            <tr>
              <td>{{ jsonObject.jItem_2 }}</td>
            </tr>
            <tr>
              <td>{{ jsonObject.jItem_3 }}</td>
            </tr>
            
            <tr>
              <td>{{ book.title }}</td>
            </tr>
            <tr>
              <td>{{ book.author }}</td>
            </tr>
            <tr>
              <td>{{ book.abstract }}</td>
            </tr>
            <tr>
              <td>{{ book.length }}</td>
            </tr>
            <tr>
              <td>{{ book.rating }}</td> 
            </tr>
          </div>
        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllBooks">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentBook">
        <h4>Book</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentBook.title }}
        </div>
        <a class="badge badge-warning" :href="'/books/' + currentBook.id">
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Book...</p>
      </div>
    </div>
  </div>
</template>

<script>
import BookDataService from '../services/BookDataService';

export default {
  name: 'bookList',
  data() {
    return {
      jsonObjects: [],
    };
  },

  methods: {
    /* JSON GET */
    retrieveBooks() {
      BookDataService.getAll()
        .then(response => {
          this.jsonObjects = response.data.books;
          //console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveBooks();
      this.currentBook = null;
      this.currentIndex = -1;
    },

    searchTitle() {
      BookDataService.findByTitle(this.title)
        .then(response => {
          this.books = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },

  /* Calling  */
  mounted() {
    BookDataService.getAll().then(response => {
      this.jsonObjects = response.data.books.map(book => {
        return {
          jItem_1: book.title,
          jItem_2: book.author,
          jItem_3: book.abstract,
        };
      });
      //console.log(this.jsonObjects);
    });
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
-->
