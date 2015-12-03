angular.module('kadajett.ngTwitchPrivate', [])
  .factory('Emotes', function($http, $q){
    var api = {
      getEmoteList:
    };
    function getEmoteList(){
      var defer = $q.defer();

      $http.get('http://twitchemotes.com/api_cache/v2/global.json')
        .success(function(res){
          defer.resolve(res);
        })

      return defer.promise;
    }
  });
angular.module('kadajett.ngTwitchEmote', ['kadajett.ngTwitchPrivate'])
  .directive('ngTwitchEmote', function(){
    function link(scope, elem, attrs){
      
    }
  })
