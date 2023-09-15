var count = 0;
var fart = new Audio('./Assets/Fart.mp3');
var amoungUs = new Audio('./Assets/AmongUs.mp3');
var var2006 = new Audio('./Assets/2006.mp3');
var correct = new Audio('./Assets/loginSuccess.mp3');

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


function change(num){

if(num != 0 && num != NaN){
	console.log("recursivly counting down from: "+num)
	change(num-1)
	
}
}


///////////////////////////////////////////////////////////////////////////////////////////

function changeButtonText(){
	
	if(count == 0){
		document.getElementById("testButton").textContent = "Did it work?";
		fart.play();
		count++;
	}
	else if(count == 1){
		document.getElementById("testButton").textContent = "Pretty cool right?"
		fart.play();
		count++;
	}
	else if(count > 1){
		document.getElementById("testButton").textContent = "Click me!"
		fart.play();
		count = 0;
	}

}

///////////////////////////////////////////////////////////////////////////////////////////

// not mine lol
function appear(elm, i, step, speed){
    var t_o;
    //initial opacity
    i = i || 0;
    //opacity increment
    step = step || 5;
    //time waited between two opacity increments in msec
    speed = speed || 50; 

    t_o = setInterval(function(){
        //get opacity in decimals
        var opacity = i / 100;
        //set the next opacity step
        i = i + step; 
        if(opacity > 1 || opacity < 0){
            clearInterval(t_o);
            //if 1-opaque or 0-transparent, stop
            return; 
        }
        //modern browsers
        elm.style.opacity = opacity;
        //older IE
        elm.style.filter = 'alpha(opacity=' + opacity*100 + ')';
    }, speed);
}





// appear:  appear(document.getElementsByTagName('DIV')[0], 0, 5, 40);


// disappear: appear(document.getElementsByTagName('DIV')[0], 100, -5, 40);





///////////////////////////////////////////////////////////////////////////////////////////


function login(){
	



	amoungUs.pause();
	fart.pause();
	var username = document.getElementById("Username").value;
	var password = document.getElementById("Password").value;

	console.log(username.toLowerCase())

	if(username == "when the imposter is" && password == "sus"){

		console.log("Login Successful");
		amoungUs.play();
		clearInputs()
	}
	
	
	else if(username.toLowerCase() == "xx_3l-r1c0_xx" || username.toLowerCase() == "xx_3l_r1c0_xx"){
		document.getElementById("loginSpacer").innerHTML = "ELLL RIIIICOOOOOOO!!!!111!!"
		amoungUs.play();
		clearInputs()
	}

	else if(username.toLowerCase() == "14/05/2003"){
		document.body.innerHTML = "";
		var2006.play();
		const divy = document.createElement("div");
		divy.id = "divy"
		document.body.appendChild(divy)
		const img = document.createElement("img");
		img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5KGik8CgjPPhRc7x0QA9jDgaePinZpY99-w&usqp=CAU";
		img.id = "imgy"

		document.getElementById('divy').appendChild(img);
		
	}

	else if(username.toLowerCase() == "spekt"){
		document.getElementById("loginSpacer").innerHTML = "Welcome sheriff of the MBC police department"
		amoungUs.play();
		document.body.style.backgroundImage = "url('https://pbs.twimg.com/media/EnlQLGGXcAATkoi?format=jpg&name=medium'";
		clearInputs()
	}


	else if(username == "yStormi" || username.toLowerCase() == "stormi"){
		document.getElementById("loginSpacer").innerHTML = "Kakapo ally identified!"
		amoungUs.play();
		clearInputs()
	}


	else if(username.toLowerCase() == "etanemuway" && password == "whomstwolf"){
		correct.play();
		loginSucc()
		document.getElementById("loginSpacer").innerHTML = "Now who might this be?"
		document.cookie = "cookieuser=emu;"
		clearInputs()
	}


	else if(username.toLowerCase() == "guest" && password == "login"){
		correct.play();
		loginSucc()
		document.getElementById("loginSpacer").innerHTML = "Login Successful"
		document.cookie = "cookieuser=guest;"
		clearInputs()
	}



	else if(username.toLowerCase() == "asdfdog" && password == "kaiyisgod"){
		correct.play();
		loginSucc()
		document.getElementById("loginSpacer").innerHTML = "Can I have free chronos plz???"
		document.cookie = "cookieuser=asdfdog;"
		clearInputs()
	}




	else if(username.toLowerCase() == "etanemuway" && password == ""){
		document.getElementById("loginSpacer").innerHTML = "Now who might this be?"
		amoungUs.play();
		clearInputs()
	}


	else if(username.toLowerCase() == "asdfdog10" || username.toLowerCase() == "asdfdog12319"){
		document.getElementById("loginSpacer").innerHTML = "Go back to scamming people on ftf"
		amoungUs.play();
		clearInputs()
	}


	else{
		console.log("Login Failed");
		document.getElementById("loginSpacer").innerHTML = ""
		fart.play();
		clearInputs()
	}


}


function loginSucc(){
	document.cookie = "cookiemaster=Successful3;"
	document.getElementById("loginButton").innerHTML = "Logout"
	document.getElementById("loginButton").href = "logout.html"
	document.body.setAttribute('style','background-image: linear-gradient(306deg, rgba(54, 54, 54, 0.05) 0%, rgba(54, 54, 54, 0.05) 33.333%,rgba(85, 85, 85, 0.05) 33.333%, rgba(85, 85, 85, 0.05) 66.666%,rgba(255, 255, 255, 0.05) 66.666%, rgba(255, 255, 255, 0.05) 99.999%),linear-gradient(353deg, rgba(81, 81, 81, 0.05) 0%, rgba(81, 81, 81, 0.05) 33.333%,rgba(238, 238, 238, 0.05) 33.333%, rgba(238, 238, 238, 0.05) 66.666%,rgba(32, 32, 32, 0.05) 66.666%, rgba(32, 32, 32, 0.05) 99.999%),linear-gradient(140deg, rgba(192, 192, 192, 0.05) 0%, rgba(192, 192, 192, 0.05) 33.333%,rgba(109, 109, 109, 0.05) 33.333%, rgba(109, 109, 109, 0.05) 66.666%,rgba(30, 30, 30, 0.05) 66.666%, rgba(30, 30, 30, 0.05) 99.999%),linear-gradient(189deg, rgba(77, 77, 77, 0.05) 0%, rgba(77, 77, 77, 0.05) 33.333%,rgba(55, 55, 55, 0.05) 33.333%, rgba(55, 55, 55, 0.05) 66.666%,rgba(145, 145, 145, 0.05) 66.666%, rgba(145, 145, 145, 0.05) 99.999%),linear-gradient(90deg, rgb(16,115,222),rgb(0,0,0));')
	document.documentElement.style.setProperty("--green","#0073DE")
}

function clearInputs(){
	document.getElementById("Username").value = ""
	document.getElementById("Password").value = ""


}

///////////////////////////////////////////////////////////////////////////////////////////
function sendMessage(){
	const whurl ="https://discord.com/api/webhooks/982834538524848148/m6RI_1E5YXXgqNuJphHLnWmnLpdKpVTwUDLlf7wm9z2FoA7CqJSZxEHB7FBs__W-ydS0"
	const msg = {"content" : document.getElementById("msg").value}
						
	fetch(whurl,{"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)})
	document.getElementById("msg").value = ""
}

///////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("loginBox").addEventListener("keyup", (event) => {
	if(event.key =='Enter'){
		login();
	}
});
///////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("msg").addEventListener("keyup", (event) => {
	if(event.key =='Enter'){
		sendMessage();
	}
});





    
