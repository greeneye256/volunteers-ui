import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BranchService } from './services/branch/branch.service';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { CreateBranchComponent } from './components/create-branch/create-branch.component';
import {ReactiveFormsModule} from '@angular/forms';
import { GoodhomeComponent } from './components/goodhome/goodhome.component';
import { ListvolunteersComponent } from './components/listvolunteers/listvolunteers.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    CreateBranchComponent,
    GoodhomeComponent,
    ListvolunteersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BranchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
