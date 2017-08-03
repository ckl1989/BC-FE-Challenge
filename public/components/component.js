/*
Base class for ui components. All components are "bound" to a parent
DOM element in the index.html template
*/
class Component {
  constructor(parent, options){
    this.options = options;
    this.parent = parent;
    this._setup();
  }

  _setup() {}
}
