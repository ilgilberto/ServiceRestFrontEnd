import { Component, Input, OnInit } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { IntroService } from '../intro.service';



@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  public nome: string = '';
  public cognome: string = ''; 
  private display:boolean = false;
  model = 'ciao';

  constructor(public introService:IntroService) { }

  ngOnInit(): void {
  }

  getSaluto():string {

    return this.display ? this.introService.getHello(this.nome,this.cognome) : 'Premi saluta';
  }

  scrivi() {
       this.display = true;
  }

}
