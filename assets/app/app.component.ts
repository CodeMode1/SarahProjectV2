import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: ` 
        <my-header></my-header>
        <my-login></my-login>
        <router-outlet></router-outlet>
        <my-error></my-error> 
    `,
    styles:[`
    `]
})
export class AppComponent {


}