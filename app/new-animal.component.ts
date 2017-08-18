import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <div class="new-animal-form">
      <form>
        <h1>New Animal</h1>
        <div class="form-group">
          <label>Animal Species:</label>
          <input #newSpecies>
        </div>
        <div class="form-group">
          <label>Animal Name:</label>
          <input #newName>
        </div>
        <div class="form-group">
          <label>Animal Age:</label>
          <input #newAge type="number">
        </div>
        <div class="form-group">
          <label>Animal Diet:</label>
          <input #newDiet>
        </div>
        <div class="form-group">
          <label>Animal Location:</label>
          <input #newlocation>
        </div>
        <div class="form-group">
          <label>Number of Animal Caretakers:</label>
          <input #newCaretakers type="number">
        </div>
        <div class="form-group">
          <label>Animal Sex:</label>
          <input #newSex>
        </div>
        <div class="form-group">
          <label>Animal Likes:</label>
          <input #newLikes>
        </div>
        <div class="form-group">
          <label>Animal Dislikes:</label>
          <input #newDislikes>
        </div>
        <button (click)="addAnimal(newSpecies.value, newName.value, newAge.value, newDiet.value, newlocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value='', newName.value='', newAge.value='', newDiet.value='', newlocation.value='', newCaretakers.value='', newSex.value='', newLikes.value='', newDislikes.value='';">Add New Animal</button>
      </form>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  addAnimal(species: string, name: string, age: string, diet: string, location: string, caretakers: string, sex: string, likes: string, dislikes: string) {
    if (species === "" || name === "" || age === "" || diet === "" || location === "" || caretakers === "" || sex === "" || likes === "" || dislikes === ""){
      alert("You must fill out all form fields");
    } else {
    var convertedAge = Number(age);
    var convertedCaretakers = Number(caretakers);
    var newAnimalToAdd: Animal = new Animal(species, name, convertedAge, diet, location, convertedCaretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
}
