

let date = document.getElementById("date");
let days = document.getElementById("day");
let hours = document.getElementById("hours");
let minutes = document.getElementById("mins");
let leftsec = document.getElementById("sec")

let today;
let nextbirthday;


function calnextBirthday() {
  
  let input = date.value
  // console.log(input);


  if (input === "") {
    days.innerHTML = "Please enter a valid date";
    hours.innerHTML = "";
    minutes.innerHTML = "";
    return;
  }
  
  today = new Date();
  let birthdate = new Date(input);
  nextbirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate())

  
  if(nextbirthday < today){
    nextbirthday.setFullYear(today.getFullYear() + 1)
  }
  // console.log("Next birthday:", nextbirthday);  // Debug log
// 
  update()
  
}
  function update(){
    if(!nextbirthday){
      return
    }

today = new Date()
let difference = nextbirthday.getTime() - today.getTime();
let leftDays = Math.ceil(difference / (1000 * 3600 * 24));
let leftHours = Math.ceil(difference / (1000 * 3600));
let leftmins = Math.ceil(difference / (1000 * 60));
let leftsec = Math.ceil(difference / 1000)

// console.log(leftDays);


days.innerHTML = "Your next birthday is in " + leftDays + " days";
hours.innerHTML = "And in " + leftHours + " hours";
minutes.innerHTML = "And in " + leftmins + " minutes";
sec.innerHTML = "And in " + leftsec + "seconds"
}


  document.querySelector("form").addEventListener("submit" , (event) =>{
    event.preventDefault()
    calnextBirthday()
  })

  // date.addEventListener("change", calnextBirthday)


setInterval(update, 1000)

