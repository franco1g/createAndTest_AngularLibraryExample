import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'fdnx-foundation-library',
  template:`this works
  <input type="text" (keydown.enter)="MarkText($event.target.value)">
  <div #content [hidden]="true">
    div has content
    <ng-content></ng-content>
  </div>

  <div [innerHTML]="controlledContent" ></div>
  `,

  styles: ['.mark{background-color: yellow}'],
  encapsulation: ViewEncapsulation.None
})
export class FoundationLibraryComponent implements OnInit {
  @ViewChild('content', {static: false}) content?: ElementRef;
originalContent?: string;
controlledContent?:string;
  private value: any;

  ngOnInit() {
    this.controlledContent=this.originalContent=this.content?.nativeElement.textContent;
  }
  ngAfterViewInit(){
    setTimeout(()=>{
      this.controlledContent=this.originalContent=this.content?.nativeElement.textContent;
    },0)

  }
  ngAfterContentInit(){

  };

  MarkText(value:any) {
    let myColor = value;
    this.controlledContent = this.originalContent;
    this.controlledContent = this.originalContent.replace(
      new RegExp(value,'g'),
      '<span class="mark">' + myColor + '</span>'
    );
    console.log(value)
  }
}
