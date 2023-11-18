import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-trail-detail',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './trail-detail.component.html',
  styleUrl: './trail-detail.component.scss',
})
export class TrailDetailComponent {}
