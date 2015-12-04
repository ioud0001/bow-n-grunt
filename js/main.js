// JavaScript Document

/*
Make sure you add a little bit of your own CSS and JS 
in your main.css and main.js files (just to have content you can see in the finished minifed files).
*/
document.addEventListener("DOMContentLoaded", init);
function init(){
	
	//var main = document.getElementById("main"); 
	var main = document.querySelector("main"); 
	
	var header = document.createElement("div");
	header.setAttribute("class", "modal-header"); 
	
	var h2 = document.createElement("h2"); 
	
	h2.innerHTML = "Welcome!"; 
	header.appendChild(h2); 
	
	var par1 = document.createElement("p"); 
	par1.innerHTML = "My name is Anna Ioudovskaya.";  
	
	var par2 = document.createElement("p");
	par2.innerHTML = "I was born in Russia and came to Canada when I was 5 years old. I lived in England and Germany and went to Michaeli-Gymnasium high school in Munich, Germany. Travelling through Europe and reading online about people's experiences in various countries is what inspired me to go into web design and development."; 
	
	var par3 = document.createElement("p"); 
	par3.innerHTML = "I started studying HTML and CSS and some JavaScript in high school -- where I also worked as a Web Publisher/Web Designer for Nortel and General Dynamics as a Co-op Student."; 
	
	var par4 = document.createElement("p"); 
	par4.innerHTML = "After graduating high school, I studied Internet Applications and Web Development at Algonquin College."; 
	
	var par5 = document.createElement("p"); 
	par5.innerHTML = "Currently, I am studying Mobile Application Design and Development and I created this webpage as part of an assignment with Grunt and Bower. I plan to graduate in June 2016."; 
	
	var parLinkedIn = document.createElement("p"); 
	var a = document.createElement("a"); 
	a.setAttribute("href", "http://ca.linkedin.com/in/aioudovskaya"); 
	a.setAttribute("title", "View my LinkedIn"); 
	a.innerhTML = "View my LinkedIn profile"; 
	
	parLinkedIn.appendChild(a); 
	
	/// append everything to main
	//document.querySelector("main"); 
	main.appendChild(header); 
	main.appendChild(par1); 
	main.appendChild(par2);
	main.appendChild(par3);
	main.appendChild(par4);
	main.appendChild(par5);
	
	main.appendChild(parLinkedIn); 
}


