import { Subject } from 'rxjs';
import { AuthenticationService } from './shared/authentication.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'animal';
  
  isLogged$: Subject<boolean>;

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router) {}
  
    goToLogin(): void {
      this.router.navigate( [ '/login' ] );
    }
  
    ngOnInit(): void {
      this.isLogged$ = this.authenticationService.isLogged$();
    }  
}
