import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
import { People } from '../interfaces/person';

@Component({
  selector: 'app-peopleview',
  templateUrl: './peopleview.component.html',
  styleUrls: ['./peopleview.component.css']
})
export class PeopleviewComponent implements OnInit {
  people: People;

  constructor(private swapi: StarwarsService) { }

  ngOnInit(): void {
    this.swapi.getPeople().subscribe(
      (data: People) => this.people = { ...data },
      error => console.error(error)
    );
  }

}
