import { JsonPipe } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { PageOpt } from '../../models/pageOpt.models';

@Component({
  selector: 'app-pagination',
  imports: [
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  pageSizeOptions = [1, 2, 4];

  passPageOptToParent = output<PageOpt>();
  
  totalPages = signal(0);
  totalCount = input<number>(0);
  curPage = signal(1);
  perPage = signal(3);
  
  //showPageSizeOptions = true;
  // passTodoItemsToParent= output<PaginationMetaData>();
  //passTodoItemsToParent= output<Array<Todo>>();

  ngOnInit(): void {
    this.totalPages.set(Math.ceil(this.totalCount()/this.perPage()));
    this.paginate(1, this.perPage());
  }

  paginate(page: number, size:number){
    page = page < 1 ? 1: page;
    let offset = (page -1) * size;
    if(page >= 1){
      size += offset;
      this.totalPages.set(Math.ceil(this.totalCount()/this.perPage()));
      this.passPageOptToParent.emit({offset, size})
    }
  }

  nextPage(page: number, size: number){
    this.totalPages.set(Math.ceil(this.totalCount() / size));
    page++;
    if(page <= this.totalPages()){
      this.curPage.set(page);
      this.perPage.set(size);
      this.paginate(page, size);
    }
  }
  prevPage(page: number, size: number){
    this.totalPages.set(Math.ceil(this.totalCount() / size));
    page--;
    if(page > 0){
      this.curPage.set(page);
      this.perPage.set(size);
      this.paginate(page, size);
    }
  }
}
