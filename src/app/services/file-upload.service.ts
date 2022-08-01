import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  baseApiUrl = "http://1f51-34-125-174-141.ngrok.io/predict"
    
  constructor(private http:HttpClient) { }
  
  // Returns an observable
  upload(file):Observable<any> {
  
      //var obj = [];
      //obj['image'] = file;
        
      // Make http post request over api
      // with formData as req
      //this.sendName(file.name);
      const formData: FormData = new FormData();
      formData.append('file', file, "i");
      //formData.append('image',JSON.stringify(file.name));
      console.log(file.name);
      //this.sendName(file.name);
      // var json = JSON.stringify(obj);
      // console.log(json);
      return this.http.post(this.baseApiUrl, formData);
  }
  sendName(str):Observable<any> {
    var url = "http://1f51-34-125-174-141.ngrok.io/name/"
    return this.http.get(url+str);
  }
}
