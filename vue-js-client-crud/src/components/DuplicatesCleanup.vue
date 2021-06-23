<template>
  <div class="container">
    <div class="row">
      <div
        class="col"
        v-for="(obj, i) in objects"
        v-bind:key="i"
      >
        <h4>
          Object {{ i
          }}<span v-if="isDisabled[i]">
            (deleted)</span
          >
        </h4>
        <table>
          <tr
            v-for="(value, key) in obj"
            v-bind:key="key"
          >
            <td
              v-bind:style="{
                textAlign: 'left',
                paddingRight: '1em',
              }"
            >
              <label
                ><strong>{{ key }}</strong></label
              >
            </td>
            <td>
              <input
                type="text"
                v-model="obj[key]"
                :disabled="
                  key === 'id' || isDisabled[i]
                "
                @change="updateObject(i)"
              />
            </td>
          </tr>
        </table>

        <button
          :class="
            'badge ' +
              (isDisabled[Math.abs(i - 1)]
                ? 'badge-success'
                : 'badge-danger')
          "
          @click="deleteObject(i)"
          v-if="!isDisabled[i]"
          :disabled="isDisabled[Math.abs(i - 1)]"
        >
          {{
            isDisabled[Math.abs(i - 1)]
              ? 'KEPT'
              : 'DELETE'
          }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import GenericRESTDataService from '../services/GenericRESTDataService';
import config from '../config';
import Vue from 'vue';

export default {
  props: ['boxCheckedObjects'],
  name: 'boxCheckedObject',
  data() {
    return {
      objects: [null, null],
      isDisabled: [false, false],
    };
  },

  methods: {
    getObjectById(i, id) {
      GenericRESTDataService.get(id)
        .then(response => {
          Vue.set(
            this.objects,
            i,
            response.data[
              config.singleResourceName
            ]
          );
          console.log(this.objects[i]);
        })
        .catch(e => {
          console.log(e);
        });
    },

    comfirmAlert: function(message) {
      alert(message);
    },

    updateObject(i) {
      console.log(this.objects[i]);
      GenericRESTDataService.update(
        this.objects[i].id,
        this.objects[i]
      )
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteObject(i) {
      if (
        confirm('Do you really want to delete?')
      ) {
        GenericRESTDataService.delete(
          this.objects[i].id
        )
          .then(result => {
            console.log(result.data);
            Vue.set(this.isDisabled, i, true);
            //this.$router.push({ name: 'objects' });
          })
          .catch(e => {
            console.log(e);
          });
      }
    },

    /* ============================================================ */
  },
  mounted() {
    this.getObjectById(0, this.$route.query.id1);
    this.getObjectById(1, this.$route.query.id2);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
