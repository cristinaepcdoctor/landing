import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
  features = [
    {
      icon: 'calendar_today',
      title: 'Calendario y tareas',
      description:
        'Organiza citas,tas, reuniones y plazos procesales con un calendario integrado. Recibe recordatorios automáticos para no perder ninguna fecha clave.',
    },
    {
      icon: 'group',
      title: 'Gestion de contactos',
      description:
        'Centraliza clientes, empresas y contactos profesionales con información completa, historial de comunicaciones y acceso rápido.',
    },
    {
      icon: 'folder_open',
      title: 'Documentos y expedientes',
      description:
        'Almacena y organiza documentos legales con control de versiones, búsqueda avanzada y acceso seguro desde cualquier dispositivo.',
    },
    {
      icon: 'videocam',
      title: 'Videoconferencias seguras',
      description:
        'Reuniones virtuales con clientes directamente desde la plataforma, sin necesidad de instalar software adicional.',
    },
    {
      icon: 'receipt',
      title: 'Facturación Veri*Factu',
      description:
        'Emisión de facturas electrónicas conforme a la normativa vigente. Sistema preparado para los requisitos de facturación legal en España.',
    },
    {
      icon: 'balance',
      title: 'Procedimientos MASC',
      description:
        'Herramientas especializadas para mediación, arbitraje y conciliación. Gestión completa de procesos de resolución alternativa de disputas.',
    },
    {
      icon: 'mark_email_read',
      title: 'Certificado de envío',
      description:
        'Certificados de entrega de comunicaciones con valor legal. Prueba fehaciente tanto de la entrega como de los contenidos enviados.',
    },
    {
      icon: 'drafts',
      title: 'Certificado de apertura',
      description:
        'Certificados de lectura con valor legal que acreditan fecha y hora exacta de apertura de las comunicaciones.',
    },
    {
      icon: 'draw',
      title: 'Click & Sign',
      description:
        'Firma electrónica de documentos online con plena validez legal. Simplifica los procesos de firma sin desplazamientos.',
    },
  ];
}
