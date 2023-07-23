import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

import { Member } from '../../member.model';
import {Router} from "@angular/router";
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  @Input() member: Member;
  @Input() index: number;
  indexStr: string;

  @Output() memberSelected = new EventEmitter<void>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.indexStr = this.index.toString();
  }

  onSelected(selectedButton: string, id: number) {
    this.memberSelected.emit();
    if(selectedButton === 'renewMembership') {
      console.log(selectedButton + "id: " + id);
      console.log(selectedButton);
      this.router.navigate(['/member']);
    }
    else if(selectedButton === 'editMember') {
      console.log(selectedButton + "id: " + id);
      this.router.navigate(['/member-edit']);
    }
    else if(selectedButton === 'inactivateMember') {
      console.log(selectedButton + "id: " + id);
      this.router.navigate(['/member-status']);
    }
    else if(selectedButton === 'deleteMember') {
      console.log(selectedButton + "id: " + id);
      this.router.navigate(['/member-delete', id, 'delete'], {queryParams: {allowDelete: '1'},
      fragment: 'deleting'});
    }
    else {
      console.log(selectedButton);
    }
  }

}
