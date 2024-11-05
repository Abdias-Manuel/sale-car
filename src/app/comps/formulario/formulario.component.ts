import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  questoes:any[] =[
    {
      pergunta:'nome completo',
      typ:'text',
      resp:'abdias manuel nzolameso tomas',
      preenchido:false,
    },
    {
      pergunta:'nº de identidade',
      typ:'text',
      resp:'',
      preenchido:false,
    },
    {
      pergunta:'data de nascimento',
      typ:'date',
      resp:'',
      preenchido:false,
    },
    {
      pergunta:'contacto telefónico',
      typ:'number',
      resp:'',
      whats:false,
      preenchido:false,
    },
    {
      pergunta:'correio electronico',
      typ:'e-mail',
      resp:'',
      preenchido:false,
    }
  ];
}
