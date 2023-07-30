const APP_BASE_URL = 'https://corpolitedigialnetwork.onrender.com/';
const API_URL = APP_BASE_URL + 'data/Api/';

// slider scrolling code
function homeSliderScrolling() {

  const slides = Array.from(document.querySelectorAll('.slide'));
  let counter = 0;

  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  })

  let auotScroll = setInterval(slideSliders, 3000);

  function slideSliders() {

    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });

    counter++;
    if (counter == slides.length) {
      counter = 0;
    }
  }
}

window.addEventListener('load', homeSliderScrolling());


// add data in slider 
const sliderParent = document.querySelector('.slider-content');

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch(API_URL + "slider", requestOptions)
  .then(response => response.json())
  .then(result => {

    sliderParent.innerHTML = '';

    result.forEach(elem => {

      const div = document.createElement('div');
      div.classList.add("slide");
      div.style.backgroundColor = `${elem.slideBgColorCode}`;

      div.innerHTML = `
      <div class="container slide-container">
          <div class="slide-content">
              <div class="slide-top-section">
                  <img src="${elem.slideImgUrl}" alt="slide img">
              </div>
              <div class="slide-bottom-section">
                  <div class="slide-details">
                      <h1 style="color: ${elem.slideHeDeColorCode} !important;">${elem.slideAtHeaBeforHeading}
                        <span style="color: ${elem.slideAtHeaColorCode} !important;" class="slide-color-txt">${elem.slideAtHeading}</span>
                        ${elem.slideAtHeaAfterHeading}
                      </h1>
                      <p class="slide-desc" style="color: ${elem.slideHeDeColorCode} !important;">${elem.slideDes}</p>

                      <a href="${APP_BASE_URL}contact">
                          <button class="slide-contact-btn">Contact now</button>
                      </a>
                  </div>
              </div>
          </div>
      </div>
        `;

      sliderParent.appendChild(div);
    });

    homeSliderScrolling();
    console.log("Slider loaded Successful!");

  })
  .catch(error => console.log('error', error));


// add data in services section
const serviceParent = Array.from(document.querySelectorAll('.services-row'));
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch(API_URL + "homeServices", requestOptions)
  .then(response => response.json())
  .then(result => {

    let arrayIndex = 0;
    serviceParent.forEach((elem) => { elem.innerHTML = '' });
    serviceParent.forEach((serviParentElem) => {

      for (let i = 0; i < 3; i++) {

        const div = document.createElement('div');
        div.classList.add('row-item');
        const data = result[arrayIndex];

        div.innerHTML = `
            <div class="item-top-section">
                  <div class="item-img-cover"  style="background-image: url('./assets/asset 3${arrayIndex}.png'); ">
                      <img src="${data.serviceImgUrl}" alt="service img" class="item-img">
                  </div>
              </div>
            <div class="item-bottom-section">
                <h2 class="item-heading">${data.serviceHeading}</h2>
                <p class="item-des">
                    ${data.serviceDescri}
                </p>
                <a href="${APP_BASE_URL}services" class="item-link">Read More <i class="fa-solid fa-angle-right"></i></a>
            </div>
        `

        serviParentElem.appendChild(div);
        arrayIndex++;
      }
    })

    console.log("Services loaded successful!");

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


// add data in case study section
const caseStudyParent = document.querySelector('.case-study-bottom-section');
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch(API_URL + "homeCaseStudys", requestOptions)
  .then(response => response.json())
  .then(result => {

    caseStudyParent.innerHTML = '';
    const caseStudyBgs = ['#fa6742', '#2bc2a7', '#ffb72f']

    for (let i = 0; i < 3; i++) {

      const div = document.createElement('div');
      div.classList.add('case-study-cards');

      div.innerHTML = `
      <a href="${APP_BASE_URL}caseStudys">
          <div class="case-study-card-top" style="background-color: ${caseStudyBgs[i]}">
              <div class="case-study-img">
                  <img src="${result[i].imgUrl}" alt="${result[i].heading}">
              </div>
          </div>
          <div class="case-study-card-bottom">
              <h2 class="case-study-name">${result[i].heading}</h2>
              <h6 class="case-study-work">${result[i].role}</h6>
          </div>
      </a>
        `

      caseStudyParent.append(div);
    }
    console.log("Case Study's loaded successful!");

  })
  .catch(error => console.log('error', error));



// add data in founder section
const foundersParent = document.querySelector('.founders-bottom-section');

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch(API_URL + "founders", requestOptions)
  .then(response => response.json())
  .then(result => {

    foundersParent.innerHTML = '';
    const perTeamBgColor = ['#fa6742', '#32cc73', '#ffb72f', '#478fff', '#fa4166'];
    let bgColorIndex = 0;

    result.forEach((elem) => {

      const div = document.createElement('div');
      div.classList.add('founder-card');

      if (bgColorIndex == perTeamBgColor.length) bgColorIndex = 0;

      div.innerHTML = `
                    <div class="founder-top-section">
                        <div class="founder-img" style="background-color: ${perTeamBgColor[bgColorIndex]};">
                            <img src="${elem.img}" alt="">
                        </div>
                    </div>
                    <div class="founder-bottom-section">
                        <h2 class="founder-name">${elem.name}</h2>
                        <h4 class="founder-work">${elem.role}</h4>

                        <div class="founder-social-icons">
                        <a href="${elem.facbookLink}"><i class="fa-brands fa-facebook-f" style="color: #3b5998;"></i></a>
                        <a href="${elem.twitterLink}"><i class="fa-brands fa-twitter" style="color: #55acee;"></i></a>
                        <a href="${elem.instaLink}"><i class="fa-brands fa-instagram" style="color: #b7242a;"></i></a>
                        <a href="${elem.linkedlnLink}"><i class="fa-brands fa-linkedin-in" style="color: #0976b4;"></i></a>
                        </div>
                    </div>
                `

      bgColorIndex++;
      foundersParent.appendChild(div);
    });

    console.log("founders loaded successful!");
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