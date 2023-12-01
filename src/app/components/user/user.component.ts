import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'User-component',//este es el nombre del componente
  standalone: true,
  imports: [CommonModule],// se importa por defecto CommonModule
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() occupation: string = "";
  @Output() greet: EventEmitter<string> = new EventEmitter<string>();
  username: string = "Rodrigo";
  doesUserExist: boolean = false;

  checkUser(): boolean {
    if (this.username == "Rodrigo") {
      return true;
    }
    else {
      return false;
    };
  };
  public checkUserText(dato: string): string {
    if (this.username == "Rodrigo") {
      return "User exists" + dato;
    }
    else {
      return "User doesn't exist" + dato;
    }
  }

  changeUser(newUsername: string): void {
    this.username = newUsername;
  }

  
  
  
  operatingSystems = [{id: 'win', name: 'Windows'}, {id:'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  isEditable: boolean = true;

  onMouseOver(osName: string):void {
    console.log(osName);
  }
  emitToParent():void{
    this.greet.emit("Hola soy tu hijo");
  }
};

