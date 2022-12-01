import { Component ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

  
  @Input() item = 0

  @Output() updateDataEvent = new EventEmitter<String>()
}
