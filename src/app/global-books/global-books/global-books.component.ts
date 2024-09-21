import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-global-books',
  templateUrl: './global-books.component.html',
  styleUrl: './global-books.component.scss'
})
export class GlobalBooksComponent {
  @Input('route') routeProps: string;
  filterTitle: string = '';
  filterAuthor: string = '';

  filterTitleOut: string = '';
  filterAuthorOut: string = '';
  onSubmit(): void{
    this.filterAuthorOut = this.filterAuthor;
    this.filterTitleOut = this.filterTitle;
  }
}
