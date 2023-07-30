const APP_BASE_URL = 'https://corpolitedigialnetwork.onrender.com/';
const API_URL = APP_BASE_URL + 'data/Api/';
const MAIL_URL = APP_BASE_URL + 'contact/email/data';


// mail sending code
const mailSubmitBtn = document.querySelector('#mailSubmitBtn');
const loadingAnimation = document.querySelector('.loadingAni');

mailSubmitBtn.addEventListener('click', () => {
    const userName = document.querySelector('#userName');
    const userEmail = document.querySelector('#userEmail');
    const userNumber = document.querySelector('#userNumber');
    const userSubject = document.querySelector('#userSubject');
    const userMassage = document.querySelector('#userMassage');


    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    if (userName.value != '' && userEmail.value != '' && userNumber.value != '' && userSubject.value != '' && userMassage.value != '') {

        loadingAnimation.classList.toggle('active');
        document.body.classList.toggle('active');
        let raw = JSON.stringify({
            "name": userName.value,
            "emailFrom": userEmail.value.trim(),
            "number": userNumber.value,
            "subject": userSubject.value,
            "massage": userMassage.value
        });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(MAIL_URL, requestOptions)
            .then(response => response.json())
            .then((result) => {

                loadingAnimation.classList.toggle('active');
                document.body.classList.toggle('active');


                if (result.status == 'success') {
                    alert("Email send Successful!");
                }
                else {
                    alert("Email send Faild!");
                }


                userName.value = '';
                userEmail.value = '';
                userNumber.value = '';
                userSubject.value = '';
                userMassage.value = '';
            })
            .catch(error => console.log('error', error));
    }
    else{
        alert("All Filds are requird!")
    }
})


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
const socialIcons = document.querySelector('.social-icons');

const formEmail = document.querySelector('#form-email');
const formNumber = document.querySelector('#form-number');
const formAddress = document.querySelector('#form-address');
const formIconsParent = document.querySelector('#form-icons');
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch(API_URL + "contactInfo", requestOptions)
    .then(response => response.json())
    .then(result => {

        const compunyDetails = result[0];

        formEmail.innerText = compunyDetails.email;
        formNumber.innerText = compunyDetails.phone1;
        formAddress.innerText = compunyDetails.address;

        formIconsParent.innerHTML = ''
        formIconsParent.innerHTML = `
            <a href="${compunyDetails.facbookLink}"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="${compunyDetails.twitterLink}"><i class="fa-brands fa-twitter"></i></a>
            <a href="${compunyDetails.instaLink}"><i class="fa-brands fa-instagram"></i></a>
            <a href="${compunyDetails.linkedlnLink}"><i class="fa-brands fa-linkedin-in"></i></a>
        `

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