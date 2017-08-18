import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <p>Species:</p><h3>{{childSelectedAnimal.species}}</h3>
    <p>Name:</p><h3>{{childSelectedAnimal.name}}</h3>
    <label>Enter New Name:</label>
    <input [(ngModel)]="childSelectedAnimal.name">
    <p>Age:</p><h3>{{childSelectedAnimal.age}}</h3>
    <label>Enter New Age:</label>
    <input [(ngModel)]="childSelectedAnimal.age" type="number">
    <p>Diet:</p><h3>{{childSelectedAnimal.diet}}</h3>
    <label>Enter New Diet:</label>
    <input [(ngModel)]="childSelectedAnimal.diet">
    <p>Location:</p><h3>{{childSelectedAnimal.location}}</h3>
    <label>Enter New Location:</label>
    <input [(ngModel)]="childSelectedAnimal.location">
    <p>Caretakers:</p><h3>{{childSelectedAnimal.caretakers}}</h3>
    <label>Enter New Number of Caretakers:</label>
    <input [(ngModel)]="childSelectedAnimal.caretakers" type="number">
    <p>Sex:</p><h3>{{childSelectedAnimal.sex}}</h3>
    <label>Enter New Animal Sex (Only use to correct error(s) when new animal was entered into the system):</label>
    <input [(ngModel)]="childSelectedAnimal.sex">
    <p>Likes:</p><h3>{{childSelectedAnimal.likes}}</h3>
    <label>Enter New Likes:</label>
    <input [(ngModel)]="childSelectedAnimal.likes">
    <p>Dislikes:</p><h3>{{childSelectedAnimal.dislikes}}</h3>
    <label>Enter New Dislikes:</label>
    <input [(ngModel)]="childSelectedAnimal.dislikes">
    <button (click)="doneButtonClicked()">Done</button>
  </div>


  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
