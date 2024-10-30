import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private addressUrl = 'https://web.aarco.com.mx/api-examen/api/examen/sepomex/';

constructor(private http: HttpClient) { }

getAddressByCP(cp: string){
  return this.http.get(this.addressUrl + cp)
}

}
