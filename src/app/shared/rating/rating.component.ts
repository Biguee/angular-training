import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'js-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  inputs: ['rating', 'count']
})
export class RatingComponent implements OnInit {

  count: number = 5;
  rating: number = 0;
  stars: boolean[] = [];

  ngOnInit() {
    for (let i = 1; i <= this.count; i++) {
      this.stars.push(i > this.rating);
    }
  }
}


