import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pet-information',
  templateUrl: './pet-information.component.html',
  styleUrls: ['./pet-information.component.css']
})
export class PetInformationComponent implements OnInit {
  title = 'Pet Profile';
  petName = 'puppie';
  petImage = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';
  constructor() {
  }

  updateName(name) {
    this.petName = name;
  }
  updateImage(image) {
    this.petImage = image;
  }

  ngOnInit() {
  }

}
