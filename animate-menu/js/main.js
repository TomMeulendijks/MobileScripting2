///http://jsfiddle.net/gianlucaguarini/56Szw/

function App(){

	var USERTRIGGER = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';
	var menuOpener = document.getElementById('open_menu');
	var mainMenu = document.getElementById('main_menu');

	if(menuOpener !== undefined){
	
		menuOpener.open = false;

		menuOpener.addEventListener(USERTRIGGER, function(e){
			e.preventDefault();
			if(menuOpener.open){
				mainMenu.classList.remove('open');
				menuOpener.open = false;
			}else{
				mainMenu.classList.add('open');
				menuOpener.open = true;
			}
		})

	}

}

App();