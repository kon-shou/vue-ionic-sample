<template>
  <ion-page class="ion-page">
    <ion-header class="header">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>メモ一覧</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="content">
      <ion-list>
        <ion-item v-for="memo in memos">{{memo}}</ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { namespace, Action, Getter } from 'vuex-class';
  import * as memo from '../../stores/memo';

  @Component
  export default class About extends Vue {

    @Getter('memo/memos') memos!: string[];

  }
</script>
