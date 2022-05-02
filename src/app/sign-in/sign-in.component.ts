import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const {userId, cid} = this.activatedRoute.snapshot.params;
    console.log(userId, cid);

    console.log(this.activatedRoute.snapshot.params['userId'], this.activatedRoute.snapshot.params['cid']);
    console.log(this.activatedRoute.snapshot.paramMap.get('userId'), this.activatedRoute.snapshot.paramMap.get('cid'));

    console.log(this.activatedRoute.snapshot);
  }

}
