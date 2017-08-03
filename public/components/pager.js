/*
The pager control used to iterate through "pages" of search results.
The next/previous page buttons will be disabled if there are no
more pages left to iterate

When a new search query string is entered, or a limit is changed,
The pager will reset to the page 1
*/
class Pager extends Component {
  constructor(parent, options){
    super(parent, options);

    if(!options){
      throw "Pager: options param must be provided";
    }

    if(!options.pageChangedCB){
      throw "Pager: pageChangedCB must be provided in options param";
    }
  }

  _setup(){
    this.backButtonEl = this.parent.querySelector("#backButton");
    this.forwardButtonEl = this.parent.querySelector("#forwardButton");
    this.pageNumberEl = this.parent.querySelector("#pageNumber");

    this.currentPage = 0;
    this.totalItems = this.options.totalItems;
    this.limit = this.options.limit;

    if(this.totalItems && this.limit){
      this.refresh(this.totalItems, this.limit);
    }

    this._attachEventHandlers();
  }

  _attachEventHandlers(){
    this.backButtonEl.addEventListener("click", () => {
      this._backButtonClicked();
      this._refreshButtonState();
    });

    this.forwardButtonEl.addEventListener("click", () => {
      this._forwardButtonClicked();
      this._refreshButtonState();
    });
  }

  _backButtonClicked(){
    this.currentPage--;
    this._setPageNumber()
    this.options.pageChangedCB(this.currentPage);
  }

  _forwardButtonClicked(){
    this.currentPage++;
    this._setPageNumber()
    this.options.pageChangedCB(this.currentPage);
  }

  _setPageNumber(){
    this.pageNumberEl.innerHTML = this.currentPage + 1;
  }

  _refreshButtonState(){
    if(this.currentPage == 0) {
      this.backButtonEl.disabled = true;
    }else{
      this.backButtonEl.disabled = false;
    }

    if(this.currentPage == Math.ceil(this.totalItems/this.limit)-1){
      this.forwardButtonEl.disabled = true;
    }else {
      this.forwardButtonEl.disabled = false;
    }
  }

  refresh(total, limit, start){
    this.totalItems = total;
    this.limit = limit;
    this.currentPage = start/limit;
    this._refreshButtonState();
    this._setPageNumber();
  }
}
