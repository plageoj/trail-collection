import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-parts',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './parts.component.html',
  styleUrl: './parts.component.scss',
})
export class PartsComponent {}
