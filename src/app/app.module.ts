import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms'

import localeEs from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common'
registerLocaleData(localeEs)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { capitalizePipe } from './pipes/capitalize.pipe';
import { domsecurePipe } from './pipes/domsecure.pipe';
import { passwordPipe } from './pipes/password.pipe'

@NgModule({
  declarations: [
    AppComponent,
    capitalizePipe,
    domsecurePipe,
    passwordPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "es" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
