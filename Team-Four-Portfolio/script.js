var menuBtn=document.getElementById("menuBtn");
		var sideNav=document.getElementById("sideNav");
		var menu=document.getElementById("menu");
		sideNav.style.right="-100%";
		menuBtn.onclick=function () {
			
			if((sideNav.style.right=="-100%")){
			
				sideNav.style.right="5%";
				menu.src="images/close.png";
				
			}
			else{
				sideNav.style.right="-100%";
				menu.src="images/menu.png";

			}
		}