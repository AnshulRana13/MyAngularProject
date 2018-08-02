import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeroParentComponent } from './components/hero-parent.component';
import { HeroChildComponent } from './components/hero-child.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeroParentComponent,HeroChildComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
