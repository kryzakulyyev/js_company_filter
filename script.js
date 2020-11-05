const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

//Step 1
//for(company in companies){
// console.log(companies[company])}

//Step 2
//companies.forEach(item=>console.log(item.name,))
// companies.push({name:"Company Ten", category: "Software", start: 2020, end:"--"})
//for(company in companies){
// console.log(companies[company])}


//Step 3
let return1=companies.filter(element => element.category==="Retail");

let return2=companies.filter(element => element.start<=1989);

let return3=companies.filter(element => (element.end-element.start)>=10 );

// console.log(return1)
// console.log(return2)
// console.log(return3)


//Step 4
let result1=companies.map(item=>item.name)

let result2=companies.map(item=>[item.name, item.start, item.end])

//console.log(result1)
//console.log(result2)

//Step5
let sortYears=companies.sort((a, b)=> a.start-b.start)

// console.log(sortYears)

//Step6
let reduce1 = companies.reduce((sum, item) => sum + (item.end - item.start), 0);
console.log(reduce1);