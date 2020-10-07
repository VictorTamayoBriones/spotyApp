import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators' 

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) { 
    console.log('servicio listo');
  }

  getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCqBoUXMu1SJwxlQgW3YW5K9IZIggZJ0mD-RuSn6b0hfV0EAp5c6UKIyp34-eoSGzM6CymKF9Qh_D5j_AQ'
    });

    return this.http.get(url, { headers });
  }



  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
                    .pipe(map(data => data['albums'].items));
        
  }

  getArtista(termino:string){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                    .pipe(map(data => data['artists'].items ));
        
  }
}
