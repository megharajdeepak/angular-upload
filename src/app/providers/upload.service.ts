import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from "rxjs";
import Constants from '../utils/contants.class';

@Injectable()
export class UploadService {

  constructor(private http:HttpClient) { }
  
  //approach 1
  public uploadFile(url: string, file: File): Observable<HttpEvent<any>> {

    let formData = new FormData();
    formData.append('upload', file);

    const req = new HttpRequest('POST', url, formData, { reportProgress: true, responseType: 'blob'});
    return this.http.request(req);
  }

  //approach 2
  public uploadFile2(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      let formData:FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      
      this.http.post(Constants.FILE_UPLOAD_API as string, formData, { responseType: 'blob'})
      .subscribe(
        data => {
          console.log('success', data);
        },
        error => {
          console.log("error", error);
        }
      );

      
  }
}
}




