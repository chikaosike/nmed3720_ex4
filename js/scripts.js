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
            imageString += "<img src='https://picsum.photos/g/600/400?image=" + picsum[1].id + "'>" + "<br>" + picsum[1].author + "<br>" ;


            for (var x = 100; x < 175; x += 25) {
                imageString += "<img src='https://picsum.photos/200/300?image=" + picsum[x].id + "'>" + "<p>" + picsum[x].author + "</p>";
            }


            for (var x = 175; x < 250; x += 25) {
                imageString += "<img src='https://picsum.photos/g/200/300?image=" + picsum[x].id + "'>" + "<p>" + picsum[x].author + "</p>";
            }


            for (var x = 250; x < 325; x += 25) {
                imageString += "<img src='https://picsum.photos/200/300?image=" + picsum[x].id + "'>" + "<p>" + picsum[x].author + "</p>";
            }


            document.getElementById("gallery").innerHTML = imageString;
        }
    }

}
