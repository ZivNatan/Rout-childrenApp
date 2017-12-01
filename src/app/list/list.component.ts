import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   location: Location;
   list:any[] = [];
   listView:boolean = true;

  constructor(private getData: GetDataService) { }

  ngOnInit() {
    this.getData.getList().subscribe(data => {
      this.list = data.resolve;
    })
  }

  changeView() {
    this.listView = !this.listView;
  }

  openEdit(item) {
    debugger;

  }
}
