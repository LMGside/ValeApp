//@IntentMerge()
import { IntentIgnoreBody, IntentMerge, IntentIgnore } from './../../intent/intent.decorators';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@IntentMerge()
@Component({
  selector: 'app-success',
  standalone: true,
  templateUrl: 'success.component.html',
  styleUrls: ['success.component.scss'],
  imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class SuccessComponent implements OnInit {
  //@IntentMerge()
  constructor(private router: Router) {
  }

  @IntentMerge()
  ngOnInit(): void {
  }

  navigateToValentine(): void {
    this.router.navigate(['/valentine']);
  }

  sendEmail(): void {
    window.location.href = 'mailto:?subject=Valentine%20message&body=I%20just%20saw%20your%20Valentine%20page%20and%20wanted%20to%20send%20you%20a%20note.';
  }
}