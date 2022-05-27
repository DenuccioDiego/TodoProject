import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'todo-back-home',
  templateUrl: './back-home.component.html',
  styleUrls: ['./back-home.component.css']
})
export class BackHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public backHome(): void {
    this.router.navigateByUrl("/todo")
  }

}
