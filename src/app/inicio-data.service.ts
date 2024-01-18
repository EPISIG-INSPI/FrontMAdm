import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InicioDataService {

  getPublicationData() {
    return {
      scientificPublications: 30,
      articles: 50,
      generalDocuments: 20,
      reports: 15,
      proformas: 10,
      materialGoods: 25,
    };
  }
}
