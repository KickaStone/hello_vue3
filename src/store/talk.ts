import {defineStore} from "pinia";

export const useTalkStore = defineStore("talk", {
    state: () => {
        return {
            wordList: [
              {id: 'w1', title: "saflsafsjdfla"},
              {id: 'w2', title: "saflsafsjdflasdafsd"},
              {id: 'w3', title: "saflsafsjdfladsfadsfadsf"}
            ]
        }
    }
})