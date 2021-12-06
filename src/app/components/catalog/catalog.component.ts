import { Component, OnInit } from '@angular/core';
import { ImdbServiceService } from 'src/app/services/imdb-service.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  searchTitle:string;

  constructor(private imbdService: ImdbServiceService) { 
    this.searchTitle='';
  }

  ngOnInit(): void {
  }


  search(title:string){
    console.log("SEARCH "+title);
      this.imbdService.search(title).subscribe(dataResult =>{
      //this.movieList=dataResult;
      
//      dataResult['results'].forEach(element => {
//        console.log(element.title)
//      });


      //console.log(dataResult['results']);
      //console.log(this.movieList);
      //return this.movieList;
    })
  }

}
