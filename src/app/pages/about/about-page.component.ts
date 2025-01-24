import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent implements OnInit {
  private title = inject(Title);
  private metaTags = inject(Meta);
  ngOnInit(): void {
    this.title.setTitle('About Page');
    this.metaTags.updateTag({ name: 'description', content: 'This is my About Page' });
    this.metaTags.updateTag({ name: 'og:title', content: 'About Page' });
    this.metaTags.updateTag({ name: 'keywords', content: 'SSR, Angular, Zoneless.js' });

  }
}
