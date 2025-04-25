import { Component, computed, signal } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
// import { ContactComponent } from '../contact/contact.component';
import info from './../mock/mock.json';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { PortfolioData } from '../mock/models/mock.model';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    ProjectsComponent,
    TechnologiesComponent,
    // ContactComponent,
    CommonModule,
    TabMenuModule,
    MenubarModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public prueba = "Hola mundo"
  navData = signal<PortfolioData>(info);
  activeItem = signal<any>(null);
  mobileMenuOpen = false;

  aboutData = computed(() => this.navData()!.about);
  projectsData = computed(() => this.navData()!.projects);
  techData = computed(() => this.navData()!.technologies);
  toolsData = computed(() => this.navData()!.tools);
  learningData = computed(() => this.navData()!.learning);
  // contactData = computed(() => this.navData()!.about.contact);

  onTabChange(item: any) {
    this.activeItem.set(item);
  }

  toggleLanguage() {
    console.log('Language toggled!');
  }
}
