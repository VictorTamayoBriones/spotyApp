import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) { 

    console.log('servicio listo');

  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC_LmNauRrlO12JnRFK2Cdwu1wmV2aQgezjCrkagTB0ZMaRWLDGnXu7iaKv2O02eia6Vky_ZfWR5k68oH0'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
        
  }
}
