import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../mock/models/mock.model';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { TranslateModule } from '@ngx-translate/core';
// import { TiltDirective } from '../directives/tilt.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ChipModule,
    ButtonModule,
    GalleriaModule,
    TranslateModule,
    // TiltDirective,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  @Input() projects!: Project[];

  displayGallery: boolean = false;
  displayedProjectImages: string[] = [];
  projectTitle: string = '';

  responsiveOptions: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  showGallery(project: Project) {
    this.projectTitle = project.title;
    this.displayedProjectImages = project.images;
    this.displayGallery = true;
  }
}
