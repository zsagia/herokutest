import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { BuildingDetailsComponent } from './building/building-details/building-details.component';
import { BuildingAdminComponent } from './building/building-admin/building-admin.component';
import { BuildingService } from './building/building.service';

@NgModule({
  declarations: [
    AppComponent,
    BuildingAdminComponent,
    BuildingDetailsComponent
  ],
  exports: [
      BuildingAdminComponent,
      BuildingDetailsComponent
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [BuildingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
