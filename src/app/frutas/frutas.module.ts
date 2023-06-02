import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrutasCadastroComponent } from './frutas-cadastro/frutas-cadastro.component';
import { FrutasListagemComponent } from './frutas-listagem/frutas-listagem.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '../layout/layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';
import { PipesModule } from '../pipes/pipes.module';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    FrutasCadastroComponent,
    FrutasListagemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    LayoutModule,
    FlexLayoutModule,
    MatBadgeModule,
    PipesModule,
    RouterLink
  ],
  exports: [
    FrutasCadastroComponent,
    FrutasListagemComponent
  ]
})
export class FrutasModule { }
