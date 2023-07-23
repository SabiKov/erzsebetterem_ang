import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-member-delete',
  templateUrl: './member-delete.component.html',
  styleUrls: ['./member-delete.component.css']
})
export class MemberDeleteComponent implements OnInit {

  private id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Todo find the user by id using HTTP request
    this.id = this.route.snapshot.params['id'];
    // Can be retrieve http params via snapshots but proper reactive way to access param using subscriber
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();
  }

  onDeleteMember() {

  }

}
