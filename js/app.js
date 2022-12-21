const navbar = document.querySelector('nav');
window.addEventListener('scroll', function (){
  navbar.classList.toggle('sticky', window.scrollY > 100)
});

//Get all element Ids
const todayBtn = document.querySelector("#today-btn");
const dayEl = document.getElementById("day");
const monthEl = document.getElementById("month");
const dateEl = document.getElementById("date");
const yearEl = document.getElementById("year");
const timeEl = document.getElementById("time");
const fullDtm = document.getElementById("fullDTM");

// --------------------------------------------------------------
// get toggle button element
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => {
  //toggle the sun theme to moon theme on click
  toggleBtn.classList.toggle("fa-sun");

  // if the button contains sun
  if (toggleBtn.classList.contains("fa-moon")) {
    // the dark theme styling will be called and applied
    document.body.classList.toggle("dark");
  } else {
    // change theme will be removed
    document.body.classList.remove(".dark");
  }
});
//-----------------------------------------------------------------
//add event listener to button to populate todays date elements
todayBtn.addEventListener("click", function () {
  //Getting day of week
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let days = dayOfWeek[d.getDay()];

  document.getElementById("day").innerHTML = days;
  // console.log(days);

  //Getting month
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //New month
  const m = new Date();
  let month = months[m.getMonth()];
  document.getElementById("month").innerHTML = month;
  // console.log(month);

  //Get Date
  const dd = new Date();
  let todaysDate = dd.getDate();
  document.getElementById("date").innerHTML = todaysDate;
  // console.log(todaysDate);

  //Get Year
  const y = new Date();
  let year = y.getFullYear();
  document.getElementById("year").innerHTML = year;
  // console.log(year);
  Time();

  // Get time
  function Time() {
    const today = new Date();
    let h = today.getHours() % 12 || 12;
    let ampm = h <= 12 ? "p.m." : "a.m.";
    let mm = String(today.getMinutes()).padStart(2, "0");

    document.getElementById("time").innerHTML = `${h}:${mm} ${ampm}`;

    const fullTime = (document.getElementById(
      "fullDTM"
    ).innerHTML = `${days}, ${month} ${todaysDate}, ${year}, ${h}:${mm} ${ampm}`);
    // console.log(fullTime);
  }
});

// Create employees object array
const employees = [
  {
    id: 1,
    name: "John Park",
    age: 35,
    position: "developer",
    salary: 500000,
  },
  {
    id: 2,
    name: "Jake Summer",
    age: 25,
    position: "designer",
    salary: 38000,
  },
  {
    id: 3,
    name: "Sarah Banks",
    age: 45,
    position: "boss",
    salary: 800000,
  },
  {
    id: 4,
    name: "Patty Parker",
    age: 30,
    position: "developer",
    salary: 100000,
  },
  {
    id: 5,
    name: "Monica Salle",
    age: 25,
    position: "designer",
    salary: 80000,
  },
  {
    id: 6,
    name: "Jesse Marks",
    age: 47,
    position: "designer",
    salary: 90000,
  },
  {
    id: 7,
    name: "Erica Black",
    age: 50,
    position: "boss",
    salary: 900000,
  },
  {
    id: 8,
    name: "Cindy Vu",
    age: 30,
    position: "developer",
    salary: 80000,
  },
  {
    id: 9,
    name: "Paul Caleb",
    age: 38,
    position: "developer",
    salary: 100000,
  },
  {
    id: 10,
    name: "Blake Blair",
    age: 25,
    position: "designer",
    salary: 75000,
  },
];
const empList = document.getElementById("empSal");
const empList2 = document.getElementById("empSal2");
const empList3 = document.getElementById("empSal3");
const empList4 = document.getElementById("empSal4");

// First task
const personnel = employees.filter((person) =>
  person.position === "developer" ? person : 0
);
const names = [];

for (i = 0; i < personnel.length; i++) {
  names.push(personnel[i].name, personnel[i].age, personnel[i].position);
}
empList.innerText = `1. These are the employees:\n ${names.join(",  ")} `;

//Second task
const personnel2 = employees.filter((person) =>
  person.salary > 500000 ? person : 0
);
const names2 = [];

for (i = 0; i < personnel2.length; i++) {
  names2.push(
    personnel2[i].name,
    personnel2[i].age,
    personnel2[i].position,
    personnel2[i].salary
  );
}
empList2.innerText = `2. These are the employees:\n ${names2.join(",  ")} `;
console.log(names2);

// Third task
const personnel3 = employees.filter((person) =>
  person.age <= 25 ? person : 0
);
const names3 = [];

for (i = 0; i < personnel3.length; i++) {
  names3.push(personnel3[i].name, personnel3[i].age, personnel3[i].position);
}
console.log(names3);
empList3.innerHTML = `3. These are the employees: <br> ${names3.join(", ")}`;

// Fourth task
const personnel4 = employees.filter((person) =>
  (person.age >= 30 && person.position === "developer") ||
  person.position === "designer"
    ? person
    : 0
);

const names4 = [];

for (i = 0; i < personnel4.length; i++) {
  names4.push(personnel4[i].name, personnel4[i].age, personnel4[i].position);
}

console.log(names4);
empList4.innerHTML = `4. These are the employees: <br> ${names4.join(", ")}`;
