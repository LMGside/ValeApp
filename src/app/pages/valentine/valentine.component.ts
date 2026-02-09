//@IntentMerge()
import { IntentIgnoreBody, IntentMerge, IntentIgnore } from './../../intent/intent.decorators';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@IntentMerge()
@Component({
  selector: 'app-valentine',
  standalone: true,
  templateUrl: 'valentine.component.html',
  styleUrls: ['valentine.component.scss'],
  imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class ValentineComponent implements OnInit {
  noButtonTransform = '';
  oldRandomX = 0;
  oldRandomY = 0;
  //@IntentMerge()
  constructor(private router: Router) {
  }

  @IntentMerge()
  ngOnInit(): void {
  }

  navigateToSuccess(): void {
    this.router.navigate(['/success']);
  }

  navigateToYesPage(): void {
    this.router.navigate(['/yes']);
  }

  navigateToNoPage(): void {
    this.router.navigate(['/no']);
  }

  onYes(): void {
    this.navigateToSuccess();
  }

  onNoHover(): void {
    const maxOffset = 200;
    const randomX = (Math.random() - 0.5) * 2 * maxOffset;
    const randomY = (Math.random() - 0.5) * 2 * maxOffset;

    if(Math.abs(randomX - this.oldRandomX) < 50) {
      console.log('Regenerating randomX');
      this.oldRandomX = (Math.random() - 0.5) * 2 * maxOffset;
    }
    else{
      this.oldRandomX = randomX;
    }

    if(Math.abs(randomY - this.oldRandomY) < 50) {
      console.log('Regenerating randomY');
      this.oldRandomY = (Math.random() - 0.5) * 2 * maxOffset;      
    }
    else{
      this.oldRandomY = randomY;
    }

    this.noButtonTransform = 'translate(' + this.oldRandomX + 'px, ' + this.oldRandomY + 'px)';
  }

  onNo(): void {
    this.onNoHover();
  }
}