import { Injectable, Inject, Input } from '@angular/core';
import { inject } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class SideNavContentService {
  title: string
  children: string[]

  constructor() { }
}
