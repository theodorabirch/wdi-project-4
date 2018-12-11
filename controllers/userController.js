const User = require('../models/user');

function userShowRoute(req, res, next) {
  User.findById(req.params.id)
    .populate('meals')
    .then(user => User.populate(user, 'meals.servings.food'))
    .then(user => res.json(user))
    .catch(next);
}

function userUpdateRoute(req,res,next) {
  User.findById(req.params.id)
    .then(user => user.set(req.body))
    .then(user => user.save())
    .then(user => res.json(user))
    .catch(next);
}

module.exports = {
  show: userShowRoute,
  update: userUpdateRoute
};
