import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".show").click(function(){
      $(this).toggleClass('open');
      $(".con-hide").toggle("fast");
      document.getElementById("con-hide").style.display="flex";
    });
    $(".close").click(function(){
      $(".show").toggleClass('open');
      $(".con-hide").toggle("fast");
    });
  }

  
}
