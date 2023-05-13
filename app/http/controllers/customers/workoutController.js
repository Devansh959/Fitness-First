const fetchData= require('../../../config/fetchData.js');
function workoutController(){
    return {
        excercise(req,res){
            res.render('customers/workout')
        },
        async search(req,res){
            const search= req.body.val;
            console.log(search);
            const data= await fetchData('https://exercisedb.p.rapidapi.com/exercises');
            
            const searchedData= data.filter(
                (excercise)=> excercise.name.toLowerCase().includes(search)
                || excercise.target.toLowerCase().includes(search)
                || excercise.equipment.toLowerCase().includes(search)
                || excercise.bodyPart.toLowerCase().includes(search)
            )
            console.log(searchedData)
            res.render('customers/searchResult',{
                excercises: searchedData,
                search: search
            })
            

        }
    }
}

module.exports = workoutController