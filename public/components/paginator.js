/*
UI panel consisting of a pager and a limit selection control
*/
class Paginator extends Component{
  constructor(parent, options){
    super(parent, options);

    if(!options){
      throw "Paginator: options param must be provided";
    }
  }

  _setup(){
    this.limitSelectComponent = new LimitSelect(this.parent.querySelector("#limitSelect"),
      {
        limitChangedCB: this.options.limitChangedCB
      }
    );

    this.pagerComponent = new Pager(this.parent.querySelector("#pager"),
      {
        pageChangedCB: this.options.pageChangedCB,
        totalItems: this.options.totalItems,
        limit: this.limitSelectComponent.getLimitOptions()[0]
      }
    );
  }

  refresh(total, limit, start){
    this.pagerComponent.refresh(total, limit, start);
  }
}
