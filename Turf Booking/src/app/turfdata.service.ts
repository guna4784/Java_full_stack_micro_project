import { Injectable } from '@angular/core';
import { Turf } from './model/turf';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurfService {
  url: string;
  turfArr: Turf[];
  turf: Turf;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:3004/turfs";
    this.turf = new Turf();
    this.turfArr = [];
  }

  insertTurf(turf: Turf){
    this.http.post<Turf>(this.url,turf).subscribe();
    return " Turf Details Added"
  }

  updateTurf(turf: Turf){
    this.http.put<Turf>(this.url+"/"+turf.id,turf).subscribe();
    return "Turf Details Updated";  }

  deleteTurf(teamId:number){
    this.http.delete<Turf>(this.url+"/"+teamId).subscribe();
    return "Turf Details deleted"; 
  }

  findTurf(teamId: number){
    this.http.get<Turf>(this.url+"/"+teamId).subscribe(data => this.turf = data);
    return this.turf;
  }

  findAllTurf(){
    this.http.get<Turf[]>(this.url).subscribe(data => this.turfArr = data);
    return this.turfArr;
  }
}