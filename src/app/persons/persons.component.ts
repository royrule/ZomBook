import { Component, OnInit } from '@angular/core';
import { Person } from './persons.model';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

 // nombreH = ''; // search
  persons: Person[];

  constructor(private personsService: PersonsService) { }

  ngOnInit() {
    this.personsService.getPersonList()
      .subscribe(Person => this.persons = Person);
  }

  totalPersons() {
    let sum = 0;
    if (this.persons) {
      for (let person of this.persons) { // siempre poner this.
        sum += person.id;
      }
      return this.persons.length;
    }
  }
}