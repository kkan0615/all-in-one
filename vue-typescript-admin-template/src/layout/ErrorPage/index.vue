<!--
@TODO: Clip-left써도 안됨... app bar가 안들어감 ...
-->
<template>
  <v-app>
    <v-main fulid>
      <v-container
        app
        fluid
      >
        <v-row
          align="center"
          justify="center"
          no-gutters
        >
          <v-col
            cols="12"
            sm="12"
            :md="$route.meta.margin"
          >
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'BaseLayout',
  components: {
  }
})
export default class BaseLayout extends Vue {

}
</script>
