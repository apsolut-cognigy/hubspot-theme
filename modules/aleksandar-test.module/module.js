// define our API

let  fAPI = "https://pro.regiondo.com//wp-json/wp/v2/posts/?per_page=4&_embed";

$(document).ready(function() {
    $.getJSON(fAPI, function(data) {
        $.each(data, function(i, item) {

            // link
            var  $linkUrl = item.link;
            var $link = `<a class="more" href="${$linkUrl}">Read more →</a>`;
            // var pic = item._embedded["wp:featuredmedia"][0].source_url;
            if(item.featured_media == 0 || item._embedded['wp:featuredmedia'][0].media_details == undefined){
                $picture = null;
            }
            else{
                $pictureSize = 'post-recent'; // full , post-recent, post-featured, post-fullwidth
                $pictureImg =  item._embedded['wp:featuredmedia'][0].media_details.sizes[$pictureSize].source_url;
                $picture = `<img src="${$pictureImg}">`
            }

            var $heading =  '<h1>' +
                item.title.rendered +
                '</h1>';
            var $content  = '<div>' +
                item.excerpt.rendered  +
                '</div>'

            var $contentBox = '<div class="post">' +
                $picture + $heading + $content + $link
            '</div>'

            $(".post-list").append($contentBox);

        });
    }); //end getJSON
});


