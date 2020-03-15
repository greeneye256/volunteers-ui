import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BranchService } from './services/branch/branch.service';
import { HomeComponent } from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { BranchFormComponent } from './components/create-branch/branch-form.component';
import { BranchesListComponent } from './components/branches-list/branches-list.component';
import { EditBranchComponent } from './components/edit-branch/edit-branch.component';
import { MembersListComponent } from './components/member/members-list/members-list.component';
import { MemberCreateComponent } from './components/member/member-create/member-create.component';
import { MemberEditComponent } from './components/member/member-edit/member-edit.component';
import { VolunteerHoursComponent } from './components/volunteer-hours/volunteer-hours.component';
import { GenderPipe } from './pipes/gender.pipe';
import { LoginComponent } from './components/login/login.component';
import {JwtInterceptor} from './interceptors/jwt.interceptor';
import {ErrorInterceptor} from './interceptors/error.interceptor';
import {SignUpComponent} from './components/user/sign-up/sign-up.component';
import { UserslistComponent } from './components/user/userslist/userslist.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { AddfeeComponent } from './components/membership-fee/addfee/addfee.component';
import { FeelistComponent } from './components/membership-fee/feelist/feelist.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BranchFormComponent,
        BranchesListComponent,
        EditBranchComponent,
        MembersListComponent,
        MemberCreateComponent,
        MemberEditComponent,
        VolunteerHoursComponent,
        GenderPipe,
        LoginComponent,
        SignUpComponent,
        UserslistComponent,
        EditUserComponent,
        AddfeeComponent,
        FeelistComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        NgMultiSelectDropDownModule.forRoot()
    ],
  providers: [BranchService, {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
