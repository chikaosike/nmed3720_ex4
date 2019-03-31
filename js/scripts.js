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
            imageString += "<img src='https://picsum.photos/g/600/400?image=" + picsum[1].id + "'>" + "<h2>" + picsum[1].author + "</h2>" + "<p>" + picsum[1].post_url + "</p>";


            for (var x = 100; x < 175; x += 25) {
                imageString += "<img src='https://picsum.photos/400/600?image=" + picsum[x].id + "'>" + "<h2>" + picsum[x].author + "</h2>" + "<p>" + picsum[x].post_url + "</p>";
            }


            for (var x = 175; x < 250; x += 25) {
                imageString += "<img src='https://picsum.photos/g/400/600?image=" + picsum[x].id + "'>" + "<h2>" + picsum[x].author + "</h2>" + "<p>" + picsum[x].post_url + "</p>";
            }


            for (var x = 250; x < 325; x += 25) {
                imageString += "<img src='https://picsum.photos/400/600?image=" + picsum[x].id + "'>" + "<h2>" + picsum[x].author + "</h2>" + "<p>" + picsum[x].post_url + "</p>";
            }


            document.getElementById("gallery").innerHTML = imageString;
        }
    }

}
