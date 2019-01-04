import React from 'react';
import Chart from 'chart.js';

export default function Macronutrients({ user }) {

  let dailyProteinIntake = 0;
  user.meals.forEach(meal => dailyProteinIntake = meal.totalProteins + dailyProteinIntake);

  let dailyFatIntake = 0;
  user.meals.forEach(meal => dailyFatIntake = meal.totalFats + dailyFatIntake);

  let dailyCarbIntake = 0;
  user.meals.forEach(meal => dailyCarbIntake = meal.totalCarbs + dailyCarbIntake);

  const macroData = [];
  macroData.push(dailyProteinIntake, dailyFatIntake, dailyCarbIntake);
  const proteinData = [];
  proteinData.push(dailyProteinIntake);
  const fatData = [];
  fatData.push(dailyFatIntake);
  const carbData = [];
  carbData.push(dailyCarbIntake);

  const canvas = document.getElementbyId('macro-chart');
  const ctx = canvas.getContext('2d');

  const chartData = {
    labels: [
      'Protein',
      'Carbohydrate',
      'Fat'
    ],
    datasets: [
      {
        fill: true,
        backgroundColor: [
          'red',
          'yellow',
          'blue'
        ],
        data: macroData,
        borderColor: ['white','white','white'],
        borderWidth: [2,2,2]
      }
    ]
  };

  const macroPieChart = new Chart(ctx, {
    type: 'pie',
    data: chartData
  });


  return(
    <div>
      <div className="todays-stats">
        <div className="macro-chart">
          {macroPieChart}
          <p className="stat-key">Protein: <span className="stat-val">{dailyProteinIntake.toFixed(1)}</span><span className="stat-unit">g</span></p>
          <p className="stat-key">Fat: <span className="stat-val">{dailyFatIntake.toFixed(1)}</span><span className="stat-unit">g</span></p>
          <p className="stat-key">Carbs: <span className="stat-val">{dailyCarbIntake.toFixed(1)}</span><span className="stat-unit">g</span></p>
        </div>
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
