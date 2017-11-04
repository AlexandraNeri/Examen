import { Component } from "@angular/core";


@Component({
    selector:'profile-component',
    templateUrl: './profile.component.html'
})
export class  ProfileComponent{
    profiles: any[] = [
        {first_name:'Alexandra', last_name:'Escobar'},
        {first_name:'Irma', last_name:'Neri'}

    ]

}