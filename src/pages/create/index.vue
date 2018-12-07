<template>
  <ion-page class="ion-page">
    <ion-header class="header">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>メモを作る</ion-title>
        <ion-buttons slot="end">
          <ion-button :disabled="!isValidMemo" clear @click="createMemo">
            <span v-if="requestPending">
              <ion-spinner/>
            </span>
            <span v-else>Done</span>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="content">
      <ion-textarea
        class="textarea"
        type="text"
        :value="memo"
        large
        @input="memo = $event.target.value"
        placeholder="メモを入力してね"
      ></ion-textarea>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
// import {mapActions} from 'vuex'
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace, Action, Getter } from 'vuex-class';
import * as memo from '../../stores/memo';

// const MemoModule = namespace('../../stores/memo');

@Component({
  methods: {
    ...memo.mapActions(['add']),
  },
})
export default class About extends Vue {
  public memo: string = '';
  public requestPending: boolean = false;

  // public addMemo!: (memo: string) => void;

  @Action('memo/add') addMemo : any;
  @Getter('memo/memos') memos!: string[];

  get isValidMemo() {
    return this.memo !== '';
  }

  createMemo() {
    this.requestPending = true;
    // this.memo;
    setTimeout(() => {
      this.addMemo(this.memo);
      this.requestPending = false;

      console.log(this.memos);

      this.$router.push('/')
    }, 300);
  }
}
</script>

<style>
  .textarea {
    height: 80%;
  }
</style>
