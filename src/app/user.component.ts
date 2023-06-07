import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})

export class UserComponent{
  show = false;
  users = ['Luis', 'Natalia','Juan'];
  username = "";

  constructor(){
    setTimeout( () => {
      this.show = true;
    },3000)
  }

  onAddUser(){
    this.users.push(this.username);
  }
}
