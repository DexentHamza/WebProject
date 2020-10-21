const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_Name = document.getElementById('city_Name');
const temp_val = document.getElementById('temp_val');
const temp_status = document.getElementById('temp_status');
const data_hide = document.querySelector('.middel_layer');

const getdetails = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    // alert("hii");
    if(cityVal === ""){
        city_Name.innerText = `Plz Write the name before search`;
        document.getElementById('city_Name').style.color = 'pink';
        data_hide.classList.add('data_hide')
    }
    else{
        try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=2d71464ffa315e50fdb02f8097b7d2bd`;
        const response = await fetch(url);
        const ObjData = await response.json();
        const arrData = [ObjData];
        // console.log(arrData);

        temperature = arrData[0].main.temp - 273;
        rouned = parseFloat(temperature.toFixed(2));
        //alert(rouned);
        temp_val.innerText = rouned;


        //temp_val.innerText = arrData[0].main.temp;
        city_Name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            console.log("Hello");
        const tempMood = arrData[0].weather[0].main;

        // condition to check suuny and cloud
        if(tempMood == "clear"){
            temp_status.innerHTML = '<i class="fas fa-sun" style="color: #eccc68;"></i>';
            } 
            else if(tempMood == "cloud"){
            temp_status.innerHTML = '<i class="fas fa-cloud" style="color: #f1f2f6;"></i>';
            } 
            else if(tempMood == "rain"){
            temp_status.innerHTML = '<i class="fas fa-rain" style="color: #a4b0be;"></i>';
            } 
            else {
            temp_status.innerHTML = '<i class="fas fa-sun" style="color: #eccc68;"></i>';
            }
            data_hide.classList.remove('data_hide');
}
        catch{
            city_Name.innerText = `Plz enter the name properly`;
            data_hide.classList.add('data_hide');
        }
    }
    
}

submitBtn.addEventListener('click', getdetails);