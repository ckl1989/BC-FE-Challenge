/*
Text input control for searching the company
*/
class SearchBox extends Component{
  constructor(parent, options){
    super(parent, options);

    if(!options){
      throw "SearchBox: options param must be provided";
    }

    if(!options.searchCompanyCB){
      throw "SearchBox: searchCompanyCB must be provided in options param";
    }
  }

  _setup() {
    this.inputEl = this.parent.querySelector("#searchInput");
    this.inputEl.placeholder = "Search Companies...";

    this._attachEventHandlers();
  }

  _attachEventHandlers(){
    this.inputEl.addEventListener('keyup', this._delay(() => {
      this.options.searchCompanyCB(this.inputEl.value);
      return false;
    }));
  }

  _delay(callback){
    var timer = 0;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback();
      }, 1000);
    }
  }
}
