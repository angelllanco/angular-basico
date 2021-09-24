import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

import { DbzModule } from './dbz/dbz.module';
//import { Dbz } from './dbz.agrear/dbz.agrear.component';
//import { ContadorComponent } from './contador/contador/contador.component';
//import { MainPageComponent } from './dbz/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    //Dbz.AgrearComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
