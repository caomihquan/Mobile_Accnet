import {
  Component, Input, Output, EventEmitter, OnInit
} from '@angular/core';


//usage: <app-header title="Điều khoản và chính sách"></app-header>
@Component({
  selector: 'app-header',
  templateUrl: './AppHeader.component.html',
  styleUrls: ['./AppHeader.component.scss']
})
export class AppHeaderComponent implements OnInit{

  @Input() title?: string;
  @Input() href?:string;
  @Output() outClickIconRight = new EventEmitter();
  ngOnInit() {
  }

  onClickIconRight(){
    this.outClickIconRight.emit();
  }
}
