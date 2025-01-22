import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingPageComponent { }
