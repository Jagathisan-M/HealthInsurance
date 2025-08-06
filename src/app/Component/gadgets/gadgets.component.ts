import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { gadgets, GadgetsService } from '../../Service/gadgets.service';

@Component({
  selector: 'app-gadgets',
  templateUrl: './gadgets.component.html',
  styleUrl: './gadgets.component.css'
})
export class GadgetsComponent {

  _gadgets: gadgets[] = [];
  constructor(private router: Router, private service: GadgetsService) {
    this._gadgets = this.service._gadgets;
  }

  GadgetDetail(ID: number) {
    this.router.navigate(["/Gadgets", ID]);
  }
}


