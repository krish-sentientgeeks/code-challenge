import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { BusinessDetails } from './business.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'code-challange';

  constructor(private api: ApiService) {
    this.getYelpBusiness();
  }
  getYelpBusiness() {
    
    this.api.getBusiness()
      .subscribe((data:any) => {
        console.log(data);
        this.getYelpBusinessReviews(data.businesses[0])
      });
  }
  getYelpBusinessReviews(business) {
    this.api.getBusinessReviews(business.id)
      .subscribe((data:any) => {
        let details=new BusinessDetails();
        details.address=business.location.address1+', '+business.location.city;
        details.name=business.name;
        data.reviews.forEach(element => {
          details.businessReview.push({excerpt:element.text,reviewer:element.user.name });
        });
        
       

        
        //console.log(business);
        console.log(details);
      });
  }
}
