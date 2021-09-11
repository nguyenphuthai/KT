var number;
number=prompt();
if ((number % 3 ==0)&&(number % 5 ==0)){
	document.write("so do chia het cho 3 va 5"+"<br>");
	if (number%2==0){
		document.write("so do la so chan"+"<br>")
	}else{
		document.write("so do la so le"+"<br>")
	}
}else{
	document.write("khong chia het cho 3 va 5"+"<br>")
}
if (number==Math.round(Math.sqrt(number))*Math.round(Math.sqrt(number))){
	document.write("so do la so chinh phuong"+"<br>")
}else{
	document.write("so do khong phai so chinh phuong"+"<br>")
} 