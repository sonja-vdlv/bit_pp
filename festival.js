'use strict'

//console.log("Dje si, kako si")
function () {

    function Genre(name) {
        this.name = name;
        this.getData = function () {
            return this.name[0].toUpperCase() + this.name[name.length - 1].toUpperCase();
        }
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre.getData();
        this.length = length;

        this.getData = function () {
            return this.title + ", " + this.length + "min, " + this.genre;
        }
    }

    function Program(date) {
        this.date = date;
        this.listOfMovies = [];
        this.totalNofMovies = 0;
        this.length = Movie.length;

        this.addMovie = function (movie) {
            this.listOfMovies.push(movie);
            this.totalNofMovies = this.listOfMovies.length;
        }
        this.getData = function () {
            var totalLength = 0;
            for (var i = 0; i < listOfMovies.length; i++) {
                totalLength += this.length;
            }
            return this.date + ", length:" + totalLength;
            return
        }
    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numberOfMovies = 0;

        this.addProgram = function (program) {
            this.listOfPrograms.push(program);
            this.numberOfMovies += program.totalNofMovies;
        }
    }
};
