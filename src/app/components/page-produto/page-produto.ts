import { Component, OnInit } from '@angular/core';
import { Card } from "../card/card";
import { Perfume } from '../../models/perfume.model';
import { PerfumeService } from '../../services/perfume.service';

@Component({
  selector: 'app-page-produto',
  imports: [Card],
  templateUrl: './page-produto.html',
  styleUrl: './page-produto.css'
})
export class PageProduto implements OnInit {
 
 perfumes: Perfume[] = [];

  constructor(private perfumeService: PerfumeService){}
  
  ngOnInit(): void {
    this.perfumeService.getAll().subscribe({
      next: (body) => this.perfumes = body
    })
 }
}
