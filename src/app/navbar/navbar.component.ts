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
        label: 'contact',
        icon: 'pi pi-user',
        command: () =>
          document
            .querySelector('#contact')
            ?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        label: 'cv',
        icon: 'pi pi-download',
        items: [
          {
            label: 'en',
            icon: 'pi pi-file',
            command: () => this.donwloadCV('en'),
          },
          {
            label: 'es',
            icon: 'pi pi-file',
            command: () => this.donwloadCV('es'),
          },
        ],
      },
    ];
  }

  toggleLanguage(lang: string) {
    // Implement language toggle logic here
    console.log('Todavia no funciona el toggle de idioma :(');
    this.translationService.use(lang);
  }

  moveToSection() {
    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
  }

  donwloadCV(type: string) {
    const link = document.createElement('a');
    link.href = `assets/cv/cv-${type}.pdf`; // Path to your CV file
    link.download = 'CV.pdf'; // Name of the downloaded file
    link.click();
  }
}
