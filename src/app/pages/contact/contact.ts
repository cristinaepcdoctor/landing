import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  sending = signal(false);
  sent = signal(false);
  error = signal(false);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.pattern(/^\+?\d{7,15}$/)]],
    company: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit() {
    if (this.form.invalid) return;

    this.sending.set(true);
    this.error.set(false);

    const endpoint = 'https://api.lexfolder.com/contact'; // Cambiar esto cuando tengamos el endpoint real

    this.http.post(endpoint, this.form.value).subscribe({
      next: () => {
        this.sending.set(false);
        this.sent.set(true);
        this.form.reset();
      },
      error: () => {
        this.sending.set(false);
        this.error.set(true);
      },
    });
  }
}
