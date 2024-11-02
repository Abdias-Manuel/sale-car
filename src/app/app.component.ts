import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './comps/head/head.component';
import { FootComponent } from './comps/foot/foot.component';
import { ContacteComponent } from './comps/contacte/contacte.component';
import { HomeComponent } from './comps/home/home.component';
import { FormularioComponent } from './comps/formulario/formulario.component';
import { PageNotFoundComponent } from './comps/page-not-found/page-not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent,HeadComponent, FootComponent, ContacteComponent, FormularioComponent, PageNotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sale-car';
}
