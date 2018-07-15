import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // get from parent
  @Input()
  parentmessage: String;

  // send to parent
  cmessage: String;
  takeInput(event) {
    this.cmessage = event.target.value;
  }
}