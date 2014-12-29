var weekdayArray = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");

function getWeekday (date) {
	// var weekdayArray = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");

	return weekdayArray[date.getDay()];
}

function setElementByDateWeekday(date, elementId){
	var element = document.getElementById(elementId);
	element.innerHTML = getWeekday(date);
}