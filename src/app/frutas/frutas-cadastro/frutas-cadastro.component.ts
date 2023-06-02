import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Frutas } from 'src/app/shared/model/frutas';
import { frutasList } from 'src/app/shared/model/frutasList';

@Component({
  selector: 'app-frutas-cadastro',
  templateUrl: './frutas-cadastro.component.html',
  styleUrls: ['./frutas-cadastro.component.scss']
})
export class FrutasCadastroComponent {

  fruta: Frutas;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';

  frutas = frutasList;

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.fruta = new Frutas();
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      // editando
      const frutaEncontrada = this.frutas.find(
        fruta => fruta.nome === idParaEdicao);
      if (frutaEncontrada) {
        this.estahCadastrando = false;
        this.nomeBotaoManutencao = 'Salvar';
        this.fruta = frutaEncontrada;
      }
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  cadastrar(): void {
    if (this.estahCadastrando && this.fruta) {
      this.frutas.push(this.fruta);
    }
    this.fruta = new Frutas();
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['frutaslistagem']);
  }

}
