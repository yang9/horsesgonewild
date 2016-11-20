// JavaScript File
/*switch code for training regimen*/

function checkSchedule() {
  var text;
  var instructors = document.getElementById("selectInstructor").value;

  switch(instructors) {
    
    case "1":
      text = "Leisure work out, grooming and rest";
      break;
      
    case "2":
      text = "Stength & interval training, grooming";
      break;
      
    case "3":
      text = "Multiple pattern & Response training";
      break;
      
    case "4":
      text = "Pacing, grooming, show preperation";
      break;
      
    case "5":
      text = "Leisure, pattern, pacing, grooming";
      break;
      
      case "6":
      text = "Leisure, pattern training, rest";
      break;
   
    default:
      text = "Please type again";
  }
  document.getElementById("weekly-schedule").innerHTML = text;
}