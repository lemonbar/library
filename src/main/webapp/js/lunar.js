//天干数组
var tgArray = new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸");
//地支数组
var dzArray = new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥");
//属相数组
var sxArray = new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
//单位数组
var unitArray = new Array("年","月","日","时");

function getLunarYear (year) {
	if(year == null){
		return;
	}
	var tg = getTG(year);
	var dz = getDZ(year);
	var sx = getSX(year);
	var unit = unitArray[0];
	return tg + dz + sx + unit;
}

function getTG(year){
	var tgIndex = (year-3)%tgArray.length-1;
	if(tgIndex < 0){
		tgIndex += tgArray.length;
	}
	return tgArray[tgIndex];
}

function getDZ (year) {
	var dzIndex = (year-3)%dzArray.length-1;
	if(dzIndex < 0){
		dzIndex += dzArray.length;
	}
	return dzArray[dzIndex];
}

function getSX(year){
	var sxIndex = (year-3)%sxArray.length -1;
	sxIndex = sxIndex < 0? sxIndex+sxArray.length:sxIndex;
	return sxArray[sxIndex];
}