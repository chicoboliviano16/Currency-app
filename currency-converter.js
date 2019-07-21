const axios = require('axios');
//const fetch = require('node-fetch')

const baseURL = []
const getExhangeRate = async (fromCurrency, toCurrency) => {
   const newarr = []
    const response = await axios.get(`http://www.apilayer.net/api/live?access_key=58391366c189f7a64da61018294736f1&format=1`);
            const rates = response.data.quotes;
            const euro = 1 / rate[fromCurrency];
            const exchangeRate = euro * rate[toCurrency];
            console.log(res);  
    
}

getExhangeRate();

// &from=${fromCurrency}&to=${toCurrency}&amount=10