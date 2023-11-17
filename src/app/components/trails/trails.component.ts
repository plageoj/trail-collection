import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { Trail } from 'src/app/models/trail';

@Component({
  selector: 'app-trails',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './trails.component.html',
  styleUrl: './trails.component.scss',
})
export class TrailsComponent {
  trails: Trail[] = [
    {
      id: 1,
      name: 'Mount Everest Base Camp Trek',
      length: 130,
      image:
        'https://www.nepalhikingteam.com/wp-content/uploads/2018/01/everest-base-camp-trek-1.jpg',
      url: 'https://www.nepalhikingteam.com/everest-base-camp-trek/',
      quality: 5,
    },
  ];
}
