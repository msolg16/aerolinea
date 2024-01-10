import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/users/login/login.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

/*
import { ListarPilotosComponent } from './pages/pilotos/listar-pilotos/listar-pilotos.component';
import { CrearPilotosComponent } from './pages/pilotos/crear-pilotos/crear-pilotos.component';
import { EditarPilotosComponent } from './pages/pilotos/editar-pilotos/editar-pilotos.component';

import { ListarAvionComponent } from './pages/avion/listar-avion/listar-avion.component';
import { CrearAvionComponent } from './pages/avion/crear-avion/crear-avion.component';
import { EditarAvionComponent } from './pages/avion/editar-avion/editar-avion.component';

import { ListarTripulacionComponent } from './pages/tripulacion/listar-tripulacion/listar-tripulacion.component';
import { CrearTripulacionComponent } from './pages/tripulacion/crear-tripulacion/crear-tripulacion.component';
import { EditarTripulacionComponent } from './pages/tripulacion/editar-tripulacion/editar-tripulacion.component';
*/
import { UploadComponent } from './pages/upload/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    NavbarComponent,
/*
    ListarPilotosComponent,
    CrearPilotosComponent,
    EditarPilotosComponent,

    ListarAvionComponent,
    CrearAvionComponent,
    EditarAvionComponent,
    
    ListarTripulacionComponent,
    CrearTripulacionComponent,
    EditarTripulacionComponent,
*/

    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
