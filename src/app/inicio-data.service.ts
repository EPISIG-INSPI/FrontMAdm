import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InicioDataService {

  getPublicationData() {
    return{
      labels: ["Internet","Fisico","Enciclopedia"],
      datasets: [
        {
          label: 'scientificPublications',
          data: [32,43,23],
        },
        {
          label: 'articles',
          data: [43,43,75],
        },
        {
          label: 'generalDocuments',
          data: [32,44,25],
        },
        {
          label: 'reports',
          data: [43,23,44],
        },
        {
          label: 'proformas',
          data: [43,65,23],
        },
        {
          label: 'materialGoods',
          data: [65,23,65],
        },
      ]

    }
  }
  getCientificData() {
    return {
      labels: ["Internet","Fisico","Enciclopedia"],
      datasets: [
        {
          label: 'DocumenPublicación cientificatos',
          data: [73,23,64],
        },
        {
          label: 'Articulos',
          data: [64,34,75],
        },
        {
          label: 'Documentos',
          data: [87,23,54],
        },
        {
          label: 'Articulos',
          data: [85,12,43],
        },
        {
          label: 'Reportes',
          data: [41,12,43],
        },
        {
          label: 'Material del bueno',
          data: [15,20,43],
        },
      ]
    }
  }
}