import { Injectable, Inject, Input } from '@angular/core';
import { inject } from '@angular/core/testing';
import { SideNav } from './sidenav/side-nav/sidenav';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavContentService {
  getSideNavChangedSource = new BehaviorSubject<SideNav>(new SideNav());
  getPageChanged$ = this.getSideNavChangedSource.asObservable();

  constructor() { }

  getSideNav(title: string, children: string[], page: string) {
    this.getSideNavChangedSource.next({ title: title, children: children.sort(), page: page});
  }
}
