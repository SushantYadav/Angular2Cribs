import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CribsService } from 'src/app/services/cribs.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  error: string;

  constructor(
    private http: HttpClient,
    private CribsService: CribsService
  ) { }

  ngOnInit() {
    this.http.get('/assets/data/cribs.json')
      //.map(res => res)
      .subscribe(
        data => this.cribs = data,
        error => this.error = error.statusText
      );
    this.CribsService.getAllCribs()
      .subscribe(
        data => this.cribs = data,
        error => this.error = error.statusText
      );
  }
}
