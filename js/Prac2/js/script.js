
let task1 = document.querySelector('#task1');
let result1 = document.querySelector('#result1');

let task2 = document.querySelector('#task2');
let task2Dividend = document.querySelector('#task2Dividend');
let task2Divider = document.querySelector('#task2Divider');
let result2 = document.querySelector('#result2');

let task3 = document.querySelector('#task3');
let result3 = document.querySelector('#result3');

let task4 = document.querySelector('#task4');
let result4 = document.querySelector('#result4');

let task5 = document.querySelector('#task5');
let result5 = document.querySelector('#result5');

function getAge(age) {

	return parseInt(age) + 1;
}

function getRemainder(dividend, divider) {

	if(dividend.length > 0 && divider.length > 0){
		return parseInt(dividend) % parseInt(divider);
	}else{
		return 0;
	}
}

function faceControl(age) {

	let year = parseInt(age);
	if(year >= 18){
		return "Welcome";
	}else{
		return "Отказ";
	}
}

function getNextAge(age) {

	if(age.length > 0){
		return parseInt(age) + 1;
	}else{
		return 0;
	}
}

function canRide(height){
	let h = parseInt(height);
	return h >= 140;
}

task1.addEventListener("input", () => {
	result1.innerHTML = "Ваш результат: " + getAge(task1.value);
})

task2.onclick = function(){
	result2.innerHTML = "Ваш результат: " + getRemainder(task2Dividend.value, task2Divider.value);
}

task3.addEventListener("input", () => {
	result3.innerHTML = "Ваш результат: " + faceControl(task3.value);
})

task4.addEventListener("input", () => {
	result4.innerHTML = "Ваш результат: " + getNextAge(task4.value);
})

task5.addEventListener("input", () => {
	result5.innerHTML = "Ваш результат: " + canRide(task5.value);
})
