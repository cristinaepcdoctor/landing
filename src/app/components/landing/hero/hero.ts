import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  trustSignals = [
    {
      icon: 'verified_user',  
      title: 'Seguridad RGPD',
      text: 'Cumplimiento normativo europeo',
    },
    {
      icon: 'language',
      title: 'Acceso 100% online',
      text: 'Desde cualquier dispositivo',
    },
    {
      icon: 'bolt',
      title: 'Sincronización en tiempo real',
      text: 'Equipo siempre actualizado',
    },
  ];
}
