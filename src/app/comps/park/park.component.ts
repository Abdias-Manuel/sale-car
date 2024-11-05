import { Component } from '@angular/core';

@Component({
  selector: 'app-park',
  standalone: true,
  imports: [],
  templateUrl: './park.component.html',
  styleUrl: './park.component.css'
})
export class ParkComponent {
  cards:object[] = [
    { 
      img:'images/suziki-s-presso.png',
      tit:'Suziki S-PRESSO',
      tex:'O Suzuki S-Presso é um compacto urbano que combina praticidade e estilo em um único veículo. Equipado com um motor de 1.0 litro, ele oferece desempenho eficiente e economia de combustiv...'
    },
    { 
      img:'images/suziki-s-presso.png',
      tit:'Suziki S-PRESSO',
      tex:'O Suzuki S-Presso é um compacto urbano que combina praticidade e estilo em um único veículo. Equipado com um motor de 1.0 litro, ele oferece desempenho eficiente e economia de combustiv...'
    }
  ];
}
