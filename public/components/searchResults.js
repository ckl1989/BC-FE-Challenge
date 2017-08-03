/*
UI panel consisting of the search results table and a text that describes
how many results are found from the current query
*/
class SearchResults extends Component {
  constructor(parent, options){
    super(parent, options);

    if(!options){
      throw "SearchResults: options param must be provided";
    }

  }

  _setup() {
    this.matchCountEl = this.parent.querySelector("#matchCount");

    this.searchResultsListComponent = new SearchResultsList(this.parent.querySelector("#searchResultsList"),
      {
        companySelectedCB: this.options.companySelectedCB
      }
    );

    if(this.options.results){
      this.setResults(this.options.results);
    }
  }

  setResults(results){
    if(results){
      this._refreshMatchCount(results.total);
      this._refreshSearchResultsList(results.companies);
    }else{
      throw "SearchResults: No results provided";
    }
  }

  _refreshMatchCount(count){
    if(count == null){
      throw "SearchResults: No match count provided";
    }

    this.matchCountEl.innerHTML = count;
  }

  _refreshSearchResultsList(results){
    this.searchResultsListComponent.setResultsListItems(results);
  }
}
