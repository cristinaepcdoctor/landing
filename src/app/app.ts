import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/landing/header/header';
import { Footer } from './components/landing/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, RouterOutlet,  Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit() {
    this.title.setTitle('LexFolder | Software de gestión para despachos de abogados');
    this.meta.updateTag({
      name: 'description',
      content:
        'Gestiona tu despacho profesional con LexFolder. Gestión documental, videoconferencias, firma electrónica, facturación Veri*Factu y procedimientos MASC en una sola plataforma.',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'LexFolder | Software de gestión para despachos de abogados',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Gestiona tu despacho profesional con LexFolder. Gestión documental, videoconferencias, firma electrónica y MASC en una sola plataforma.',
    });
  }
}
