import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicModule } from './basic/basic.module';
import { MeasurementModule } from './measurement/measurement.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BasicModule,
    BrowserModule,
    MeasurementModule,
    PlatformModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
