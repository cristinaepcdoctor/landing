import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  ctaPoints = [
    'Sin necesidad de instalación',
    'Soporte técnico incluido',
    'Migración asistida de datos',
    'Cumplimiento normativo RGPD',
  ];
}
