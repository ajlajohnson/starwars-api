import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from './interfaces/person';
import { Film } from './interfaces/film';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
  apiURL = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get<People>(`${this.apiURL}/people/`)
  }

  getFilm(url: string) {
    return this.http.get<Film>(url)
  }

}
