import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Benefit {
    icon: string;
    title: string;
    description: string;
    highlights: string[];
}

@Component({
    selector: 'app-advantages',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './advantages.html',
    styleUrl: './advantages.css',
})
export class Advantages {
    benefits: Benefit[] = [
        {
            icon: 'shield-check',
            title: 'Seguridad y privacidad garantizadas',
            description:
                'Cumplimiento total del RGPD. Los datos de tu despacho y de tus clientes están protegidos con los más altos estándares de seguridad y cifrado.',
            highlights: ['Cifrado de datos', 'Cumplimiento RGPD', 'Copias de seguridad'],
        },
        {
            icon: 'laptop',
            title: 'Acceso desde cualquier lugar',
            description:
                'Trabaja desde la oficina, desde casa o en desplazamiento. Accede a toda la información de tu despacho desde cualquier dispositivo con conexión a internet.',
            highlights: ['Teletrabajo', 'Multidispositivo', 'Acceso 24/7'],
        },
        {
            icon: 'trending-up',
            title: 'Productividad multiplicada',
            description:
                'Automatiza tareas repetitivas, centraliza información y elimina la duplicación de trabajo. Dedica más tiempo a tus clientes y menos a la gestión.',
            highlights: ['Automatización', 'Centralización', 'Eficiencia'],
        },
        {
            icon: 'refresh-cw',
            title: 'Sincronización en tiempo real',
            description:
                'Toda la información actualizada al instante para ti y tu equipo. Sin necesidad de sincronizaciones manuales ni conflictos de versiones.',
            highlights: ['Actualización instantánea', 'Trabajo en equipo', 'Sin conflictos'],
        },
    ];
}