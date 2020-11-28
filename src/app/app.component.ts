import { Component } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hipermaxi';


  ngOnInit(){
    (function ($) {
      $(document).ready(function(){
        console.log("Hello from jQuery!");
      });
    })(jQuery);
  }
}
