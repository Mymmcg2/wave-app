import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wave-project',
  templateUrl: './wave-project.component.html',
  styleUrls: ['./wave-project.component.css']
})

export class WaveProjectComponent implements OnInit {

  car: { type: string, model: string, year: number }[] = [
    {
      type: "Toyota",
      model: "Corolla",
      year: 2009
    },
    {
      type: "PCX",
      model: "Corolla2",
      year: 2020
    },
    {
      type: "Toyota",
      model: "Corolla3",
      year: 2017
    },
    {
      type: "Yamaha",
      model: "Corolla4",
      year: 2010
    },
    {
      type: "Isusu",
      model: "Corolla5",
      year: 2012
    },
  ]
  showCar: { type: string, model: string, year: number }[] = []
  array: number[] = [1, 2, 3, 4]
  count: number = 0
  hello: string
  isShowCar: boolean = false
  countCar: number = 0



  constructor() { }

  ngOnInit(): void {
    this.test()
  }

  test() {
    this.car.forEach(element => console.log(element.model));
  }

  add() {
    this.count++
  }
  reset() {
    this.count = 0
  }

  onClickCar() {
    if (this.countCar < this.car.length) {
      this.showCar.push(this.car[this.countCar++])
    }
    else{
      this.countCar = 0
      this.showCar = []
    }


  }
}
