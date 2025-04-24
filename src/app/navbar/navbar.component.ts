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
    // {
    //   label: 'Contacto',
    //   icon: 'pi pi-envelope',
    //   command: () =>
    //     document
    //       .querySelector('#contact')
    //       ?.scrollIntoView({ behavior: 'smooth' }),
    // },
  ];

  toggleLanguage() {
    // Implement language toggle logic here
    console.log('Todavia no funciona el toggle de idioma :(');
    // this.translationService.toggleLanguage();
  }
}
