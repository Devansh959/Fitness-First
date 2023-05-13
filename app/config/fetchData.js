const fetch= require('node-fetch');
const excerciseOptions={
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': 'e66d38d1a5msh2a76f924705fe52p1bc6c0jsn41b7ff5aefcf',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }

}
const fetchData= async(url)=>{
    const response= await fetch(url,excerciseOptions);
    const data= await response.json();
    
    return data;
}
module.exports= fetchData;