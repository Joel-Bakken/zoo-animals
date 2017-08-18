import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="underTwo">Under 2 Years Old</option>
    <option value="overTwo">Over 2 Years Old</option>
  </select>



  <ul class="list-group">
    <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
    <p>Species:</p><h3>{{childSelectedAnimal.species}}</h3>
    <p>Name:</p><h3>{{childSelectedAnimal.name}}</h3>
    <p>Age:</p><h3>{{childSelectedAnimal.age}}</h3>
    <p>Diet:</p><h3>{{childSelectedAnimal.diet}}</h3>
    <p>Location:</p><h3>{{childSelectedAnimal.location}}</h3>
    <p>Caretakers:</p><h3>{{childSelectedAnimal.caretakers}}</h3>
    <p>Sex:</p><h3>{{childSelectedAnimal.sex}}</h3>
    <p>Likes:</p><h3>{{childSelectedAnimal.likes}}</h3>
    <p>Dislikes:</p><h3>{{childSelectedAnimal.dislikes}}</h3>
    <button (click)="editAnimal(currentAnimal)">Edit Animal</button>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "allAnimals";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
  this.clickSender.emit(animalToEdit);
  }
}
