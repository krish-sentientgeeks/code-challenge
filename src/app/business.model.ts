export class BusinessDetails {
    name: string;
    address: any;
    businessInfo:any;
    businessReview:BusinessReview[]=[];
  }

  export class BusinessReview{
    excerpt:string;
    reviewer:string;
  }