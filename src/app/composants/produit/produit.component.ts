import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits : Produit[] = [];
  produit: Produit = {};
  constructor(private ps: ProduitService) { }

  ngOnInit(): void {
    this.ps.getAllProducts().subscribe(res => {
      this.produits = res;
    })
  }

  afficherTout() {
    //this.produits.push({ ...this.produit }); // Spread operaor
    this.ps.addProduct(this.produit).subscribe(res => {
      this.initProduit();
    })
    this.produit = {};
  }
  initProduit() {
    this.ps.getAllProducts().subscribe(res => {
      this.produits = res;
    });
  }
  supprimerProduit(id = 0) {
    this.ps.delProduct(id).subscribe(res => {
      this.initProduit;
    });
  }
}
