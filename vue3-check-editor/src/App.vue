<template>
<!--  <img alt="Vue logo" src="./assets/logo.png" />-->
<!--  <HelloWorld msg="Hello Vue 3.0 + Vite" />-->
<!--  <check-editor v-model="checked" v-model:title.trim="title"></check-editor>-->
<!--  <p>当前状态：{{checked}}</p>-->
<!--  <p>商品名称：{{title}}</p>-->
  <div class="container">
    <div class="list">
      <strong>编辑：</strong>
      <div class="list">
        <check-editor v-for="item in products" :key="item.id" v-model="item.sell" v-model:title.trim="item.title"></check-editor>
      </div>
    </div>
    <div class="list">
      <strong>销售中：</strong>
      <div>
        <template v-for="(item, index) in sells">
          <span>{{index + 1}}.</span>
          <strong>{{item.title}}</strong>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CheckEditor from './components/CheckEditor.vue'
import {ref, computed} from 'vue'

const defaultSells  = [{
  id:1,
  sell: true,
  title: "iphone12"
}, {
  id: 2,
  sell: false,
  title: 'xiaomi'
}, {
  id:3,
  sell: false,
  title: 'huawei'
}, {
  id: 4,
  sell: false,
  title: 'vivo'
}]

export default {
  name: 'App',
  components: {
    HelloWorld,
    CheckEditor,
  },
  setup() {
    const productsRef = ref(defaultSells);
    const sellsRef = computed(() => productsRef.value.filter(item => item.sell))
    return {
      products: productsRef,
      sells: sellsRef
    }
  },
  data() {
    return {
      checked: true,
      title: 'xiaomi'
    }
  }
}
</script>
<style scoped>
  .container {
    width: 880px;
    margin: 50px auto;
  }
  .list {
    display: flex;
    align-items: center;
    margin: 1em 0;
  }
  strong {
    margin-right: 1em;
  }

</style>