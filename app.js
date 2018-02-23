$(document).ready(function ( ){

var APIKey = "8ff951779ef8421f8c330c0515c2942a"
var search = $("#searchTerm").val( )
var beginDate = $("#startYear").val( ) + "0101"
var endDate = $("#endYear").val( ) + "1231"
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=" + APIKey + "&q=" + search + "&begin_date=" + beginDate + "&end_date" + endDate

$.ajax({
  url: queryURL,
  method: "GET"
}).done(function(result) {
  $("#runSearch").on("click", function( ) {
    console.log(search)
    console.log(beginDate)
    console.log(endDate)
    var objData = result.response.docs
  for( var i = 0; i < objData.length; i++ ) {
    console.log(objData[i].headline.main)
    console.log(objData[i].byline.original)
    console.log(objData[i].web_url)
  }
})
}).fail(function(err) {
  throw err
})

})