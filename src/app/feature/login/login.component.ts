import { AuthenticationService } from './../../shared/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  @Input() username: string;
  @Input() password: string;
  invalidLogin: boolean;
  
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.authenticationService.isLogged$()
    .subscribe( result => { result ? this.router.navigate(['/dashboard']) : this.invalidLogin = true;
  });
  }

  login(): void {
		this.authenticationService.login( this.username, this.password );
	}

	cancel(): void {
		this.router.navigate( [ '/dashboard' ] );
  }
  
}
