const mongoose = require('mongoose');

const mealSchema = mongoose.Schema({
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  date: Date,
  servings: [{
    food: {type: mongoose.Schema.ObjectId, ref: 'Food'},
    quantity: Number
  }],
  name: {
    type: String, enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack']
  }
});

mealSchema.pre('find', function() {
  this.populate('servings.food');
});

//find total amount of calories, per user, ever.

//we can route to a specific users meals (ie, user/:id/meals)
//we can route to a specific users day (ie, user/:id/meals/:year/:month/:day)

//post to /user/:id/meals/2018/12/6

//
mealSchema.virtual('totalCalories')
  .get(function() {
    console.log('this is totalCalories', this);
    return this.servings.reduce((total, serving) =>
      total + (serving.food.kCalsPer100g * serving.quantity), 0);
  });

mealSchema.virtual('totalProteins')
  .get(function() {
    console.log('this is totalProteins', this);
    return this.servings.reduce((total, serving) =>
      total + (serving.food.proteinPer100g * serving.quantity), 0);
  });

mealSchema.virtual('totalCarbs')
  .get(function() {
    console.log('this is totalCarbs', this);
    return this.servings.reduce((total, serving) =>
      total + (serving.food.carbsPer100g * serving.quantity), 0);
  });

mealSchema.virtual('totalFats')
  .get(function() {
    console.log('this is totalFats', this);
    return this.servings.reduce((total, serving) =>
      total + (serving.food.fatPer100g * serving.quantity), 0);
  });


mealSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Meal', mealSchema);
