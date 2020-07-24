import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  MOCKED_USERNAME: string = 'user';
  MOCKED_PASSWORD: string = 'password';

  logged: boolean = false;
  logged$: Subject<boolean> = new Subject<boolean>();
  
  constructor(private router: Router) { }

  login(username: string, password: string): void {
    if ( username === this.MOCKED_USERNAME && password === this.MOCKED_PASSWORD ) {
			this.logged$.next( true );
			this.logged = true;
		} else {
			this.logged$.next( false );
			this.logged = false;
		}
  }

  isLogged$(): Subject<boolean> {
		return this.logged$;
  }
  
  logout(): void {
		if ( this.logged$ ) {
			this.logged$.next( false );
			this.router.navigate( [ '/dashboard' ] );
		} else {
			console.warn( `User is already logged off` );
		}
		this.logged = false;
  }
  
  public isLogged(): boolean {
		return this.logged;
	}
}
