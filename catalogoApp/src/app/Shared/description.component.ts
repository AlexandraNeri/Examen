import {Component, Input, OnChanges} from '@angular/core';

@Component ({
selector: 'product-description',
templateUrl:'./description.component.html'
})

export class DescriptionComponent implements OnChanges{
    @Input() product: {name:'',description:''};
    ngOnChanges(){
        //called after de constructor, initializing input
        //add 'implements OnInit' to te class
        console.log(this.product);
    }
}