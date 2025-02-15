
// storing all pages

// note: make sure all fields are present. 
// ALWAYS put </p> at the end of the description, but NOT <p> at start

/*
    {
        "date": new Date(Date.UTC()),
        "link": "",
        "title": "",
        "desc": "</p>",
        "picture": "",
        "tags": []
    },
*/

var pages = [
    {
        "date": new Date(Date.UTC(2023,05,01)),
        "link": "blog-cs/cs352",
        "title": "Notes on CS352",
        "desc": "Notes on CS352: Project Management</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2023,04,24)),
        "link": "blog-cs/cs331",
        "title": "Notes on CS331",
        "desc": "Notes on CS331: Neural</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2023, 01, 25)),
        "link": "blog-cs/cs313",
        "title": "Notes on CS313",
        "desc": "Notes on CS313: Robotics</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2022,11,10)),
        "link": "blog-cs/cs342",
        "title": "Notes on CS342",
        "desc": "Notes on CS342: Machine Learning. Thought this one was needed tbh.</p><p>WARM REMIND: This page is very large, please allow for a while for loading.</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2022,05,05)),
        "link": "blog-cs/cs261/",
        "title": "Notes on CS261",
        "desc": "Notes on CS261: Software Eng (wah)</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2022,05,02)),
        "link": "blog-cs/cs259/",
        "title": "Notes on CS259",
        "desc": "Notes on CS259: Formal Languages</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2022,02,07)),
        "link": "blog-cs/cs262/",
        "title": "Notes on CS262",
        "desc": "Notes on CS262: Logic and Verification. For a quick cheat sheet for the class test, click <a href='blog-cs/cs262/cheat.html'>here</a>.</p>",
        "picture": "",
        "tags": ["cs"]
    },
    // {
    //     "date": new Date(Date.UTC(2021, 10, 14)),
    //     "link": "blog-cs/cs241/",
    //     "title": "Notes on CS241",
    //     "desc": "Notes on CS241: Operating Systems and Networking. These are made throughout the year and will be updated as and when needed.</p>",
    //     "picture": "",
    //     "tags": ["cs"]
    // },
    {
        "date": new Date(Date.UTC(2021, 10, 14)),
        "link": "blog-cs/cs258/",
        "title": "Notes on CS258",
        "desc": "Notes on CS258: Database Systems. </p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2021, 10, 10)),
        "link": "blog-cs/cs255/short.html",
        "title": "Notes on CS255",
        "desc": "Notes on CS255: AI. These are made throughout the year and will be updated as and when needed. Please note that this is an <i>extremely long</i> module.</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2021, 10, 10)),
        "link": "blog-cs/cs260/",
        "title": "Notes on CS260",
        "desc": "Notes on CS260: Algorithms.</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2021, 7, 10)),
        "link": "blog-misc/guqin/",
        "title": "Guqin Notation",
        "desc": "The Guqin, or Chinese Zither, has a very specialised and old form of music score, called 减字谱, or \"reduced character score\". Usually it's handwritten, but I've made a font for it! </p>",
        "picture": "",
        "tags": ["misc"]
    },
    {
        "date": new Date(Date.UTC(2021, 7, 10)),
        "link": "blog-cs/minty/",
        "title": "A New PC Setup",
        "desc": "I've recently installed a new SSD onto my computer and installed a separate Linux system. This is basically a ramble on why I did that and why I moved off Windows for programming.</p>",
        "picture": "",
        "tags": ["tech"]
    },
    {
        "date": new Date(Date.UTC(2021, 5, 29)),
        "link": "blog-cs/cs141/",
        "title": "Notes on CS141",
        "desc": "Brief notes on CS141, focusing on mainly the harder topics and not covering the basics.</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2021, 5, 28)),
        "link": "blog-misc/podcast/",
        "title": "I Did a Podcast",
        "desc": "I featured in episode on my friend Leo's podcast, YASP. You can listen to it <a href=\"https://yasp.show/episodes\" class=\"text\">here</a>, or on <a href=\"https://podcasts.google.com/feed/aHR0cHM6Ly95YXNwLnNob3cvYXRvbS54bWw\" class=\"text\">Google Podcasts</a> and <a href=\"https://open.spotify.com/show/3ZkM1l13q6VPFngcOk5M8A?si=gfiDqUvfQ6GEVA3cJTk86Q&nd=1\" class=\"text\">Spotify</a>.</p>",
        "picture": "blog-misc/podcast/yasp.svg",
        "tags": ["misc"]
    },
    {
        "date": new Date(Date.UTC(2021, 5, 15)),
        "link": "blog-cs/cs131/",
        "title": "Notes on CS131",
        "desc": "Summary of main points of CS131, for purpose of collating notes. <i>There is also a lot of MathJax, please be patient whilst it loads.</i></p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2021, 5, 11)),
        "link": "blog-cs/cs126/",
        "title": "Notes on CS126",
        "desc": "Brief notes on CS126. This is not a complete and summative set of notes. Rather just a few points here and there.</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2021, 4, 19)),
        "link": "blog-cs/cs132/",
        "title": "Notes on CS132",
        "desc": "\nNotes on all topics in CS132.\n</p>\n\n<p style=\"color: var(--bg-col)\">\nAmatt.\n</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {
        "date": new Date(Date.UTC(2021, 4, 7)),
        "link": "blog-misc/wyvern/",
        "title": "Origami Wyvern - Tutorial and CP",
        "desc": "Tutorial for a wyvern designed by me, March 2021.</p>",
        "picture": "blog-misc/wyvern/wyvern.jpg",
        "tags": ["origami"]
    },
    {
        "date": new Date(Date.UTC(2021, 2, 20)),
        "link": "blog-cs/cs130/",
        "title": "Notes on CS130",
        "desc": "Notes on all topics in CS130. This is a dense one. Includes all excersises and proofs I noted down from Dimitry's videos. Note: This may take a while to load up. There is a LOT of MathJax here.</p>",
        "picture": "",
        "tags": ["cs"]
    },
    {  // 1188
        "date": new Date(Date.UTC(2021, 2, 8)),
        "link": "blog-cs/cs118/",
        "title": "Notes on CS118",
        "desc": "Notes on the finer details of <i>CS118: Programming for Computer Scientists.</i> This assumes a prior basic knowledge of Java and touches on some select specifics.</p>",
        "picture": "",
        "tags": ["cs"]
    }
    
];
