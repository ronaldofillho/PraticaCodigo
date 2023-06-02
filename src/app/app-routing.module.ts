import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import { ListagemUsuarioComponent } from './usuario/listagem-usuario/listagem-usuario.component';
import { FrutasCadastroComponent } from './frutas/frutas-cadastro/frutas-cadastro.component';
import { FrutasListagemComponent } from './frutas/frutas-listagem/frutas-listagem.component';

const routes: Routes = [
  {
    path: 'cadastrousuario',
    component: CadastroUsuarioComponent
  },
  {
    path: 'editausuario/:id',
    component: CadastroUsuarioComponent
  },
  {
    path: 'listagemusuario',
    component: ListagemUsuarioComponent
  },
  {
    path: 'frutascadastro',
    component: FrutasCadastroComponent
  },
  {
    path: 'frutasedita/:id',
    component: FrutasCadastroComponent
  },
  {
    path: 'frutaslistagem',
    component: FrutasListagemComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
