cart = [];
cartprices = [];
prices = {
'Margherita': 12,
'Formaggio': 15,
'Chicken': 17,
'MeatTown': 20,
'Parma': 22
}

function addToCart(clicked) {
    cart.push(clicked.getAttribute("item-name"));
    cartprices.push(clicked.getAttribute("price"));
    document.getElementById("order").innerHTML = cart.join('<br/>');
    document.getElementById("totalprice").innerHTML =  cartprices.map(x => parseInt(x)).reduce(function(a, b){
      return a + b;
    }, 0);
    console.log(cart);
}

function thankYouOverlay() {
	document.getElementById("thankyouoverlay").style.display = "block";
}

function thankYouOverlayClose() {
	document.getElementById("thankyouoverlay").style.display = "none";
}


function homePageView(){
	gtag( 'config','UA-171681588-1',{
		'page_title' : 'homepage',
		'page_path': '/home'
	});
}
function menuPageView(){
	gtag( 'config','UA-171681588-1',{
		'page_title' : 'menupage',
		'page_path': '/menu'
	});
}
function aboutPageView(){
	gtag( 'config','UA-171681588-1',{
		'page_title' : 'aboutpage',
		'page_path': '/about'
	});
}
function contactPageView(){
	gtag( 'config','UA-171681588-1',{
		'page_title' : 'contactpage',
		'page_path': '/contact'
	});
}

function orderCompletedEvent() {
	gtag('event','CompletedOrder',{
		'event_categroy':'Order',
		'event_label':'Pizza',
		'Value':20
	});
}

function pizzaAdded() {
	gtag('event','pizzaAdded',{
		'event_categroy':'Item',
		'event_label':'Pizza',
		'Value':10
	});

}


function tableBooked() {
	gtag('event','tableBooked',{
		'event_categroy':'webContact',
		'event_label':'table',
		'Value':30
	});
}
