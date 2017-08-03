/*
The company profile view that show the companies details
*/
class CompanyProfile extends Component{
  constructor(parent, options){
    super(parent, options);
  }

  _setup(){
    this.companyNameEl = this.parent.querySelector("#companyName");
    this.companyAvatarEl = this.parent.querySelector("#companyAvatar");
    this.companyLaborTypeEl = this.parent.querySelector("#companyLaborType");
    this.companyPhoneEl = this.parent.querySelector("#companyPhone");
    this.companyWebsiteEl = this.parent.querySelector("#companyWebsite");

    if(this.options){
      this.setCompany(this.options.company);
    }
  }

  setCompany(company){
    if(company){
      this._render(company);
    }else{
      throw "CompanyProfile: No company provided";
    }
  }

  _render(company){
    this.companyNameEl.innerHTML = company.name;

    this.companyAvatarEl.innerHTML = this._generateAvatarImageHTML(company.avatarUrl);

    this.companyLaborTypeEl.innerHTML = company.laborType;

    this.companyPhoneEl.innerHTML = company.phone;

    this.companyWebsiteEl.innerHTML = company.website;
    this.companyWebsiteEl.href = company.website;
  }

  _generateAvatarImageHTML(url){
    url = url ? url : "#";
    return '<img src="'+ url +'" alt="companyAvatar">';;
  }
}
