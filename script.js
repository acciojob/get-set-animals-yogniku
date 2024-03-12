//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
getSpecies(){
	return this.species
}
	
  makeSound() {
    console.log(
The ${this.species} makes a sound
);
}
}

class Dog extends Animal {
	bark(){
		 console.log("bark");
	}
}
class Cat extends Animal {
	  purr() {
    console.log("purr");
  }
}
	const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark();

const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr();
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
