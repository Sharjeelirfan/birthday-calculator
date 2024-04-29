let date = document.getElementById("date");
let days = document.getElementById("day");
let hours = document.getElementById("hours");
let minutes = document.getElementById("mins");

function calnextBirthday() {
  
  if (date.value === "") {
    days.innerHTML = "Please enter a valid date";
    hours.innerHTML = "";
    minutes.innerHTML = "";
    return; 
  
  let today = new Date();
  let birthdate = new Date(date.value);
  let nextbirthday;

  if (
    birthdate.getMonth() < today.getMonth() ||
    (birthdate.getMonth() === today.getMonth() &&
      birthdate.getDate() < today.getDate())
  ) {
    nextbirthday = new Date(
      today.getFullYear() + 1,
      birthdate.getMonth(),
      birthdate.getDate()
    );
  } else {
    nextbirthday = new Date(
      today.getFullYear(),
      birthdate.getMonth(),
      birthdate.getDate()
    );
  }

  let difference = nextbirthday.getTime() - today.getTime();
  let leftDays = Math.ceil(difference / (1000 * 3600 * 24));
  let leftHours = Math.ceil(difference / (1000 * 3600));
  let leftmins = Math.ceil(difference / (1000 * 60));

  // console.log(leftDays);

  days.innerHTML = "Your next birthday is in " + leftDays + " days";
  hours.innerHTML = "And in " + leftHours + " hours";
  minutes.innerHTML = "And in " + leftmins + " minutes";
}
