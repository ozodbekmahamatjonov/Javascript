console.log( '60' / '2' )
let str = '123';
console.log();(typeof str);

let num  = Number(str);
console.log(typeof num);



let name = 'Olim',
 lastname = 'Habibullayev',
 fullname = name +  '  ' + lastname;
alert(fullname);

console.log(2 + 8 + '5') // '18' exemple

let age = Number('Hello world');
console.log(age);

console.log(Number('  123 '));
console.log(Number('123z'));
console.log(Number(true));
console.log(Number(false));
console.log('5' + 7);
console.log(Number('2') + 5);


console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("hello world"));
console.log(Boolean(''));

console.log(Boolean('0'));
console.log(Boolean('  '));

let n = 5;
console.log(n);
n *=3;
console.log(n)
let i = 1;
i++;
console.log(i);
let apples = '8';
let oranges = '10';
console.log(apples + oranges);

let apple = '8';
let orange = '10';
console.log(+apple + +orange);







BMI = body mass index
BMI = weight / ( height * height )




//  Hisoblash operatorlari

let markWeight = 75;
let markheight = 1.8;
let markBmi  = markWeight / ( markheight * markWeight );
console.log(markBmi);
if   (markBmi <14.99) {
	console.log('You are inderweight');
}
else if (markBmi > 15 &&  markBmi < 25) {
	console.log('You are normal');
}
else {
	console.log ('  Lose some weight broooo ');
}




let bobWeight = 65,
	bobHeight = 1.85,
	bobBmi = bobWeight / ( bobHeight * bobHeight  );
console.log(bobBmi);


// if else codlari

let studentAge = 19;
let votingAge = 18;


if ( studentAge  >= votingAge  ) {
		// if true
	console.log(' You can Vote ');
	}
else {
		// if false
	console.log(' Come back later ');
	}



let studentScore = 100;
if ( studentScore >=90 ) {
	console.log(' You got A ');
}
else if ( studentScore < 90 && studentScore >= 80 ) {
	console.log(' You got B ');
}
else if ( studentScore < 80 && studentScore >= 70 ) {
	console.log(' You got C ');
}
else {
	console.log(' You got F, loser ');
}