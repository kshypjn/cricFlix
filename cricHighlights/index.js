let loadMatch = function () {
    var matches = [];
    fetch('./res/hlightData.json')
        .then(response => response.json())
        .then(data => {
            matches = data[1].data
            let randomMatch = matches[Math.floor(Math.random() * matches.length)];
            let matchTitle = document.getElementById('titleMatch')
            let matchLink = document.getElementById('matchLink')

            matchTitle.innerHTML = truncate(randomMatch.title,60);
            matchLink.innerHTML = randomMatch.url.replace(/(^\w+:|^)\/\//, ''); // clean the URL
            matchLink.href = randomMatch.url

            let loader = document.getElementsByClassName('loader')[0]
            loader.style.visibility = 'hidden'
            loader.style.opacity = 0
            let mainContent = document.getElementsByClassName('main')[0]
            mainContent.style.visibility = 'visible'
            mainContent.style.opacity = 1
        });
}

function truncate(str, n) {
    return (str.length > n) ? str.substr(0, n - 1) + '&hellip;' : str;
};

loadMatch();

document.getElementById('sgtnBtn').addEventListener('click', function () {
    loadMatch();
})