import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
 readonly apiUrl ='../assets/data.json';
  constructor(private http: HttpClient ){}

  getData() {
    
    return this.http.get(this.apiUrl);
  }
}