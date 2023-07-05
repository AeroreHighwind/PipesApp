import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {


  public nameLower : string = 'pepitosus';
  public nameUpper : string = 'PEPITOSUS';
  public fullName : string = 'PePiTO suS';

  public customDate : Date = new Date();
}
