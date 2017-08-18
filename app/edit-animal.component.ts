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
    <input [(ngModel)]="childSelectedAnimal.age" type="number">
    <p>Diet:</p><h3>{{childSelectedAnimal.diet}}</h3>
    <input [(ngModel)]="childSelectedAnimal.diet">
    <p>Location:</p><h3>{{childSelectedAnimal.location}}</h3>
    <input [(ngModel)]="childSelectedAnimal.location">
    <p>Caretakers:</p><h3>{{childSelectedAnimal.caretakers}}</h3>
    <input [(ngModel)]="childSelectedAnimal.caretakers" type="number">
    <p>Sex:</p><h3>{{childSelectedAnimal.sex}}</h3>
    <input [(ngModel)]="childSelectedAnimal.sex">
    <p>Likes:</p><h3>{{childSelectedAnimal.likes}}</h3>
    <input [(ngModel)]="childSelectedAnimal.likes">
    <p>Dislikes:</p><h3>{{childSelectedAnimal.dislikes}}</h3>
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
