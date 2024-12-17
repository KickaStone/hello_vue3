import {ref, onMounted, computed} from "vue";

export default function useSum() {
    let sum = ref(0);
    let bigSum = computed(() => {
        return sum.value * 10;
    })

    function add() {
        sum.value++;
    }

    onMounted(()=>{
        add();
    })

    return {sum, add, bigSum} // provide something : array/map/object
}

