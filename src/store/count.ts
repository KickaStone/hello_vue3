import {defineStore} from "pinia";

export const useCountStore = defineStore("count", {
    state(){
        return {
            sum: 0,
            a: 1,
            b: 2,
            c: 3
        }
    },

    actions: {
        increment(value: number) {
            console.log("increment is called", value);
            // console.log(this);
            // console.log(this.sum); // option API, use this
            this.sum += value;
        }
    }
})