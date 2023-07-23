import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  private id: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Todo find the user by id using HTTP request
    this.id = +this.route.snapshot.params['id'];
    console.log(this.id);
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log(this.id);
      }
    );
  }

}
