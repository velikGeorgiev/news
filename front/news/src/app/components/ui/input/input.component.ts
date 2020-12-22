import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input('type') type:string;
  @Input('label') label:string;
  @Input('max') max:number;
  @Input('min') min:number;

  @ViewChild('input', {static: false}) input:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  change() {

  }

  public get value():string {
    return this.input.nativeElement.value;
  }

  public set value(val:string) {
    this.input.nativeElement.value = val;
  }
}
