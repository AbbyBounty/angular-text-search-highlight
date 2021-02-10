import { Component,Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchword=""

  @Output() searchcriteria = new EventEmitter<String>();
searchThis() {
    this.searchcriteria.emit(this.searchword)
}

}
