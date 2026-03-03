import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  trustItems = [
    {
      icon: 'shield',
      title: 'Seguridad RGPD',
      text: 'Cumplimiento normativo europeo',
    },
    {
      icon: 'language',
      title: 'Acceso 100% online',
      text: 'Desde cualquier dispositivo, en cualquier momento',
    },
    {
      icon: 'bolt',
      title: 'Sincronización en tiempo real',
      text: 'Actualizaciones instantáneas en todos tus dispositivos',
    },
  ];
}
