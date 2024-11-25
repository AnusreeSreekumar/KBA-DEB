//type conversion or coersion

console.log("20+5","20"+5) //out will be 205  => (string + number)String concatenation happens

console.log("20-5","20"-5) //15 => here when we put '-' the string also gets converted to number and perform the operation.

console.log("20*5","20"*5) //100 here also the string gets converted to number

console.log("20/5","20"/5) //4 same as above

console.log("true+1 is",true+1) //here also same as above

console.log('Number("42")',Number("42")) //string get converted to number

console.log('Number("Hello")',Number("Hello")) //actual string dont gets converted to number with this function.

console.log('typeof String(123)',typeof String(123))

console.log("String(true)",String(true))

console.log("Boolean(0)",Boolean(0))

console.log("Boolean('')",Boolean(''))

console.log("Boolean('Hello')",Boolean('Hello'))

console.log('Boolean(1)',Boolean(1))

console.log('parseInt("15.09")',parseInt("15.09"))

console.log('parseFloat("3.94")',parseFloat("3.94"))