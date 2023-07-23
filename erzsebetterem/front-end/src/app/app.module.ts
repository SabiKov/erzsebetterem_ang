import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberComponent } from './members/member-list/member/member.component';
import { FilterPipe } from './pipes/filter.pipe';
import { MemberEditComponent } from './members/member-list/member-edit/member-edit.component';
import { MemberNewComponent } from './member-new/member-new.component';
import { MembersComponent } from './members/members.component';
import { MemberDeleteComponent } from './members/member-list/member-delete/member-delete.component';
import {RouterModule, Routes} from "@angular/router";
import { ManagePriceComponent } from './manage-price/manage-price.component';
import {MaintenanceComponent} from "./maintenance/maintenance.component";
import { MemberStatusComponent } from './members/member-list/member-status/member-status.component';

const appRoute: Routes = [
  { path: '', component: MemberListComponent },
  { path: 'members', component: MembersComponent },
  { path: 'member-new', component: MemberNewComponent },
  { path: 'member-delete/:id', component: MemberDeleteComponent },
  { path: 'member-edit/:id', component: MemberEditComponent },
  { path: 'member-status/:id', component: MemberStatusComponent },
  { path: 'manage-price', component: ManagePriceComponent },
  { path: 'maintenance', component: MaintenanceComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MemberListComponent,
    MemberComponent,
    FilterPipe,
    MemberEditComponent,
    MemberNewComponent,
    MembersComponent,
    MemberDeleteComponent,
    ManagePriceComponent,
    MemberStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
