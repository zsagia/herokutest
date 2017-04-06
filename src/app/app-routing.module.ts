import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuildingListComponent } from './building/building-list/building-list.component';
import { MainViewComponent } from './main-view/main-view.component';
import { BuildingAdminComponent } from './building/building-admin/building-admin.component';
import { UserAdminComponent } from './user/admin/user-admin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: '', redirectTo: '/mainview', pathMatch: 'full' },
    { path: 'mainview', component: MainViewComponent },
    { path: 'buildinglist', component: BuildingListComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'buildingadmin', component: BuildingAdminComponent },
    { path: 'useradmin', component: UserAdminComponent },
    { path: 'login', component: LogInComponent },
    { path: 'signup', component: SignUpComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }