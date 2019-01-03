import React from 'react';

export default function Macronutrients({ user }) {

  return(
    <div>
      <div className="todays-stats">
        {user.meal.servings.totalProteins.reduce((total, proteins) =>
          <div key={user._id}>
            <p className="title"><i className="fas fa-fire cal-burn"></i>{total + proteins}<span className="stat-unit">g</span></p>
          </div>
        ), 0}
      </div>
    </div>
  );
}



/* //at the top of the page have a div tat returns todays Date
//the back button takes away one day to todays date
//the forward button adds one day

//the contentes of this div is used as the argument for the requested day function ie:
// year - month - day

// //so on each pagem we use the printed date at the top to feed into the function that tells us whic meals been eaten
// function CalsInCalsOut user
//   return(
//     //let an array of meals
//     let requestedDay = ;
//     //get Date
//     codecodecode
//
//
//   // in the constructor for userShow, on the state we can return todays date so that he page knows what the date is
//   // on componentdidmount and tell it to return the meals on that date.
//
//
//     //push meals on this date into array
//     .filter
//   )
// } */
