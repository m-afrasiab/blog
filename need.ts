import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConstantsProvider } from '../../providers/constants/constants'
import { PostPage } from '../post/post';


@IonicPage()
@Component({
  selector: 'page-need',
  templateUrl: 'need.html',
})
export class NeedPage {
 title: string;
  posts: any[];
  constructor(private constants: ConstantsProvider, private http: Http, public navCtrl: NavController) {
    http.get('https://www.googleapis.com/blogger/v3/blogs/byurl?key=' + constants.getApiKey() + '&url=' + constants.getUrl())
      .subscribe(response => {
        let data = response.json();
        this.title = data.name;
        this.getPosts(data.posts.selfLink);
      });
  }

  getPosts(url: string) {
    this.http.get('https://www.googleapis.com/blogger/v3/blogs/5668590207052029482/posts/search?q=label:need&key=' + this.constants.getApiKey())
      .subscribe(response => {
        let data = response.json();
        this.posts = data.items;
      });
  }

  openPost(post) {
    this.navCtrl.push(PostPage, {post: post})
  }
  

}
