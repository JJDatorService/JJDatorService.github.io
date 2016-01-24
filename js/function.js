function changeMainLink(activeLink) {
	switch(activeLink) {
	case link1:
		document.getElementById('link1').className = "active";
		document.getElementById('link2').className = "";
		document.getElementById('link3').className = "";
		console.log("link1");
		break;
	case link2:
		document.getElementById('link2').className = "active";
		document.getElementById('link1').className = "";
		document.getElementById('link3').className = "";
		console.log("Link2");
		break;
	case link3:
		document.getElementById('link3').className = "active";
		document.getElementById('link2').className = "";
		document.getElementById('link1').className = "";
		console.log("Link3");
		break;	
	}
}