import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
// import emitter from "./utils/emitter.ts";
const app = createApp(App);

// // bind event
// emitter.on('test1', ()=>{
//     console.log("test1");
// })
//
// emitter.on('test2', ()=>{
//     console.log("test2");
// })
//
// // trigger event every 1 seconds
// setInterval(() => {
// emitter.emit('test1');
// emitter.emit('test2');
// }, 1000)
//
// // unbind event1 after 3 seconds
// setTimeout(()=>{
//     emitter.off('test1');
// }, 3000)
//
// // unbind all events after 5 seconds
// setTimeout(()=>{
//     emitter.all.clear()
// }, 5000)


app.use(router);

app.mount("#app");
