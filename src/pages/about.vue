<template>
  <ion-page class="ion-page">
    <ion-header class="header">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>このアプリについて</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="content">
      <h2>
        利用してる技術
      </h2>
      <ion-list>
        <ion-item>vue-cli</ion-item>
        <ion-item>ionic</ion-item>
        <ion-item>capacitor</ion-item>
      </ion-list>
      <h2>スマホっぽいスクロール</h2>
      <ion-list>
        <ion-item v-for="item in itemsForList">{{item}}</ion-item>
      </ion-list>

      <ion-infinite-scroll @ionInfinite="doInfinite">
        <ion-infinite-scroll-content></ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios'

@Component
export default class About extends Vue {
  public items: string[] = [];

  get itemsForList() {
    return this.items;
  }

  async created() {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    this.items = posts.data.map((post: any) => {
      return post.title;
    })
  }

  async doInfinite(ionInfiniteEvent: any) {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const body = posts.data.map((comment: any) => {
      return comment.body;
    });

    setTimeout(() => {
      this.items.push(...body);

      console.log('Async operation has ended');
      ionInfiniteEvent.target.complete();
    }, 500);
  }

}
</script>
