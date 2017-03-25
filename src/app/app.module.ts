import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BuildingAdminComponent } from './building/building-admin/building-admin.component';
import { BuildingDetailsComponent } from './building/building-details/building-details.component';
import { BuildingDetailViewComponent } from './building/building-detail-view/building-detail-view.component';
import { BuildingListComponent } from './building/building-list/building-list.component';
import { BuildingViewComponent } from './building/building-view/building-view.component';
import { BuildingServiceBase } from './building/building-service/building.service.base';
import { BuildingServiceImpl } from './building/building-service/building.service.impl';
import { ImageServiceBase } from './image/image-service/image.service.base';
import { ImageServiceImpl } from './image/image-service/image.service.impl';
import { MainViewComponent } from './main-view/main-view.component';

import { CarouselModule } from 'ng2-bootstrap/carousel';

@NgModule({
    declarations: [
        AppComponent,
        BuildingAdminComponent,
        BuildingDetailsComponent,
        BuildingDetailViewComponent,
        BuildingListComponent,
        BuildingViewComponent,
        MainViewComponent
    ],
    exports: [
        BuildingAdminComponent,
        BuildingDetailsComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        CarouselModule.forRoot()
    ],
    providers: [
        {
            provide: BuildingServiceBase, useClass: BuildingServiceImpl
        },
        {
            provide: ImageServiceBase, useClass: ImageServiceImpl
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
