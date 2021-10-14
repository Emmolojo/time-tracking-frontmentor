fetch('data.json') //file json objects
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        fetchData(data);
    })
    .catch(function(err) {
        console.log('error: ' + err);
    });

function fetchData(data) {
    var mainContainer = document.querySelector(".partone");


    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.classList.add('main');

        div.innerHTML = `
                    <div class="header">
                        <div class="header__title">${data[i].title}</div>
                        <div class="header__dots">
                            <span></span>
                        </div>
                    </div>
                    <!-- header details -->
                    <div class="time">
                        <div class="time__current">${ data[i].timeframes.daily.current}hrs</div>
                        <div class="time__previous"> Yesterday - ${ data[i].timeframes.daily.previous}hrs</div>
                    </div>
            `;
        mainContainer.appendChild(div);
    }


}
var link = document.querySelectorAll("a");


function UpdateData() {

    for (let i = 0; i < link.length; i++) {


        link[i].onclick = function() {

            //    json start
            fetch('data.json') //file json objects
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    fetchData(data, lowerTitle);
                })
                .catch(function(err) {
                    console.log('error: ' + err);
                });
            // var mainContainer = document.querySelector(".partone");
            // mainContainer.innerHTML = '';
            var headerTitle = document.querySelectorAll(".header__title");
            var timeCurrent = document.querySelectorAll(".time__current");
            var timePresent = document.querySelectorAll(".time__previous");
            const newTitle = this.text;

            const lowerTitle = newTitle.toLowerCase();


            function fetchData(data, a) {

                for (var i = 0; i < data.length; i++) {
                    if (lowerTitle == 'monthly') {

                        headerTitle[i].innerHTML = `${data[i].title}`;
                        timeCurrent[i].innerHTML = `${data[i].timeframes.monthly.current}hrs`;
                        timePresent[i].innerHTML = ` last Month - ${data[i].timeframes.monthly.previous}hrs`;



                    } else if (lowerTitle == 'weekly') {
                        headerTitle[i].innerHTML = `${data[i].title}`;
                        timeCurrent[i].innerHTML = `${data[i].timeframes.weekly.current}hrs`;
                        timePresent[i].innerHTML = ` last Week - ${data[i].timeframes.weekly.previous}hrs`;
                    } else {
                        headerTitle[i].innerHTML = `${data[i].title}`;
                        timeCurrent[i].innerHTML = `${data[i].timeframes.daily.current}hrs`;
                        timePresent[i].innerHTML = ` Yesterday - ${data[i].timeframes.daily.previous}hrs`;
                    }
                }
            }
        }
    }
}
// actcive links
UpdateData();
var list = document.querySelectorAll("li");
for (let i = 0; i < list.length; i++) {
    console.log(list[i])
    list[i].onclick = function() {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
        }
        this.classList.add('active');
    }
}