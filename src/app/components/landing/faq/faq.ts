import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-faq',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './faq.html',
    styleUrl: './faq.css',
})
export class FAQ {
    faqs = [
        {
            question: "Que es LexFolder y para quien esta disenado?",
            answer:
                "LexFolder es un software de gestion integral disenado especificamente para despachos de abogados, mediadores, arbitros y profesionales del derecho. Permite gestionar expedientes, documentos, comunicaciones, facturacion y procedimientos de resolucion alternativa de disputas (MASC) desde una unica plataforma online.",
        },
        {
            question: "Necesito instalar algun software para usar LexFolder?",
            answer:
                "No. LexFolder es una plataforma 100% online (SaaS). Solo necesitas un navegador web y conexion a internet. Funciona en cualquier dispositivo: ordenador, tablet o telefono movil, sin necesidad de instalaciones ni actualizaciones manuales.",
        },
        {
            question: "LexFolder cumple con el RGPD y la normativa de proteccion de datos?",
            answer:
                "Si. LexFolder esta disenado con el cumplimiento normativo del RGPD como prioridad. Implementamos cifrado SSL en todas las comunicaciones, controles de acceso granulares, copias de seguridad automaticas y todas las medidas tecnicas necesarias para proteger los datos personales de tus clientes.",
        },
        {
            question: "Que son los procedimientos MASC y como ayuda LexFolder?",
            answer:
                "MASC son los Medios Adecuados de Solucion de Controversias, que incluyen mediacion, arbitraje, conciliacion y negociacion. LexFolder ofrece herramientas especializadas para gestionar estos procedimientos: plantillas de actas, seguimiento de procesos, comunicacion segura entre partes, gestion de plazos y documentacion automatizada.",
        },
        {
            question: "Que es la firma electronica Click & Sign?",
            answer:
                "Click & Sign es el sistema de firma electronica integrado en LexFolder que permite firmar documentos online con plena validez legal. Tus clientes pueden firmar documentos desde cualquier dispositivo sin necesidad de desplazarse, agilizando los procesos de tu despacho.",
        },
        {
            question: "Que es Veri*Factu y como funciona en LexFolder?",
            answer:
                "Veri*Factu es el sistema de facturacion electronica conforme a la normativa vigente en Espana. LexFolder incorpora la emision de facturas electronicas adaptada a los requisitos legales, permitiendote facturar a tus clientes de forma rapida, segura y conforme a la ley.",
        },
        {
            question: "Puedo migrar mis datos actuales a LexFolder?",
            answer:
                "Si. LexFolder ofrece asistencia en la migracion de datos para que la transicion sea lo mas sencilla posible. Nuestro equipo de soporte te guiara durante todo el proceso para que puedas empezar a trabajar con toda tu informacion disponible.",
        },
        {
            question: "Los certificados de envio y apertura tienen validez legal?",
            answer:
                "Si. LexFolder genera certificados de envio y apertura de comunicaciones con plena validez legal. Estos certificados acreditan tanto la entrega del contenido como la fecha y hora exacta de su lectura, proporcionando prueba fehaciente en caso de disputas.",
        },
    ]

}