// import { Person } from './generate-mock';
import { Person } from './persons.model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PersonsService {

    private personUrl= 'http://localhost:3000/persons';
    constructor(private http: Http) { }


    getPersonList(): Observable<Person[]> {
        return this.http.get(this.personUrl)
        .map( (res: Response) => res.json() )
        .catch( (error: any) => Observable.throw(error.json().error || 'Server error') );

    }

    updatePerson(person: Person): Observable<Person[]> {
        const headers = new Headers({ 'Content-Type': 'application/json'});
        const options = new RequestOptions({ headers : headers });
        return this.http.post(`${this.personUrl}/${person.id}`, person, options)
            .map( (res: Response) => res.json() )
           .catch( (error: any) => Observable.throw(error.json().error || 'Server error') );
    }
}

