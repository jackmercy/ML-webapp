import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  template: `<div class="voting-grid">
      <div class="error-div">
          <i class="material-icons error-icon">error_outline</i>
          <p class="error-text">Invalid Url</p>
      </div>
  </div>`,
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
