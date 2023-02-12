import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr/toastr/toastr.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private fireauth: AngularFireAuth,
    private router: Router // private toastr: ToastrService
  ) {}

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('token', 'true');
        alert('User logged in successfully');

        this.router.navigateByUrl('/');
      },
      (err) => {
        alert(err.message);

        this.router.navigate(['/login']);
      }
    );
  }

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      () => {
        alert('User created successfully');
        this.router.navigate(['/login']);
      },
      (err) => {
        // this.toastr.error(err.message);
        alert(err.message);

        this.router.navigate(['/register']);
      }
    );
  }

  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('token');
        alert('User logged out successfully');

        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  public authenticated() {
    return localStorage.getItem('token') === 'true';
  }
}
