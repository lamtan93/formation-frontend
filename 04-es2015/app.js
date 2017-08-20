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

const { city, temperature } = weather('paris');

console.log(city);
console.log(temperature);

console.log('\n===============Rest operator======================');

const [x, y, ...reste] = citiesId;

const parisId = x;
const nycId = y;
const othersCitiesId = citiesId.length;

console.log(parisId);
console.log(nycId);
console.log(othersCitiesId);


console.log('\n===============Classe======================');

class Trip {

    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    static getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio-de-Janeiro', 'img/rio-de-janeiro')
    }

    toString() {
        return 'Trip ' + this.id + ',' + this.name + ',' + this.imageUrl + ', ' + this._price;
    }
};

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
console.log(parisTrip);
console.log(parisTrip.name);

console.log('with toString(): ' + parisTrip.toString());

parisTrip.price = 100;


console.log('set price 100: ' + parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();

console.log('static: ' + defaultTrip.toString());

console.log('\n=================Heritage===================');

class FreeTrip extends Trip {

    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this._price = 0;
    }
    toString() {
        return 'Free ' + super.toString()
    }
}

const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nanges.jpg');
console.log(freeTrip.toString());


//=================Promise, Set, Function===================';

class TripService {
    constructor() {

        this.tripSet = new Set([
            new Trip('paris', 'Paris', 'img/paris.jpg'),
            new Trip('nantes', 'Nantes', 'img/nanges.jpg'),
            new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')

        ])
    }
    findByName(tripName) {
       return new Promise( (resolve, reject) => {
        		setTimeout(() => {
        		this.tripSet.forEach(function(e){
        			if(e.name === tripName){

        				resolve(e);
        			}

        		});		
        		reject(tripName);
        		} ,2000);	
        	});
    }
}

class PriceService {
    constructor() {
        this.priceMap = new Map();
        this.priceMap.set("paris", 100);
        this.priceMap.set("rio-de-janeiro", 800);

    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
        	setTimeout(() =>{
        		let foundTrip = this.priceMap.get(tripId);
        		if(foundTrip){
        			resolve(foundTrip);
        		}else{
        			reject(tripId);
        		}

        	} ,2000 );
        });
    }
}

let tripService = new TripService();
let priceService = new PriceService();




tripService.findByName("Paris").then(trip =>{ // found
	console.log('\n=================Test TripService===================');
	console.log("\nTrip found: " + `${trip}`);
},error => {
	console.log('\n=================Test TripService===================');
	console.log("\nNo trip with name " + `${error}`)
} )

tripService.findByName("Toulouse").then(trip =>{ //not found
	console.log('\n=================Test TripService===================');
	console.log("\nTrip found: " + `${trip}`);
},error => {
	console.log('\n=================Test TripService===================');
	console.log("\nNo trip with name " + `${error}`)
} )



tripService.findByName("Rio de Janeiro").then(trip =>{ // found
	console.log('\n=================Test PriceService==================');
	console.log("Trip found: " + `${trip}`);
	priceService.findPriceByTripId(`${trip.id}`)
	    .then(price => {console.log('\n=================Test PriceService==================');
	     console.log(`\nPrice found : ${price}`); })
	    .catch(error => { console.log('\n=================Test PriceService==================');
	    	console.log(`\nNo price found for id ${error}`); })
},error => {
	console.log('\n=================Test PriceService==================');
	console.log("\nNo trip with name " + `${error}`)
} )



