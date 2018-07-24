app.controller('mainController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.showTable = "";
        $scope.mostfolloweds;
        $scope.tweetsGroupedHour;
        $scope.tweetsGroupedHashtagLang;

        var pad = function(num, size) {
            var s = "000000000" + num;
            return s.substr(s.length - size);
        }
    
        $scope.getMostFolloweds = function () {
            $scope.showTable = "mostFollowed"
            $scope.mostFollowedTable = true;
            var baseUrl = 'http://danniel2d-eval-test.apigee.net/itau-rest-no-auth/api/user/mostfollowed';
            $http.get(baseUrl).then(function (response) {
                $scope.mostfolloweds = response.data;
            }, function (err) {
                console.log(err);
            });
        }
        $scope.getTweetsGroupedHour = function () {
            $scope.showTable = "tweetPerHourTable"
            var baseUrl = 'http://danniel2d-eval-test.apigee.net/itau-rest-no-auth/api/tweet/perhour';
            $http.get(baseUrl).then(function (response) {
                $scope.tweetsGroupedHour = response.data;
                for (let i = 0; i < $scope.tweetsGroupedHour.length; i++) {
                    $scope.tweetsGroupedHour[i].hourStr = pad($scope.tweetsGroupedHour[i].hour, 2) + ":00 - "+pad($scope.tweetsGroupedHour[i].hour, 2) + ":59";
                }
            }, function (err) {
                console.log(err);
            });
        }
        $scope.getTwettsGroupedHastagLan = function () {
            $scope.showTable = "tweetHashtagLangTable"
            var baseUrl = 'http://danniel2d-eval-test.apigee.net/itau-rest-no-auth/api/tweet/hashtag/lang';
            $http.get(baseUrl).then(function (response) {
                $scope.tweetsGroupedHashtagLang = response.data;
            }, function (err) {
                console.log(err);
            });
        }
    }]);
    
