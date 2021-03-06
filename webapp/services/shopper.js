
angular.module('eShopper')
    .service('ShopperService', ['$http',
        function ($http) {
            var service = {
                getInfo: () => $http.get('/shopper/info', { cache: true }).then(resp => resp.data),
                getSliders: () => $http.get('/shopper/sliders', { cache: true }).then(resp => resp.data),
                getRecommends: () => $http.get('/shopper/recommends', { cache: true }).then(resp => resp.data),
                sendEmail: (emailBody) => $http.put('/shopper/sendEmail', emailBody).then(resp => resp.data)
            }

            return service;
        }]);

