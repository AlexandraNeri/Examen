import {Component, Input} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
    selector: 'product',
    templateUrl: './product.component.html'
})

export class ProductListComponent{
    newProduct: IProduct[] = [{name: '', price: '', description: '',  img:'' }];
    pageTitle: string = 'Product List';
    photos: any[];
    errorMessage: ErrorEventHandler;
    products: IProduct[] = [
        {name : 'Sweater', price: '$200', description: 'large' ,img: 'http://blogdeladiva.com/wp-content/uploads/2016/03/Su%C3%A9ter-rosa-6.jpg'},
        {name : 'Jeans', price: '$270',description: 'purple', img: 'https://www.decathlon.com.au/175023/forclaz-100-women-s-convertible-walking-trousers-blue.jpg'},
        {name : 'Skirt', price: '$230',description: 'red', img: "https://i.pinimg.com/736x/7e/dd/97/7edd97c3a02bf986c2fdabda35c0807f--red-skirts-full-skirts.jpg"},
        {name : 'Necklace', price: '$100', description: 'blue' ,img: 'http://www.disha.com.co/wp-content/uploads/2013/11/photo-118.jpg'},
        {name : 'Vest', price: '$270',description: 'black', img: 'http://trajesparamujeres.com/wp-content/uploads/2015/04/Elegantes-combinaciones-con-chalecos-de-dama-6.jpg'},
        {name : 'shoes', price: '$230',description: 'white', img: "https://cdn.lookastic.es/tenis-blancos/kam-original-156146.jpg"} 
]


    constructor (private _productService: ProductService){

    }

ngOnInit(): void {
    this._productService.getProducts().subscribe(
        photos => this.photos=photos,
        error => this.errorMessage = <any>error);
    }



    removeProduct(product):void{
        this.products = this.products.filter( (x) => {
            return x.name != product.name
        });
    }

    addProduct():void{
       this.products.push(this.newProduct[0]);
       this.newProduct = [{name: '', price: '', description: '',  img:'' }];
    }

} 
