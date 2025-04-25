import { Component, Inject } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  translationService = Inject(TranslationService);

  navItems = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      command: () =>
        document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      label: 'Proyectos',
      icon: 'pi pi-folder',
      command: () =>
        document
          .querySelector('#projects')
          ?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      label: 'Tecnologías',
      icon: 'pi pi-cog',
      command: () =>
        document
          .querySelector('#technologies')
          ?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      label: 'CV',
      icon: 'pi pi-download',
      command: () => this.donwloadCV(),
    },
  ];

  toggleLanguage() {
    // Implement language toggle logic here
    console.log('Todavia no funciona el toggle de idioma :(');
    // this.translationService.toggleLanguage();
  }

  donwloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/cv/cv.pdf'; // Path to your CV file
    link.download = 'CV.pdf'; // Name of the downloaded file
    link.click();
  }
}
