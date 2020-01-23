import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { CribsService } from './services/cribs.service';
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    CribCardComponent,
    AddListingFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [CribsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
