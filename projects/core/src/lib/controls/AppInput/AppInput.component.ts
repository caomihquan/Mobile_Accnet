import {
  Component, Input, Output, EventEmitter, OnInit
} from '@angular/core';


//usage:  <app-Input labelText="tên đăng nhập" [isValid]="false"></app-Input>
@Component({
  selector: 'app-Input',
  templateUrl: './AppInput.component.html',
  styleUrls: ['./AppInput.component.scss']
})
export class AppInputComponent implements OnInit{
  @Input() isValid = true;
  @Input() labelText = '';
  @Input() type = 'text';
  @Output() outClickIconRight = new EventEmitter();

  ngOnInit() {
  }
  onClickIconRight(){
    this.outClickIconRight.emit();
  }
}
