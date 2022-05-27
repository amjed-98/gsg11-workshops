(function () {
    let xhr = new XMLHttpRequest();
    let url =
        'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC';

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let giphyObj = JSON.parse(xhr.responseText);

            document.querySelector('body').innerHTML = giphyObj.data
                .map((el) => `<img src=${el.images.downsized_medium.url}`)
                .join('<br>');
        }
    };

    xhr.open('GET', url, true);

    xhr.send();
})();
