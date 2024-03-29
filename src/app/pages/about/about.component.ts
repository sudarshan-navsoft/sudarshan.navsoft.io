import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PubsubService } from 'src/app/services/pubsub.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public countries = [
    { id: 1, name: "United States" },
    { id: 2, name: "Australia" },
    { id: 3, name: "Canada" },
    { id: 4, name: "Brazil" },
    { id: 5, name: "England" }
  ];
  constructor(private pubsub: PubsubService, private router:Router) { }

  ngOnInit(): void {
    this.myfunction()
  }
  pubnubService(){
    this.pubsub.publish('sudarshan')
  }
  myfunction(){
    let id = Math.max.apply(Math,this.countries.map((f)=>{return f.id}))
    // console.log('id', id);
    var res:any=[]
    let x = this.countries.filter((f)=>{if (f.id == 4) {
      res.push(f.id)
    } })
    // console.log('...',x , res);
  }
  goto(){
    this.router.navigateByUrl('/account')
  }
}
