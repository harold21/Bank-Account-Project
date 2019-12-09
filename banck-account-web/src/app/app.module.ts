import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionBanckingFromComponent } from './transaction-bancking-from/transaction-bancking-from.component';
import { ShowMovementsFormComponent } from './show-movements-form/show-movements-form.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'transactions',
    component: TransactionBanckingFromComponent
  },
  {
    path: 'movements',
    component: ShowMovementsFormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TransactionBanckingFromComponent,
    ShowMovementsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
