import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Header } from './components/landing/header/header';
import { Hero } from './components/landing/hero/hero';
import { Features } from './components/landing/features/features';
import { Advantages } from './components/landing/advantages/advantages';
import { Contact } from './components/landing/contact/contact';
import { Security } from './components/landing/security/security';
import { FAQ } from './components/landing/faq/faq';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Hero, Features, Advantages, Security, Contact, FAQ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor(
    //Meta y Title son servicios de Angular que permiten modificar los meta tags del <head> en tiempo de ejecución, lo que es especialmente útil con SSR para mejorar el SEO y la apariencia en redes.
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
