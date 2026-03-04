import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-masc-section',
  imports: [CommonModule],
  templateUrl: './masc-section.html',
  styleUrl: './masc-section.css',
})
export class MascSection {
  mascFeatures = [
    {
      icon: 'handshake',
      title: 'Mediación',
      description:
        'Gestiona procedimientos de mediación con plantillas específicas, seguimiento detallado del proceso, actas automatizadas y comunicación segura entre las partes.',
      details: [
        'Plantillas de actos y acuerdos',
        'Seguimiento del proceso completo',
        'Comunicación cifrada entre partes',
        'Archivo digital del expediente de mediación',
      ],
    },
    {
      icon: 'balance',
      title: 'Arbitraje',
      description:
        'Plataforma completa para la gestión de procedimientos arbitrales con documentación automatizada, plazos controlados y trazabilidad total.',
      details: [
        'Control de plazos procesales',
        'Gestión documental integrada',
        'Notificaciones automáticas',
        'Laudos y resoluciones digitales',
      ],
    },
    {
      icon: 'forum',
      title: 'Conciliación y negociación',
      description:
        'Facilita procesos de conciliación y negociación con herramientas de comunicación fluida, documentación automatizada y seguimiento del acuerdo.',
      details: [
        'Canales de comunicación seguros',
        'Documentación automatizada',
        'Registro de sesiones',
        'Seguimiento de acuerdos y compromisos',
      ],
    },
  ];
}
