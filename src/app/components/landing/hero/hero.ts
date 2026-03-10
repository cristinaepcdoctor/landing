import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
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
