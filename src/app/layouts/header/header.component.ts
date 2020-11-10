import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../globals/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn:boolean = false;
  constructor(private authService:AuthService,private router:Router) { 
    this.authService.loginStatus.subscribe(status=>{
      console.log('Login status', status);
      this.isLoggedIn=status;
    })
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.clear();
    this.router.navigate(['/login'])
  }

}
