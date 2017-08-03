/*
The select element users can use to choose how big their company
search result display size should be.
*/
class LimitSelect extends Component{
  constructor(parent, options){
    super(parent, options)

    if(!options){
      throw "LimitSelect: options param must be provided";
    }

    if(!options.limitChangedCB){
      throw "LimitSelect: limitChangedCB must be provided in options param";
    }
  }

  _setup(){
    this.limitOptions = [10, 20, 50, 100];

    this.limitOptionsSelectEl = this.parent.querySelector("#limitOptionsSelect");
    this.limitOptionsSelectEl.innerHTML = this._generateLimitOptionsHTML(this.limitOptions);

    this._addEventHandlers();
  }

  _addEventHandlers(){
    this.limitOptionsSelectEl.addEventListener('change', () => {
      this.options.limitChangedCB(this.limitOptionsSelectEl.value);
    });
  }

  _generateLimitOptionsHTML(limitOptions){
    return limitOptions.map((option) => {
      return '<option>' + option + '</option>';
    }).join("");
  }

  getLimitOptions(){
    return this.limitOptions;
  }
}
