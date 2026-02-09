//@IntentMerge()
import { IntentIgnoreBody, IntentMerge, IntentIgnore } from './../../intent/intent.decorators';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@IntentMerge()
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  //@IntentMerge()
  constructor(private router: Router) {
  }

  @IntentMerge()
  ngOnInit(): void {
  }

  navigateToValeHome(): void {
    this.router.navigate(['/vale-home']);
  }
}