import { Component } from '@angular/core';
import { ConfigurationService } from './Config/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HealthCareInsuranceUI';

  constructor(public configService : ConfigurationService)
  {

  }
}
