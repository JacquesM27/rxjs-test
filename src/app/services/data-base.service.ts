import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataBaseService {
  private persons: Person[] = [
    { firstName: 'Herbie', lastName: 'Davey' },
    { firstName: 'Trevor', lastName: 'Philips' },
    { firstName: 'Tomasz', lastName: 'Krasieńko' },
    { firstName: 'Piotr', lastName: 'Łojko' },
    { firstName: 'Jakub', lastName: 'Michalak' },
    { firstName: 'Tiff', lastName: 'Applegarth' },
    { firstName: 'Cordie', lastName: 'Duplain' },
    { firstName: 'Esmeralda', lastName: 'Thrustle' },
    { firstName: 'Adina', lastName: 'Bendson' },
    { firstName: 'Brandyn', lastName: 'McGucken' },
    { firstName: 'Nan', lastName: 'Asty' },
    { firstName: 'Karolina', lastName: 'Restieaux' },
    { firstName: 'Dyanna', lastName: 'Henery' },
  ];

  fetchPersons(): Observable<Person[]> {
    return of(this.persons);
  }

  addPerson(person: Person): Observable<Person[]> {
    this.persons.push(person);
    return of(this.persons);
  }

  constructor() {}
}

export interface Person {
  firstName: string;
  lastName: string;
}
