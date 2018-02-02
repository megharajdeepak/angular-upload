import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UploadService } from '../../providers/upload.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import Constants from '../../utils/contants.class';
 
@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css'],
  providers:[UploadService]
})
export class FileUploaderComponent implements OnInit {

  constructor(private uploadService:UploadService) { }

  public progressText;
  public progressWidth;
  
  public errorMessage:String;
  @ViewChild('file') file: ElementRef;

  ngOnInit() {
  }

  onUploadClick(){
    this.errorMessage = null;
    this.progressWidth = "0%";
    this.progressText = "0%";
    this.file.nativeElement.click();//to open file browser prompt window
  }

  onSelect(event) {
    //approach 1
    this.uploadFile(event.target.files);
    
    //approach 2
    //this.uploadService.uploadFile2(event);
    
  }

  uploadFile(files: FileList) {
    if (files.length == 0) {
      let msg:String = Constants.MSG_SELECT_FILE; 
      console.log(msg);
      this.errorMessage = msg;
      return;

    }else {
      let file: File = files[0]; //select a single file
      if(file.size > Constants.MAX_FILE_SIZE) {
        let msg:String = Constants.MSG_FILE_SIZE_EXCEED;
        console.log(msg);
        this.errorMessage = msg;
        return;
      }else {
        this.uploadService.uploadFile(Constants.FILE_UPLOAD_API as string, file)
        .subscribe(
          event => {
            if (event.type == HttpEventType.UploadProgress) {
              let percentDone = Math.round(100 * event.loaded / event.total);
              this.progressText = `${percentDone}%`;
              this.progressWidth = `${percentDone}%`;
              console.log(`File is ${percentDone}% loaded.`);
            } else if (event instanceof HttpResponse) {
              console.log('File is completely uploaded.');
            }
          },
          err => {
            console.error("Upload Error:", err);
          }, 
          () => {
            console.log("Upload Complete");
            this.progressText = "Upload Complete";
          }
        );
      }
    }
    
  }

  
  

}
