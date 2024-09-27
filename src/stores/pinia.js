import { defineStore } from 'pinia';

export const Sold = defineStore({
    id:"counter",
    state:()=>({
        counter:0
    }),
    
    getters:{
        count:(state)=>state.counter
    },
    actions:{
        increment(val = 1){
            this.counter=this.count+val
        },
        decrement(val = 1){
            this.counter=this.counter-val;
        },
        setCounter(value) {
            this.counter = value;
        }
    }
})