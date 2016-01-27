function changeMainLink(activeLink) {
	switch (activeLink) {
	case link1:
		document.getElementById('link1').className = "active";
		document.getElementById('link2').className = "";
		document.getElementById('link3').className = "";
		document.getElementById('link4').className = "";
		break;
	case link2:
		document.getElementById('link2').className = "active";
		document.getElementById('link1').className = "";
		document.getElementById('link3').className = "";
		document.getElementById('link4').className = "";
		break;
	case link3:
		document.getElementById('link3').className = "active";
		document.getElementById('link2').className = "";
		document.getElementById('link1').className = "";
		document.getElementById('link4').className = "";
		break;
    case link4:
        document.getElementById('link4').className = "active";
		document.getElementById('link2').className = "";
		document.getElementById('link1').className = "";
		document.getElementById('link3').className = "";
		break;
	}
}