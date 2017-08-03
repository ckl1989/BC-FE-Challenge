/*
Main application and root UI piece. It consists of the company search view and
the company profile view. It is responsible for defining what happens
when a company is selected from the company search view.

It is also responsible for using the controller to make the service call to the
companies API
*/
class App {
  constructor(){
    this.companiesController = new CompaniesController();

    this.companySearchComponent = new CompanySearch(document.getElementById("companySearch"),
      {
        fetchDataCB: this.fetchData.bind(this),
        companySelectedCB: this.companySelectedCB.bind(this),
      }
    );

    this.companyProfileEl = document.getElementById("companyProfile")
    this.companyProfileComponent = new CompanyProfile(this.companyProfileEl);

    this.companyProfileEmptyEl = document.getElementById("companyProfileEmpty");

    this.fetchData().then((response) => {
      this.companySearchComponent.setSearchResults(response);
    });
  }

  fetchData(fetchOptions){
    return this.companiesController.getCompanies(fetchOptions).then((response) => {
      return response;
    });
  }

  companySelectedCB(companyId) {
    this.companyProfileEl.classList.remove("hidden");
    this.companyProfileEmptyEl.classList.add("hidden");

    var company = this.companiesController.getCompanybyId(companyId);
    this.companyProfileComponent.setCompany(company);
  }
}
