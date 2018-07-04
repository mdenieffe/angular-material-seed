import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  Injector,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {PortalHost} from '@angular/cdk/typings/portal';
import {CdkPortal, DomPortalHost, Portal, TemplatePortal} from '@angular/cdk/portal';

@Component({
  selector: 'app-actions',
  template: `
    <ng-template cdk-portal>
      <ng-content></ng-content>
    </ng-template>
  `,
  styles: []
})

export class ActionsComponent implements OnInit, AfterViewInit, OnDestroy {

  private portalHost: PortalHost;

  @ViewChild(CdkPortal) portal; // selects the cdk-portal directive to attach to the domPortalHost

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector,
              private appRef: ApplicationRef) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.portalHost.detach();
  }

  ngAfterViewInit() {

    // create a host for the Portal, host is an element in the shell, in app.component.html
    this.portalHost = new DomPortalHost(
      document.querySelector('#component-actions'), // selects by id the container in the app.component.html
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );

    this.portalHost.attach(this.portal);
  }

}
