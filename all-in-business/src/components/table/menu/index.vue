<template>
  <v-menu left :offset-x="true">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        dark
        v-bind="attrs"
        icon
        v-on="on"
      >
        <v-icon>more_vert</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item>
        <v-menu left :offset-x="true">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              :dark="$vuetify.theme.dark"
              v-bind="attrs"
              v-on="on"
            >
              donwload
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title @click="downloadAsExcel">
                <v-icon x-small class="table-list-icon">fas fa-file-excel</v-icon>
                Excel
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="downloadAsExcel">
                <v-icon x-small class="table-list-icon">fas fa-file-pdf</v-icon>
                PDF
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>
          <v-btn
            :dark="$vuetify.theme.dark"
          >
            upload
          </v-btn>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'TableMenu'

})
export default class extends Vue {
  private downloadAsExcel() {
    console.log('downloadAsExcel')
    this.$emit('downloadAsExcel')
  }
  private downloadAsPDF() {
    console.log('downloadAsPDF')
    this.$emit('downloadAsPDF')
  }
}
</script>

<style lang="scss" scoped>
.table-list-icon {
  margin-right: 12px;
}
</style>
