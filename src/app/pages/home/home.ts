import { Component } from '@angular/core';
import { Hero } from '../../components/landing/hero/hero';
import { Features } from '../../components/landing/features/features';
import { Advantages } from '../../components/landing/advantages/advantages';
import { Masc } from '../../components/landing/masc/masc';
import { Security } from '../../components/landing/security/security';
import { FAQ } from '../../components/landing/faq/faq';

@Component({
  selector: 'app-home',
  imports: [Hero, Features, Advantages, Masc, Security, FAQ ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
