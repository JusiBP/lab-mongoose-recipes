const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })

  //Mi receta:
  .then(() => {
    console.log(`Ceii`);
    return Recipe.create({
      // TODO: write the schema
    title: "Elixir de la vida eterna",
    level: "UltraPro Chef",
    ingredients: ["cola de raton", "ancas de rana", "ojete de dragon", "mucosa de trol", "cuerno de unicornio", "pis de paloma común", "corazón de infante humano"],
    cuisine: "Arcana",
    dishType: "other",
    image: "https://cdn.domestika.org/c_fit,dpr_auto,f_auto,t_base_params,w_820/v1590074334/content-items/004/642/771/1_behance-original.jpg?1590074334",
    duration: 100000000,
    creator: "Belcebu",
    created: 06/06/666
    })
  })

  .then(resultat => {
    console.log("Recipe: ", resultat.title);
  })

  .then(() => {
    return Recipe.insertMany(data)
  })
  .then(resultat => {
    resultat.forEach((recipe)=>{
      console.log("Recipe: ", recipe.title)
    })
  })

  .then(() => {
    return Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"},{duration:100})
  })
  .then(resultat2 => {
    console.log("resultat2: PERFECTO, TODO SIGUE IGUAL! MIRA MIRA...", resultat2.duration)
  })

  .then(() => {
    return Recipe.deleteOne({title: "Carrot Cake"})
  })
  .then(resultat3 => {
    console.log(resultat3)
    console.log("Borrado!")
    return true
  })

  .then(clossing => {
    if (clossing){
      mongoose.connection.close(()=>{
        console.log("close!");
      })
    }
  })


  .catch(error => {
    console.error('Error connecting to the database', error);
  });


  





