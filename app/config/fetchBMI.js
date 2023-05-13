const fetch = require('node-fetch');

const url = 'https://fitness-calculator.p.rapidapi.com/bmi?age=22&weight=76&height=175';
const BMIoptions = {
  method: 'GET',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': 'e66d38d1a5msh2a76f924705fe52p1bc6c0jsn41b7ff5aefcf',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};

const fetchData= async(a,w,h)=>{
    console.log("hi");
    const response= await fetch(`https://fitness-calculator.p.rapidapi.com/bmi?age=${a}&weight=${w}&height=${h}`,BMIoptions);
    const data= await response.json();
    console.log(data);
    
    return data;
}
module.exports= fetchData;