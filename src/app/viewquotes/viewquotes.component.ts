import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewquotes',
  templateUrl: './viewquotes.component.html',
  styleUrls: ['./viewquotes.component.css']
})
export class ViewquotesComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }


  fetchData=()=>{
    this.myapi.viewQuotes().subscribe(
      (data)=>{
        this.quoteData=data
      }
    )
  }


quoteData:any={}


  ngOnInit(): void {
  }

}
