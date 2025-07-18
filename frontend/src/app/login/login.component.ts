import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Méthode déclenchée lors du clic sur le bouton "Se connecter"
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
  
      this.authService.login(email, password).subscribe(
        (response) => {
          if (response.message) {
            this.successMessage = response.message; // Message de succès
            this.errorMessage = ''; // Efface le message d'erreur
            this.router.navigate(['/admin-panel']); // Redirige vers le panneau admin
          }
        },
        (error) => {
          if (error.error && error.error.error) {
            this.errorMessage = error.error.error; // Affiche le message d'erreur du backend
          } else {
            this.errorMessage = 'Une erreur est survenue. Veuillez réessayer.';
          }
          this.successMessage = '';
        }
      );
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs correctement.';
    }
  }
}  