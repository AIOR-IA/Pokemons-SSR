import { isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingPageComponent {
  private title = inject(Title);
  private metaTags = inject(Meta);
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    if(!isPlatformServer(this.platform)) {
      document.title = 'Pricing Page';

      console.log(this.platform);
    }
    this.title.setTitle('Pricing Page');
    this.metaTags.updateTag({ name: 'description', content: 'This is my Pricing Page' });
    this.metaTags.updateTag({ name: 'og:title', content: 'Pricing Page' });
    this.metaTags.updateTag({ name: 'keywords', content: 'SSR, Angular, Zoneless.js' });

  }
}
