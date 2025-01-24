import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent {
  private title = inject(Title);
  private metaTags = inject(Meta);
  ngOnInit(): void {
    this.title.setTitle('Contact Page');
    this.metaTags.updateTag({ name: 'description', content: 'This is my Contact Page' });
    this.metaTags.updateTag({ name: 'og:title', content: 'Contact Page' });
    this.metaTags.updateTag({ name: 'keywords', content: 'SSR, Angular, Zoneless.js' });

  }
}
