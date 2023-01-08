console.log("Hello");

console.log("******Task1******");
let biography = { name: "Saim Saleem", age: 21, address:"Islamabad", degree:"SE" }

console.log(biography.name);
console.log(biography.age);
console.log(biography.address);
console.log(biography.degree);

function task2(num1){
	let temp;
	let isPrime = true;

for(var i=2;i<=num1/2;i++)
	{
           temp=num1%i;
	   if(temp==0)
	   {
	      isPrime=false;
	      break;
	   }
	}

	if(isPrime){
	   console.log(num1 + " is a Prime Number");
	   do{
	   	
	   	num1++;
	   for(var i=2;i<=num1/2;i++)
	{

           temp=num1%i;
	   if(temp==0)
	   {
	      isPrime=false;
	      break;
	   }
	}
	if (isPrime) {
		console.log("The next prime number is: " + num1);
		break;
	}

}while(isPrime=true);
		
	}
	else
	   console.log(num1 + " is not a Prime Number");
}


console.log("******Task2******");
task2(13);


function task3(numbers) {
    
    let firstpart = ""
    let secondpart = ""
    let thirdpart = ""
    for (var i = 0; i < numbers.length; i++) {
        if (i < 3) {
            firstpart += numbers[i].toString()
        } else if (i >= 3 && i < 6) {
            secondpart += numbers[i].toString()
        } else if (i >= 6) {
            thirdpart += numbers[i].toString()
        }
    }
    console.log("("+firstpart+")"+secondpart+"-"+thirdpart);
   
}
let numbers = [0,3,2,1,5,6,8];

console.log("******Task3******");
task3(numbers);


console.log("******Task4******");
function task4(arrnumbers){

	for(let i=0; i<arrnumbers.length;i++){
		let num1 = arrnumbers[i];
    console.log(Math.round(num1));
}
}
let arrnumbers = [3.1, 5.6, 2.7, 4.4]; 
task4(arrnumbers);

console.log("******Task5******");
function task5(arrnumbers){

	for(let i=0; i<arrnumbers.length;i++){
		let num1 = arrnumbers[i];
    console.log("abs: " + Math.abs(num1));
    console.log("ceil: " + Math.ceil(num1));
    console.log("floor: " + Math.floor(num1));
    console.log();
}
}
task5(arrnumbers);


console.log("******Task7******");
let task7 = (arrnumbers)=>{
	for(let i=0; i<arrnumbers.length;i++){
		let num1 = arrnumbers[i];
    console.log(Math.round(num1));
}
}
task7(arrnumbers);


console.log("******Task8******");
let task8 = (arrnumbers)=>{

	for(let i=0; i<arrnumbers.length;i++){
		let num1 = arrnumbers[i];
    console.log("abs: " + Math.abs(num1));
    console.log("ceil: " + Math.ceil(num1));
    console.log("floor: " + Math.floor(num1));
    console.log();
}
}
task8(arrnumbers);


function task9(arr){

  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i]
    let j
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentValue
  }
  return arr
}
console.log(task9([2, 1, 3, 7, 5]));