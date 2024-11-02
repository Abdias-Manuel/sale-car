import { Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { ContacteComponent } from './comps/contacte/contacte.component';
import { ParkComponent } from './comps/park/park.component';
import { FormularioComponent } from './comps/formulario/formulario.component';
import { PageNotFoundComponent } from './comps/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch:'full'},
    { path: 'home', component: HomeComponent},
    { path: 'contacte', component: ContacteComponent},
    { path: 'park', component: ParkComponent},
    { path: 'formulario', component: FormularioComponent},
    { path: '**', component: PageNotFoundComponent}
];
