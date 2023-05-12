import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaServiceService {
  public defaultMeta:any={
    'title':'title',
    'description':'description',
    'keywords':'keywords',
    'author': 'Sudarshan Datta',
    'referrer': 'no-referrer-when-downgrade',
    'copyrightText':'"© Copyright Sudarshan.com '
  }
  public copyrightYear:any=2023;
  constructor(private titleservice: Title , private metaservice: Meta) {
    let date = new Date
    this.copyrightYear = date.getFullYear
   }
   setMetaData(data:any){
    this.titleservice.setTitle(data.title?data.title : this.defaultMeta.title)

    this.metaservice.updateTag({name :'title', content: data.title?data.title : this.defaultMeta.title});
    this.metaservice.updateTag({name:'descripttion', content: data.descripttion? data.descripttion : this.defaultMeta.descripttion});
    this.metaservice.updateTag({name:data.referrer?data.referrer:this.defaultMeta.referrer});
    this.metaservice.updateTag({property: 'og:title', content: data.title?data.title:this.defaultMeta.title});
    this.metaservice.updateTag({property:'twitter:title', content:data.title});
    this.metaservice.updateTag({name:'twitter:Image',content:data.featureImage});
    this.metaservice.updateTag({name:'twitter:site', content:'Sudarshan239'});
    this.metaservice.updateTag({property:'twitter:card', content:'summery_large_image'});
    this.metaservice.updateTag({name:'robots', content:'index , follow'});
    this.metaservice.updateTag({property: 'og:image:width', content: '1200' });
    this.metaservice.updateTag({property: 'og:image:height', content: '630' });
    this.metaservice.updateTag({property: 'og:locale', content: 'en-us' });
    this.metaservice.updateTag({name: 'rights', content: this.defaultMeta.copyrightText+" "+this.copyrightYear });

   }
}
