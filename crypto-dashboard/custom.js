
const cardContainer = document.querySelector('#card-container')


const baseUrl = 'https://api.coingecko.com/api/v3/coins/maarkets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'



const getResult = fetch(baseUrl)
 .then( res => res.json() )
 .then( res => { 
    data = res

    for(let i =0 ; i < data.length; i++){
        cardContainer.innerHTML += `
                <div class="card">
                    <img class="card-image" src=${data[i].image} alt="Currency logo">
                    <div class="card-content">
                        <span class="symbol">${data[i].symbol}</span>
                        <h3 class="card-title">${data[i].name}</h3>
                        <div class="price-info">
                        <span class="price">₹ <span class="price-value">${data[i].current_price}</span></span>
                        <span class="price-change"><span class="change-value"> <b>${data[i].price_change_percentage_24h}</b></span>
                        </div>
                    </div>
                </div>
     `
    }
 })
 .catch( error => {
    console.error(error )
 })



 setTimeout( ()=> {
    const priceChange = [... document.querySelectorAll('.change-value b')]
     
     priceChange.map((item) => {
     const resVal = item.innerHTML;
     if( resVal < 0){
         item.classList.add('red')
     }else{
         item.classList.add('green')
     }
     })
 }, 1000)



