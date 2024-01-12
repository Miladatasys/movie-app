import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReviewComponent {

}
