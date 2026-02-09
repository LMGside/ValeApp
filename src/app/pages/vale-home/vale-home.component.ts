//@IntentMerge()
import { IntentIgnoreBody, IntentMerge, IntentIgnore } from './../../intent/intent.decorators';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@IntentMerge()
@Component({
  selector: 'app-vale-home',
  standalone: true,
  templateUrl: 'vale-home.component.html',
  styleUrls: ['vale-home.component.scss'],
  imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class ValeHomeComponent implements OnInit {
  noButtonTransform = '';
  //@IntentMerge()
  constructor(private router: Router) {
  }

  @IntentMerge()
  ngOnInit(): void {
  }

  navigateToHome(): void {
    this.router.navigate([]);
  }

  navigateToNoPage(): void {
    this.router.navigate(['/no']);
  }

  navigateToYesPage(): void {
    this.router.navigate(['/yes']);
  }

  onYes(): void {
    this.navigateToYesPage();
  }

  onNoHover(): void {
    const maxOffset = 200;
    const randomX = (Math.random() - 0.5) * 2 * maxOffset;
    const randomY = (Math.random() - 0.5) * 2 * maxOffset;
    this.noButtonTransform = 'translate(' + randomX + 'px, ' + randomY + 'px)';

    document.getElementById('NoBtn')?.classList.add('shake');
  }

  onNo(): void {
    this.navigateToNoPage();
  }
}
