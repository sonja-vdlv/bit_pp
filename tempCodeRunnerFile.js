function Movie (title, genre, length){
    this.title = title;
    this.genre = genre.getData();
    this.length = length;

    this.getData = function(){
        return this.title + ", " + this.length + "min, " + this.genre;
    }
}
console log (Movie (mrtav ladan, comedy, 100));