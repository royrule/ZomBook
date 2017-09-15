import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HistoriesListComponent } from './histories-list/histories-list.component';
import { PersonsComponent } from './persons/persons.component';

// const appRoutes: Routes = [
//   { path: 'histories', component: HistoriesListComponent },
//   { path: '',
//     redirectTo: '/histories-list',
//     pathMatch: 'full'}
// ];
@NgModule({
  declarations: [
    AppComponent,
    HistoriesListComponent,
    PersonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
