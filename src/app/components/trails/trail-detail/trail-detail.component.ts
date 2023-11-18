import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { Trail } from 'src/app/models/trail';

@Component({
  selector: 'app-trail-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    RouterModule,
  ],
  templateUrl: './trail-detail.component.html',
  styleUrl: './trail-detail.component.scss',
})
export class TrailDetailComponent {
  trail: Trail = {
    id: 1,
    name: '横川町 → 南蟹屋',
    distance: 4.4,
    image:
      'https://www.nepalhikingteam.com/wp-content/uploads/2018/01/everest-base-camp-trek-1.jpg',
    url: 'https://www.nepalhikingteam.com/everest-base-camp-trek/',
    quality: 5,
    date: '2023-11-13',
  };

  loading = false;

  convert() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
