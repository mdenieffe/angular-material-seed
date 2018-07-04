import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';
import {PersonComponent} from './person/person.component';
import {AddressComponent} from './address/address.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ActionsComponent } from './actions/actions.component';
import {PortalModule} from '@angular/cdk/portal';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'persons', component: PersonComponent},
  {path: 'addresses', component: AddressComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    AddressComponent,
    HomeComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PortalModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
