import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

   filteredMember: string = '';

  members: Member[] = [
    new Member(1, 'Kiss Misi', '2022-12-01', '2023-01-01','active'),
    new Member(2, 'Nagy Misi', '2022-12-01', '2023-01-01','active'),
    new Member(3, 'Toth Misi', '2022-12-01', '2023-01-01', 'active'),
    new Member(4, 'Apro Misi', '2022-12-01', '2023-01-01', 'active'),
    new Member(5, 'Melak Misi', '2022-12-01', '2023-01-01', 'active')
  ];

  selected: any;

  constructor() { }

  ngOnInit(): void {
  }

  hidingAccordion(member: Member) {
    this.selected = member.name;
  }

  onMemberSelected(member: Member) {

  }

}
