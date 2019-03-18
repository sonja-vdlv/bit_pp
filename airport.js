(function () {
    'use strict';

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    Person.prototype.getDataPerson = function () {
        return this.name.concat(" ", this.surname);
    }

    function Seat(number, category) {
        this.number = number || Math.floor(Math.random() * (100 - 10) + 10);
        this.category = category || "e";
    }

    Seat.prototype.getDataSeat = function () {
        return (this.number + ", " + this.category.toUpperCase());
    }

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
    }

    Passenger.prototype.getDataPassenger = function () {
        return this.seat.getDataSeat() + ", " + this.person.getDataPerson();
    };

    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date);
        this.listOfPassengers = [];
    }


    Flight.prototype.addPassenger = function (passenger) {
        this.listOfPassengers.push(passenger);
    }

    Flight.prototype.getDataFlight = function () {
        var infoPasengers = "";
        this.listOfPassengers.forEach(function (element) {
            infoPasengers += "\n\t\t" + element.getDataPassenger()
        });

        var formattedDate = this.date.getDate() + "." + this.date.getMonth() + "." + this.date.getFullYear();

        return formattedDate + ", " + this.relation + infoPasengers;
    }

    function Airport(name) {
        this.name = name;
        this.listOfFlights = [];
    }

    Airport.prototype.addFlight = function (flight) {
        this.listOfFlights.push(flight);
    }

    Airport.prototype.getDataAirport = function () {
        var allFlights = 0;
        this.listOfFlights.forEach(function (element) {
            allFlights += element.listOfPassengers.length;
        });
        var allFlightInformation = "";
        this.listOfFlights.forEach(function (element) {
            allFlightInformation += element.getDataFlight() + "\n \t";
        });


        return "Airport: " + this.name + ", total passengers: " + allFlights + "\n\t" + allFlightInformation + "\n";
    }





    function createFlight(relation, data) {
        return new Flight(relation, data);
    };



    var sonja = new Person("Sonja", "Vadleve");
    var marija = new Person("Marija", "Prokic");
    // console.log(sonja.getDataPerson());

    var seatFirst = new Seat(56, 'B');
    var seatSecond = new Seat(55, 'B');
    // console.log(seatFirst.getDataSeat());

    var passenger1 = new Passenger(sonja, seatFirst);
    var passenger2 = new Passenger(marija, seatSecond);
    // console.log(passenger1.getDataPassenger());

    var atinaFlight = createFlight("Belgrade - Atina", "10.25.2017.");
    var viennaFlight = createFlight("Vienna - Belgrade", "05.30.2019.");
    viennaFlight.addPassenger(passenger1);
    viennaFlight.addPassenger(passenger2);
    atinaFlight.addPassenger(passenger1);
    atinaFlight.addPassenger(passenger2);
    //console.log(atinaFlight.getDataFlight());

    var airportNikolaTesla = new Airport("Nikola Tesla");
    airportNikolaTesla.addFlight(atinaFlight);
    airportNikolaTesla.addFlight(viennaFlight);
    console.log(airportNikolaTesla.getDataAirport());

    // console.log(seatFirst.number);
    // console.log(seatFirst.category);
    console.log("Airport day!");
})();