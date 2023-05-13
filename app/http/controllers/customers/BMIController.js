const fetch= require('node-fetch');
const fetchData= require('../../../config/fetchBMI');
function BMIController(){
    return {
        bmi(req,res){
            res.render('customers/bmi')
        },
        async search(req,res){
            
            const age= req.body.age;
            const weight= req.body.weight;
            const height= req.body.height;
            
            const data= await fetchData(age,weight,height)
            res.render('customers/bmiResult',{
                bmi: data.data,
            });
            
            
            // const searchedData= data.filter(
            //     (recipe)=> recipe.name.includes(search)
            //     || recipe.tags.includes(search)
            //     || recipe.ingredients.includes(search)
                
            // )
            // console.log(searchedData)
            
            

        }
    }
}

module.exports = BMIController