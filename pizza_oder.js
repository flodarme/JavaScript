
//calculate the overall cost
function getTotalCost() {
	
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1); // All three of these variables will be passed on to each function
	getVeggies(runningTotal,text1);
};	

//calculate the  cost of meat selection
function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};

//calculate the  cost of veggie selection
function getVeggies(runningTotal,text1) {
	var veggieTotal = 0;
	var selectedveggie = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggieArray.length; j++) {
		if (meatArray[j].checked) {
			selectedveggie.push(veggieArray[j].value);
			console.log("selected veggie item: ("+veggieArray[j].value+")");
			text1 = text1+veggieArray[j].value+"<br>";
		}
	}
	var veggieCount = selectedveggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else { 
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	console.log("total selected veggie items: "+veggieCount);
	console.log(veggieCount+" veggie - 1 free veggie = "+"$"+veggieTotal+".00");
	console.log("veggie text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};

//calculate the  cost of cheese selection
function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;
	var selectedCheese = document.getElementsByClassName("cheese");
	
if (selectedCheese === "Extra Cheese") {
    cheeseTotal = cheeseTotal +3;
} else {
    cheeseTotal = 0;
}
	}
	runningTotal = (runningTotal + cheeseTotal);
	console.log(selectedCheese = "+"$"+cheeseTotal+".00");
	console.log("cheese text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};


//calculate the  cost of crust selection
function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var selectedCrust = document.getElementsByClassName("crust");
	
if (selectedCrust === "Cheese Stuffed") {
    crustTotal = crustTotal + 3;
} else {
    crustTotal = 0;
}
	}
	runningTotal = (runningTotal + crustTotal);
	console.log(selectedCrust = "+"$"+crustTotal+".00");
	console.log("crust text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};