function countdown(yr, m, d){
	var currDt = new Date();
	var tgtDt = new Date(yr, m-1, d, 8);
	var daysTo, hrsTo, minsTo, secsTo = 0;
	var theTstring = "";

	//Find the seconds till he can work
	secsTo = (tgtDt.valueOf() - currDt.valueOf())/1000;

	//If its past the time he can start working...
	if (secsTo <= 0){
		document.write("He can start working now!<br/>");
		return;}

	//Convert the seconds to days and seconds
	daysTo = Math.floor(secsTo / (60*60*24));
	secsTo -= daysTo*24*60*60;

	//Convert remaining seconds to hours and seconds
	hrsTo = Math.floor(secsTo / (60*60));
	secsTo -= hrsTo*60*60;

	//Convert remaining seconds to minutes and seconds
	minsTo = Math.floor(secsTo / 60);
	secsTo = Math.floor(secsTo-(minsTo*60));

	theTstring += (daysTo + " Days, ");
	theTstring += (hrsTo + " Hours, ");
	theTstring += (minsTo + " Minutes, ");
	theTstring += (secsTo + " Seconds.");

	document.getElementById("theTimerPara").innerHTML=theTstring;

	return;}

setInterval(function(){countdown(2013,08,15)},1000);