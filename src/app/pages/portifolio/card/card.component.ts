import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private navegador: Router
    ){
    this.activeRoute.firstChild?.params.subscribe(
      result => console.log(result)
    )

    this.activeRoute.firstChild?.queryParams.subscribe(
      result => console.log(result)
    )
  }

  ngOnInit(): void {
/*     setInterval(()=>{
      this.navegador.navigate(['/'])
    }, 5000) */
  }

}
