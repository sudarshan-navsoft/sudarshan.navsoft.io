import { Component, OnInit } from '@angular/core';
import { PubsubService } from 'src/app/services/pubsub.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private pubsub: PubsubService) { }

  ngOnInit(): void {
  }
  pubnubService(){
    this.pubsub.publish('sudarshan')
  }
}
