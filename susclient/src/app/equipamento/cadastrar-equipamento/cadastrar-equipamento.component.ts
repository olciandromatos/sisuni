import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComumServiceService } from 'src/app/comum-service.service';
import { Equipamento } from 'src/app/domain/Equipamento';

@Component({
  selector: 'app-cadastrar-equipamento',
  templateUrl: './cadastrar-equipamento.component.html',
  styleUrls: ['./cadastrar-equipamento.component.css']
})
export class CadastrarEquipamentoComponent implements OnInit {

  equipamento: Equipamento = new Equipamento;
  value: Date;
  constructor(private servico: ComumServiceService, private router: Router) { }

  ngOnInit() {
  }

  cadastrarEquipamento() {
    console.log(this.equipamento);
    alert('Equipamento cadastrado com sucesso!');
    this.servico.cadastrarEquipamento(this.equipamento).subscribe(resultado => {
    });
  }

  redirect() {
    return this.router.navigate([`login`]);
  }


}
