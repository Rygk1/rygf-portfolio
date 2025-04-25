import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutSection } from '../mock/models/mock.model';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  @Input() about!: AboutSection;
}
