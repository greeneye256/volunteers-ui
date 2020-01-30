import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BranchService } from './services/branch/branch.service';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { CreateBranchComponent } from './components/create-branch/create-branch.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GoodhomeComponent } from './components/goodhome/goodhome.component';
import { ListvolunteersComponent } from './components/listvolunteers/listvolunteers.component';
import { CreatevolunteerComponent } from './components/createvolunteer/createvolunteer.component';
import {VolunteersListComponent} from './components/volunteers/volunteers-list.component';
import { NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';

@NgModule({
    declarations: [
        AppComponent,
        AdminComponent,
        HomeComponent,
        CreateBranchComponent,
        GoodhomeComponent,
        ListvolunteersComponent,
        CreatevolunteerComponent,
        VolunteersListComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [BranchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
