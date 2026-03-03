import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
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
    { href: '#contacto', label: 'Contacto' },
  ];
}
