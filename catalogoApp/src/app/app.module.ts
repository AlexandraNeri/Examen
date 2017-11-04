import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductListComponent } from './products/product.component';
import { DescriptionComponent } from './Shared/description.component';

import { FormsModule } from '@angular/forms';

//import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProductListComponent,
    DescriptionComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
