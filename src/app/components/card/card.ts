import { Component, Input } from '@angular/core';
import { Perfume } from '../../models/perfume.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() dados?:Perfume




}
