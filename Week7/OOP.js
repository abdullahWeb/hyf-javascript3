class Movies {

    constructor(name) {
    
        this.name = name;
        this.stars = [];
        this.writers = [];
        this.directors = [];
        this.ratings = [];

    }
    addStar(star) {
    
        this.stars.push(star);
    }
    addWriter(writer) {

        this.writers.push(writer);
    }
    addDirector(director) {
        this.directors.push(director);
    }
    addRating(rating) {   
        this.ratings.push(rating);
    }
    getActors() {
    
        return this.stars;
    }
    getDirectors() {

        return this.directors;
    }
    getWriters() {

        return this.writers;
    }
    getRatings() {

        return this.ratings;   
    }
    
}
   
class Staff {
    constructor(name, role, age) {
    
        this.name = name;
        this.role = role;
        this.age = age;
    }
    getName() {
    
        return this.name;
    }
    getRole() {

        return this.role;
    }
    getAge() {

        return this.age;
    }
    





}
    



const Inception = new Movies("Shutter Island");
const Leonardo = new Staff('Leonardo Dicaprio', "actor", 43);
const Laeta_Kalogridis = new Staff("Laeta Kalogridis", "writer", 52);
const Martin_Scorsese = new Staff("Martin Scorsese", "director", 75);




Inception.addStar("Leonardo Dicaprio");
Inception.addStar("Emily Mortimer");
Inception.addStar("Mark Ruffalo");
Inception.addWriter("Laeta Kalogridis");
Inception.addWriter("Dennis Lehane");
Inception.addDirector("Martin Scorsese");
Inception.addRating(7);
Inception.addRating(8);
Inception.addRating(10);
Inception.addRating(9.2);
Inception.addRating(7.5);

//console.log(Inception);
//console.log(Leonardo);
//console.log(Laeta_Kalogridis);
//console.log(Martin_Scorsese);
console.log(Inception.getActors().map(function (actor) {

    return `The Greatest actors ever are:  ${actor}`;

}));
