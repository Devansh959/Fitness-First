const fetch= require('node-fetch');
const fetchData= require('../../../config/fetchRecipes.js');
function recipeController(){
    return {
        recipe(req,res){
            res.render('customers/recipes')
        },
        async search(req,res){
            const search= req.body.val;
            console.log(search);
            const data= await fetch(`www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`);
            console.log(data);
            // const searchedData= data.filter(
            //     (recipe)=> recipe.name.includes(search)
            //     || recipe.tags.includes(search)
            //     || recipe.ingredients.includes(search)
                
            // )
            // console.log(searchedData)
            
            

        }
    }
}

module.exports = recipeController