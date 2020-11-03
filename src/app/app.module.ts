import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './pages/news/news.component';
import { TitularesComponent } from './pages/titulares/titulares.component';
import { Page404Component } from './pages/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    TitularesComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
