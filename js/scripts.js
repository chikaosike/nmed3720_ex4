window.onload = init;

function init() {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://picsum.photos/list", true);

    xhr.send(null);

    xhr.onload = function () {

        if (xhr.status == 200) {
            var picsum = JSON.parse(xhr.responseText)
            console.log(picsum);



            var imageString = "";
            var x;
            var str = "Post URL";
            var astr = picsum[1].author;
            imageString += "<img src='https://picsum.photos/g/600/400?image=" + picsum[1].id + "'>" + "<h2>" + astr.link(picsum[1].author_url) + "</h2>" + "<p>" + str.link(picsum[1].post_url) + "</p>";


            for (x = 100; x < 175; x += 25) {
                var str1 = picsum[x].author;
                var post = "Post URL";
                imageString += "<img src='https://picsum.photos/400/600?image=" + picsum[x].id + "'>" + "<h2>" + str1.link(picsum[x].author_url) + "</h2>" + "<p>" + post.link(picsum[x].post_url) + "</p>";
            }


            for (x = 175; x < 250; x += 25) {
                var str2 = picsum[x].author;
                imageString += "<img src='https://picsum.photos/g/400/600?image=" + picsum[x].id + "'>" + "<h2>" + str2.link(picsum[x].author_url) + "</h2>" + "<p>" + post.link(picsum[x].post_url) + "</p>";
            }


            for (x = 250; x < 325; x += 25) {
                var str3 = picsum[x].author;
                imageString += "<img src='https://picsum.photos/400/600?image=" + picsum[x].id + "'>" + "<h2>" + str3.link(picsum[x].author_url) + "</h2>" + "<p>" + post.link(picsum[x].post_url) + "</p>";
            }


            document.getElementById("gallery").innerHTML = imageString;
        }
    }

}
