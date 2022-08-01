import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { SendDataService } from 'src/app/services/send-data.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  //constructor() { }

    shortLink: string = "123";
    loading: boolean = false; // Flag variable
    file: File = null; // Variable to store file
    ans: any="";
    hispa: boolean = false;
    brownSpot: boolean = false;
    leafBlast: boolean = false;
    healthy: boolean = false;
    start: boolean = true;
    dis: string = "";
    loaded: boolean = false;
  
    // Inject service 
    constructor(private fileUploadService: FileUploadService,
        private sendDataService: SendDataService) { }
  
    ngOnInit(): void {
    }
  
    // On file Select
    onChange(event) {
        this.file = event.target.files[0];
        // this.start = true;
        // this.hispa = false;
        // this.brownSpot = false;
        // this.leafBlast = false;
    }
  
    // OnClick of button Upload
    onUpload() {
        this.loading = !this.loading;
        if(this.loaded == true){
            this.loaded = false;
        } 
        console.log(this.file);
        this.fileUploadService.sendName(this.file.name).subscribe(
            data=>{
                console.log(data);
            }
        );
        this.fileUploadService.upload(this.file).subscribe(
            data=>{
                this.ans = data;
                console.log(data['msg']);
                this.dis = data['msg'];
                this.disease(data['msg']);
                this.sendDataService.sendDataToComponent(this.ans['msg']);
                this.loading = !this.loading; 
                if(this.loaded == false){
                    this.loaded = true;
                } 
            }
        );
        
    }
    disease(str: string){
        console.log(str+"before");
        this.start = false;
        this.hispa = false;
        this.brownSpot = false;
        this.leafBlast = false;
        if(str == "Hispa"){
            this.hispa = true;
        }
        if(str == "BrownSpot"){
            console.log(str+"after");
            this.brownSpot = true;
        }
        if(str == "LeafBlast"){
            this.leafBlast = true;
        }
    }
    // getAns(){
    //     this.fileUploadService.getAns(this.shortLink).subscribe(
    //         data=>{
    //             this.ans = data;
    //             console.log(data);
    //         }
    //     );
    // }

}
