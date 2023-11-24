import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HRMS-micro-frontend';

  constructor(private router: Router, private route: ActivatedRoute) {
    fromEvent(window, 'event').subscribe((event: any) => {
      this.router.navigate([`../${event.detail}`], { relativeTo: this.route });
    })
  }
}
