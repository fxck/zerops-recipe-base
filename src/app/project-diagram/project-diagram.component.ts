import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core';
import * as mermaid from 'mermaid';

@Component({
  selector: 'z-project-diagram',
  templateUrl: './project-diagram.component.html',
  styleUrls: [ './project-diagram.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDiagramComponent/*  implements AfterViewInit  */ {
  @Input()
  services: any[];

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
