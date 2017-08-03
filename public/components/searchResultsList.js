/*
Table for search results. Upon a query, the table will be populated with
rows that consist of a company avatar thumbnail and the company name
*/
class SearchResultsList extends Component{
  constructor(parent, options){
    super(parent, options);

    if(!options){
      throw "SearchResultsList: options param must be provided";
    }

    if(!options.companySelectedCB){
      throw "SearchResultsList: companySelectedCB must be provided in options param";
    }
  }

  _setup(){
    this.itemListEl = this.parent.querySelector("#itemList");
    this.tableBodyEl = this.itemListEl.querySelector("tbody");

    if (this.options && this.options.results){
      setResultsListItems(this.options.results);
    }
  }

  setResultsListItems(results){
    if(!results){
      throw "SearchResultsList: No results provided";
    }

    this.tableBodyEl.innerHTML = "";

    for (var i = 0; i < results.length; i++) {
      this.tableBodyEl.appendChild(this._generateRow(i, results[i]));
    }
  }

  _generateRow(index, item){
    var tr = document.createElement('tr');
    tr.id = index;
    tr.innerHTML = '<td> <div class="companyAvatarThumbnail"> <img src="' +
      item.avatarUrl + '" alt="">' + '</div> <div class="list-item-name">' +
      item.name + '</div> </td>';

    tr.addEventListener('click', () => {
      this.options.companySelectedCB(index);
      return false;
    });

    return tr;
  }
}
