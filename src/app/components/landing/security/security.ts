import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-security',
    imports: [CommonModule],
    templateUrl: './security.html',
    styleUrl: './security.css',
})
export class Security {
    stats = [
        {
            value: "100%",
            label: "Online",
            description: "Acceso desde cualquier dispositivo",
        },
        {
            value: "RGPD",
            label: "Conforme",
            description: "Maxima proteccion de datos",
        },
        {
            value: "24/7",
            label: "Disponible",
            description: "Acceso ininterrumpido",
        },
        {
            value: "SSL",
            label: "Cifrado",
            description: "Comunicaciones seguras",
        },
    ]
}