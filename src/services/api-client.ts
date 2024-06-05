import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '36af846284e740878e68656cfe73c426'
    }
})

// const url = 'https://api.rawg.io/api/games?key'