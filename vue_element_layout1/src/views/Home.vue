<template>
  <div class="home">
    <Nav/>
    <el-row>
      <el-col :span="4">
        <div style="width: 1px;height: 1px"></div>
        <div v-bind:class="{ stick: isStick }" id="left">
          <DirectoryTree/>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="art-section" id="art-f-1" style="height: 500px;width: 100px;">
          1F
        </div>
        <div class="art-section" id="art-f-2" style="height: 500px;width: 100px;">
          2F
        </div>
        <div class="art-section" id="art-f-3" style="height: 500px;width: 100px;">
          3F
        </div>
        <div class="art-section" id="art-f-4" style="height: 500px;width: 100px;">
          4F
        </div>
        <div class="art-section" id="art-f-5" style="height: 500px;width: 100px;">
          5F
        </div>
        <div class="art-section" id="art-f-6" style="height: 500px;width: 100px;">
          6F
        </div>
      </el-col>
      <el-col :span="4">
        <div style="width: 1px;height: 1px"></div>
        <div v-bind:class="{ stick: isStick }" id="right">
          <p v-for="i in 6" @click="scrollToF(i)" :key="i" v-bind:class="{ fnow: FNow === i }" >{{i}}F</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Nav from '@/components/Nav.vue';
import DirectoryTree from '@/components/DirectoryTree.vue';

class Sec {
  id:string;
  offsetTop: number;

  constructor(id: string , offsetTop: number ) {
    this.id = id;
    this.offsetTop = offsetTop;
  }

  sayHi() {
    return `My id is ${this.id}`;
  }
}

@Component({
  components: {
    HelloWorld,
    Nav,
    DirectoryTree
  },
})
export default class Home extends Vue {
  isStick = false;

  FNow = 1;
  secsData = [];

  mounted (){
    window.addEventListener('scroll', this.handleScroll)
    const secs = document.getElementsByClassName('art-section');
    // console.log(secs.length);
    for(let i =0;i<secs.length;i++){
      this.secsData[i] = {
        id:secs[i].id,
        offsetTop:secs[i].offsetTop + 60, // 60 是导航的高度
      }
    }
    console.log(this.secsData);
  }

  // 参考
  handleScroll2(e: any){
    // 获取到包裹导航的最外层DIV的ID，并存入变量nav
    const sticks = document.getElementsByClassName('stick');
    //此处将导航条的滚动存入scrolltop
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    //逻辑判断此处的50为导航菜单上方标题栏DIV的高度，如果向下滚动导航菜单，触发下方的CSS样式更改
    if(sticks.length < 1) return;
    if(scrollTop>60){
      //导航栏绝对定位
      for(let i =0;i<sticks.length;i++ ){
        sticks[i].style.position = 'fixed';
        //导航距离顶部0像素，一直在顶部出现
        sticks[i].style.top = '0';
        //设置导航菜单层级优先度最高
        sticks[i].style.zIndex = '99999';
      }
    }else{
      // 此处为导航菜单回拉后复原，根据项目需求来写，我觉得这里我写的是有些问题的，不过在我的项目中可以实现效果，具体要看情况
      for(let i =0;i<sticks.length;i++ ){
        sticks[i].style.position = 'relative';
      }
    }
  }

  handleScroll(e: any){
    //此处将导航条的滚动存入scrolltop
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop>60){ // 执行固定
      this.isStick = true;
    }else{ // 取消固定
      this.isStick = false;
    }

    for(let i =0;i<this.secsData.length;i++){
      if(scrollTop>this.secsData[i].offsetTop-10) {
        this.FNow = i+1;
      }
    }
  }

  scrollToF(i: number){
    console.log(i);
    window.scrollTo({
      top: this.secsData[i-1].offsetTop,
      behavior: "smooth"
    });
  }
}
</script>

<style scoped lang="less">
  .stick {
    position: fixed;
    top:0;
    z-index: 10;
  }

  .fnow {
    color: greenyellow;
  }
</style>

