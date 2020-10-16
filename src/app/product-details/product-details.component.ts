import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Importer les données
import { products } from '../productList';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  // AJout de la propriété
  product;

  // Utilisation de la fonction ActivatedRoute
  // fournie par Angular Router. 
  // ActivatedRoute contient les informations sur 
  // l'URL demandée
  constructor(
    private route: ActivatedRoute,
  ) { }

  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
