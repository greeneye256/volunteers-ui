import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BranchService } from './services/branch/branch.service';
import { HomeComponent } from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreatevolunteerComponent } from './components/create-volunteer/createvolunteer.component';
import {VolunteersListComponent} from './components/volunteers-list/volunteers-list.component';
import { NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { BranchFormComponent } from './components/create-branch/branch-form.component';
import { EditVolunteerComponent } from './components/edit-volunteer/edit-volunteer.component';
import { BranchesListComponent } from './components/branches-list/branches-list.component';
import { EditBranchComponent } from './components/edit-branch/edit-branch.component';
import { MembersListComponent } from './components/member/members-list/members-list.component';
import { MemberCreateComponent } from './components/member/member-create/member-create.component';
import { MemberEditComponent } from './components/member/member-edit/member-edit.component';
import { VolunteerHoursComponent } from './components/volunteer-hours/volunteer-hours.component';
import { GenderPipe } from './pipes/gender.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CreatevolunteerComponent,
        VolunteersListComponent,
        BranchFormComponent,
        EditVolunteerComponent,
        BranchesListComponent,
        EditBranchComponent,
        MembersListComponent,
        MemberCreateComponent,
        MemberEditComponent,
        VolunteerHoursComponent,
        GenderPipe
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
