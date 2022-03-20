//Template for my project Yumicode 2022

var echo = "Do you hear me ? 🌻";

const template = {
    //^VARIABLES
    container: document.querySelector('#container'),
    //~social media
    social: [{
            url: `url('https://github.com/helene-nguyen')`
        },
        {
            url: `url('https://www.linkedin.com/in/helene-yumicode/')`
        },
        {
            url: `url('https://www.instagram.com/_yumicode/')`
        },
        {
            url: `url('https://twitter.com/_YumiCode')`
        }
    ],
    socialIcons: [
        '<i class="fa-brands fa-github"></i>',
        '<i class="fa-brands fa-linkedin-in"></i>',
        '<i class="fa-brands fa-instagram"></i>',
        '<i class="fa-brands fa-twitter"></i>'
    ],
    //~header
    headerElement: [
        'title-handwriting',
        'header-txt',
        'header-txt'
    ],
    //! Add info title here
    headerTxt: [
        'title-handwriting',
        'header-txt',
        'header-txt'
    ],

    //^INIT
    init: function () {
        template.header();
        template.footer();
    },

    //^FUNCTIONS
    //~create header
    header: function () {
        let headerCreate = document.createElement('header');
        headerCreate.id = "header"
        template.container.insertAdjacentElement("afterbegin", headerCreate);

        let h1Create = document.createElement('h1');
        h1Create.classList.add('title');
        h1Create.textContent = "My beautiful";
        headerCreate.appendChild(h1Create);

        this.pHeader(headerCreate);
        this.createToggleBtn(headerCreate);
    },
    //~create p header
    pHeader: function (parent) {
        for (let p = 0; p < 3; p++) {
            let pCreate = document.createElement('p');
            pCreate.classList.add(template.headerElement[p]);
            pCreate.textContent = template.headerTxt[p];
            pCreate.style.padding = "0.25em 0"
            parent.appendChild(pCreate);
        }
    },
    //~create footer
    footer: function () {
        let footerCreate = document.createElement('footer');
        footerCreate.id = "footer";
        template.container.insertAdjacentElement("beforeend", footerCreate);

        this.btnWrap(footerCreate);
    },
    //~footer btn wrap
    btnWrap: function (parentOf) {
        let btnWrap = document.createElement('div');
        btnWrap.classList.add('btn-wrap');
        parentOf.appendChild(btnWrap);

        let spanIconTxt = document.createElement('span');
        spanIconTxt.classList.add('icon-txt');
        spanIconTxt.textContent = "Share"
        btnWrap.appendChild(spanIconTxt);

        let icons = document.createElement('div');
        icons.classList.add('icons');
        btnWrap.appendChild(icons);

        this.btnWrapIcons(icons)

    },
    //~btn wrap icons
    btnWrapIcons: function (parentOf) {
        for (let u = 0; u < template.social.length; u++) {
            let aCreate = document.createElement('a');
            aCreate.setAttribute('href', template.social[u].url);
            aCreate.setAttribute('target', "_blank")
            aCreate.innerHTML = template.socialIcons[u];

            parentOf.appendChild(aCreate);
        }
    },
    //~dark mode
    darkMode: function () {
        //create btn
        //event .checked
    },
    //~create toggle button
    createToggleBtn: function (parent) {
        let createLabel = document.createElement('label');
        createLabel.classList.add('switch');
        parent.insertAdjacentElement('afterbegin', createLabel);

        let inputCheckBox = document.createElement('input');
        inputCheckBox.setAttribute('type', 'checkbox');
        createLabel.appendChild(inputCheckBox);

        let slider = document.createElement('span');
        slider.classList.add('slider','round');
        createLabel.appendChild(slider);
    }

}