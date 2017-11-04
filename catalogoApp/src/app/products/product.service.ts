import {Injectable} from '@angular/core';
import {IProduct} from './product';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()

export class ProductService{
private _url='http://localhost:8000/products/';


constructor(private _http: HttpClient){

}

getProducts(): Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this._url).do(data=>console.log('Data' +JSON.stringify(data))).catch(this.handleError);
}


private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);   
}

addProducts(house:IProduct): Observable <IProduct>{
    return this._http.post(this._url,house).do(data => console.log(data)).catch(this.handleError);
 }
 
 removeProducts(house:String): Observable <IProduct>{
     console.log("entro a removeProducts");
     console.log(house);
     return this._http.delete(this._url+"/"+house).do(data=>console.log('Data' + JSON.stringify(data))).catch(this.handleError);
 }
 
 putproducts(id:String,house:IProduct): Observable <IProduct>{
     return this._http.put(this._url+"/"+id,house).do(data=>console.log('Data' + JSON.stringify(data))).catch(this.handleError);
     
 }

//postProducts(){}
//putProducts(){}
//deleteProducts(){}

}

