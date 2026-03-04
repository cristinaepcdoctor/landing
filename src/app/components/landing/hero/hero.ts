import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TrustSignal {
  icon: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  trustSignals: TrustSignal[] = [
    {
      icon: 'shield',
      title: 'Seguridad RGPD',
      text: 'Cumplimiento normativo europeo',
    },
    {
      icon: 'globe',
      title: 'Acceso 100% online',
      text: 'Desde cualquier dispositivo',
    },
    {
      icon: 'zap',
      title: 'Sincronización en tiempo real',
      text: 'Equipo siempre actualizado',
    },
  ];
}
