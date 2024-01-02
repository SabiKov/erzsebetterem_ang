import { RouterModule, Routes } from "@angular/router";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { MemberDeleteComponent } from "./members/member-list/member-delete/member-delete.component";
import { MemberEditComponent } from "./members/member-list/member-edit/member-edit.component";
import { MemberStatusComponent } from "./members/member-list/member-status/member-status.component";
import { NgModule } from "@angular/core";
import { MembersComponent } from "./members/members.component";
import { MemberNewComponent } from "./member-new/member-new.component";
import { ManagePriceComponent } from "./manage-price/manage-price.component";
import { MaintenanceComponent } from "./maintenance/maintenance.component";
import { MemberComponent } from "./members/member-list/member/member.component";

const routes: Routes = [
  { path: '', component: MemberListComponent },
  { path: 'members', component: MembersComponent },
  { path: 'member', component: MemberComponent },
  { path: 'member-new', component: MemberNewComponent },
  { path: 'member-delete/:id', component: MemberDeleteComponent },
  { path: 'member-edit/:id', component: MemberEditComponent },
  { path: 'member-status/:id', component: MemberStatusComponent },
  { path: 'manage-price', component: ManagePriceComponent },
  { path: 'maintenance', component: MaintenanceComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
