import { Component } from '@angular/core';
import { Turf } from './model/turf';
import { TurfService } from './turfdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Turf Management System';
  turf: Turf;
  result: string;
  flag: boolean;
  turfArr: Turf[];

  constructor(private service: TurfService) {
    this.turf = new Turf();
    this.result = "";
    this.turfArr = [];
    this.flag = false;
  }

  insertTurf(data: any) {
    this.turf.id = data.teamId;
    this.turf.startTime = data.startTime;
    this.turf.endTime = data.endTime;
    this.turf.amount = data.amount;

    this.result = this.service.insertTurf(this.turf);
  }

  updateTurf(data: any) {
    this.turf.id = data.teamId;
    this.turf.startTime = data.startTime;
    this.turf.endTime = data.endTime;
    this.turf.amount = data.amount;

    this.result = this.service.updateTurf(this.turf);
  }

  deleteTurf(data: any) {
    this.result = this.service.deleteTurf(data.teamId);
  }

  findTurf(data: any) {
    this.turf = this.service.findTurf(data.teamId);
    this.result = this.turf.id + " " + this.turf.startTime + " " + this.turf.endTime + " " + this.turf.amount;
  }

  findAllTurf() {
    this.turfArr = this.service.findAllTurf();
    this.flag = true;
  }
}
