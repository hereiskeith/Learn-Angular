import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentIntegrationComponent } from './component-integration/component-integration.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeService } from "./employee.service";
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { HttpClientModule } from "@angular/common/http";
import { routingComponents } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ComponentIntegrationComponent,
    PipesComponent,
    EmployeeDetailComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
