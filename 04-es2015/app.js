console.log('=========let===============');

let favoriteCityId = 'rome';
console.log(favoriteCityId);

favoriteCityId = 'paris';
console.log(favoriteCityId);


console.log('=========const===============');

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
citiesId.forEach(function(e) {
	console.log(e);
});

//citiesId = [];

console.log('\n----------Before----------')
citiesId.forEach(function(e) {
	console.log(e);
});

citiesId[citiesId.length] = 'tokyo';

console.log('\n----------After----------');
citiesId.forEach(function(e) {
	console.log(e);
});


console.log('\n=========creation d' + 'objet===============');

function getWeather(cityId) {
	let city = cityId.toUpperCase();
	let temperature = 20;

	return {
		city,
		temperature
	};
}

console.log(getWeather('paris'));

const weather = getWeather;

console.log(weather(favoriteCityId));

console.log('\n=========Affectation destructurée===============');

const{city,temperature } = weather('paris');

console.log(city);
console.log(temperature);

console.log("===============Rest operator======================");

const [x,y,...reste] = citiesId;

const parisId = x;
const nycId = y;
const othersCitiesId = citiesId.length;

console.log(parisId);
console.log(nycId);
console.log(othersCitiesId);


console.log("===============Classe======================");

class Trip{

	constructor(id, name, imageUrl){
		this.id = id;
		this.name = name;
		this.imageUrl = imageUrl;
	}

	get price(){
		return this._price;
	}

	set price(price){
		 this._price = price;
	}

	 static getDefaultTrip(){
        return new Trip('rio-de-janeiro','Rio-de-Janeiro','img/rio-de-janeiro')
    }

	toString(){
		return this.id + ',' + this.name + ',' + this.imageUrl + ', ' + this._price;
	}
};

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
console.log(parisTrip);
console.log(parisTrip.name);

console.log('with toString(): '+parisTrip.toString());

parisTrip.price = 100;


console.log('set price 100: '+parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();

console.log('static: ' + defaultTrip.toString());

console.log('=================Heritage===================');

class FreeTrip extends Trip{

constructor(id, name, imageUrl){
	super(id, name, imageUrl);
	this._price = 0;
}
	toString(){
        return super.toString()
    }
}

const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nanges.jpg');
console.log(freeTrip.toString());


