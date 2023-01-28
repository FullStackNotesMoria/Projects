const option = Array.from(document.querySelectorAll("option"))
//console.log(option);
const select = document.querySelector(".form-select")
const go = document.querySelector("#go")
//console.log(select.value);

const getResult = (cityName) =>{
    let query = `${URL}weather?q=${cityName}&appid=${apiKey}&units=metric&lang=tr`
    console.log(query);
}
go.addEventListener("click", (e)=>{
    if(select.value){
        getWeather();
    }
})


const getWeather = async () =>{
    const URL = "https://api.openweathermap.org/data/2.5/"
    const apiKey= "7b9b390baa88161879be04f030424915"
    const cityName = option[select.value].innerText;
    let getURL = `${URL}weather?q=${cityName}&appid=${apiKey}&units=metric&lang=tr`

    try{
        const res = await fetch(getURL);
        //console.log(res);
        if(!res.ok){
            throw new Error("Something went wrong")
        }
        const data = await res.json()
        console.log(data);
        // hava durumu aciklama
        console.log(data.weather[0].description);
        // nem
        console.log(data.main.humidity);
        // suanda sicaklik
        console.log(data.main.temp);
        // mın sicaklik
        console.log(data.main.temp_min);
        //max sicaklik
        console.log(data.main.temp_max);

    }catch(error){
        console.log(error);
    }
}