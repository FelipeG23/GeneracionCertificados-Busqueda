import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { AjaxClient } from 'ajax-client';
import { JsonPipe } from '@angular/common';




@Injectable({
  providedIn: 'root'
})
export class GenerateCertificateService {

  constructor(private http: HttpClient) { }


  queryCuentas(listYears: any): any {

    let header = { headers:new HttpHeaders({'Content-Type':'application/json'})};

    return this.http.post(`http://52.247.56.140:8080/getCuentasParticipacion`, listYears, header);

  }


  queryCertificate(listYears: any): any {

    let header = { headers:new HttpHeaders({'Content-Type':'application/json'})};

    return this.http.post(`http://52.247.56.140:8080/listYears`, listYears, header);

  }

  listMonths(listYears): any {


    return this.http.post(`http://52.247.56.140:8080/listMonths`, listYears);

  }

  generateCertificate(dataList): any {



    return this.http.post(`http://52.247.56.140:8080/generateCertificate`, dataList);

  }

  CertificateByYear(data){

    return this.http.post(`http://52.247.56.140:8080/generateCertificateByYear`, data);

  }

  listMunicipalities(data){

    return this.http.post(`http://52.247.56.140:8080/listMunicipalities`, data);

  }


  datosDataPJ(data){

    return this.http.post(`http://52.247.56.140:8080/getDataPJ`, data);
  }

  datosDataPN(data){

    return this.http.post(`http://52.247.56.140:8080/getDataPN`, data);
  }


}


