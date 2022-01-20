import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewChildren,
  QueryList
} from '@angular/core';
import * as LeaderLine from 'leader-line-new';
// import * as mermaid from 'mermaid';

@Component({
  selector: 'z-project-diagram',
  templateUrl: './project-diagram.component.html',
  styleUrls: [ './project-diagram.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDiagramComponent implements AfterViewInit {
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

  @ViewChild('publicUrlsRef')
  publicUrlsRef: ElementRef<HTMLElement>;

  @ViewChild('coreRef')
  coreRef: ElementRef<HTMLElement>;

  @ViewChild('balancerOneRef')
  balancerOneRef: ElementRef<HTMLElement>;

  @ViewChild('balancerTwoRef')
  balancerTwoRef: ElementRef<HTMLElement>;

  @ViewChildren('serviceRef')
  serviceRef: QueryList<ElementRef<HTMLElement>>;

  @ViewChildren('publicUrlRef')
  publicUrlRef: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit() {
    this._initLeaderLines();
  }

  private _initLeaderLines() {
    new LeaderLine(
      this.publicUrlsRef.nativeElement,
      this.coreRef.nativeElement,
      {
        path: 'straight',
        color: '#ccc',
        // middleLabel: LeaderLine.pathLabel(':80,:443',  { color: 'black' }),
        size: 2,
        endPlug: 'behind'
      }
    );

    new LeaderLine(
      this.coreRef.nativeElement,
      this.balancerOneRef.nativeElement,
      {
        path: 'straight',
        color: '#ccc',
        middleLabel: LeaderLine.pathLabel(':80,:443', { color: 'black' }),
        size: 2,
        endPlug: 'behind'
      }
    );


    new LeaderLine(
      this.coreRef.nativeElement,
      this.balancerTwoRef.nativeElement,
      {
        path: 'straight',
        color: '#ccc',
        middleLabel: LeaderLine.pathLabel(':80,:443', { color: 'black' }),
        size: 2,
        endPlug: 'behind'
      }
    );

    this.publicUrlRef.forEach((ref) => {
      new LeaderLine(
        this.balancerOneRef.nativeElement,
        ref.nativeElement,
        {
          path: 'straight',
          color: '#ccc',
          size: 2,
          endPlug: 'behind'
        }
      );
      new LeaderLine(
        this.balancerTwoRef.nativeElement,
        ref.nativeElement,
        {
          path: 'straight',
          color: '#ccc',
          size: 2,
          endPlug: 'behind'
        }
      );

      const target = this.serviceRef.find((s) => s.nativeElement.dataset['url'] === ref.nativeElement.dataset['url']);

      if (target?.nativeElement) {
        const items = target.nativeElement.querySelectorAll('.__container');

        items.forEach((target) => {
          new LeaderLine(
            ref.nativeElement,
            target,
            {
              path: 'straight',
              color: '#ccc',
              // middleLabel: LeaderLine.pathLabel((ref.nativeElement.dataset['url'] || ''), { color: 'black', fontSize: 6, outlineColor: 'transparent' }),
              size: 2,
              endPlug: 'behind'
            }
          );
        })
      }
    });

  }

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
