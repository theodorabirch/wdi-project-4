import React from 'react';

export default function CalsIn({ user }) {
  let dailyCalorieIntake = 0;
  user.meals.forEach(meal => dailyCalorieIntake = meal.totalCalories + dailyCalorieIntake);
  return(
    <div>
      <div className="todays-stats">
        <div>
          <p className="title"><i className="fas fa-fire cal-burn"></i>{dailyCalorieIntake}<span className="stat-unit">kCals</span></p>
        </div>
      </div>
    </div>

  );
}





//at the top of the page have a div that returns todays Date
//the back button takes away one day to todays date
//the forward button adds one day

//the contents of this div is used as the argument for the requested day function ie:
// year - month - day

// so on each pagem we use the printed date at the top to feed into the function that tells us which meals have been eaten
// function CalsInCalsOut user
//   return(
//     //let an array of meals
//     let requestedDay = ;
//     //get Date
//     codecodecode
//
//
//   in the constructor for userShow, on the state we can return todays date so that the page knows what the date is
//   on componentdidmount and tell it to return the meals on that date.
//
