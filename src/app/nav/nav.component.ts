import { Component, Input, OnInit } from '@angular/core';
import { SignInService } from '../services/sign-in.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService :SignInService) { }

  ngOnInit(): void {
  }
  @Input() title:string=""

 async signOut(){
 this.authService.logOut(); 
 } 
}
