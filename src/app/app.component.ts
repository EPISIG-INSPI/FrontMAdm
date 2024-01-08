import { Component, ChangeDetectorRef, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked{
  title = 'gestion-administrativa';

  constructor(
    private changeDetector: ChangeDetectorRef,
    )
  {

  }
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
}

