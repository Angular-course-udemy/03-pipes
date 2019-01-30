import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  name = 'Rigoberta'
  nameComp = 'MarIa crisTiNA de Las MErceDes'
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  PI = Math.PI
  a = 0.234
  salary = 1485
  hero = {
    name:'Cespino',
    key: 'grass',
    age: 10,
    address: {
      street: 'La luna',
      number: '22'
    }
  }
  promiseValues = new Promise((resolve, reject) => {
    setTimeout( () => resolve('Llegó la data!'), 2000)
  })
  date = new Date()
  video = 'Zu2bIxxoRTM'
  password = 'Contraseña123'
  active = true
}
