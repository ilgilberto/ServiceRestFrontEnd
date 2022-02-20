import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntroService {


  constructor() {}

  getHello(name:string,surname:string):string {
    return "Ti chiami "+name+" "+surname;
  }
}
