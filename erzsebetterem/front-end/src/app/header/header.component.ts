import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectedNavOption = new EventEmitter<string>();

  onSelectMenuOption(menuOption: string) {
    this.selectedNavOption.emit(menuOption);
  }

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onLoadEditMemberPage(): void {
    this.router.navigate(['/members', 'member-list', 'member-edit']);
  }

  onInactiveMember(): void {

  }

  onLoadDeleteMemberPage(): void {
    this.router.navigate(['/members', 'member-list', 'member-delete']);
  }

  //Todo http request refresh the member list and route the app to member-list
  onReload() {
    this.router.navigate(['members/members-list'], {relativeTo: this.route});
  }

}
