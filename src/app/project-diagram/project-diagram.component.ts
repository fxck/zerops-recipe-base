import {
  // AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  // ElementRef,
  Input,
  // ViewChild
} from '@angular/core';
// import * as mermaid from 'mermaid';

@Component({
  selector: 'z-project-diagram',
  templateUrl: './project-diagram.component.html',
  styleUrls: [ './project-diagram.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDiagramComponent/*  implements AfterViewInit  */ {
  @Input()
  set services(value: any[] | undefined) {
    if (value) {
      this.publicUrls = value.reduce((arr, itm) => {
        if (itm.url) {
          arr.push(itm.url);
        }
        return arr;
      }, []);
    }

    this._services = value;
  }

  get services() {
    return this._services;
  }

  publicUrls = [];
  private _services?: any[] | undefined;

  // @ViewChild('mermaidTargetRef')
  // mermaidTargetRef: ElementRef<HTMLElement>;

  // ngAfterViewInit() {
  //   this._initMermaid();
  // }

  // private _initMermaid() {
  //   mermaid.default.initialize({
  //     // theme: "dark"
  //   });

  //   const element = this.mermaidTargetRef.nativeElement;
  //   const graphDefinition = `graph TB\na-->b`;
  //   mermaid.default.render('graphDiv', graphDefinition, (svgCode) => {
  //     element.innerHTML = svgCode;
  //   });

  // }
}
