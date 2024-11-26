/**
 * @timer 下午 4 点  34 分
 * 图片懒加载指令
 *
 * 作用： 当图片还没有加载出来的时候，使用占位图片进行显示出来
 *
 * 当滚动条滚动到图片所在行的时候，展示真实的图片
 */

import eventBus from "@/eventBus";
import {debounce} from '@/utils' //处理函数被频繁触发
import defaultGif from '@/assets/zw.gif'

let imgs = [];

eventBus.$on("mainScroll", debounce(handleScroll, 50))  //事件总线 监听滚动条事件

function handleScroll(){
    setImages();
};

function setImages(){
      for(const img of imgs){
          setImage(img);
      }
}

function setImage(img){
    img.dom.src=defaultGif
     imgs = imgs.filter(i =>{i !==img}); //过滤掉不是当前页面的图片信息

     // 图片是否在视口范围内
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    const height = rect.height || 150;

    if(rect.top < -height ||rect.top > clientHeight  ){
        //不在视口高度
        // img.dom.src=defaultGif
    }else {
        //在视口高度
        const tempImg = new Image();
        tempImg.onload = function(){ //当真实图片加载完成之后
            img.dom.src = img.src;
        }
        tempImg.src = img.src;
        imgs = imgs.filter(i =>{i!==img});
    }


}


//测试代码，每隔一段时间要执行的函数
// setInterval(() =>{
//     console.log(imgs);
// }, 2000);


export default {
    inserted (el, binding) {
        const img = {  //执行时机是什么
            dom:el,
            src: binding.value,
        }
        imgs.push(img)
        setImage(img);
    },
    unbind (el) { //unbind 执行时机未元素消失的时间
        imgs = imgs.filter(img => img.dom !== el)
    }
}