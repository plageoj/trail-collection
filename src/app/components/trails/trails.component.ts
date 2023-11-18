import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { Trail } from 'src/app/models/trail';

@Component({
  selector: 'app-trails',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './trails.component.html',
  styleUrl: './trails.component.scss',
})
export class TrailsComponent {
  trails: Trail[] = [
    {
      id: 1,
      name: '西蟹屋 → 宇品',
      distance: 6.4,
      image:
        'https://www.nepalhikingteam.com/wp-content/uploads/2018/01/everest-base-camp-trek-1.jpg',
      url: 'https://www.nepalhikingteam.com/everest-base-camp-trek/',
      quality: 5,
      date: '2023-01-01',
    },
    {
      id: 2,
      name: '瀬野南 → 古屋',
      distance: 28.1,
      image:
        'https://www.nepalhikingteam.com/wp-content/uploads/2018/01/everest-base-camp-trek-1.jpg',
      url: 'https://www.nepalhikingteam.com/everest-base-camp-trek/',
      quality: 5,
      date: '2023-03-01',
    },
  ];
}
