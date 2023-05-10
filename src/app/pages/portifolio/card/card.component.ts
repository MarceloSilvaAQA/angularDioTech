import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private parametrizador: ActivatedRoute) {

      //http:localhost:4200/portifolio/{1}
      this.parametrizador.params.subscribe(
        res => console.log(res)
      )

      //http:localhost:4200/portifolio/1?{name=marcelo&token=123}
      this.parametrizador.queryParams.subscribe(
        res => console.log(res)
      )
     }

  ngOnInit(): void {
  }

}
