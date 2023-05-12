import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public base_api_url = 'https://dev16.leasetrader.com/api/'
  public base_token_api = 'https://dev16.leasetrader.com/'

  constructor(private http :HttpClient) { }

  addHttpHeader(){
    let headers = new HttpHeaders
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin','*')
    let options = { headers: headers };
    return options;
  }
  addHttpHeaderfor(){
    let headers = new HttpHeaders
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.append('Access-Control-Allow-Origin','*')
    headers = headers.append( 'Access-Control-Allow-Headers', "Content-Type, Authorization, X-Requested-With,Origin,Accept",)
    headers = headers.append('access-control-allow-methods', "DELETE, POST, GET, OPTIONS",)
    let options = { headers: headers };
    return options;
  }

  postServiceRequest(requestApi: string, reqData:any ){
    return this.http.post(this.base_api_url+requestApi, reqData,this.addHttpHeader())
  }
  postServiceForToken(requestApi: string, reqData:any ){
    return this.http.post(this.base_token_api+requestApi, reqData,this.addHttpHeaderfor())
  }
  getServiceRequest(requestApi:string){
    return this.http.get(requestApi)
  }
}
