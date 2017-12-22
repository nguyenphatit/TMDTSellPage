import { ShoppingCartService } from './../../../_services/shopping-cart/shopping-cart.service';
import { Item } from './../../../_models/shopping-cart/item';
import { Topic } from "./../../../_models/Topic";
import { OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConfigValue } from "./../../../_helpers/config-value";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  templateUrl: "khoa-hoc-chi-tiet.component.html"
})
export class KhoaHocChiTietComponent implements OnInit, OnDestroy {  
  private reloadPageWhenIDChange(idCourse: string): void {
    // tslint:disable-next-line:no-var-keyword

    this.http
      .get(this.config.url_port + `/users/course/${idCourse}`)
      .subscribe(data => {
        this.courseItem = data;
        const authorID = this.courseItem.author.userID;
        this.topic = this.courseItem.topic;
        // lấy thông tin author

        // xu lý giỏ hàng
        this.item.id =  this.courseItem.courseID;
        if ( this.courseItem.courseTitle.length  < 25 ) {
            this.item.name = this.courseItem.courseTitle ;
        } else {
            this.item.name = this.courseItem.courseTitle.substring(0, 25) + ' ...'
        }
        this.item.count  = 1 ;
        this.item.image = this.courseItem.courseAvatar;
        this.item.price  = this.courseItem.price ;
        console.log(this.item);
 // xư lý giỏ hàng

        this.http
          .get(this.config.url_port + `/users/course/author/${authorID}`)
          .subscribe(dataAuthor => {
            this.author = dataAuthor;
            console.log(this.author);
          });
        // lây thông tin khóa học liên quan
        this.http
          .get(
            this.config.url_port +
              `/users/course/${this.courseItem.courseID}/relationship?page=1&size=100`
          )
          .subscribe((dataCourseRelationship: any) => {
            this.listCourseRelationship = dataCourseRelationship.listOfResult;
          });
      });

       this.http.get(this.config.url_port + `/users/course/${idCourse}/chapter`).subscribe((data: any ) => {
          this.listChapter  = data;
       });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  item  = new Item() ;  
  private sub: any;
  public courseItem: any = {};
  public author: any = {};
  public topic: any = {};
   public listCourseRelationship: any = [];
    public listChapter: any=[];
  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private http: HttpClient,
    private config: ConfigValue,
    private cartService: ShoppingCartService
  ) {
    this.title.setTitle("3TPL | Chi tiết khóa học");
  }

  public ghiDanh() {
    this.cartService.addItem(this.item);
    console.log( this.cartService.cart);
 }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.reloadPageWhenIDChange(params["id"]);
      console.log(params['id']);
    });
  }
}
