import { Component, Input, OnInit } from '@angular/core';
import { Technology, Tool } from '../mock/models/mock.model';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
  @Input() technologies!: Technology[];
  @Input() tools!: Tool[];
  @Input() learning!: Tool[];
}
