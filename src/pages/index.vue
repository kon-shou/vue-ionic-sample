<template>
  <ion-page class="ion-page">
    <ion-header class="header">
      <ion-navbar>
        <ion-toolbar>
          <ion-title>MEMO</ion-title>
        </ion-toolbar>
      </ion-navbar>
    </ion-header>
    <ion-content class="content">
      <div class="buttons">
        <div class="btn-holder" @click="goToRead">
          <ion-icon size="large" name="albums"/>
          <div>メモを読む</div>
        </div>
        <div class="btn-holder" @click="goToCreate">
          <ion-icon size="large" name="create"/>
          <div>メモを作成する</div>
        </div>
      </div>
      <h2 @click="goToAbout"><span>Whats This ???</span></h2>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
@Component({
  components: { HelloWorld },
})
export default class Home extends Vue {
  goToRead() {
    this.$router.push('/read')
  }
  goToCreate() {
    this.$router.push('/create')
  }
  goToAbout() {
    this.$router.push('/about')
  }
}
</script>

<style>
  .header {
    height: 7vh;
  }

  .buttons {
    display: flex;
    justify-content: center;
  }

  .btn-holder {
    border-style: groove;
  }

  h2 span {
    border-bottom: 1px solid black;
  }
</style>
