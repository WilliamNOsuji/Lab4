import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StockageComponent } from './stockage/stockage.component';
import { I18nComponent } from './i18n/i18n.component';
import { TokenComponent } from './token/token.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
      StockageComponent,
      I18nComponent,
      TokenComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"", redirectTo: "/stockage", pathMatch:"full"},
      {path:"stockage", component:StockageComponent},
      {path:"i18n", component:I18nComponent},
      {path:"token", component:TokenComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
