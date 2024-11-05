import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-park',
  standalone: true,
  imports: [CommonModule, CardsComponent],
  templateUrl: './park.component.html',
  styleUrl: './park.component.css'
})
export class ParkComponent {
  
}
