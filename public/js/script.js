// console.log ("Hello World from Script.js");
// var age=prompt("Your Age ");
// // var alivedays= age*365;
// // alert(yourage + "age" + alivedays);


// if(age<18){
// 	alert("Sorry, you are not old enought to enter here ");


// }
//  else if( age<21){
//  	alert("You can eneter but cannot drink  ");

//  }
//  else{
//  	alert("Com on in, You can drink   ");
//  }

// var age =prompt("How old are you");
// var age=parseInt(age);

// if (age <0){

// 	alert("Your age is negative  ");	
// }

// else if (age === 21 ) {

// 	alert("Happy Birthday 21");

// }

// else if (age %2===1){

// 	alert("Your age is odd");
// }

// var nr=-10;
// while(nr >-11 && nr<20){
// 	console.log(nr);
// 	nr++;
// }

// var count =10;
// while(count>=10 && count<40){
// 	if (count % 2 == 0){

// 		console.log(count);
// 	}
	
// 	count++;
// }
 
 // for(var count=-10; count <20; count++){
 // 	console.log(count);
 // }

// for (var i=20; i<=40; i++){
// 	console.log(i)
// }

// function doSomthing(){
// 	console.log("Hello World!")
// }
// doSomthing();


// function test(x){
// 	return x * 2;
// 	console.log(x);
// 	return x / 2;
// }
// test(40);

// function isEven(x){

// 	if(x%2==0) {

// 		return true;
// 	}
// 	else{

// 		return false;
// 	}

// } 
// console.log (isEven(4));


// var person ={
// 	name: "Bob",
// 	age:24,
// 	city:"LA" 
// };
// console.log(person["age"])
// console.log(person.age)





 $(document).ready(function(){
 	Highcharts.chart('container', {

    title: {
        text: 'Tech Diellza'
    },

    subtitle: {
        text: 'Source: techstitution.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Instalimet',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

 

$('#trigger').click(function(){
 		alert("trigger is clicked")
 		$("body").css('background-color','green');

 	});

	 $('div').css("background-color", "purple");
	 $('.container-fluid').css('background-color','white');
	 $('.highlight').addClass('highlight-width');
	 $('#third').addClass('third-border'); 

 });






