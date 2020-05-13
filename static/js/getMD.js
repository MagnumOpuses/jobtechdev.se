




    function b64DecodeUnicode(str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    var url = document.getElementById("githubcontent").getAttribute("geturl");

    var request = new XMLHttpRequest();

    let dataDecoded;
    request.open('GET',url, true);

    request.onreadystatechange = function() {
        var data = JSON.parse(this.response);
        var dataDecoded = b64DecodeUnicode(data.content);


        document.getElementById('githubcontent').innerHTML = marked(dataDecoded);
        /*

*/
        const regex = /\[_metadata_:url]:- "\s*(.*)"$/gm;
        let match;
        match = regex.exec(dataDecoded);
        if (!!match) {
            let githubContent = document.getElementById('githubcontent');
            let linkContainer = document.createElement("span");
            let link = document.createElement("a");

            linkContainer.setAttribute("class","projectLink");
            link.href = match[1];
            link.innerText = "Go to project ";
            link.innerHTML += '<i class="fas fa-arrow-right"></i>';
            linkContainer.appendChild(link);
            githubContent.prepend(linkContainer);
        }
        // Change links to lower case
        let elements = document.getElementById("innerMainContent").getElementsByTagName("a");
        Array.prototype.forEach.call(elements, function(element) {
            if (element.host == window.location.host) {
                element.hash = element.hash.toLowerCase();
            }

        })

    }

    request.send()
