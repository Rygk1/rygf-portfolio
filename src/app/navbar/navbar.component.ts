import { Component, inject, Inject, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, TranslateModule, SplitButtonModule, MenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  translationService = inject(TranslateService);
  navItems: any[] = [];
  languageOptions = [
    {
      label: 'En',
      command: () => this.toggleLanguage('en'),
    },
    {
      label: 'Es',
      command: () => this.toggleLanguage('es'),
    },
  ];

  ngOnInit() {
    this.buildNavItems();
  }

  buildNavItems() {
    this.navItems = [
      {
        label: 'home',
        icon: 'pi pi-home',
        command: () =>
          document
            .querySelector('#home')
            ?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        label: 'projects',
        icon: 'pi pi-folder',
        command: () =>
          document
            .querySelector('#projects')
            ?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        label: 'technologies',
        icon: 'pi pi-cog',
        command: () =>
          document
            .querySelector('#technologies')
            ?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        label: 'cv',
        icon: 'pi pi-download',
        command: () => this.donwloadCV(),
      },
    ];
  }

  toggleLanguage(lang: string) {
    // Implement language toggle logic here
    console.log('Todavia no funciona el toggle de idioma :(');
    this.translationService.use(lang);
  }

  donwloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/cv/cv.pdf'; // Path to your CV file
    link.download = 'CV.pdf'; // Name of the downloaded file
    link.click();
  }
}
