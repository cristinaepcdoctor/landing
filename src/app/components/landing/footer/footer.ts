import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();

  footerLinks = {
    condiciones: [
      { label: 'Términos y condiciones', href: 'https://lexfolder.net/condiciones' },
      { label: 'Política de cookies', href: 'https://lexfolder.net/cookies' },
      { label: 'Política de privacidad', href: 'https://lexfolder.net/privacidad' },
      { label: 'Política de seguridad', href: 'https://lexfolder.net/seguridad' },
    ],
    soporte: [
      { label: 'Contrato de tratamiento', href: 'https://lexfolder.net/contrato' },
      { label: 'Guía de usuario', href: 'https://lexfolder.net/guia' },
      { label: 'Aviso legal', href: 'https://lexfolder.net/legal' },
    ],
  };

  footerSections = [
    { title: 'Políticas y condiciones', links: this.footerLinks.condiciones },
    { title: 'Soporte', links: this.footerLinks.soporte },
  ];
}
