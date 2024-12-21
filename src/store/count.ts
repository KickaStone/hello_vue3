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
    },

    getters: {
        bigSum(state){
            // return 999;
            return state.sum * 10;
        },
        // use getters to process data
        bigSumV2():number{
            return this.sum * 10;
        },
        bigSumV3: state => state.sum * 10
    }
})