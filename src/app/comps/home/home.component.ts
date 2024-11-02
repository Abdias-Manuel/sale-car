import { Component } from '@angular/core';
import { ConteudoComponent } from '../conteudo/conteudo.component';
import { Router } from '@angular/router';
import { CardsComponent } from '../../cards/cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ConteudoComponent, CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router){}

  navigateToSobre(){
    this.router.navigate(['/sobre']);
  }
  navigateToPark(){
    this.router.navigate(['/park']);
  }
}
