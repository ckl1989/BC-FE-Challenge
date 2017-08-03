/*
The view for all search related controls.
It consists of a search box, a search results table, and a paginator
*/
class CompanySearch extends Component {
  constructor(parent, options) {
    super(parent, options);

    if (!options) {
      throw "CompanySearch: options param must be provided";
    }

    if (!options.fetchDataCB) {
      throw "CompanySearch: fetchDataCB must be provided in options param";
    }
  }

  _setup() {
    this.fetchOptions = {
      limit: 10,
      q: "",
      start: 0
    }

    this.searchBoxComponent = new SearchBox(this.parent.querySelector("#searchBox"), {
      searchCompanyCB: this.searchCompanyCB.bind(this)
    });

    this.searchResultsComponent = new SearchResults(this.parent.querySelector("#searchResults"), {
      companySelectedCB: this.options.companySelectedCB
    });

    this.paginatorComponent = new Paginator(this.parent.querySelector("#paginator"), {
      limitChangedCB: this.limitChangedCB.bind(this),
      pageChangedCB: this.pageChangedCB.bind(this)
    });
  }


  limitChangedCB(newLimit) {
    this.fetchOptions.limit = newLimit;
    this.fetchOptions.start = 0;

    this.options.fetchDataCB(this.fetchOptions).then((response) => {
      this.setSearchResults(response);
    });
  }

  searchCompanyCB(value){
    this.fetchOptions.q = value;
    this.fetchOptions.start = 0;

    this.options.fetchDataCB(this.fetchOptions).then((response) => {
      this.setSearchResults(response);
    })
  }

  pageChangedCB(newPageNumber) {
    this.fetchOptions.start = this.fetchOptions.limit * newPageNumber;

    this.options.fetchDataCB(this.fetchOptions).then((response) => {
      this.setSearchResults(response);
    });
  }

  setSearchResults(data) {
    this.searchResultsComponent.setResults(data);
    this.paginatorComponent.refresh(data.total, this.fetchOptions.limit, this.fetchOptions.start);
  }
}
