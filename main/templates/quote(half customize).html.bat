{% load humanize %}
<!DOCTYPE html>
<html lang="en">

<meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by H-->
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0">
    <meta name="copyright" content="Copyright BetterBind LLC 2018" />
    <meta name="description" content="Betterbind instant homeowners insurance.">
    <meta name="keywords" content="Betterbind, insurance, homeowners insurance" />

    <title>BetterBind</title>



<link href="https://fonts.googleapis.com/css?family=Lato:400,400italic,700,900black" rel="stylesheet"/>

<link href="/static/common.css" rel="stylesheet"/>

<link href="/static/commonStyle.css" type="text/css" rel="stylesheet" />
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link href="/static/main.css" type="text/css" rel="stylesheet" />

<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

    <script src="//cdnjs.cloudflare.com/ajax/libs/react/16.4.0/umd/react.production.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/react-dom/16.4.0/umd/react-dom.production.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.32.1/react-bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.auto.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/MutationObserver.js/0.3.2/mutationobserver.min.js"></script>


<script id="errorTemplate" type="text/html">
    <label class="errorLabelOn" data-bind="validationMessage: field"></label>
</script>

    <link href="/static/quote.css?cb=28424E8F692EE3438A8E0D4E3D4F4009" type="text/css" rel="stylesheet" />


    <link rel="apple-touch-icon" sizes="57x57" href="/static/images/singleSShieldSwyfft-57x57.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/static/images/singleSShieldSwyfft-72x72.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/static/images/singleSShieldSwyfft-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/static/images/singleSShieldSwyfft-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/static/images/singleSShieldSwyfft-144x144.png" />

    <link rel="icon" type="image/png" href="/static/images/favicon.png" />
    <!--[if IE]>
        <link rel="icon" href="/favicon.ico" type="image/ico" />
    <![endif]-->

    <script type="text/javascript">
        $(function () {
            $(window).on("orientationchange", function () {
                var userAgent = navigator.userAgent.toLowerCase(); // detect the user agent
                var iosDevices = userAgent.match(/(iphone|ipod|ipad)/) ? true : false; //check if the devices are ios devices
                var widthOfBrowser = $(window).width();
                var heightOfBrowser = $(window).height();
                if (iosDevices) {
                    var isLandscapeMode = window.orientation;
                    if (isLandscapeMode === 90) {
                        $('.swyfftLayout').css('width', widthOfBrowser);
                        $('#termsConditionsOverlay').css('width', widthOfBrowser);
                        $('#termsConditionsOverlay').css('height', heightOfBrowser);
                    }
                    else {
                        $('#termsConditionsOverlay').css('width', widthOfBrowser);
                        $('#termsConditionsOverlay').css('height', heightOfBrowser);
                        $('.jspContainer').css('height', heightOfBrowser);
                    }
                }
            });
        });

    </script>

</head>

<body>


    <div id="loadingModal">
    <div class="modal fade" role="dialog" data-bind="modal:showModal, backdrop:'static', keyboard:false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <img src="/static/images/ajax-loader.gif"/>
                    <span data-bind="text:message" class="loading-message"></span>
                </div>
            </div>
        </div>
    </div>
</div>

    <div id="swyfftLayoutWrapper" class="swyfftLayout">
        <header id="header-without-top-navbar">
            <div class="container" id="headerLogo">
                <div class="row">
                </div>
            </div>
        </header>
<!-- <<<<<<< HEAD
        <header id="header" class="height-layout-cp">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <strong class="logo swyfftLayoutLogo site-logo-layout-cp" id="swyfft-logo"><a href="/"><img src="/static/images/BetterBind_Logo_144x53.png" alt="Swyfft"></a></strong>
                        <div class="hubLayoutLogo hub-logo-container-layout-cp" id="hubLogoContainer"><img src="/static/images/HUB-logo-sm.svg" class="hub-logo-img-bs" alt="HubLogo"></div>
                        <nav id="quote-menubar" class="quote-menubar-ly">

<div class="container">
    <ul class="nav nav-tabs nav-tabs-layout-cp">

        <li id="quoteMenuItem" class="nav-tabs-st"><a href="quote.html">Quote</a></li>
        <li id="historyMenuItem" class="nav-tabs-st"><a href="Loginc3b6.html">History</a></li>
        <li id="addressesMenuItem" class="nav-tabs-st"><a href="address.html">Addresses</a></li>
    </ul>
</div>


                        </nav>
                        <span id="user-details">
                            <span class="tell text-capitalize user-details-layout-cp"> Hello,  <a href="javascript:void(0)" id="agentName"></a></span>

                        </span>
                        <nav class="navbar navbar-default hamburger-menu-layout-cp" id="hamburger-menu">
                            <div class="navbar-header">
                                <div>
                                    <button type="button" id="expand-navbar" class="navbar-toggle hamburger-icon-ly collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                </div>
                            </div>
                            <div class="collapse navbar-collapse navbar-collapse-layout-cp" id="bs-example-navbar-collapse-1">
                                <strong class="logo"><a href="/"><img class="desktop" src="/static/images/bb-logo-svg.svg" alt="Swyfft"><img class="mobile" src="/static/images/bb-logo-svg.svg" alt="Swyfft"></a></strong>
                                <ul class="nav navbar-nav nav-elements-layout-cp">
                                    <li class="agent-login"><a href="Login.html">Agent Login</a></li>
                                    <li class="agent-logout"><a href="javascript:void(0)">logout</a></li>
                                    <li><a href="About.html">Our company</a></li>
                                    <li><a href="ContactUs.html">Contact Us</a></li>
                                    <li><a href="Faq.html">FAQs</a></li>
                                    <li><a href="Press.html">In The Press</a></li>
                                    <li><a href="Claims.html">claims</a></li>
                                    <li class="agent-faq"><a href="Login7cd2.html">Agents</a></li>
                                    <li class="agent-page"><a href="Login1e88.html">Admin</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
======= -->
        {% include 'includes/full_nav.html' %}
<!-- >>>>>>> a81f29998e270c9516dfe86b52dfdb63ef42cc8f -->
        <section>




<div id="wrapper">
    <main id="main" class="main" role="main" data-bind="validationOptions:{ messageTemplate: 'errorTemplate', errorElementClass:'alert-danger'}">
        <div data-bind="insertMessages:false">
            <section id="premium-errors-container" class="premium-errors-container-bs premium-errors-container-ly hidden">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-lg-12">
                <h2 class="premium-errors-header-bs">
                    <span class="glyphicon glyphicon-exclamation-sign"></span><span>important message</span>
                </h2>
            </div>
        </div>
        <div class="row">
            <section class="premium-errors-list-container-bs col-xs-12 col-lg-10 col-lg-12">
                <ul class="premium-errors-line-container-ly" data-bind="foreach: premiumErrors">
                    <li class="premium-errors-line-md">
                        <span class="premium-errors-message-md" data-bind="text: message"></span>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</section>

<section id="hubButtonContainer" class="hub-contact-btn-container-ly" data-bind="visible: !isAgent() && !hubContacted()">
       <button id="btnContactHub" class="glyphicon glyphicon-envelope btn hub-contact-btn-md hub-contact-btn-ly" data-bind="click:showHubModal, enable:userBuyEnabled, visible:!hubContacted()">Contact HUB Broker</button>
</section>


            <section class="quote-header" id="quotePageBody" data-bind="visible:isLoaded">
                <input type="hidden" data-bind="value:annualPremium" id="annualPremiumInput" />
                <input type="hidden" data-bind="value:grossAnnualPayment" id="grossAnnualPaymentInput" />
                <input type="hidden" id="quoteId" data-bind="value:quoteId" />
                <input type="hidden" name="addressKey" id="addressKey" data-bind="value:addressKey" />
                <div id="quote_replace">{% include 'includes/quote_section.html' %}</div>
<div class="btn-area quote-preview-btn-container-ly quote-preview-btn-container-bs">
    <div class="container">
        <div class="row">
            <div class="col-xs-6 col-md-3 col-md-offset-3 button-container-left-ly">
                <button id="btnModifyQuote" class="btn btn-quote quote-modify-btn button-ly" data-bind="click:showModifyElements, enable:adminCustomizeEnabled">customize</button>
            </div>
            <div class="col-xs-6 col-md-3 button-container-right-ly">
                <button id="btnBuy" class="btn quote-buy-btn button-ly" data-bind="click:buy, enable:!disabled() && userBuyEnabled()">buy policy</button>
            </div>
            <div class="col-xs-12">
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-6 col-lg-6 col-sm-offset-2 col-md-offset-3 quote-preview-blurb-ly">

            </div>
        </div>
    </div>
</div>


<div id="agent-quote-preview-header-container" class="transition-st agent-quote-preview-header-container-ly">
    <div class="container agent-header-container-bs">
        <div class="row">
            <div id="agent-quote-preview-sticky-header" class="quote-preview-sticky-header-ly quote-preview-sticky-header-md">
                <div class="col-xs-6 col-md-5 col-lg-4">
                    <h4 class="agent-address-header-bs">You are editing a quote for:</h4>
                    <div class="address-container-ly">
                        <p class="agent-address-line-bs" id="sticky-header-address" data-bind="text:address"></p>
                    </div>
                    <div class="agent-links-container-ly">
                        <div class="agent-link-ly">
                            <a target="_blank" href="#" class="agent-header-link-bs" data-bind="attr:{href:streetViewUrl}">Google</a>
                        </div>
                        <div class="agent-link-ly">
                            <a target="_blank" href="#" class="agent-header-link-bs" data-bind="attr:{href:zillowUrl}">Zillow</a>
                        </div>
                        <div class="agent-link-ly">
                            <a id="detailsLink" href="#" class="agent-header-link-bs" data-bind="click:showQuoteDetailDialog, visible:isAgent()">Details</a>
                        </div>
                    </div>
                </div>
                <div class="col-xs-6 col-md-7 col-lg-8 agent-bar-right-ly">
                    <div class="agent-pricing-container-ly">
                        <div class="agent-yearly-price-md">
                            $<span data-bind="text:formatGrossAnnualPayment(grossAnnualPayment())"></span><span class="unit-md">/yr</span>
                        </div>
                        <div class="agent-monthly-price-md">
                            $<span data-bind="text:monthlyPayment"></span><span class="unit-md">/mo</span>
                        </div>
                    </div>
                    <div class="agent-buttons-container-ly">
                        <div class="quote-sticky-header-btn-ly">
                            <button id="btnBuyHeaderAgent" class="btn agent-buy-btn-md" data-bind="click:buy, enable:userBuyEnabled">buy</button>
                        </div>
                        <div class="agent-buttons-secondary-ly">
                            <button class="btn agent-email-btn-md agent-email-btn-st" data-bind="click:showEmailDialog, enable:userBuyEnabled" id="header-agent-email-btn">Email</button>
                            <button class="btn agent-print-btn-md agent-print-btn-st" data-bind="click:showPrintDialog, enable:adminCustomizeEnabled" id="agent-print-btn">Print</button>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- /.row -->
        <div class="agent-buttons-container-mobile-portrait-ly row">
            <div class="quote-sticky-header-btn-mobile-portrait-ly">
                <div class="col-xs-6"><button class="agent-email-btn-md agent-email-btn-st col-xs-6" data-bind="click:showEmailDialog, enable:userBuyEnabled" id="header-agent-email-mobile-btn">Email</button></div>
                <div class="col-xs-6"><button class="btn agent-buy-btn-md" data-bind="click:buy, enable:userBuyEnabled">buy</button></div>
            </div>
        </div>
    </div><!-- /.container -->
</div>




                <div id="spacer" class="spacer"></div>

                <section id="quoteWarningsContainer" class="quote-warnings-container-bs quote-warnings-container-ly container" data-bind="visible:displayQuoteWarnings() ">
    <!--div class="row">
        <div class="col-xs-12 col-lg-8 col-lg-offset-2 quote-warnings-header-col-ly">
            <div class="row warning-header-container-bs">
                <div class="col-xs-1 warning-icon-container-ly">
                    <img class="warning-logo-ly" src="/static/images/warning_preview.svg" alt="warning logo" />
                </div>
                <div class="col-xs-10">
                    <h2 class="quote-warnings-header-bs">WARNING</h2->
                </div>
            </div>
        </div>
    </div-->
    <section class="quote-warnings-list-container-bs">
        <div class="quote-warnings-line-container-ly" data-bind="foreach: quoteWarnings">
            <div class="row">
                <div class="quote-warnings-line-md col-xs-12 col-lg-10 col-lg-offset-1">
                    <span class="quote-warnings-message-md" data-bind="text: warningInstance"></span>
                </div>
            </div>
        </div>
    </section>
</section>
                <div class="quote-step" id="sliders" style="display:block">
                    <div class="js-groups">
            {% include 'includes/group_element.html' %}
                        </div>
            </section>

                    </div>
                </div>
            </section>
        </div>
        <div data-bind="with:emailVm" class="email-modal-md">
    <div id="emailModal" class="modal fade" role="dialog" data-bind="modal:showModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <button id="emailModalCloseIconButton" type="button" class="close confirm-close-icon-bs" data-dismiss="modal" data-bind="click:close()">&times;</button>
                <form data-bind="validationOptions:{ messageTemplate: 'errorTemplate', errorElementClass:'alert-danger'}">
                    <div class="modal-body">
                        <p>Address:</p>
                        <p class="address" data-bind="text:address"></p>
                        <div class="primary-premium">
                            <span class="primary-premium-price">
                                <span id="emailAnnualPremium" data-bind="text:$parent.formatCurrencyUS(grossAnnualPayment())"></span>
                            </span>
                            <span class="premium-descriptor"> / year</span>
                        </div>
                        <div class="secondary-premium">
                            (<span class="secondary-premium-price">
                                <span id="emailMonthlyPayment" data-bind="text:$parent.formatCurrencyUS(monthlyPayment())"></span>
                            </span>
                            <span class="premium-descriptor"> / month</span>)
                        </div>
                        <fieldset>
                            <div class="form-group">
                                <div id="emailModalEmailInput"class="input-holder">
                                    <input type="text" id="emailIDTxtBox" class="text ui-corner-all" placeholder="Email" autocomplete="off"
                                           data-bind="value:email" />

                                </div>
                            </div>
                            <div class="form-group" data-bind="visible:isAgent">
                                <div class="input-holder">
                                    <input type="text" id="txtPhone" class="text ui-corner-all" placeholder="Customer's Phone (optional)" autocomplete="off"
                                           data-bind="value:phone" />
                                </div>
                            </div>
                            <div class="input-holder">
                                <textarea type="text" id="emailMessageTxtBox" class="text emailMessageTxtBox ui-corner-all" placeholder="Message (optional)" autocomplete="off"
                                          data-bind="value:message"></textarea>
                            </div>
                        </fieldset>
                    </div>

                    <div class="buttons-container row">
                        <div class="col-xs-6 text-center">
                            <input id="submitEmailBtn" value="Email My Quote" type="button" tabindex="-1" class="btn btn-default submit-email-btn-md"
                                   data-bind="click:sendEmail">
                        </div>
                        <div class="col-xs-6 text-center">
                            <input id="cancelEmailBtn" value="Cancel" type="button" tabindex="-1" class="btn btn-quote cancel-btn-md"
                                   data-bind="click:close">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

        <div id="quoteDetailsModal" data-bind="with:detailsVm">
    <div class="modal fade" role="dialog" data-bind="modal:showModal">
        <div class="modal-dialog">
            <div class="modal-content">



                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div>
                                <p>Quote Details for:</p>
                                <h3 data-bind="text: address"></h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-4 col-sm-4 col-md-4">
                                <p>
                                    <b>Quote ID:</b>
                                </p>
                                <p><a data-bind="text: quoteId, attr: {href: '/quote?quoteId=' + quoteId()}"></a></p>
                            </div>
                            <div class="col-xs-4 col-sm-4 col-md-4">
                                <p>
                                    <b>Create Date:</b>
                                </p>
                                <p data-bind="text: createDate"></p>
                            </div>
                            <div class="col-xs-4 col-sm-4 col-md-4">
                                <p>
                                    <b>Modified On:</b>
                                </p>
                                <p data-bind="text: modifiedOn"></p>
                            </div>
                        </div>
                        <div class="row">
                            <div>
                                <h4><span class="underline">Quote Events</span></h4>
                                <hr/>
                                <section class="search">
                                    <div class="container">
                                        <div class="form-group search-box">
                                            <span class="margin-right-13px"><img src="/static/images/search-icon.png" alt="Search"/></span>
                                            <input id="searchString" type="search" class="custom-form-control" placeholder="smart search" data-bind="textInput:searchString" />
                                        </div>
                                    </div>
                                </section>
                                <div class="events-container">
                                    <ul data-bind="foreach: filteredQuoteEvents" id="filteredQuoteEvents">
                                        <li class="event">
                                            <h4>
                                                <span><b data-bind="text: event"></b></span>
                                                <span> (<a data-bind="attr: {href: 'mailto:' + agent()}, text: agent"></a>) </span>
                                            </h4>
                                            <div>Annual Premium: <span data-bind="currency: annualPremium"></span></div>
                                            <div>Notes: <span data-bind="text: notes"></span></div>
                                            <div>IP Address: <span data-bind="text: ipAddress"></span></div>
                                            <div>Location: <span data-bind="text: location"></span></div>
                                            <div>Create Date: <span data-bind="text: createDate"></span></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div class="modal-body row">
                    <div class="col-xs-12 text-center">
                        <input id="cancelBtn" value="Done" type="button" tabindex="-1" class="btn btn-quote"
                               data-bind="click:close">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        <div id="printQuote">
    <div class="container">
    <div class="row">
        <span class="print-logo"><img class="" src="Images/Swyfft_Shield_Black-print.jpg" alt="Swyfft" /></span>
        <div class="agency-info">
            <span data-bind="text:lastAgencyName"></span><br>
            <span data-bind="text:lastAgentName"></span>
        </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="row">
        <address>
            <span class="print-address">
                <span data-bind="text:address"></span>
            </span>
        </address>
    </div>
    <div class="row">

            <div class="primary-premium">
                <span class="primary-premium-price"><span id="printAnnualPremium" data-bind="text:formatCurrencyUS(grossAnnualPayment())"></span></span>
                <span class="premium-descriptor">
                    / year
                </span>
            </div>

            <div class="row">

                <div class="secondary-premium">
                    (<span class="secondary-premium-price">
                        <span>$<span id="monthlyPayment" data-bind="text:monthlyPayment"></span></span>
                    </span>
                    <span class="premium-descriptor">
                        / month
                    </span>)
                </div>
            </div>
<div id="quoteErrorPrint" class="row alert alert-danger" style="display: none" data-bind="visible:errors().length > 0">
            <div class="col-xs-12">
                <strong data-bind="text:errors()[0]"></strong>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="price-info">
            <div class="col">
                <span class="personal-info">
                    <strong>Homeowners&nbsp;Insurance Policy</strong>
                    Covers your home and personal property, plus loss of use, personal liability, and medical payments.
                </span>
            </div>
            <div class="col">
                <span class="personal-info">
                    <strong>“A” rated Carrier</strong>
                    Backed by an insurer rated as "A-" or better by A.M. Best.
                </span>
            </div>
            <div class="col">
                <span class="personal-info">
                    <strong>Home Value</strong>
                    We've estimated the value of your home at <b data-bind="currency:replacementCost"></b>.
                </span>
            </div>
        </div>
    </div>
</div>
    <!--ko let: { $quoteVm: $data }-->
    <div data-bind="template:{name:'elementGroupTemplatePrint', foreach:sortedElementGroups}"></div>
    <!--/ko-->
    <section class="premium-fees-container-ly premium-fees-container-bs container" data-bind="visible: annualQuoteFees().length">
    <div class="container">
        <div class="row premium-fee-margin-ly">
            <div class="col-sm-12">
                <h5 class="premium-fees-header-md premium-fees-header-ly">* additional state fees disclosure</h5>
            </div>
        </div>
        <div class="row premium-fee-margin-ly">
            <div class="col-sm-12">
                <p class="premium-fees-blurb-md premium-fees-blurb-ly">
                    The premium price quoted above includes all required additional fees subject to your state's regulations including the <span class="premium-fees-blurb-items-md" data-bind="foreach: annualQuoteFees"><span class="premium-fees-blurb-items-instance-md" data-bind="text:displayName()"></span></span>
                </p>
            </div>
        </div>
        <section class="premium-fees-breakdown-container-md premium-fees-breakdown-container-ly premium-fee-margin-ly">
            <div class="row">
                <div class="col-sm-12">
                    <h5 class="premium-fees-breakdown-header-md">Total Annual Fees: <span id="annualFeesTotal_PrintValue" class="fees-green-span-md" data-bind="text: formatCurrencyUS(annualFeesTotal()) "></span></h5>
                </div>
            </div>
            <div class="premium-fees-line-container-ly" data-bind="foreach: annualQuoteFees">
                <div class="row premium-fee-instance-ly">
                    <div class="col-sm-12"><span id="quoteFeePrintName" data-bind="text: displayName()"></span><span class="fees-green-span-md fees-instance-symbol-ly">$</span><span id="quoteFee_PrintValue" class="fees-green-span-md" data-bind="text: value()"></span></div>
                </div>
            </div>
        </section>
    </div>
</section>

</div>

    </main>
</div>


<script type="text/html" id="elementGroupTemplate">
    <div class="container" data-bind="visible:elements().length > 0">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-md-offset-1 col-lg-offset-1 modify-table-ly">
                <h2 data-bind="text:name" class="modify-title-bs"></h2>
                <ul class="quote-detail" data-bind="template:{name:'elementTemplate', foreach:elements, as:'element'}">

                </ul>
            </div>
        </div>
    </div>
</script>


<script type="text/html" id="elementTemplate">
    <li data-bind="attr:{id:name() + 'Container'}, css:template, visible: childElementDisplay()" class="quote-element">
        <div class="row element-row-md" data-bind="attr:{id:name() + 'Block'}">

            <div class="modify-info-ly">
                <div class="element-header-container-ly"><span class="modify-li-header-bs" data-bind="text:display"></span><span class="premium-error-icon-md glyphicon glyphicon-exclamation-sign" data-bind="visible:showPremiumErrorIcon()"></span><span class="quote-warning-icon-md" data-bind="visible:showQuoteWarningIcon()"><img class="element-warning-logo-ly" src="../..//static/images/warning_element.svg" alt="warning logo" /></span></div>
                <span class="modify-li-price"
                      data-bind="formatElementValue: parsedValue(), attr:{id:name() + '_Value'}"></span>
                <button id="expand-element-btn" class="btn-info modify-li-edit-icon" data-bind="attr:{'data-target': info() ? '#' + name() + 'Info' : '', id: name() + 'ExpandBtn'}, css:{'default-cursor':!info()}, visible:!isAgent">
                    <img src="../..//static/images/dropdown-icon-2.svg" class="dropdown-icon-bs">


                </button>
                <button id="expand-info-agent-btn" class="btn-info modify-li-edit-icon" data-bind="attr:{id: name() + 'ExpandInfoAgentBtn'}, css:{'default-cursor':!info()}, visible:isAgent, click:toggleAgentInfo">
                    <img src="../..//static/images/dropdown-icon-2.svg" class="dropdown-icon-bs" data-bind="css:{'rotate-icon-st':!showInfoAgents()}">
                </button>
            </div>



            <div i class="info-area expand-element modify-li-expanded-ly" data-bind="attr:{id:name() + 'Info'}">
                <div class="modify-li-expanded-content-ly modify-li-expanded-content-md">
                    <div data-bind="template:template">

                    </div>
                    <div class="info-area" data-bind="visible: isAgent && showInfoAgents()">
                        <div class="info-area">
                            <div class="info-block-md">
                                <p data-bind="html:info(), attr:{id:element.name() + 'InfoAgent'}"></p>
                            </div>
                        </div>
                    </div>


                    <div class="info-area" data-bind="visible:!isAgent">
                        <div class="info-block info-block-md">
                            <p data-bind="html:info, attr:{id:element.name() + 'Info'}"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
</script>

<script type="text/html" id="booleanElementTemplate">
    <ul class="options-check boolean-options-ly" data-bind="attr:{id:element.name}, disableEdit:quoteVm.disabled() || !element.isEditable()">
        <li>
            <label class="modify-btn-label-md" data-bind="css:{'jcf-label-active':element.parsedValue()==='true'}, click:element.setValue('true'), attr:{id:element.name() + 'Yes'}">
                <strong class="quoteChoiceText quote-choice-text-bs boolean-element-text-true-bs">YES</strong>
                <span class="jcf-radio boolean-modify-btn-md" data-bind="css:{'jcf-checked':element.parsedValue() === 'true', 'jcf-unchecked':element.parsedValue() !== 'true'}, attr:{id:element.name() + 'Span' + 'Yes'}">
                    <input data-bind="attr:{name:element.name, id:element.name() + '_true'}, checked:value" type="radio" value="true" style="position: absolute; opacity: 0" />
                    <span></span>
                </span>
            </label>
        </li>
        <li>
            <label class="modify-btn-label-md" data-bind="css:{'jcf-label-active':element.parsedValue() !=='true'}, click:element.setValue('false'), attr:{id:element.name() + 'No'}">

                <strong class="quoteChoiceText quote-choice-text-bs boolean-element-text-false-bs">NO</strong>
                <span class="jcf-radio boolean-modify-btn-md" data-bind="css:{'jcf-checked':element.parsedValue() !== 'true', 'jcf-unchecked':element.parsedValue() === 'true'}, attr:{id:element.name() + 'Span' + 'No'}">
                    <input data-bind="attr:{name:element.name, id:element.name() + '_true'}, checked:value" type="radio" value="false" style="position: absolute; opacity: 0" />
                    <span></span>
                </span>
            </label>
        </li>
    </ul>
</script>

<script type="text/html" id="choiceElementTemplate">
    <ul class="options-check choice-ul-md" data-bind="attr:{id:element.name() + '-choices-container'}, foreach:element.choices, disableEdit:quoteVm.disabled() || !element.isEditable()">
        <li data-bind="attr:{id:element.name() + '_' + value()}" class="choice-li-md choice-li-bs">
            <label data-bind="css:{'jcf-label-active':isSelected()}, click:element.setValue(value())" class="choice element-choice-md">
                <strong class="quoteChoiceText quote-choice-text-bs" data-bind="text:name, css:{quoteChoiceWithImage:imageUrl}"></strong>
                <span class="jcf-radio choice-element-btn-md modify-choice-element-btn-md"
                      data-bind="css:{'jcf-checked':isSelected(), 'jcf-unchecked':!isSelected(), quoteChoiceImage:imageUrl}, style:{'background-image':'url(' + (imageUrl() || 'Images/Transparent.gif') + ')'}">
                    <input type="radio" data-bind="attr:{name:name, value:value}, checked: value" style="position: absolute; opacity: 0" />
                </span>
            </label>
        </li>
    </ul>
</script>

<script type="text/html" id="mainReplacementCostTemplate">
    <div class="number-element-template main-replacement-cost-container-st" data-bind="validationOptions: {insertMessages: false}">
        <input type="number" id="main-replacement-cost-input" class="main-replacement-cost-input-bs main-replacement-cost-input-st"
               data-bind="value:element.value, event:{change:element.handleValueChange}, hasFocus:element.mainInputFocus, enable: !quoteVm.disabled() && !quoteVm.isPurchased()" />
        <span class="main-replacement-cost-input-prefix-bs">$</span>

        <span class="main-replacement-cost-input-suffix-bs" data-bind="visible:!element.mainInputFocus()">edit</span>
        <label class="errorLabelOn" data-bind="validationMessage: element.value, attr:{id:element.name() + 'MainError'}"></label>
    </div>
</script>

<!--script type="text/html" id="mainChoiceTemplate"-->

    <ul id="preview-deductible-choices" class="options-check" >

            <li >
                <label  class="choice main-choice-bs">
                    <strong class="quoteChoiceText main-choice-text-bs main-choice-text-st" >{{choice.name}}</strong>
                </label>
            </li>
    </ul>
<!--/script-->

<script type="text/html" id="rangeElementTemplate">
    <div data-bind="disableEdit:quoteVm.disabled() || !element.isEditable(), attr:{id:element.name}" class="slider-box">
        <div class="slider-bar-ly slider ui-slider quote-horizontal-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all col-lg-12 col-md-12 col-sm-12"
             data-bind="attr:{id: 'slider-element'}, slider:element.value, element: element, sliderOptions:{min:element.minValue, max:element.maxValue, step:element.step, stop:element.handleValueChange, disabled: function() { return $quoteVm.isPurchased() && !$quoteVm.isReprice(); }}">
            <span class="ui-slider-handle ui-corner-all" data-bind="attr:{id:element.id}">
                <span class="value value-text-bubble-md">
                    <span class="number" data-bind="attr:{id: element.name() + '_Handle_Value'}, formatElementValue:element.parsedValue"></span>
                </span>
            </span>
        </div>
        <ul class="range-pointer range-pointer-ly">
            <li class="left" data-bind="text:element.minValue, css:{defaultValue:element.isDefaultMin()}"></li>
            <li class="right" data-bind="text:element.maxValue, css:{defaultValue:element.isDefaultMax()}"></li>
        </ul>
    </div>
</script>


<script type="text/html" id="gradeTemplate">
    <style type="text/css" data-bind="text:tooltipAfterStyle"></style>
    <div class="csgrade" data-bind="disableEdit:quoteVm.disabled() || !element.isEditable()">
        <div class="slider-box grade-quote-md" id="gradeSliderBox">
            <div class="tooltip-small-md tooltip" id="gradeTooltip">
                <div>
                    Home Value<span class="replacementCost" data-bind="currency:$quoteVm.replacementCost()"></span>
                </div>
                <div data-bind="visible:$quoteVm.isAdmin()">
                    <div id="altReplacementCosts" data-bind="visible:$quoteVm.standardReplacementCost() > 0">
                        Standard Home Value<span class="standardReplacementCost" data-bind="currency:$quoteVm.standardReplacementCost()"></span>
                    </div>
                    <div data-bind="visible:$quoteVm.saleBasedReplacementCost() > 0">
                        Sale Based Home Value<span class="saleBasedReplacementCost" data-bind="currency:$quoteVm.saleBasedReplacementCost()"></span>
                    </div>
                </div>
                <div>
                    Home Value by SQ FT<span class="replacementCostBySQFT" data-bind="currency:$quoteVm.replacementCostPerSqFoot()"></span>
                </div>
                <div>
                    Rate<span class="replacementCostRate" data-bind="currency:$quoteVm.replacementCostRate(), places:2"></span>
                </div>
            </div>
            <div class="slider ui-slider ui-slider-horizontal quote-horizontal-slider ui-widget ui-widget-content ui-corner-all"
                 data-bind="slider:value, sliderOptions:{min:minValue, max:maxValue, step:step, stop:handleValueChange, disabled: function() { return $quoteVm.isPurchased() && !quoteVm.isReprice(); }}">
                <span class="ui-slider-handle ui-state-default ui-corner-all" data-bind="attr:{id:element.id}">
                    <span class="value" style="display: none">
                        <span class="number" data-bind="text:value"></span>
                    </span>
                </span>
                <div class="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min" style="width: 0;"></div>
            </div>
        </div>
    </div>
</script>

<script type="text/html" id="numberElementTemplate">
    <div class="number-element-template" data-bind="validationOptions: {insertMessages: false}">
        <div>
            <span>$</span><input type="number" data-bind="value:element.value, attr:{id:element.name() + 'Input'}, event:{change:element.handleValueChange}" />
        </div>
        <label class="errorLabelOn" data-bind="validationMessage: element.value, attr:{id:element.name() + 'Error'}"></label>
    </div>
</script>


<script type="text/html" id="replacementCostTemplate">
    <div class="number-element-template" data-bind="validationOptions: {insertMessages: false}">
        <div class="input-info-container-md">
            <div class="replacement-cost-input-container-md" data-bind="css:{'ny-input-field-rc-md': $quoteVm.quote().StateCode === 'NY'}">
                <span class="large-text unit-bs">$</span>
                <input type="number" id="replacement-cost-input" class="replacement-cost-input-bs"
                       data-bind="value:element.value, attr:{id:element.name() + 'Input'}, event:{change:element.handleValueChange}" />
            </div>
            <div class="details replacement-cost-details-ly">
                <span data-bind="visible:$quoteVm.quote().StateCode === 'NY'">
                    To calculate a fair premium, we need an accurate estimate of the insurance value on your home. The premium in this quote of <span data-bind="currency:$quoteVm.annualPremium()"></span> is based on the home value shown here of <span id="rcElementBlurbValue" data-bind="currency:$quoteVm.replacementCost()"></span>. We think that’s an appropriate value, but if you feel the value shown is inaccurate or improper, you can change that value accordingly. The policy will be issued offering Replacement Cost on Coverage A, per form HO-3 terms and conditions, including coinsurance wording. However, if you want to have a Guaranteed Replacement Cost, you can choose that option below and Swyfft will cover the full cost of replacing your home in the event of a full loss.
                </span>
                <span data-bind="visible:$quoteVm.quote().StateCode !== 'NY'">
                    Swyfft will cover the full cost of replacing your home in the event of a full loss.  To calculate a fair premium, we need an accurate estimate of the value of the home.  The premium of <span data-bind="currency:$quoteVm.annualPremium()"></span> was based on a home value of <span id="rcElementBlurbValue" data-bind="currency:$quoteVm.replacementCost()"></span>, but if you believe the cost to replace your home is different, you should change the home value here accordingly.
                </span>
            </div>
        </div>
        <label class="errorLabelOn" data-bind="validationMessage: element.value, attr:{id:element.name() + 'Error'}"></label>
    </div>
</script>

<script id="emptyTemplate" type="text/html">
    <div></div>
</script>

<script type="text/html" id="elementGroupTemplatePrint">
    <div class="container" data-bind="visible:elements().length > 0">
        <div class="row">
            <div class="col-xs-12">
                <h1 data-bind="text:name"></h1>
                <ul class="quote-detail" data-bind="template:{name:'elementTemplatePrint', foreach:elements, as:'element'}">

                </ul>
            </div>
        </div>
    </div>
</script>


<script type="text/html" id="elementTemplatePrint">
    <li data-bind="css:{ stripe: $index() % 2 === 1 }" class="quote-element">

        <div class="element-template-panel">
            <h3 class="element-display-name" data-bind="text:display"></h3>

            <!-- ko template: (template() + 'Print')--><!-- /ko -->
        </div>

        <div class="element-info" data-bind="html:info"></div>
        <!-- ko if: ($index() !== ($parent.elements().length -1))-->
        <hr />
        <!-- /ko -->
    </li>
</script>

<script type="text/html" id="booleanElementTemplatePrint">
    <!-- ko if: parsedValue() === 'true' -->
    <span class="element-template-value">YES</span>
    <!-- /ko -->
    <!-- ko if: parsedValue() === 'false' -->
    <span class="element-template-value">NO</span>
    <!-- /ko -->
</script>

<script type="text/html" id="choiceElementTemplatePrint">
    <span class="element-template-value" data-bind="formatElementValue:parsedValue()"></span>
</script>

<script type="text/html" id="rangeElementTemplatePrint">
    <span class="element-template-value" data-bind="formatElementValue:parsedValue()"></span>
</script>


<script type="text/html" id="gradeTemplatePrint">
    <span class="element-template-value" data-bind="text:parsedValue()"></span>
    <div class="grade-template-panel clearfix">
        <div>
            <span>Home Value</span>
            <span data-bind="currency:$quoteVm.replacementCost()"></span>
        </div>
        <div data-bind="visible:$quoteVm.isAdmin()">
            <div id="altReplacementCosts" data-bind="visible:$quoteVm.standardReplacementCost() > 0">
                <span>Standard Home Value</span><span data-bind="currency:$quoteVm.standardReplacementCost()"></span>
            </div>
            <div data-bind="visible:$quoteVm.saleBasedReplacementCost() > 0">
                <span>Sale Based Home Value</span><span data-bind="currency:$quoteVm.saleBasedReplacementCost()"></span>
            </div>
        </div>
        <div>
            <span>Home Value by SQ FT</span>
            <span data-bind="currency:$quoteVm.replacementCostPerSqFoot()"></span>
        </div>
        <div>
            <span>Rate</span>
            <span data-bind="currency:$quoteVm.replacementCostRate(), places:2"></span>
        </div>
    </div>
</script>

<script type="text/html" id="numberElementTemplatePrint">
    <div class="number-element-template" data-bind="validationOptions: {insertMessages: false}">
        <div>
            <span>$</span><input type="number" data-bind="value:element.parsedValue(), attr:{id:element.name() + 'PrintInput'}, event:{change:element.handleValueChange}" />
        </div>
        <label class="errorLabelOn" data-bind="validationMessage: element.parsedValue(), attr:{id:element.name() + 'PrintError'}"></label>
    </div>
</script>


<script type="text/html" id="replacementCostTemplatePrint">
    <span class="element-template-value" data-bind="currency:element.parsedValue()"></span>
    <div class="number-element-template" data-bind="validationOptions: {insertMessages: false}">
        <div>
            <span data-bind="visible:$quoteVm.quote().StateCode === 'NY'">
                To calculate a fair premium, we need an accurate estimate of the insurance value on your home. The premium in this quote of <span data-bind="currency:$quoteVm.annualPremium()"></span> is based on the home value shown here of <span id="rcElementBlurbValue" data-bind="currency:$quoteVm.replacementCost()"></span>. We think that’s an appropriate value, but if you feel the value shown is inaccurate or improper, you can change that value accordingly. The policy will be issued offering Replacement Cost on Coverage A, per form HO-3 terms and conditions, including coinsurance wording. However, if you want to have a Guaranteed Replacement Cost, you can choose that option below and Swyfft will cover the full cost of replacing your home in the event of a full loss.
            </span>
            <span data-bind="visible:$quoteVm.quote().StateCode !== 'NY'">
                Swyfft will cover the full cost of replacing your home in the event of a full loss.  To calculate a fair premium, we need an accurate estimate of the value of the home.  The premium of <span data-bind="currency:$quoteVm.annualPremium()"></span> was based on a home value of <span id="rcElementBlurbValue" data-bind="currency:$quoteVm.replacementCost()"></span>, but if you believe the cost to replace your home is different, you should change the home value here accordingly.
            </span>
        </div>
    </div>
</script>

<script id="emptyPrintTemplate" type="text/html">
    <div></div>
</script>
<div id="confirmation">
    <div id="confirmationModal" class="modal fade confirmation-modal-md" role="dialog" data-bind="modal:showModal">
        <div class="modal-dialog confirmation-box-md">
            <div class="row">
                <div class="col-xs-10 col-xs-offset-1 col-lg-6 col-lg-offset-3">
                    <div class="modal-content" data-bind="visible:elements().length !== 0 && panel()!=='confirmation'">
                        <div class="modal-header alert-info">
                            <button type="button" class="close confirm-close-icon-bs" data-dismiss="modal" data-bind="click:function(){$parent.cancel()}">&times;</button>
                            <div class="row">
                                <div class="col-xs-10 col-xs-offset-1">
                                    <h4 class="modal-title">A few final things...</h4>
                                </div>
                            </div>
                            <div class="row container">
                                <div class="col-xs-10 col-xs-offset-1">
                                    <h5 class="confirmation-top-blurb-bs">Before you can purchase, please make sure the following is correct:</h5>
                                </div>
                            </div>
                        </div>
                        <!-- ko foreach: {data: elements, as: 'element'} -->

                        <div class="modal-body" data-bind="disableEdit:$parent.isBusy">
                            <div data-bind="template: {name: 'confirmElementTemplate', data: element}"></div>

                        </div>
                        <!-- /ko -->
                        <fieldset>
                            <div class="row buttonHolder" style="margin-bottom: 5px">
                                <div class="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-7 confirm-ok-button-container-ly">
                                    <input value="CONFIRMED!" type="button" tabindex="-1" class="btn btn-default btn-living-space-md"
                                           data-bind="click:confirmAllElements, attr:{id:'btnConfirm'}">
                                </div>
                            </div>
                        </fieldset>
                    </div>

                </div>
            </div>


            <script type="text/html" id="confirmElementTemplate">
                <div data-bind="attr:{id:'confirm' + name() + 'Container'}, css:template, visible: childElementDisplay()" class="quote-element-md">

                    <div class="modify-li-expanded-content-ly modify-li-expanded-content-md">
                        <div data-bind="template:'confirm-'+template()">

                        </div>
                    </div>
                </div>
            </script>

            <script type="text/html" id="confirm-rangeElementTemplate">
                <fieldset>
                    <div class="row">
                        <div class="col-xs-10 col-xs-offset-1 col-sm-7 confirm-range-title-container-md">
                            <h4 class="confirm-range-element-title-md" data-bind="text:display()"></h4>
                            <h5 class="confirm-range-element-info-md" data-bind="text:info()"></h5>
                        </div>
                        <div class="col-xs-10 col-xs-offset-1 col-sm-3 col-sm-offset-0 confirm-range-input-container-md">
                            <div class="confirm-range-input-border-bottom-bs">
                                <input type="number" class="custom-form-control confirm-range-input-element-md" data-bind="value:element.value, attr:{id:element.name() + 'Input-C'}" />
                            </div>

                        </div>

                    </div>

                </fieldset>
            </script>

            <script type="text/html" id="confirm-choiceElementTemplate">
                <section class="quote-header confirmation-choice-element-md">
                    <div class="row">
                        <div class="col-xs-10 col-xs-offset-1">
                            <h4 class="confirm-choice-element-title-md" data-bind="text:display()"></h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-10 col-xs-offset-1">
                            <h5 class="confirm-choice-element-info-md" data-bind="text:info()"></h5>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-10 col-xs-offset-1 confirm-choice-border-bottom-bs">
                            <ul class="options-check choice-ul-md" data-bind="foreach:element.choices">
                                <li data-bind="attr:{id:element.name() + '-C_' + value()}" class="choice-li-md confirm-choice-li-md">
                                    <label data-bind="css:{'jcf-label-active':isSelectedModal()}, click:function(){element.setValue($data.value())}" class="choice element-choice-md">
                                        <strong class="quoteChoiceText quote-choice-text-bs" data-bind="text:name, css:{quoteChoiceWithImage:imageUrl}"></strong>
                                        <span class="jcf-radio choice-element-btn-md modify-choice-element-btn-md confirm-choice-element-btn-st"
                                              data-bind="css:{'jcf-checked':isSelectedModal(), 'jcf-unchecked':!isSelectedModal(), quoteChoiceImage:imageUrl}, style:{'background-image':'url(' + (imageUrl() || 'Images/Transparent.gif') + ')'}">
                                            <input type="radio" data-bind="attr:{name:name, value:value}, checked: $parent.value" style="position: absolute; opacity: 0" />
                                        </span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-10 col-xs-offset-1 confirm-choice-errors-container-bs">
                            <h5 data-bind="visible:$root.displayChoiceErrors()&&('' === element.value() || !element.isValid())" class="confirm-choice-error-instance-bs" >You have not yet made a selection. Please choose an option to continue.</h5>
                        </div>
                    </div>
                </section>
            </script>

            <script type="text/html" id="confirm-booleanElementTemplate">
                <section class="quote-header confirmation-choice-element-md">
                    <div class="row">
                        <div class="col-xs-10 col-xs-offset-1">
                            <h4 class="confirm-choice-element-title-md" data-bind="text:display()"></h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-10 col-xs-offset-1">
                            <h5 class="confirm-choice-element-info-md" data-bind="text:info()"></h5>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-10 col-xs-offset-1 confirm-choice-border-bottom-bs">
                            <ul class="options-check choice-ul-md">
                                <li data-bind="attr:{id:element.name() + '-C_true'}" class="choice-li-md confirm-choice-li-md">
                                    <label data-bind="css:{'jcf-label-active':element.value()==='true'}, click:function(){element.setValue('true')}" class="choice element-choice-md">
                                        <strong class="quoteChoiceText quote-choice-text-bs">YES</strong>
                                        <span class="jcf-radio choice-element-btn-md modify-choice-element-btn-md confirm-choice-element-btn-st"
                                              data-bind="css:{'jcf-checked':element.value()==='true', 'jcf-unchecked':element.value() !== 'true'}">
                                            <input type="radio" data-bind="attr:{name:element.name}, checked:value" value="true" style="position: absolute; opacity: 0" />
                                        </span>
                                    </label>
                                </li>
                                <li data-bind="attr:{id:element.name() + '-C_false'}" class="choice-li-md confirm-choice-li-md">
                                    <label data-bind="css:{'jcf-label-active':element.value() !=='true'}, click:function(){element.setValue('false')}" class="choice element-choice-md">
                                        <strong class="quoteChoiceText quote-choice-text-bs">NO</strong>
                                        <span class="jcf-radio choice-element-btn-md modify-choice-element-btn-md confirm-choice-element-btn-st"
                                              data-bind="css:{'jcf-checked':element.value() !== 'true', 'jcf-unchecked':element.value() === 'true'}">
                                            <input type="radio" data-bind="attr:{name:element.name}, checked:value" value="false" style="position: absolute; opacity: 0" />
                                        </span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-10 col-xs-offset-1 confirm-choice-errors-container-bs">
                            <h5 data-bind="visible:$root.displayChoiceErrors()&&(element.value()!==element.targetValue()), text:element.warning() || 'Please confirm the statement by selecting '+element.targetString()+' before continuing.'" class="confirm-choice-error-instance-bs"></h5>
                        </div>
                    </div>
                </section>
            </script>


            <div class="row">
                <div class="col-xs-10 col-xs-offset-1 col-lg-6 col-lg-offset-3">
                    <div class="modal-content" data-bind="visible:panel()==='confirmation'">
                        <div class="modal-header alert-info">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">We can work with that</h4>
                        </div>
                        <div class="modal-body" data-bind="disableEdit:isBusy">
                            <div class="input-holder">
                                <h5>This changed your premium a bit. Click OK to see your updated quote.</h5>
                            </div>
                            <fieldset class="container">
                                <div class="buttonHolder" style="margin-bottom: 5px">
                                    <input id="btnConfirmOk" value="OK" type="button" tabindex="-1" class="btn btn-default"
                                           data-bind="click:ok">
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



        </section>
        <footer id="footer">

<div class="aside container">
    <div class="row">
        <div class="col-xs-3"></div>
        <div class="col-xs-3">
            <h2>BetterBind</h2>
            <ul>
                <li><a href="About.html">About</a></li>
                <li><a href="Press.html"><span id="news-overlay">In The Press</span></a></li>
                <li><a href="privacy.html"><span id="terms-overlay">Terms</span></a></li>
                <li><a href="privacy.html"><span id="privacy-overlay">Privacy Policy</span></a></li>
                <li class="agent-login">
                    <a href="Login.html">Agent Login</a>
                </li>
                <li class="agent-logout">
                    <a href="#">Agent Logout</a>
                </li>
            </ul>
        </div>
        <div class="col-xs-3">
            <h2>Contact</h2>
            <ul>
                <li>
                    <a href="tel:1.201.887.0962">1.201.887.0962</a>
                </li>
                <li>
                    <a href="ContactUs.html" id="contactUsLink">Contact Us</a>
                </li>
                <li>
                    <a href="mailto:betterbind@gmail.com">betterbind@gmail.com</a>
                </li>
            </ul>
        </div>


        <div class="col-xs-3"></div>
    </div>
</div>
<div class="container">
    <div class="row row-centered">
        <div class="col-xs-12 col-centered">
            <p> &copy; 2018 BetterBind&reg; , LLC. All rights reserved.</p>
        </div>
    </div>
</div>

        </footer>
    </div>


<div id="errorModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header alert-danger">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 id="errorModalTitle" class="modal-title">An error occurred</h4>
            </div>
            <div id="errorModalBody" class="modal-body">
                <p>Some text in the modal.</p>
            </div>
            <div class="modal-footer">
                <span class='reference'></span>
                <button id="errorCloseButton" type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

    <script src="/static/js/main"></script>


    <script type="text/javascript" src="/static/js/commons.js"></script>



    <script type="text/javascript" src="/static/js/home.js?cb=EF45A4C2526F7D71CA75524643D62BF3"></script>
<script type="text/javascript" src="/static/js/nav.js"></script>


</body>

</html>
<script>
   // $('#quote_replace .deductible').click(function(){
   $('#quote_replace').on('click', '.deductible', function(){
    value=$(this).attr('data-value');
    get_quote('{{primaryElementName}}', value);
});
   function get_quote(element, value){
      $.get( '/patch_quote', {'addresskey':'{{addresskey}}',
        'quoteid':'{{quote_id}}',
        'ElementName':element,
        'address':"{{address}}",
    'value':value}).done(function(data){
        //alert(data.data);
        $('#quote_replace').html(data.data);
          $('.js-groups').html(data.elements);
          reload_slider();
    })
   }

    $('#quote_replace').on('change', '#main-replacement-cost-input', handle_replacement_change);
   $('.js-groups').on('change', '.replacement-cost-input-bs', handle_replacement_change);
   $('.js-groups').on('click','.replacement-cost-input-bs', function(e){
       $(this).focus();
       console.log('im here');
       e.stopPropagation();
   });

   $('.js-groups').on('click','.element-choice-md',function(){
       input= $(this).find('input').first();
       get_quote(input.attr('name'), input.val());
   });

    function handle_replacement_change(){
        value=$(this).val()
        console.log(value)
        if (value < {{min_value}}){
            console.log(1)
            $('#ReplacementCostMainError').html('<span>Please enter a value that is greater than {{min_value}}</span>')
            return false;
        }
        if (value > {{max_value}}){
             $('#ReplacementCostMainError').text('Please enter a value that is less than {{max_value}}')
            return false
        }
        get_quote('ReplacementCost', value);
    }
</script>