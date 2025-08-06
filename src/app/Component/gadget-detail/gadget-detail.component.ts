import { Component } from '@angular/core';
import { gadgets, GadgetsService } from '../../Service/gadgets.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gadget-detail',
  templateUrl: './gadget-detail.component.html',
  styleUrl: './gadget-detail.component.css'
})
export class GadgetDetailComponent {
  
  _gadget: gadgets | undefined;

  constructor(private router: Router, private route : ActivatedRoute, private service: GadgetsService) {
    if(route.snapshot.paramMap.has("ID"))
    {
      let ID = route.snapshot.paramMap.get("ID") ?? 0;
      this._gadget = this.service._gadgets.find(item => item.gadgetId == ID);
    }    
  }

  GotoShowcase() {
    this.router.navigate(["/Gadgets"]);
  }
}
