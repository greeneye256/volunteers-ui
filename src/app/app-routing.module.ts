import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BranchFormComponent} from './components/create-branch/branch-form.component';
import {BranchesListComponent} from './components/branches-list/branches-list.component';
import {EditBranchComponent} from './components/edit-branch/edit-branch.component';
import {MemberCreateComponent} from './components/member/member-create/member-create.component';
import {MembersListComponent} from './components/member/members-list/members-list.component';
import {MemberEditComponent} from './components/member/member-edit/member-edit.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {UserRole} from './model/userRole';
import {SignUpComponent} from './components/user/sign-up/sign-up.component';
import {UserslistComponent} from './components/user/userslist/userslist.component';
import {EditUserComponent} from './components/user/edit-user/edit-user.component';
import {AddfeeComponent} from './components/membership-fee/addfee/addfee.component';
import {FeelistComponent} from './components/membership-fee/feelist/feelist.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'memberslist',
    component: MembersListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/member/:id',
    component: MemberEditComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN, UserRole.ROLE_WRITE]}
  },
  {
    path: 'brancheslist',
    component: BranchesListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/branch/:id',
    component: EditBranchComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN]}
  },
  {
    path: 'edit/user/:id',
    component: EditUserComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN]}
  },
  {
    path: 'users',
    component: UserslistComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN]}
  },
  {
    path: 'membercreate',
    component: MemberCreateComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN, UserRole.ROLE_WRITE]}
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN]}
  },
  {
    path: 'branchform',
    component: BranchFormComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN]}
  },
  {
    path: 'add-fee/:id',
    component: AddfeeComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN, UserRole.ROLE_WRITE]}
  },
  {
    path: 'feelist/:id',
    component: FeelistComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN, UserRole.ROLE_WRITE]}
  },
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
