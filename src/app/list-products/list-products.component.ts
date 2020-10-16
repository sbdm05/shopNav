import { Component, OnInit } from '@angular/core';

// Importer les données
import { products } from '../productList';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  //Accèder aux données en créant une variable
  products = products;

  constructor() { }

  ngOnInit(): void {
  }

}
