//Template for my project Yumicode 2022

const project = {
    //^VARIABLES
    element: document.querySelector('#project'),
    titles: [
        "Text",
        "Text",
        "Text"
    ],
    //^INIT
    init: function () {
        this.getTitles();
    },
    //^FUNCTIONS
    //~change titles and text
    getTitles: function () {
        for (let title = 0; title < template.headerTxt.length; title++) {
            template.headerTxt[title] = project.titles[title];
        };
    }
}