const APP_BASE_URL = 'https://corpolitedigialnetwork.onrender.com/';
const API_URL = APP_BASE_URL + 'data/Api/';

// add data in about section
const aboutP = document.querySelector('.about-desc');
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch(API_URL + "about", requestOptions)
    .then(response => response.json())
    .then(result => {

        const data = result[0].aboutDesc;
        aboutP.innerText = data;
        console.log("about loaded successful!");
    })
    .catch(error => console.log('error', error));






// add data in vision section
const visionParent = document.querySelector('.vision-desc');
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch(API_URL + "vision", requestOptions)
    .then(response => response.json())
    .then(result => {

        visionParent.innerText = result[0].visionDesc;
        console.log("vision loaded successful!");
    })
    .catch(error => console.log('error', error));



// add data in working team section
const teamCardParent = document.querySelector('.sup-bottom-containt-slider')
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch(API_URL + "woringTeam", requestOptions)
    .then(response => response.json())
    .then(result => {

        teamCardParent.innerHTML = '';
        const perTeamBgColor = ['#fa6742', '#32cc73', '#ffb72f', '#478fff', '#fa4166'];
        let bgColorIndex = 0;

        result.forEach((elem) => {

            const div = document.createElement('div');
            div.classList.add('team-card');

            if (bgColorIndex == perTeamBgColor.length) bgColorIndex = 0;

            div.innerHTML = `
                <div class="team-top-section">
                    <div class="team-img" style="background-color: ${perTeamBgColor[bgColorIndex]};">
                        <img src="${elem.img}" alt="">
                    </div>
                </div>
                <div class="team-bottom-section">
                    <h2 class="team-name">${elem.name}</h2>
                    <h4 class="team-work">${elem.role}</h4>

                    <div class="team-social-icons">
                    <a href="${elem.facbookLink}"><i class="fa-brands fa-facebook-f" style="color: #3b5998;"></i></a>
                    <a href="${elem.twitterLink}"><i class="fa-brands fa-twitter" style="color: #55acee;"></i></a>
                    <a href="${elem.instaLink}"><i class="fa-brands fa-instagram" style="color: #b7242a;"></i></a>
                    <a href="${elem.linkedlnLink}"><i class="fa-brands fa-linkedin-in" style="color: #0976b4;"></i></a>
                    </div>
                </div>
      `

            bgColorIndex++;
            teamCardParent.appendChild(div);
        });


        // clone and insert working team card parent for auto scrolling
        document.querySelector('.sup-bottom-section-containt').appendChild(teamCardParent.cloneNode(true));
        console.log("working team loaded successful!");

    })
    .catch(error => console.log('error', error));



// add data in prev work section
const preWorkParent = document.querySelector('.work-logo-slide');
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch(API_URL + "prevWork", requestOptions)
    .then(response => response.json())
    .then(result => {

        preWorkParent.innerHTML = '';
        result.forEach((elem) => {

            const div = document.createElement('div');
            div.classList.add('work-card');

            div.innerHTML = `
      <img draggable="false" src="${elem.compunyImg}" alt="previsously worked for">
      `

            preWorkParent.appendChild(div);
        })

        // create clone of preWorkParent for auto scrolling
        document.querySelector('.privi-work-bottom-containt').appendChild(preWorkParent.cloneNode(true));

        console.log("previsously worked loaded successful!");
    })
    .catch(error => console.log('error', error));



// add data in contact and footer section 
const email = document.querySelector('.contact-email');
const phone1 = document.querySelector('.contact-number1');
const phone2 = document.querySelector('.contact-number2');
const webUrl = document.querySelector('.contact-website');
const address = document.querySelector('.contact-address');
const socialIcons = document.querySelector('.social-icons');
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch(API_URL + "contactInfo", requestOptions)
    .then(response => response.json())
    .then(result => {

        const compunyDetails = result[0];

        email.innerText = compunyDetails.email;
        phone1.innerText = compunyDetails.phone1;
        phone2.innerText = compunyDetails.phone2;
        webUrl.innerText = compunyDetails.webUrl;


        socialIcons.innerHTML = ''
        socialIcons.innerHTML = `
    
              <a href="${compunyDetails.facbookLink}">
              <div class="social-icon" style="background-color: #3b5998;"><i
                      class="fa-brands fa-facebook-f"></i></div>
              </a>
              <a href="${compunyDetails.twitterLink}">
                  <div class="social-icon" style="background-color: #55acee;"><i
                          class="fa-brands fa-twitter"></i>
                  </div>
              </a>
              <a href="${compunyDetails.instaLink}">
                  <div class="social-icon" style="background-color: #0976b4;"><i
                          class="fa-brands fa-linkedin-in"></i></div>
              </a>
              <a href="${compunyDetails.linkedlnLink}">
                  <div class="social-icon" style="background-color: #b7242a;"><i
                          class="fa-brands fa-instagram"></i></div>
              </a>
    `

        console.log("Compuny Details loaded successful!");
    })
    .catch(error => console.log('error', error));
