webpackJsonp([15],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = ReactBootstrap;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Main = __webpack_require__(8);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var react_bootstrap_1 = __webpack_require__(1);
__webpack_require__(239);
exports.articleArray = [
    {
        title: 'How This Startup is Using Data to Majorly Disrupt the Home Insurance Industry',
        body: 'Earlier this year, Richard Trezza, co-founder of Swyfft, moved into a new house and set out to buy homeowners insurance. The process took nearly two weeks.',
        url: 'https://www.inc.com/kenny-kline/how-this-startup-is-majorly-disrupting-home-insurance-industry.html',
        img: './images/incmagazine.jpg',
        author: 'Kenny Kline',
        date: 'April 19, 2018',
        zineName: 'Inc Magazine',
        tags: ['big data', 'insurance industry', 'startups']
    },
    {
        title: 'The problem-solver: Sean Maher',
        body: 'When I asked Sean Maher if he’d always been an entrepreneur, his response was: "Ha - no! I spent my twenties thinking I was going to be an academic!"',
        url: 'https://www.virgin.com/entrepreneur/forget-lightbulb-moment-five-stories-real-life-creative-success',
        img: './images/VirginLogo.png',
        author: 'Jessica Thiefels',
        date: 'April 12, 2018',
        zineName: 'Virgin Entrepreneur',
        tags: ['startups', 'insurance industry']
    },
    {
        title: 'The Insurtech Defying Industry Trend by Embracing Independent Agents and Brokers',
        body: 'Swyfft, the fast-growing home insurance insurtech, today announced its plans to expand into New York and Florida. The company aims to be operating in New York in the next few weeks and Florida by June.',
        url: 'https://finance.yahoo.com/news/insurtech-defying-industry-trend-embracing-100000953.html',
        img: './images/yahoofinance.jpg',
        author: 'Staff',
        date: 'March 27, 2018',
        zineName: 'Yahoo! Finance',
        tags: ['national rollout', 'insurance industry', 'press release']
    },
    {
        title: 'Swyfft, the Insurance Company that Uses AI to Save Customers Money, Sets Sights on National Rollout',
        body: 'Swyfft, a platform that won’t stop until it has wholly disrupted insurance as we know it, announces launch in Illinois and New Jersey.  Swyfft, the insurance platform for the twenty-first century, has launched in Illinois and New Jersey this month and are growing fast with plans to expand to other states..',
        url: 'http://www.liveinsurancenews.com/swyfft-insurance-company-uses-ai-save-customers-money-sets-sights-national-rollout/',
        img: './images/liveinsurancenews.png',
        author: 'Staff',
        date: 'June 9th, 2017',
        zineName: 'Live Insurance News',
        tags: ['national rollout', 'insurance industry', 'press release']
    },
    {
        title: 'Swyfft, the Insurance Company that Uses AI to Save Customers Money, Sets Sights on National Rollout',
        body: 'Swyfft, the insurance platform for the twenty-first century, has launched in Illinois and New Jersey this month and are growing fast with plans to expand to other states - including California, Texas, and Massachusetts - over the coming year.',
        url: 'https://insurancenewsnet.com/press-releases/swyfft-insurance-company-uses-ai-save-customers-money-sets-sights-national-rollout',
        img: './images/insurancenewsnet.png',
        author: 'Staff',
        date: 'June 6th, 2017',
        zineName: 'InsuranceNewsNet.com',
        tags: ['national rollout', 'insurance industry', 'press release']
    },
    {
        title: 'Study Finds Insurtech Funding Dips as Startups Launch; Predicts Small Business Disruption Ahead',
        body: 'The Ultimate How to Insurance Guide for Agents, Brokers, Underwriters and Adjusters funding in the first quarter of 2017 was down, but the drop-off could be a result of the significant investments in 2016 now reaching the product launch phase, according to a report by Willis Towers Watson Securities. ',
        url: 'http://www.insurancejournal.com/news/national/2017/05/02/449748.htm',
        img: './images/insurancejournal.png',
        author: 'Staff',
        date: 'May 2nd, 2017',
        zineName: 'Insurance Journal',
        tags: ['startups', 'research', 'insurtech']
    },
    {
        title: 'Swyfft launches in northern Nevada',
        body: 'Swyfft, an insurance company, has launched in Nevada this month. Founded in 2014, Swyffts patented Big Data technology uses artificial intelligence that provides analytical insights, which can help customers save money. ',
        url: 'http://www.nnbw.com/news/news-briefs/swyfft-launches-in-northern-nevada/',
        img: './images/nnbw.png',
        author: 'Staff',
        date: 'April 27th, 2017',
        zineName: 'Northern Nevada Business Weekly',
        tags: ['national rollout', 'insurance industry', 'press release']
    },
    {
        title: 'The Lightning Pitch: Swyfft, making home insurance bearable',
        body: 'Out of all the products you could be browsing for on the internet, homeowner’s insurance isn’t exactly the most sexy now is it. In fact, it’s as unsexy as you can possibly get. But for those fortunate enough to actually own a home, it is a necessity. Swyfft takes the pain out of this process by providing lucky homeowners with a... ',
        url: 'http://startupbeat.com/2017/02/swyfft-making-home-insurance-bearable/',
        img: './images/startupbeat.png',
        author: 'Oliver Griffin',
        date: 'February 23rd, 2017',
        zineName: 'StartupBeat',
        tags: ['startup', 'insurtech', 'news coverage']
    },
    {
        title: 'Swyfft raises $7.5m to develop its AI-driven tool to demystify home insurance',
        body: 'Swyfft, an intelligent home insurance enterprise built on big data, today announced it has raised $7.5m from angel investors in Series A funding. The finance will be used to develop Swyfft’s unique algorithm-driven platform; uncovering premium policies that save people both time and money.',
        url: 'http://startupbeat.com/2017/01/swyfft-raises-7-5m/',
        img: './images/startupbeat.png',
        author: 'Oliver Griffin',
        date: 'January 20th, 2017',
        zineName: 'StartupBeat',
        tags: ['funding', 'startup', 'press release']
    },
    {
        title: 'A Swyfft $7.5M investment into big data aims to demystify home insurance',
        body: 'Intelligent home insurance enterprise Swyfft has just raised $7.5 million in Series A funding to develop a unique algorithm-driven platform that uncovers premium policies. With this latest round of funding, Swyfft is going up against the insurance giants of the world — the likes of GEICO, Esurance, Progressive and more.',
        url: 'http://bigcommunity.net/big_news/a-swyfft-7-5m-investment-into-big-data-aims-to-demystify-home-insurance/',
        img: './images/bigcomm.png',
        author: 'Big Community',
        date: 'January 20th, 2017',
        zineName: 'Big Community',
        tags: ['funding', 'startup', 'press release']
    },
    {
        title: 'a swyfft $7.5m investment into big data aims to demystify home insurance',
        body: 'When it comes to home insurance, outdated pricing methodologies and a lack of insight lead to inaccurate pricing that requires a big data solution. Homeowners typically spend at least $1,000 a year to secure homeowner insurance coverage, according to ValuePenguin\'s 2016 analysis.',
        url: 'http://sociable.co/technology/swyfft-big-data-home-insurance/',
        img: './images/sociable.png',
        author: 'Tim Hinchliffe',
        date: 'January 19th, 2017',
        zineName: 'The Sociable',
        tags: ['funding', 'startup', 'press release']
    },
    {
        title: 'Swyfft recibió USD $7,5 millones y buscará desmitificar los seguros del hogar',
        body: 'Swyfft, la compañía de seguros de hogar inteligente que funciona sobre grandes datos, anunció que ha logrado recaudar $ 7,5 millones de dólares de ángeles inversionistas en fondos de Serie A. El dinero será utilizado para desarrollar una plataforma única dotada de Inteligencia Artificial...',
        url: 'http://socialgeek.co/startups/swyfft-recibio-usd-75-millones-seguros-hogar/',
        img: './images/socialgeek.png',
        author: 'Sergio Ramos',
        date: 'January 19th, 2017',
        zineName: 'Social Geek',
        tags: ['funding', 'startup', 'press release']
    },
    {
        title: 'Swyfft Raises $7.5M in Series A',
        body: 'Swyfft, an intelligent home insurance enterprise built on big data, today announced it has raised $7.5M from angel investors in Series A funding. The finance will be used to develop Swyfft\'s unique algorithm-driven platform; uncovering premium policies that save people both time and money.',
        url: 'http://www.vcnewsdaily.com/swyfft/venture-capital-funding/wpkmlvxqxj',
        img: './images/VCNews.png',
        author: 'VC News Daily',
        date: 'January 6th 2017',
        zineName: 'VC News Daily',
        tags: ['funding', 'startup', 'press release']
    }
];
var HeroBanner = function () {
    return (React.createElement("section", { className: "hero-container-bs" },
        React.createElement(react_bootstrap_1.Row, null,
            React.createElement(react_bootstrap_1.Col, { xs: 12 },
                React.createElement("h3", { className: "hero-text-bs container" },
                    "In The ",
                    React.createElement("span", { className: "hero-text-callout-bs" }, "Press"))))));
};
var Article = /** @class */ (function (_super) {
    __extends(Article, _super);
    function Article() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Article.prototype.render = function () {
        return (React.createElement(react_bootstrap_1.Grid, { className: "parent-container-ly" },
            React.createElement(react_bootstrap_1.Row, { className: "article-row-ly" },
                React.createElement(react_bootstrap_1.Col, { className: "article-img-container-ly", xs: 12, sm: 2, smOffset: 1 },
                    React.createElement("img", { className: "article-source-img-ly", src: this.props.img }),
                    React.createElement("div", { className: "snippet-container-ly" },
                        React.createElement("h5", { className: "published-snippet-md" }, " Published on"),
                        React.createElement("h5", { className: "published-snippet-md" },
                            React.createElement("span", null, this.props.date),
                            " "),
                        React.createElement("h5", { className: "published-snippet-md" },
                            " by ",
                            React.createElement("span", null, this.props.author),
                            " "))),
                React.createElement(react_bootstrap_1.Col, { className: "article-preview-container-ly", xs: 12, sm: 8 },
                    React.createElement("a", { href: this.props.url },
                        React.createElement("h2", { className: "article-title-md" }, this.props.title)),
                    React.createElement("p", { className: "article-text-md" }, this.props.body),
                    React.createElement("a", { href: this.props.url, className: "article-url-md" },
                        "Read full story on ",
                        this.props.zineName,
                        "  \u2192"))),
            React.createElement(react_bootstrap_1.Row, null,
                React.createElement(react_bootstrap_1.Col, { className: "article-tags-container-ly", xs: 12, sm: 6, smOffset: 3 },
                    React.createElement("span", { className: "glyphicon glyphicon-tag ribbon-icon-md" }),
                    React.createElement("ul", { className: "article-ribbon-md" }, this.props.tags.map(function (tag) { return React.createElement("li", { className: "article-ribbon-md" }, tag); })))),
            React.createElement(react_bootstrap_1.Row, null,
                React.createElement(react_bootstrap_1.Col, { className: "border-container-ly", xs: 12, sm: 10, smOffset: 1 }))));
    };
    return Article;
}(React.Component));
var PressContainer = /** @class */ (function (_super) {
    __extends(PressContainer, _super);
    function PressContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PressContainer.prototype.render = function () {
        return (React.createElement("div", null, this.props.array.map(function (instance) {
            return React.createElement(Article, __assign({}, instance));
        })));
    };
    return PressContainer;
}(React.Component));
var OverallContainer = function () {
    return (React.createElement("div", null,
        React.createElement(HeroBanner, null),
        React.createElement(PressContainer, { array: exports.articleArray })));
};
function init() {
    Main.init();
    var app = React.createElement(OverallContainer, null);
    var mainElement = document.getElementById('main');
    if (!mainElement)
        throw "The 'main' target element was not found";
    ReactDOM.render(app, mainElement);
}
exports.init = init;
init();


/***/ }),

/***/ 239:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = moment;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = numeral;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = ES6Promise;

/***/ })

},[238]);
//# sourceMappingURL=press.bundle.js.map