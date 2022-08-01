import { Component, OnInit } from '@angular/core';
import { SendDataService } from 'src/app/services/send-data.service';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css']
})
export class DiseaseComponent implements OnInit {
  disease = "";
  brownspot = "It is the one of the major fungal diseases in rice in which it is caused by Bipolarisoryzae. This diseases mainly attacks the crop from seedling stage to milky stage. Brown spot is otherwise called as sesame leaf spot or Helminthosporiose. Brown spot causes both quality and quantity losses."
  hispa = "Rice hispa is generally known to attack young rice plants, but in epidemic situations it invades mature plants as well. Heavy infestations in outbreak-prone areas starts in December on the local Boro and continues upto the following November on transplanted Aman crops. "
  leafblast = "Magnaporthe grisea, also known as rice blast fungus, rice rotten neck, rice seedling blight, blast of rice, oval leaf spot of graminea, pitting disease, ryegrass blast, Johnson spot, neck blast, and Imochi is a plant-pathogenic fungus and model organism that causes a serious disease affecting rice."
  Healthy = ""
  info = ""
  constructor(private sendDataService: SendDataService) { }

  ngOnInit(): void {
    this.sendDataService.currentData.subscribe(
      data=>{
        this.disease = data;
        console.log(data+"...");
        this.onChangeDis();
      }
    );
    
  }
  onChangeDis(){
    if(this.disease=="Hispa"){
      this.info = this.hispa;
    }else if(this.disease == "Leaf Blast"){
      this.info = this.leafblast;
    }else if(this.disease == "BrownSpot"){
      this.info = this.brownspot;
    }else{
      this.info = this.Healthy;
    }
  }
}
