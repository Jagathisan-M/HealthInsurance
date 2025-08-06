import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GadgetsService {

 _gadgets: gadgets[] = [
    {
      gadgetId: 1,
      gadgetName: "Vivo",
      itemName: "mobile",
      price: 1000
    },
     {
      gadgetId: 2,
      gadgetName: "Samsung",
      itemName: "AC",
      price: 25000
    },
     {
      gadgetId: 3,
      gadgetName: "LG",
      itemName: "Washing Machine",
      price: 18000
    },
     {
      gadgetId: 4,
      gadgetName: "Apple",
      itemName: "MacBoook",
      price: 100000
    }
  ]

  constructor() { }
}

export interface gadgets
{
  gadgetId : number,
  gadgetName : string,
  itemName : string,
  price : number
}
