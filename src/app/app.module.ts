import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicModule } from './basic/basic.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BasicModule, PlatformModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
