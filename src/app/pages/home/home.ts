import { Component } from '@angular/core';
import { Hero } from '../../components/landing/hero/hero';
import { Features } from '../../components/landing/features/features';
import { Contact } from '../contact/contact';
import { Masc } from '../../components/landing/masc/masc';
import { FAQ } from '../../components/landing/faq/faq';
import { Advantages } from '../../components/landing/advantages/advantages';
import { Security } from '../../components/landing/security/security';

@Component({
  selector: 'app-home',
  imports: [Hero, Features, Masc, FAQ, Contact, Advantages, Security],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
