import { Component } from '@angular/core';

interface Benefit {
    icon: string;
    title: string;
    description: string;
    highlights: string[];
}

@Component({
    selector: 'app-advantages',
    standalone: true,
    templateUrl: './advantages.html',
    styleUrl: './advantages.css',
})
export class Advantages {
    benefits: Benefit[] = [
        {
            icon: 'gpp_good',  
            title: 'Seguridad y privacidad garantizadas',
            description: 'Cumplimiento total del RGPD. Los datos de tu despacho y de tus clientes están protegidos con los más altos estándares de seguridad y cifrado.',
            highlights: ['Cifrado de datos', 'Cumplimiento RGPD', 'Copias de seguridad'],
        },
        {
            icon: 'computer', 
            title: 'Acceso desde cualquier lugar',
            description: 'Trabaja desde la oficina, desde casa o en desplazamiento. Accede a toda la información de tu despacho desde cualquier dispositivo con conexión a internet.',
            highlights: ['Teletrabajo', 'Multidispositivo', 'Acceso 24/7'],
        },
        {
            icon: 'trending_up', 
            title: 'Productividad multiplicada',
            description: 'Automatiza tareas repetitivas, centraliza información y elimina la duplicación de trabajo. Dedica más tiempo a tus clientes y menos a la gestión.',
            highlights: ['Automatización', 'Centralización', 'Eficiencia'],
        },
        {
            icon: 'sync',  
            title: 'Sincronización en tiempo real',
            description: 'Toda la información actualizada al instante para ti y tu equipo. Sin necesidad de sincronizaciones manuales ni conflictos de versiones.',
            highlights: ['Actualización instantánea', 'Trabajo en equipo', 'Sin conflictos'],
        },
    ];
}