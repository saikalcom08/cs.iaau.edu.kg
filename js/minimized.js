function adjustStyle(){
	
	var width = 0;
	
	if(window.innerHeigth){
		width = window.innerWidth;
	}
	else if(document.documentElement && document.documentElement.clientHeight){
		width = document.documentElement.clientWidth;
	}
	
	else if(document.body){
		width = document.body.clientWidth;
	}
		
	if( width < 600){
		document.getElementById("gridStyle").setAttribute( "href", "css/minimum.css" );
		document.getElementById("navStyle").setAttribute( "href", "css/minimum.css" );
		document.getElementById("menuStyle").setAttribute( "href", "css/minimum.css" );
		document.getElementById("style").setAttribute( "href", "css/minimum.css" );
	}
	
	else{
		document.getElementById("style").setAttribute( "href", "css/style.css" );
		document.getElementById("gridStyle").setAttribute( "href", "css/960.css" );
		document.getElementById("menuStyle").setAttribute( "href", "css/menu.css" );
		document.getElementById("navStyle").setAttribute( "href", "css/nav.css" );
	}
}

window.onload = adjustStyle();