import { Injectable } from '@angular/core';
import { HeaderData } from './header-data.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData: BehaviorSubject<HeaderData> = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  });

  constructor() { }

  public get headerData(): HeaderData {
    return this._headerData.value;
  }

  public set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}
