import CSV from './utilities/csv.js';
import Activity from './classes/activity.js';
import ReportGenerator from './classes/report-generator.js';

window.csvConverter = new CSV();
  //
  document.getElementById('input').addEventListener('change', (e) => {
    const file = document.getElementById('input').files[0];
    if (file) {
      processFile(file);
    }
  });

async function processFile(file){
  window.arrayOfObjects =  await csvConverter.fromFile(file);
  document.querySelector("#status").textContent = `Your array is built. Open console, and type arrayOfObjects to view it!`;
}
