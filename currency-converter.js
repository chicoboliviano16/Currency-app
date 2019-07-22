const axios = require('axios');
//const fetch = require('node-fetch')

const baseURL = []

const getExhangeRate = async (fromCurrency, toCurrency) => {
   const newarr = []
    const response = await axios.get(`http://www.apilayer.net/api/live?access_key=58391366c189f7a64da61018294736f1&format=1`);
            const rates = response.data.quotes;
            const euro = 1 / rates[fromCurrency];
            const exchangeRate = euro * rates[toCurrency];
        if(isNaN(exchangeRate)){
                throw new Error (`Unable to get ${fromCurrency} and ${toCurrency}`)
        } 

            return exchangeRate 
    
}

// getExhangeRate('USDUSD', 'USDEUR');

//second function

const getCountries = async (toCurrency) =>{
        try{
                const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${toCurrency}`)
                //for testing
                 // response.data.map(country => console.log(country.name))
                 return response.data.map(country => (country.name))

        }catch(error){
                throw new Error(`Unable to get countries that use ${toCurrency}`)
        }



       
}
// getCountries('EUR')

//third function

const convertCurrency = async (fromCurrency, toCurrency, amount) =>{
        const countries = await getCountries(toCurrency)
        const exchangeRate = await getExhangeRate(`USD${fromCurrency}`, `USD${toCurrency}`)
        const convertedAmount = (amount * exchangeRate).toFixed(2)
        return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spend these in the following countries: ${countries}`  
}
        //call convert currency to convert all the data
convertCurrency('USD', 'EUR', 50)
.then((message) =>{
        console.log(message);
}).catch((error)=>{
        console.log(error.message)
})


// &from=${fromCurrency}&to=${toCurrency}&amount=10