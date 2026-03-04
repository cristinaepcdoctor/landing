import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cta-section',
  imports: [CommonModule],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.css',
})
export class CtaSection {
  ctaPoints = [
    'Sin necesidad de instalación',
    'Soporte técnico incluido',
    'Migración asistida de datos',
    'Cumplimiento normativo RGPD',
  ];
}
