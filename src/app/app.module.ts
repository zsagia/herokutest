import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AuthModule } from './auth/auth.module';

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
import { UserAdminComponent } from './user/admin/user-admin.component';
import { UserEditComponent } from './user/edit/user-edit.component';
import { UserServiceBase } from './user/service/user.service.base';
import { UserServiceImpl } from './user/service/user.service.impl';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthenticationService } from './log-in/service/authentication.service';
import { AdminComponent } from './admin/admin.component';
import { AdminAuthGuard } from './admin/authguard/admin.auth-guard';

@NgModule({
    declarations: [
        AppComponent,
        BuildingAdminComponent,
        BuildingDetailsComponent,
        BuildingDetailViewComponent,
        BuildingListComponent,
        BuildingViewComponent,
        MainViewComponent,
        UserAdminComponent,
        UserEditComponent,
        SignUpComponent,
        LogInComponent,
        AdminComponent
    ],
    exports: [
        BuildingAdminComponent,
        BuildingDetailsComponent,
        
    ],
    imports: [
        AuthModule,
        AppRoutingModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        CarouselModule.forRoot(),
        SimpleNotificationsModule.forRoot()
    ],
    providers: [
        {
            provide: BuildingServiceBase, useClass: BuildingServiceImpl
        },
        {
            provide: ImageServiceBase, useClass: ImageServiceImpl
        },
        {
            provide: UserServiceBase, useClass: UserServiceImpl
        },
        AuthenticationService,
        AdminAuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
