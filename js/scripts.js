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
            imageString += "<img src='https://picsum.photos/g/600/400?image=" + picsum[1].id + "'>"
            for (var x = 100; x < 175; x += 25) {
                imageString += "<img src='https://picsum.photos/200/300?image=" + picsum[x].id + "'>"
            }
            for (var x = 175; x < 250; x += 25) {
                imageString += "<img src='https://picsum.photos/g/200/300?image=" + picsum[x].id + "'>"
            }
            for (var x = 250; x < 325; x += 25) {
                imageString += "<img src='https://picsum.photos/200/300?image=" + picsum[x].id + "'>"
            }

            // imageString += "<img src='https://picsum.photos/400/600?image=" + picsum[1].id + "'>"

            document.getElementById("gallery").innerHTML = imageString;
        }
    }

}
