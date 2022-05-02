import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pageurl: any = [];
  pageName: string = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.pageurl = this.activatedRoute.snapshot.url;
    console.log(this.activatedRoute.snapshot.url);
    if(this.pageurl.length > 0 ){
      this.pageName = this.activatedRoute.snapshot.url[0].path;
    }
  }

}
