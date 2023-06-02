import { Component } from '@angular/core';
import { Frutas } from 'src/app/shared/model/frutas';
import { frutasList } from 'src/app/shared/model/frutasList';

@Component({
  selector: 'app-frutas-listagem',
  templateUrl: './frutas-listagem.component.html',
  styleUrls: ['./frutas-listagem.component.scss']
})
export class FrutasListagemComponent {

  frutasList = frutasList;

  excluir(frutaARemover: Frutas): void {
    const index = this.frutasList.findIndex(fruta =>
      fruta.nome === frutaARemover.nome);

    this.frutasList.splice(index, 1);
  }


}
