const fetch= require('node-fetch');
const recipeOptions={
    method: 'GET',
    url: 'https://low-carb-recipes.p.rapidapi.com/search',
    params: {
      name: 'cake',
      tags: 'keto;dairy-free',
      includeIngredients: 'egg;butter',
      excludeIngredients: 'cinnamon',
      maxPrepareTime: '10',
      maxCookTime: '20',
      maxCalories: '500',
      maxNetCarbs: '5',
      maxSugar: '3',
      maxAddedSugar: '0',
      limit: '10'
    },
    headers: {
      'X-RapidAPI-Key': 'e66d38d1a5msh2a76f924705fe52p1bc6c0jsn41b7ff5aefcf',
      'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
    }
  }
const fetchData= async(url)=>{
    const response= await fetch(url,recipeOptions);
    const data= await response.json();
    
    return data;
}
module.exports= fetchData;