import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  cards:any[] = [
    { 
      img:'images/suziki-s-presso.png',
      tit:'Suziki S-PRESSO',
      tex:'O Suzuki S-Presso é um modelo possui um design robusto com linhas modernas e uma carroceria elevada, proporcionando maior visibilidade ao motorista e uma sensação de segurança...'
    },
    { 
      img:'images/suzuki-vitara.png',
      tit:'Suziki Vitara',
      tex:'O Suzuki Vitara conta com espaço interno surpreendentemente amplo e com assentos confortáveis e um painel digital intuitivo...'
    },
    { 
      img:'images/suzuki-dzire.png',
      tit:'Suziki Dzire',
      tex:'O Suzuki Dzire, seus recursos incluem airbags frontais, sistema de frenagem ABS com EBD e tecnologia de infotainment com conectividade Bluetooth,...'
    },
    { 
      img:'images/suzuki-suift.png',
      tit:'Suziki Suift',
      tex:'O Suzuki Suift é um compacto urbano que combina praticidade e estilo em um único veículo. Equipado com um motor de 1.0 litro, ele oferece desempenho eficiente e economia...'
    },
    { 
      img:'images/suzuki-s-cross.png',
      tit:'Suziki S-Cross',
      tex:'O Suzuki S-Cross é um compacto urbano que combina praticidade e estilo em um único veículo. Equipado com um motor de 1.0 litro, ele oferece desempenho eficiente e economia de combustiv...'
    }
  ];
}
