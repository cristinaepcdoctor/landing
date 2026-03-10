import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  mobileOpen = false;

  toggleMenu() {
    this.mobileOpen = !this.mobileOpen;
  }

  navLinks = [
    { href: '#caracteristicas', label: 'Características' },
    { href: '#ventajas', label: 'Ventajas' },
    { href: '#masc', label: 'MASC' },
    { href: '#seguridad', label: 'Seguridad' },
    { href: '#faq', label: 'FAQ' },
    { href: '/contacto', label: 'Contacto' },
  ];
}
