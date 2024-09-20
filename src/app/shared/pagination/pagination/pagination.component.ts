import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input('total') total: number;
  @Input('limit') limitProps: number;
  @Input('url') urlProps: string;
  @Input('currentPage') currentPageProps: number;
  
  pagesCount:number;
  pages: number[];

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limitProps);

    this.pages =  [...Array(this.pagesCount).keys()].map(el=>el+1);
    }
}
