import {defineStore} from "pinia";
import axios from "axios";
import {nanoid} from "nanoid";

export const useTalkStore = defineStore("talk", {
    state() {
        return {
            wordList: JSON.parse(localStorage.getItem('talkList') as string) || []
        }
    },
    actions: {
        async getATalk()
        {
            let {data: {content}} = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
            let obj = {id: nanoid(), title: content};
            this.wordList.unshift(obj);
        }

    }
})