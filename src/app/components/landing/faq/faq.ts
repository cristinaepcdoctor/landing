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
            question: "¿Qué es LexFolder y para quién está diseñado?",
            answer:
                "LexFolder es un software de gestión integral diseñado específicamente para despachos de abogados, mediadores, árbitros y profesionales del derecho. Permite gestionar expedientes, documentos, comunicaciones, facturación y procedimientos de resolución alternativa de disputas (MASC) desde una única plataforma online.",
        },
        {
            question: "¿Necesito instalar algún software para usar LexFolder?",
            answer:
                "No. LexFolder es una plataforma 100% online (SaaS). Solo necesitas un navegador web y conexión a internet. Funciona en cualquier dispositivo: ordenador, tablet o teléfono móvil, sin necesidad de instalaciones ni actualizaciones manuales.",
        },
        {
            question: "¿LexFolder cumple con el RGPD y la normativa de protección de datos?",
            answer:
                "Sí. LexFolder está diseñado con el cumplimiento normativo del RGPD como prioridad. Implementamos cifrado SSL en todas las comunicaciones, controles de acceso granulares, copias de seguridad automáticas y todas las medidas técnicas necesarias para proteger los datos personales de tus clientes.",
        },
        {
            question: "¿Qué son los procedimientos MASC y cómo ayuda LexFolder?",
            answer:
                "MASC son los Medios Adecuados de Solución de Controversias, que incluyen mediación, arbitraje, conciliación y negociación. LexFolder ofrece herramientas especializadas para gestionar estos procedimientos: plantillas de actas, seguimiento de procesos, comunicación segura entre partes, gestión de plazos y documentación automatizada.",
        },
        {
            question: "¿Qué es la firma electrónica Click & Sign?",
            answer:
                "Click & Sign es el sistema de firma electrónica integrado en LexFolder que permite firmar documentos online con plena validez legal. Tus clientes pueden firmar documentos desde cualquier dispositivo sin necesidad de desplazarse, agilizando los procesos de tu despacho.",
        },
        {
            question: "¿Qué es Veri*Factu y cómo funciona en LexFolder?",
            answer:
                "Veri*Factu es el sistema de facturación electrónica conforme a la normativa vigente en España. LexFolder incorpora la emisión de facturas electrónicas adaptada a los requisitos legales, permitiéndote facturar a tus clientes de forma rápida, segura y conforme a la ley.",
        },
        {
            question: "¿Puedo migrar mis datos actuales a LexFolder?",
            answer:
                "Sí. LexFolder ofrece asistencia en la migración de datos para que la transición sea lo más sencilla posible. Nuestro equipo de soporte te guiará durante todo el proceso para que puedas empezar a trabajar con toda tu información disponible.",
        },
        {
            question: "¿Los certificados de envío y apertura tienen validez legal?",
            answer:
                "Sí. LexFolder genera certificados de envío y apertura de comunicaciones con plena validez legal. Estos certificados acreditan tanto la entrega del contenido como la fecha y hora exacta de su lectura, proporcionando prueba fehaciente en caso de disputas.",
        },
    ]
}
