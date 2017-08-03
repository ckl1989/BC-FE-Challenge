/*
A stateful controller that makes service requests to the API.
Upon a successful response, the companies returned are wrapped in a
Company model object.

There is a "store" array that stores each company object at an index
corresponding with its "id" in the UI table. When a table's row is clicked,
the Company at its respective index will be fetched and passed into the
Company Profile view.
*/
class CompaniesController {
  constructor () {
    this.companiesService = new CompaniesService();
    this.companiesStore = [];
  }

  getCompanies(params) {
    return this.companiesService.getCompanies(params).then((response) => {
      this.companiesStore = response.results.map((company) => {
        return new Company(company);
      });

      return {
        total: response.total,
        companies: this.companiesStore
      }
    });
  }

  getCompanybyId(id){
    var foundCompany = this.companiesStore[id];

    if(foundCompany){
      return foundCompany;
    }
    throw "CompaniesController: company not found";
  }
}
