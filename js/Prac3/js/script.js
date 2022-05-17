
let task1 = document.querySelector('#task1');
let result1 = document.querySelector('#result1');
let summ1 = 0;

let task2 = document.querySelector('#task2');
let result2 = document.querySelector('#result2');

let task3 = document.querySelector('#task3');
let result3 = document.querySelector('#result3');

let task4 = document.querySelector('#task4');
let result4 = document.querySelector('#result4');

let task5 = document.querySelector('#task5');
let result5 = document.querySelector('#result5');

let task6 = document.querySelector('#task6');
let result6 = document.querySelector('#result6');

let task7 = document.querySelector('#task7');
let result7 = document.querySelector('#result7');

let task8 = document.querySelector('#task8');
let result8 = document.querySelector('#result8');

let task9 = document.querySelector('#task9');
let result9 = document.querySelector('#result9');

function sumArray(arr){
	arr.forEach(function(num){
		summ1 = summ1 + num;
	});
}

function getSubZero(temps) {
	let uTemps = temps.filter(function(temp){
		return temp > 0;
	});
	return uTemps;
}

function getPonies(ponies, pon) {
	let poni = ponies.filter(function(p){
		return p == pon;
	});
	return poni;
}

function sTxIncluded(bks, tx) {
	let tr = bks.includes(tx);
	return tr;
}

function getSizes(words){
	let l = words.map(function(word){
		return word.length
	});
	return l;
}

function getWithSpaces(str){
	let sum = 0;
	str.forEach(function(s){sum = sum + s.length})
	let ar = [str.join(" "), sum];
	return ar;
}

function getEpisodes(anime){
	return `Аниме ${anime.title} включает ${anime.episodes} серий`;
}

const triple = (num) => {return parseInt(num)*3}

const getAvgGlucose = (gluc) => {
	let aver = 0;
	gluc.forEach(gl =>{
		aver = aver + gl;
	});
	return aver / gluc.length;
}

task1.onclick = function(){
	sumArray([4, 6, 16, 73, 5]);
	result1.innerHTML = "Ваш результат: " + summ1;
}

task2.onclick = function(){
	result2.innerHTML = "Ваш результат: " + getSubZero([1, -3, -2, 4, 10]);
}

task3.addEventListener("input", () => {
	result3.innerHTML = "Ваш результат: " + getPonies(["TwilightSparkle", "RainbowDash", "AppleJack", "Rarity", "Pinkie Pie", "Fluttershy"], task3.value);
})

task4.addEventListener("input", () => {
	result4.innerHTML = "Ваш результат: " + sTxIncluded(["0xaea0", "0x8f80", "0xf3ad", "0x17ec"], task4.value);
})

task5.onclick = function(){
	result5.innerHTML = "Ваш результат: " + getSizes(["Moscow", "Coding", "School"]);
}

task6.onclick = function(){
	result6.innerHTML = "Ваш результат: " + getWithSpaces(["Moscow", "never", "sleep"]);
}

task7.onclick = function(){
	result7.innerHTML = "Ваш результат: " + getEpisodes({title: "Code Geass", episodes: 25});
}

task8.addEventListener("input", () => {
	result8.innerHTML = "Ваш результат: " + triple(task8.value);
})

task9.onclick = function(){
	result9.innerHTML = "Ваш результат: " + getAvgGlucose([5.4, 8.1, 6.3, 4.9]);
}