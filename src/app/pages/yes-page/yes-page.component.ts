//@IntentMerge()
import { IntentIgnoreBody, IntentMerge, IntentIgnore } from './../../intent/intent.decorators';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@IntentMerge()
@Component({
  selector: 'app-yes-page',
  standalone: true,
  templateUrl: 'yes-page.component.html',
  styleUrls: ['yes-page.component.scss'],
  imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class YesPageComponent implements OnInit {
  noButtonTransform = '';
  yesButtonScale = 1;
  gifSrcs = [
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDR2MHg0YXdoYnJic2RweXJoNTZxM2docWJsemcyNHBqNmdtZWdpbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/P53TSsopKicrm/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDR2MHg0YXdoYnJic2RweXJoNTZxM2docWJsemcyNHBqNmdtZWdpbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dCwNmR9BBOzKpiBQOs/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDR2MHg0YXdoYnJic2RweXJoNTZxM2docWJsemcyNHBqNmdtZWdpbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fFa05KbZowXiEIyRse/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDR2MHg0YXdoYnJic2RweXJoNTZxM2docWJsemcyNHBqNmdtZWdpbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ar71Hyi0ZKejXzMoNs/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3d251bTgzY3FkbmJ3NHJwa3EzNW5mMjRjcXJzZnpsc2prMmRuYmhyNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/rvxMJNyHAgwlW4YWpJ/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MmF4eTZqa2NuejJ0Y2kyem1sbTZyZjQ5cGY3ZHZvM3VqcDh6aHg4YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/S6dJse528X4MpfAWGE/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aGs1ZGlybjQ2dTYweG9hbHdua3J0bnRteGc5bGppNmZrNTJmczZheSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3dxn53ZS1A6Ry/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ajVmZnF1cnRxdWI0ZDQ4eTZyMmY2YWhiNzBsempieW9nczh2MTg2MSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/iJJ6E58EttmFqgLo96/giphy.gif'
  ];
  gifIndex = 0;
  noBtnText = 'No';
  //@IntentMerge()
  constructor(private router: Router) {
  }

  @IntentMerge()
  ngOnInit(): void {
  }

  navigateToNoPage(): void {
    this.router.navigate(['/no']);
  }

  navigateToValeHome(): void {
    this.router.navigate(['/vale-home']);
  }

  navigateToValentine(): void {
    this.router.navigate(['/valentine']);
  }

  onYes(): void {
    this.navigateToValentine();
  }

  onNo(): void {
    this.yesButtonScale += 2;
    this.gifIndex += 1;
    if (this.gifIndex >= this.gifSrcs.length) {
      this.gifIndex = 0;
    }

    switch(this.gifIndex){
      case 0:
        this.noBtnText = 'No';
        break;
      case 1:
        this.noBtnText = 'Are you sure?';
        break;
      case 2:
        this.noBtnText = 'One more chance?';
        break;
      case 3:
        this.noBtnText = 'Have a heart';
        break;
      case 4:
        this.noBtnText = 'Please?';
        break;
      case 5:
        this.noBtnText = 'Pretty please?';
        break;
      case 6:
        this.noBtnText = 'You\'re breaking my heart';
        break;
      case 7:
        this.noBtnText = 'I thought we would have something special';
        break;
    }

  }
}