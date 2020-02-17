import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const localUrl = 'http://localhost:8080/https://api.yelp.com/v3/';

@Injectable({ providedIn: 'root' })

export class ApiService {

    constructor(private http: HttpClient) { 
        
    }
    getBusiness(){
        
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set('accept', 'application/json');
        headers = headers.set('x-requested-with', 'xmlhttprequest');
        headers = headers.set('Access-Control-Allow-Origin', '*');
        
        let params = new HttpParams().set('term', 'delis'); 
        params = params.append('latitude', '37.786882');
        params = params.append('longitude', '-122.399972');
        
        return this.http.get(localUrl+"businesses/search"
        ,{ headers: headers,params:params })
        //.toPromise();
    }
    getBusinessReviews(id){
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set('accept', 'application/json');
        headers = headers.set('x-requested-with', 'xmlhttprequest');
        headers = headers.set('Access-Control-Allow-Origin', '*');
        
        return this.http.get(localUrl+"businesses/"+id+"/reviews",{ headers: headers });
    }
}
