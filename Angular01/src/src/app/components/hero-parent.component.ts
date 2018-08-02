import {Component, Input } from '@angular/core';
import { Hero } from '../models/hero'

@Component({
  selector: 'app-hero-parent',
  template: `
    <h2>{{master}} controls {{heroes.length}} heroes</h2>
    <app-hero-child *ngFor="let hero of heroes"
      [hero]="hero"
      [master]="master">
    </app-hero-child>
  `
})

export class HeroParentComponent {


  heroes = [new Hero(1,"Rohit"),new Hero(2,"Srijan")];
  master = 'Master';
}