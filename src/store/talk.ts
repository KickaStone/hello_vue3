import {defineStore} from "pinia";
import axios from "axios";
import {nanoid} from "nanoid";
import {reactive} from "vue";

// Option API
// export const useTalkStore = defineStore("talk", {
//     state() {
//         return {
//             wordList: JSON.parse(localStorage.getItem('talkList') as string) || []
//         }
//     },
//     actions: {
//         async getATalk()
//         {
//             let {data: {content}} = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
//             let obj = {id: nanoid(), title: content};
//             this.wordList.unshift(obj);
//         }
//
//     }
// })

// Composition API
export const useTalkStore = defineStore("talk", ()=>{
    const wordList = reactive(JSON.parse(localStorage.getItem('talkList') as string) || [])

    async function getATalk()
    {
        let {data: {content}} = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
        let obj = {id: nanoid(), title: content};
        wordList.unshift(obj);
    }

    return {wordList, getATalk};
})


