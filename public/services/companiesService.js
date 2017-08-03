class CompaniesService {
  getCompanies(params) {
    return new Promise((resolve, reject) => {
      var oReq = new XMLHttpRequest();
      var queryPath = "?";
      var queryOptions = [];
      oReq.onload = function(e) {
        resolve(e.target.response);
      };

      var baseURL = 'http://localhost:3000/';
      var companyAPIPath = 'api/companies';

      if(params){
        if (params.q) {
          queryOptions.push('q=' + params.q);
        }

        if(params.limit){
          queryOptions.push('limit=' + params.limit);
        }

        if(params.start){
          queryOptions.push('start=' + params.start);
        }
      }

      for (var i = 0; i < queryOptions.length - 1; i++){
        queryPath += queryOptions[i] + '&';
      }

      queryPath += queryOptions[queryOptions.length-1];

      oReq.open('GET', baseURL + companyAPIPath + queryPath, true);
      oReq.responseType = 'json';
      oReq.send();
    });
  }
}
