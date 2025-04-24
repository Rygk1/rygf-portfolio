import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutSection } from '../mock/models/mock.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  @Input() about!: AboutSection;
}
