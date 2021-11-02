import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule} from './material/material/material.module'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearTaskComponent } from './task/crear-task/crear-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndiceTaskComponent } from './task/indice-task/indice-task.component';
import { MenuComponent  } from './utilities/menu/menu/menu.component';
import { FooterComponent } from './utilities/footer/footer/footer.component'


@NgModule({
  declarations: [
    AppComponent,
    CrearTaskComponent,
    IndiceTaskComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
