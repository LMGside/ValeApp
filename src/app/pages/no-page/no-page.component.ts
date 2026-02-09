//@IntentMerge()
import { IntentIgnoreBody, IntentMerge, IntentIgnore } from './../../intent/intent.decorators';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@IntentMerge()
@Component({
  selector: 'app-no-page',
  standalone: true,
  templateUrl: 'no-page.component.html',
  styleUrls: ['no-page.component.scss'],
  imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class NoPageComponent implements OnInit {
  //@IntentMerge()
  constructor(private router: Router) {
  }

  @IntentMerge()
  ngOnInit(): void {
  }

  navigateToValeHome(): void {
    this.router.navigate(['/vale-home']);
  }

  navigateToYesPage(): void {
    this.router.navigate(['/yes']);
  }

  onYes(): void {
    this.navigateToYesPage();
  }
}