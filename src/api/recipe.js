import axios from 'axios';


export default axios.create({
    baseURL: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes',
    headers: {
        "content-type":"application/x-www-form-urlencoded",
        "x-rapidapi-key":"f4756b8409msh762478a357cd070p10685fjsnce9080fa5478",
        "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    }
});
