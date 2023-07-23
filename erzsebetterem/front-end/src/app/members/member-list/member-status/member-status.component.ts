import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-member-status',
  templateUrl: './member-status.component.html',
  styleUrls: ['./member-status.component.css']
})
export class MemberStatusComponent implements OnInit {
  private id: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Todo find the user by id using HTTP request
    this.id = this.route.snapshot.params['id'];
  }

}
