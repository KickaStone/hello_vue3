import {reactive} from "vue";
import axios from 'axios';

export default function useDog() {
    // API: https://dog.ceo/api/breed/pembroke/images/random
    // response :
    // {"message":"https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_7292.jpg","status":"success"}
    let dogList = reactive([
        'https:\\/\\/images.dog.ceo\\/breeds\\/pembroke\\/n02113023_7292.jpg'
    ])

    async function getDogs() {
        try {
            await axios.get('https://dog.ceo/api/breed/pembroke/images/random').then(res => {
                console.log(res.data.message);
                dogList.push(res.data.message);
            })
        } catch (err) {
            console.log(err)
            alert(err)
        }
    }

    return {dogList, getDogs};
}

