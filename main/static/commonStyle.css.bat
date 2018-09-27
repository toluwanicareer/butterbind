/*  
    For use in sketch, download "sketch-palettes" plugin: https://github.com/andrewfiorillo/sketch-palettes
    Load this palette: https://www.dropbox.com/s/8ipa5kei755nq3k/swyfft-document-colors.sketchpalette?dl=0
    Visual style guide: https://www.dropbox.com/s/oeize3nk1ruvaup/01-base-palette.png?dl=0
*/
/* Greens */
/* Neutrals */
/* ui element colors */
/* 
    note: 
    - numbers go from brightest (1) to darkest (3) 
    - grays all have same hue + saturation but lightness varies on HSL scale 
*/
/*
    11/9/16: old variables added back so code doesn't break on current site.  CB to find all, replace with new variables names and delete from this file.
*/
/*
    Visual Style Guide: https://www.dropbox.com/s/5w88x69rullg6h7/02-layout.png?dl=0
*/
/*  
    For use in sketch, download "sketch-palettes" plugin: https://github.com/andrewfiorillo/sketch-palettes
    Load this palette: https://www.dropbox.com/s/8ipa5kei755nq3k/swyfft-document-colors.sketchpalette?dl=0
    Visual style guide: https://www.dropbox.com/s/oeize3nk1ruvaup/01-base-palette.png?dl=0
*/
/* Greens */
/* Neutrals */
/* ui element colors */
/* 
    note: 
    - numbers go from brightest (1) to darkest (3) 
    - grays all have same hue + saturation but lightness varies on HSL scale 
*/
/*
    11/9/16: old variables added back so code doesn't break on current site.  CB to find all, replace with new variables names and delete from this file.
*/
/*container for modals to be used with React-Bootstrap modals*/
/* display text - bubble preview font size */
/* large headers, page level */
/* mid headers, page level */
/* small-mid headers, page level */
/* small headers, section level */
/* body copy */
/* subtext, footnotes */
body {
  font-family: 'Lato', Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.8888888889;
  color: #6e6e6f;
  background-color: #fff; }

a {
  color: #888888;
  text-decoration: none; }

a:hover, a:focus {
  color: #626262;
  text-decoration: underline; }

.img-responsive {
  display: block;
  max-width: 100%;
  height: auto; }

.img-thumbnail {
  padding: 4px;
  line-height: 1.8888888889;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  display: inline-block;
  max-width: 100%;
  height: auto; }

hr {
  margin-top: 34px;
  margin-bottom: 34px;
  border: 0;
  border-top: 1px solid #eeeeee; }

h1 small,
h1 .small,
h2 small,
h2 .small,
h3 small,
h3 .small,
h4 small,
h4 .small,
h5 small,
h5 .small,
h6 small,
h6 .small, .h1 small, .h1 .small, .h2 small, .h2 .small, .h3 small, .h3 .small, .h4 small, .h4 .small, .h5 small, .h5 .small, .h6 small, .h6 .small {
  font-weight: normal;
  line-height: 1;
  color: #777777; }

h1,
.h1,
h2,
.h2,
h3,
.h3 {
  margin-top: 34px;
  margin-bottom: 17px; }

h4,
.h4,
h5,
.h5,
h6,
.h6 {
  margin-top: 17px;
  margin-bottom: 17px; }

h1, .h1 {
  font-size: 54px; }

h2, .h2 {
  font-size: 28px; }

h3, .h3 {
  font-size: 31px; }

h4, .h4 {
  font-size: 23px; }

h5, .h5 {
  font-size: 18px;
  margin-bottom: 10px; }

h6, .h6 {
  font-size: 16px; }

p {
  margin: 0 0 17px; }

.lead {
  margin-bottom: 34px;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.4; }

@media (min-width: 768px) {
  .lead {
    font-size: 27px; } }

small, .small {
  font-size: 88%; }

.text-muted {
  color: #777777; }

.text-primary {
  color: #428bca; }

a.text-primary:hover {
  color: #3071a9; }

.bg-primary {
  color: #fff; }

.bg-primary {
  background-color: #428bca; }

a.bg-primary:hover {
  background-color: #3071a9; }

.page-header {
  padding-bottom: 16px;
  margin: 68px 0 34px;
  border-bottom: 1px solid #eeeeee; }

ul, ol {
  margin-top: 0;
  margin-bottom: 17px; }

dl {
  margin-top: 0;
  margin-bottom: 34px; }

dt, dd {
  line-height: 1.8888888889; }

.dl-horizontal dd:before, .dl-horizontal dd:after {
  content: " ";
  display: table; }

.dl-horizontal dd:after {
  clear: both; }

@media (min-width: 768px) {
  .dl-horizontal dt {
    float: inherit;
    width: inherit;
    clear: inherit;
    text-align: inherit;
    overflow: inherit;
    text-overflow: inherit;
    white-space: inherit; }
  .dl-horizontal dd {
    margin-left: inherit; } }

abbr[title], abbr[data-original-title] {
  cursor: help;
  border-bottom: 1px dotted #777777; }

blockquote {
  padding: 17px 34px;
  margin: 0 0 34px;
  font-size: 22.5px;
  border-left: 5px solid #eeeeee; }

blockquote p:last-child, blockquote ul:last-child, blockquote ol:last-child {
  margin-bottom: 0; }

blockquote footer,
blockquote small,
blockquote .small {
  display: block;
  font-size: 80%;
  line-height: 1.8888888889;
  color: #777777; }

blockquote footer:before, blockquote small:before, blockquote .small:before {
  content: '\2014   \A0'; }

.blockquote-reverse, blockquote.pull-right {
  padding-right: 15px;
  padding-left: 0;
  border-right: 5px solid #eeeeee;
  border-left: 0;
  text-align: right; }

address {
  margin-bottom: 34px;
  font-style: normal;
  line-height: 1.8888888889; }

kbd {
  padding: 2px 4px;
  font-size: 90%;
  color: #fff;
  background-color: #333;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25); }

kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: bold;
  box-shadow: none; }

pre {
  display: block;
  padding: 16.5px;
  margin: 0 0 17px;
  font-size: 17px;
  line-height: 1.8888888889;
  word-break: break-all;
  word-wrap: break-word;
  color: #333333;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px; }

.container:before, .container:after {
  content: " ";
  display: table; }

.container:after {
  clear: both; }

@media (min-width: 768px) {
  .container {
    width: 96%; } }

@media (min-width: 992px) {
  .container {
    width: 93%; } }

@media (min-width: 1230px) {
  .container {
    width: 93%; } }

.container-fluid:before, .container-fluid:after {
  content: " ";
  display: table; }

.container-fluid:after {
  clear: both; }

.row:before, .row:after {
  content: " ";
  display: table; }

.row:after {
  clear: both; }

header {
  max-height: 65px; }

.header-nav-visible {
  max-height: 1200px; }

@media (min-width: 1230px) {
  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
    float: left; }
  .col-lg-1 {
    width: 8.3333333333%; }
  .col-lg-2 {
    width: 16.6666666667%; }
  .col-lg-3 {
    width: 25%; }
  .col-lg-4 {
    width: 33.3333333333%; }
  .col-lg-5 {
    width: 41.6666666667%; }
  .col-lg-6 {
    width: 50%; }
  .col-lg-7 {
    width: 58.3333333333%; }
  .col-lg-8 {
    width: 66.6666666667%; }
  .col-lg-9 {
    width: 75%; }
  .col-lg-10 {
    width: 83.3333333333%; }
  .col-lg-11 {
    width: 91.6666666667%; }
  .col-lg-12 {
    width: 100%; }
  .col-lg-pull-0 {
    right: auto; }
  .col-lg-pull-1 {
    right: 8.3333333333%; }
  .col-lg-pull-2 {
    right: 16.6666666667%; }
  .col-lg-pull-3 {
    right: 25%; }
  .col-lg-pull-4 {
    right: 33.3333333333%; }
  .col-lg-pull-5 {
    right: 41.6666666667%; }
  .col-lg-pull-6 {
    right: 50%; }
  .col-lg-pull-7 {
    right: 58.3333333333%; }
  .col-lg-pull-8 {
    right: 66.6666666667%; }
  .col-lg-pull-9 {
    right: 75%; }
  .col-lg-pull-10 {
    right: 83.3333333333%; }
  .col-lg-pull-11 {
    right: 91.6666666667%; }
  .col-lg-pull-12 {
    right: 100%; }
  .col-lg-push-0 {
    left: auto; }
  .col-lg-push-1 {
    left: 8.3333333333%; }
  .col-lg-push-2 {
    left: 16.6666666667%; }
  .col-lg-push-3 {
    left: 25%; }
  .col-lg-push-4 {
    left: 33.3333333333%; }
  .col-lg-push-5 {
    left: 41.6666666667%; }
  .col-lg-push-6 {
    left: 50%; }
  .col-lg-push-7 {
    left: 58.3333333333%; }
  .col-lg-push-8 {
    left: 66.6666666667%; }
  .col-lg-push-9 {
    left: 75%; }
  .col-lg-push-10 {
    left: 83.3333333333%; }
  .col-lg-push-11 {
    left: 91.6666666667%; }
  .col-lg-push-12 {
    left: 100%; }
  .col-lg-offset-0 {
    margin-left: 0%; }
  .col-lg-offset-1 {
    margin-left: 8.3333333333%; }
  .col-lg-offset-2 {
    margin-left: 16.6666666667%; }
  .col-lg-offset-3 {
    margin-left: 25%; }
  .col-lg-offset-4 {
    margin-left: 33.3333333333%; }
  .col-lg-offset-5 {
    margin-left: 41.6666666667%; }
  .col-lg-offset-6 {
    margin-left: 50%; }
  .col-lg-offset-7 {
    margin-left: 58.3333333333%; }
  .col-lg-offset-8 {
    margin-left: 66.6666666667%; }
  .col-lg-offset-9 {
    margin-left: 75%; }
  .col-lg-offset-10 {
    margin-left: 83.3333333333%; }
  .col-lg-offset-11 {
    margin-left: 91.6666666667%; }
  .col-lg-offset-12 {
    margin-left: 100%; } }

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 34px; }

.table > thead > tr > th, .table > thead > tr > td, .table > tbody > tr > th, .table > tbody > tr > td, .table > tfoot > tr > th, .table > tfoot > tr > td {
  padding: 8px;
  line-height: 1.8888888889;
  vertical-align: top;
  border-top: 1px solid #ddd; }

.table-responsive {
  width: 100%;
  margin-bottom: 25.5px;
  overflow-y: hidden;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  border: 1px solid #ddd; }

legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 34px;
  font-size: 27px;
  line-height: inherit;
  color: #333333;
  border: 0;
  border-bottom: 1px solid #e5e5e5; }

label {
  display: inline-block;
  /*max-width: 100%;*/
  margin-bottom: 5px;
  font-weight: bold; }

output {
  display: block;
  padding-top: 7px;
  font-size: 18px;
  line-height: 1.8888888889;
  color: #555655; }

.form-control {
  display: block;
  width: 100%;
  height: 42px;
  padding: 6px 12px;
  font-size: 18px;
  line-height: 1.8888888889;
  color: #555655;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; }

.form-control::-moz-placeholder {
  color: #555655;
  opacity: 1; }

.form-control:-ms-input-placeholder {
  color: #555655; }

.form-control::-webkit-input-placeholder {
  color: #555655; }

.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {
  cursor: not-allowed;
  background-color: #eeeeee;
  opacity: 1; }

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type="date"], input[type="time"], input[type="datetime-local"], input[type="month"] {
    line-height: 42px; }
  input[type="date"].input-sm, .input-group-sm > input[type="date"].form-control, .input-group-sm > input[type="date"].input-group-addon, .input-group-sm > .input-group-btn > input[type="date"].btn, .input-group-sm input[type="date"], input[type="time"].input-sm, .input-group-sm > input[type="time"].form-control, .input-group-sm > input[type="time"].input-group-addon, .input-group-sm > .input-group-btn > input[type="time"].btn, .input-group-sm input[type="time"], input[type="datetime-local"].input-sm, .input-group-sm > input[type="datetime-local"].form-control, .input-group-sm > input[type="datetime-local"].input-group-addon, .input-group-sm > .input-group-btn > input[type="datetime-local"].btn, .input-group-sm input[type="datetime-local"], input[type="month"].input-sm, .input-group-sm > input[type="month"].form-control, .input-group-sm > input[type="month"].input-group-addon, .input-group-sm > .input-group-btn > input[type="month"].btn, .input-group-sm input[type="month"] {
    line-height: 36px; }
  input[type="date"].input-lg, .input-group-lg > input[type="date"].form-control, .input-group-lg > input[type="date"].input-group-addon, .input-group-lg > .input-group-btn > input[type="date"].btn, .input-group-lg input[type="date"], input[type="time"].input-lg, .input-group-lg > input[type="time"].form-control, .input-group-lg > input[type="time"].input-group-addon, .input-group-lg > .input-group-btn > input[type="time"].btn, .input-group-lg input[type="time"], input[type="datetime-local"].input-lg, .input-group-lg > input[type="datetime-local"].form-control, .input-group-lg > input[type="datetime-local"].input-group-addon, .input-group-lg > .input-group-btn > input[type="datetime-local"].btn, .input-group-lg input[type="datetime-local"], input[type="month"].input-lg, .input-group-lg > input[type="month"].form-control, .input-group-lg > input[type="month"].input-group-addon, .input-group-lg > .input-group-btn > input[type="month"].btn, .input-group-lg input[type="month"] {
    line-height: 53px; } }

.radio label, .checkbox label {
  min-height: 34px;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: normal;
  cursor: pointer; }

.radio-inline, .checkbox-inline {
  display: inline-block;
  padding-left: 20px;
  margin-bottom: 0;
  vertical-align: middle;
  font-weight: normal;
  cursor: pointer; }

.form-control-static {
  padding-top: 7px;
  padding-bottom: 7px;
  margin-bottom: 0; }

.input-sm, .input-group-sm > .form-control, .input-group-sm > .input-group-addon, .input-group-sm > .input-group-btn > .btn {
  height: 36px;
  padding: 5px 10px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 3px; }

select.input-sm, .input-group-sm > select.form-control, .input-group-sm > select.input-group-addon, .input-group-sm > .input-group-btn > select.btn {
  height: 36px;
  line-height: 36px; }

textarea.input-sm, .input-group-sm > textarea.form-control, .input-group-sm > textarea.input-group-addon, .input-group-sm > .input-group-btn > textarea.btn, select[multiple].input-sm, .input-group-sm > select[multiple].form-control, .input-group-sm > select[multiple].input-group-addon, .input-group-sm > .input-group-btn > select[multiple].btn {
  height: auto; }

.form-group-sm .form-control {
  height: 36px;
  padding: 5px 10px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 3px; }

.form-group-sm select.form-control {
  height: 36px;
  line-height: 36px; }

.form-group-sm textarea.form-control, .form-group-sm select[multiple].form-control {
  height: auto; }

.form-group-sm .form-control-static {
  height: 36px;
  padding: 5px 10px;
  font-size: 16px;
  line-height: 1.5; }

.input-lg, .input-group-lg > .form-control, .input-group-lg > .input-group-addon, .input-group-lg > .input-group-btn > .btn {
  height: 53px;
  padding: 10px 16px;
  font-size: 23px;
  line-height: 1.33;
  border-radius: 6px; }

select.input-lg, .input-group-lg > select.form-control, .input-group-lg > select.input-group-addon, .input-group-lg > .input-group-btn > select.btn {
  height: 53px;
  line-height: 53px; }

textarea.input-lg, .input-group-lg > textarea.form-control, .input-group-lg > textarea.input-group-addon, .input-group-lg > .input-group-btn > textarea.btn, select[multiple].input-lg, .input-group-lg > select[multiple].form-control, .input-group-lg > select[multiple].input-group-addon, .input-group-lg > .input-group-btn > select[multiple].btn {
  height: auto; }

.form-group-lg .form-control {
  height: 53px;
  padding: 10px 16px;
  font-size: 23px;
  line-height: 1.33;
  border-radius: 6px; }

.form-group-lg select.form-control {
  height: 53px;
  line-height: 53px; }

.form-group-lg textarea.form-control, .form-group-lg select[multiple].form-control {
  height: auto; }

.form-group-lg .form-control-static {
  height: 53px;
  padding: 10px 16px;
  font-size: 23px;
  line-height: 1.33; }

.has-feedback .form-control {
  padding-right: 52.5px; }

.form-control-feedback {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  display: block;
  width: 42px;
  height: 42px;
  line-height: 42px;
  text-align: center;
  pointer-events: none; }

.input-lg + .form-control-feedback, .input-group-lg > .form-control + .form-control-feedback, .input-group-lg > .input-group-addon + .form-control-feedback, .input-group-lg > .input-group-btn > .btn + .form-control-feedback {
  width: 53px;
  height: 53px;
  line-height: 53px; }

.input-sm + .form-control-feedback, .input-group-sm > .form-control + .form-control-feedback, .input-group-sm > .input-group-addon + .form-control-feedback, .input-group-sm > .input-group-btn > .btn + .form-control-feedback {
  width: 36px;
  height: 36px;
  line-height: 36px; }

.has-feedback label ~ .form-control-feedback {
  top: 39px; }

.help-block {
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #aeaeaf; }

form-horizontal .radio, .form-horizontal .checkbox {
  min-height: 41px; }

.form-horizontal .form-group:before, .form-horizontal .form-group:after {
  content: " ";
  display: table; }

.form-horizontal .form-group:after {
  clear: both; }

.btn {
  display: inline-block;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 18px;
  line-height: 1.8888888889;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }

.btn-primary {
  color: #fff;
  background-color: #428bca;
  border-color: #357ebd; }

.btn-primary:hover, .btn-primary:focus, .btn-primary.focus, .btn-primary:active, .btn-primary.active, .open > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #3071a9;
  border-color: #285e8e; }

.btn-primary.disabled, .btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary.disabled:active, .btn-primary.disabled.active, .btn-primary[disabled], .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus, .btn-primary[disabled]:active, .btn-primary[disabled].active, fieldset[disabled] .btn-primary, fieldset[disabled] .btn-primary:hover, fieldset[disabled] .btn-primary:focus, fieldset[disabled] .btn-primary.focus, fieldset[disabled] .btn-primary:active, fieldset[disabled] .btn-primary.active {
  background-color: #428bca;
  border-color: #357ebd; }

.btn-primary .badge {
  color: #428bca;
  background-color: #fff; }

.btn-link {
  color: #888888;
  font-weight: normal;
  border-radius: 0; }

.btn-link:hover, .btn-link:focus {
  color: #626262;
  text-decoration: underline;
  background-color: transparent; }

.btn-lg, .btn-group-lg > .btn {
  padding: 10px 16px;
  font-size: 23px;
  line-height: 1.33;
  border-radius: 6px; }

.btn-sm, .btn-group-sm > .btn {
  padding: 5px 10px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 3px; }

.btn-xs, .btn-group-xs > .btn {
  padding: 1px 5px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 3px; }

.collapse {
  display: none;
  visibility: hidden; }

.collapse.in {
  display: block;
  visibility: visible; }

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition-property: height, visibility;
  transition-property: height, visibility;
  -webkit-transition-duration: 0.35s;
  transition-duration: 0.35s;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease; }

.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent; }

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 18px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box; }

.dropdown-menu .divider {
  height: 1px;
  margin: 16px 0;
  overflow: hidden;
  background-color: #e5e5e5; }

.dropdown-menu > li > a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: normal;
  line-height: 1.8888888889;
  color: #333333;
  white-space: nowrap; }

.dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  background-color: #428bca; }

.dropdown-header {
  display: block;
  padding: 3px 20px;
  font-size: 16px;
  line-height: 1.8888888889;
  color: #777777;
  white-space: nowrap; }

@media (min-width: 768px) {
  .navbar-right .dropdown-menu {
    right: inherit;
    left: inherit; }
  .navbar-right .dropdown-menu-left {
    left: inherit;
    right: inherit; } }

.btn-toolbar:before, .btn-toolbar:after {
  content: " ";
  display: table; }

.btn-toolbar:after {
  clear: both; }

.btn-lg .caret, .btn-group-lg > .btn .caret {
  border-width: 5px 5px 0;
  border-bottom-width: 0; }

.dropup .btn-lg .caret, .dropup .btn-group-lg > .btn .caret {
  border-width: 0 5px 5px; }

.btn-group-vertical > .btn-group:before, .btn-group-vertical > .btn-group:after {
  content: " ";
  display: table; }

.btn-group-vertical > .btn-group:after {
  clear: both; }

.input-lg, .input-group-lg > .form-control, .input-group-lg > .input-group-addon, .input-group-lg > .input-group-btn > .btn {
  height: 53px;
  padding: 10px 16px;
  font-size: 23px;
  line-height: 1.33;
  border-radius: 6px; }

select.input-lg, .input-group-lg > select.form-control, .input-group-lg > select.input-group-addon, .input-group-lg > .input-group-btn > select.btn {
  height: 53px;
  line-height: 53px; }

.form-group-lg .form-control {
  height: 53px;
  padding: 10px 16px;
  font-size: 23px;
  line-height: 1.33;
  border-radius: 6px; }

.form-group-lg select.form-control {
  height: 53px;
  line-height: 53px; }

.form-group-lg textarea.form-control, .form-group-lg select[multiple].form-control {
  height: auto; }

.form-group-lg .form-control-static {
  height: 53px;
  padding: 10px 16px;
  font-size: 23px;
  line-height: 1.33; }

.input-group-addon {
  padding: 6px 12px;
  font-size: 18px;
  font-weight: normal;
  line-height: 1;
  color: #555655;
  text-align: center;
  /*background-color: #eeeeee;*/
  border: 1px solid #ccc;
  border-left: 1px solid #fff !important;
  /*border-radius: 4px;*/ }

.input-group-addon.input-sm, .input-group-sm > .input-group-addon, .input-group-sm > .input-group-btn > .input-group-addon.btn {
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 3px; }

.input-group-addon.input-lg, .input-group-lg > .input-group-addon, .input-group-lg > .input-group-btn > .input-group-addon.btn {
  padding: 10px 16px;
  font-size: 23px;
  border-radius: 6px; }

.nav:before, .nav:after {
  content: " ";
  display: table; }

.nav:after {
  clear: both; }

.nav .open > a, .nav .open > a:hover, .nav .open > a:focus {
  background-color: #eeeeee;
  border-color: #888888; }

.nav .nav-divider {
  height: 1px;
  margin: 16px 0;
  overflow: hidden;
  background-color: #e5e5e5; }

.nav-tabs > li > a {
  margin-right: 2px;
  line-height: 1.8888888889;
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0; }

.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {
  color: #515251;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
  cursor: default; }

.nav-pills > li {
  float: left; }

.nav-pills > li > a {
  border-radius: 4px; }

.nav-pills > li + li {
  margin-left: 2px; }

.nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus {
  color: #fff;
  background-color: #428bca; }

.nav-stacked > li {
  float: none; }

.nav-stacked > li + li {
  margin-top: 2px;
  margin-left: 0; }

.nav-justified, .nav-tabs.nav-justified {
  width: 100%; }

.nav-justified > li, .nav-tabs.nav-justified > li {
  float: none; }

.nav-justified > li > a, .nav-tabs.nav-justified > li > a {
  text-align: center;
  margin-bottom: 5px; }

.nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto; }

.nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus {
  color: #fff;
  background-color: #428bca; }

.tab-content > .tab-pane {
  display: none;
  visibility: hidden; }

.tab-content > .active {
  display: block;
  visibility: visible; }

.navbar {
  position: relative;
  min-height: 0;
  margin-bottom: 0;
  border: 1px solid transparent; }

.navbar:before, .navbar:after {
  content: " ";
  display: table; }

.navbar:after {
  clear: both; }

.navbar-header:before, .navbar-header:after {
  content: " ";
  display: table; }

.navbar-header:after {
  clear: both; }

@media (min-width: 768px) {
  .navbar-header {
    float: none; } }

.navbar-collapse {
  overflow-x: inherit;
  padding-right: inherit;
  padding-left: inherit;
  border-top: inherit;
  box-shadow: inherit;
  -webkit-overflow-scrolling: inherit; }

.navbar-collapse:before, .navbar-collapse:after {
  content: " ";
  display: table; }

.navbar-collapse:after {
  clear: both; }

@media (min-width: 768px) {
  .navbar-collapse {
    width: inherit;
    border-top: inherit;
    box-shadow: inherit; }
  .navbar-collapse.collapse {
    display: inherit;
    /*visibility: inherit;*/
    height: inherit;
    padding-bottom: inherit;
    overflow: inherit; }
  .navbar-collapse.in {
    overflow-y: inherit; }
  .navbar-fixed-top .navbar-collapse, .navbar-static-top .navbar-collapse, .navbar-fixed-bottom .navbar-collapse {
    padding-left: inherit;
    padding-right: inherit; }
  .navbar-fixed-top .navbar-collapse, .navbar-fixed-bottom .navbar-collapse {
    max-height: inherit; } }

@media (min-width: 768px) {
  .container > .navbar-header, .container > .navbar-collapse, .container-fluid > .navbar-header, .container-fluid > .navbar-collapse {
    margin-right: 0;
    margin-left: inherit; } }

@media (min-width: 768px) {
  .navbar-static-top {
    border-radius: inherit; } }

.navbar-fixed-top, .navbar-fixed-bottom {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030; }

@media (min-width: 768px) {
  .navbar-fixed-top, .navbar-fixed-bottom {
    border-radius: inherit; } }

.navbar-brand {
  float: left;
  padding: -17px 15px;
  font-size: 23px;
  line-height: 34px;
  height: 0; }

.navbar-brand > img {
  display: block; }

@media (min-width: 768px) {
  .navbar > .container .navbar-brand, .navbar > .container-fluid .navbar-brand {
    margin-left: inherit; } }

.navbar-toggle {
  position: relative;
  float: right;
  margin-right: 15px;
  padding: 9px 10px;
  margin-top: -17px;
  margin-bottom: -17px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px; }

@media (min-width: 768px) {
  .navbar-toggle {
    display: inherit; } }

.navbar-nav {
  margin: -8.5px -15px; }

.navbar-nav > li > a {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 34px; }

@media (max-width: 768px) {
  .navbar-nav .open .dropdown-menu {
    position: inherit;
    float: inherit;
    width: inherit;
    margin-top: inherit;
    background-color: inherit;
    border: inherit;
    box-shadow: inherit; }
  .navbar-nav .open .dropdown-menu > li > a, .navbar-nav .open .dropdown-menu .dropdown-header {
    padding: inherit; }
  .navbar-nav .open .dropdown-menu > li > a {
    line-height: inherit; }
  .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-nav .open .dropdown-menu > li > a:focus {
    background-image: inherit; } }

@media (min-width: 768px) {
  .navbar-nav {
    float: inherit;
    margin: inherit; }
  .navbar-nav > li {
    float: inherit; }
  .navbar-nav > li > a {
    padding-top: 0;
    padding-bottom: 0; } }

.navbar-form {
  margin-left: -15px;
  margin-right: -15px;
  padding: 10px 15px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
  margin-top: -21px;
  margin-bottom: -21px; }

@media (max-width: 768px) {
  .navbar-form .form-group {
    margin-bottom: inherit; }
  .navbar-form .form-group:last-child {
    margin-bottom: inherit; } }

@media (min-width: 768px) {
  .navbar-form {
    width: inherit;
    border: inherit;
    margin-left: inherit;
    margin-right: inherit;
    padding-top: inherit;
    padding-bottom: inherit;
    -webkit-box-shadow: inherit;
    box-shadow: inherit; }
  .navbar.navbar-default {
    max-height: 65px; }
  .navbar.navbar-default.header-nav-visible {
    max-height: none; } }

.nav-li {
  background-color: #ebeaed; }

.nav-li.active {
  background-color: #90bf3e; }

.navbar-btn {
  margin-top: -21px;
  margin-bottom: -21px; }

.navbar-btn.btn-sm, .btn-group-sm > .navbar-btn.btn {
  margin-top: -18px;
  margin-bottom: -18px; }

.navbar-btn.btn-xs, .btn-group-xs > .navbar-btn.btn {
  margin-top: -11px;
  margin-bottom: -11px; }

.navbar-text {
  margin-top: -17px;
  margin-bottom: -17px; }

@media (min-width: 768px) {
  .navbar-left {
    float: inherit; }
  .navbar-right {
    float: inherit;
    margin-right: inherit; }
  .navbar-right ~ .navbar-right {
    margin-right: inherit; } }

.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {
  color: #cfcece;
  background-color: transparent; }

.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {
  background-color: transparent; }

@media (max-width: 768px) {
  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: inherit; }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
    color: inherit;
    background-color: inherit; }
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: inherit;
    background-color: inherit; }
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: inherit;
    background-color: inherit; } }

.navbar-inverse {
  background-color: #222;
  border-color: #090909; }

.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus {
  color: #fff;
  background-color: #090909; }

.navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:hover, .navbar-inverse .navbar-nav > .open > a:focus {
  background-color: #090909;
  color: #fff; }

@media (max-width: 768px) {
  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {
    border-color: inherit; }
  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
    background-color: inherit; }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
    color: inherit; }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {
    color: inherit;
    background-color: inherit; }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: inherit;
    background-color: inherit; }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: inherit;
    background-color: inherit; } }

.breadcrumb {
  padding: 8px 15px;
  margin-bottom: 34px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px; }

.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 34px 0;
  border-radius: 4px; }

.pagination > li {
  display: inline; }

.pagination > li > a, .pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  line-height: 1.8888888889;
  text-decoration: none;
  color: #888888;
  background-color: #fff;
  border: 1px solid #ddd;
  margin-left: -1px; }

.pagination > li > a:hover, .pagination > li > a:focus, .pagination > li > span:hover, .pagination > li > span:focus {
  color: #626262;
  background-color: #eeeeee;
  border-color: #ddd; }

.pagination > .active > a, .pagination > .active > a:hover, .pagination > .active > a:focus, .pagination > .active > span, .pagination > .active > span:hover, .pagination > .active > span:focus {
  z-index: 2;
  color: #fff;
  background-color: #428bca;
  border-color: #428bca;
  cursor: default; }

.pagination > .disabled > span, .pagination > .disabled > span:hover, .pagination > .disabled > span:focus, .pagination > .disabled > a, .pagination > .disabled > a:hover, .pagination > .disabled > a:focus {
  color: #777777;
  background-color: #fff;
  border-color: #ddd;
  cursor: not-allowed; }

.pagination-lg > li > a, .pagination-lg > li > span {
  padding: 10px 16px;
  font-size: 23px; }

.pagination-sm > li > a, .pagination-sm > li > span {
  padding: 5px 10px;
  font-size: 16px; }

.pager {
  padding-left: 0;
  margin: 34px 0;
  list-style: none;
  text-align: center; }

.pager:before, .pager:after {
  content: " ";
  display: table; }

.pager:after {
  clear: both; }

.pager li {
  display: inline; }

.label {
  display: inline;
  padding: 0.2em 0.6em 0.3em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #505150;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25em; }

.label-primary {
  background-color: #428bca; }

.label-primary[href]:hover, .label-primary[href]:focus {
  background-color: #3071a9; }

.badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  line-height: 1;
  vertical-align: baseline;
  white-space: nowrap;
  text-align: center;
  background-color: #777777;
  border-radius: 10px; }

.list-group-item.active > .badge, .nav-pills > .active > a > .badge {
  color: #888888;
  background-color: #fff; }

.jumbotron p {
  margin-bottom: 15px;
  font-size: 27px;
  font-weight: 200; }

.jumbotron p {
  margin-bottom: 15px;
  font-size: 27px;
  font-weight: 200; }

.thumbnail {
  display: block;
  padding: 4px;
  margin-bottom: 34px;
  line-height: 1.8888888889;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: border 0.2s ease-in-out;
  -o-transition: border 0.2s ease-in-out;
  transition: border 0.2s ease-in-out; }

.thumbnail > img, .thumbnail a > img {
  display: block;
  max-width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto; }

.thumbnail .caption {
  padding: 9px;
  color: #6e6e6f; }

a.thumbnail:hover, a.thumbnail:focus, a.thumbnail.active {
  border-color: #888888; }

.alert {
  padding: 15px;
  margin-bottom: 34px;
  border: 1px solid transparent;
  border-radius: 4px; }

.progress {
  overflow: hidden;
  height: 34px;
  margin-bottom: 34px;
  background-color: #f5f5f5;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); }

.progress-bar {
  float: left;
  width: 0%;
  height: 100%;
  font-size: 16px;
  line-height: 34px;
  color: #fff;
  text-align: center;
  background-color: #428bca;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  -webkit-transition: width 0.6s ease;
  -o-transition: width 0.6s ease;
  transition: width 0.6s ease; }

.list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus {
  z-index: 2;
  color: #fff;
  background-color: #428bca;
  border-color: #428bca; }

.list-group-item.active .list-group-item-text, .list-group-item.active:hover .list-group-item-text, .list-group-item.active:focus .list-group-item-text {
  color: #e1edf7; }

.panel {
  margin-bottom: 34px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }

.panel-body:before, .panel-body:after {
  content: " ";
  display: table; }

.panel-body:after {
  clear: both; }

.panel-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 21px;
  color: inherit; }

.panel-group {
  margin-bottom: 34px; }

.panel-primary {
  border-color: #428bca; }

.panel-primary > .panel-heading {
  color: #fff;
  background-color: #428bca;
  border-color: #428bca; }

.panel-primary > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #428bca; }

.panel-primary > .panel-heading .badge {
  color: #428bca;
  background-color: #fff; }

.panel-primary > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #428bca; }

.close {
  float: right;
  font-size: 27px;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-shadow: 0 1px 0 #fff;
  /*opacity: 0.2;
  filter: alpha(opacity=20);*/
  opacity: inherit;
  filter: inherit; }

.modal {
  display: none;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  -webkit-overflow-scrolling: touch;
  outline: 0; }

.modal-backdrop {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: #000;
  z-index: 1; }

.modal-header {
  background-color: #90bf3e;
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
  min-height: 16.8888888889px; }

.modal-title {
  margin: 0;
  color: #fff;
  line-height: 1.8888888889; }

.modal-footer:before, .modal-footer:after {
  content: " ";
  display: table; }

.modal-footer:after {
  clear: both; }

@media (min-width: 1100px) {
  .modal-lg {
    width: 1024px !important; } }

.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  visibility: visible;
  font-family: 'Lato', Arial, sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.4;
  opacity: 0;
  filter: alpha(opacity=0); }

.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: none;
  max-width: 276px;
  padding: 1px;
  font-family: 'Lato', Arial, sans-serif;
  font-size: 18px;
  font-weight: normal;
  line-height: 1.8888888889;
  text-align: left;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  white-space: normal; }

.popover-title {
  margin: 0;
  padding: 8px 14px;
  font-size: 18px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-radius: 5px 5px 0 0; }

.carousel-inner > .item > img, .carousel-inner > .item > a > img {
  display: block;
  max-width: 100%;
  height: auto;
  line-height: 1; }

.clearfix:before, .clearfix:after {
  content: " ";
  display: table; }

.clearfix:after {
  clear: both; }

.hidden {
  display: none !important;
  visibility: hidden !important; }

@media (min-width: 992px) and (max-width: 1229px) {
  .visible-md {
    display: block !important; }
  table.visible-md {
    display: table; }
  tr.visible-md {
    display: table-row !important; }
  th.visible-md, td.visible-md {
    display: table-cell !important; } }

@media (min-width: 992px) and (max-width: 1229px) {
  .visible-md-block {
    display: block !important; } }

@media (min-width: 992px) and (max-width: 1229px) {
  .visible-md-inline {
    display: inline !important; } }

@media (min-width: 992px) and (max-width: 1229px) {
  .visible-md-inline-block {
    display: inline-block !important; } }

@media (min-width: 1230px) {
  .visible-lg {
    display: block !important; }
  table.visible-lg {
    display: table; }
  tr.visible-lg {
    display: table-row !important; }
  th.visible-lg, td.visible-lg {
    display: table-cell !important; } }

@media (min-width: 1230px) {
  .visible-lg-block {
    display: block !important; } }

@media (min-width: 1230px) {
  .visible-lg-inline {
    display: inline !important; } }

@media (min-width: 1230px) {
  .visible-lg-inline-block {
    display: inline-block !important; } }

@media (min-width: 992px) and (max-width: 1229px) {
  .hidden-md {
    display: none !important; } }

@media (min-width: 1230px) {
  .hidden-lg {
    display: none !important; } }

.visible-print {
  display: none !important; }

@media print {
  .visible-print {
    display: block !important; }
  table.visible-print {
    display: table; }
  tr.visible-print {
    display: table-row !important; }
  th.visible-print, td.visible-print {
    display: table-cell !important; } }

/*all animation keyframes and reusable classes will go here*/
@keyframes resize {
  0% {
    width: 70%;
    height: 120px; }
  25% {
    width: 40%;
    height: 180px; }
  75% {
    width: 100%;
    height: 270px; }
  100% {
    width: 70%;
    height: 120px; } }

@keyframes rotate-icon {
  100% {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -o-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d; } }

@keyframes ellipsis {
  to {
    width: 0.9em; } }

@-webkit-keyframes ellipsis {
  to {
    width: 0.9em; } }

/*keyframes are then required into their specific class style declaration. examples below:

.some-element {
  animation-name: resize;
  animation-duration: 4s;
  animation-iteration-count: infinite;
    }

OR 

.some-element {
    animation: resize 4s infinite
    }
*/
/*Checkbox checked animation, used in Purchase page*/
@-moz-keyframes checkmark-bottom {
  0% {
    height: 0; }
  100% {
    height: 27.5px; } }

@-webkit-keyframes checkmark-bottom {
  0% {
    height: 0; }
  100% {
    height: 27.5px; } }

/*controls length of bottom portion of checkmark*/
@keyframes checkmark-bottom {
  0% {
    height: 0; }
  100% {
    height: 27.5px; } }

/*controls length of top portion of checkmark*/
@keyframes checkmark-top {
  0% {
    height: 0; }
  50% {
    height: 0; }
  100% {
    height: 44px; } }

@-webkit-keyframes checkmark-top {
  0% {
    height: 0; }
  50% {
    height: 0; }
  100% {
    height: 44px; } }

@-moz-keyframes checkmark-top {
  0% {
    height: 0; }
  50% {
    height: 0; }
  100% {
    height: 44px; } }

@-moz-keyframes spin {
  from {
    -moz-transform: rotate(0deg); }
  to {
    -moz-transform: rotate(360deg); } }

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg); }
  to {
    -webkit-transform: rotate(360deg); } }

@keyframes spin {
  from {
    transform: rotate(0deg); }
  to {
    transform: rotate(360deg); } }

@keyframes menu {
  1% {
    transform: scale(1, 0.0395); }
  2% {
    transform: scale(1, 0.07772); }
  3% {
    transform: scale(1, 0.1148); }
  4% {
    transform: scale(1, 0.15074); }
  5% {
    transform: scale(1, 0.18558); }
  6% {
    transform: scale(1, 0.21933); }
  7% {
    transform: scale(1, 0.25202); }
  8% {
    transform: scale(1, 0.28368); }
  9% {
    transform: scale(1, 0.31432); }
  10% {
    transform: scale(1, 0.34397); }
  11% {
    transform: scale(1, 0.37264); }
  12% {
    transform: scale(1, 0.40036); }
  13% {
    transform: scale(1, 0.42716); }
  14% {
    transform: scale(1, 0.45305); }
  15% {
    transform: scale(1, 0.47805); }
  16% {
    transform: scale(1, 0.50218); }
  17% {
    transform: scale(1, 0.52546); }
  18% {
    transform: scale(1, 0.54792); }
  19% {
    transform: scale(1, 0.56958); }
  20% {
    transform: scale(1, 0.59044); }
  21% {
    transform: scale(1, 0.61054); }
  22% {
    transform: scale(1, 0.62989); }
  23% {
    transform: scale(1, 0.6485); }
  24% {
    transform: scale(1, 0.66641); }
  25% {
    transform: scale(1, 0.68363); }
  26% {
    transform: scale(1, 0.70016); }
  27% {
    transform: scale(1, 0.71605); }
  28% {
    transform: scale(1, 0.73129); }
  29% {
    transform: scale(1, 0.74591); }
  30% {
    transform: scale(1, 0.75992); }
  31% {
    transform: scale(1, 0.77335); }
  32% {
    transform: scale(1, 0.78621); }
  33% {
    transform: scale(1, 0.79851); }
  34% {
    transform: scale(1, 0.81027); }
  35% {
    transform: scale(1, 0.82151); }
  36% {
    transform: scale(1, 0.83224); }
  37% {
    transform: scale(1, 0.84249); }
  38% {
    transform: scale(1, 0.85225); }
  39% {
    transform: scale(1, 0.86156); }
  40% {
    transform: scale(1, 0.87041); }
  41% {
    transform: scale(1, 0.87884); }
  42% {
    transform: scale(1, 0.88685); }
  43% {
    transform: scale(1, 0.89445); }
  44% {
    transform: scale(1, 0.90166); }
  45% {
    transform: scale(1, 0.9085); }
  46% {
    transform: scale(1, 0.91498); }
  47% {
    transform: scale(1, 0.9211); }
  48% {
    transform: scale(1, 0.92689); }
  49% {
    transform: scale(1, 0.93235); }
  50% {
    transform: scale(1, 0.93751); }
  51% {
    transform: scale(1, 0.94236); }
  52% {
    transform: scale(1, 0.94692); }
  53% {
    transform: scale(1, 0.95121); }
  54% {
    transform: scale(1, 0.95523); }
  55% {
    transform: scale(1, 0.959); }
  56% {
    transform: scale(1, 0.96252); }
  57% {
    transform: scale(1, 0.96582); }
  58% {
    transform: scale(1, 0.96889); }
  59% {
    transform: scale(1, 0.97175); }
  60% {
    transform: scale(1, 0.9744); }
  61% {
    transform: scale(1, 0.97687); }
  62% {
    transform: scale(1, 0.97915); }
  63% {
    transform: scale(1, 0.98126); }
  64% {
    transform: scale(1, 0.98321); }
  65% {
    transform: scale(1, 0.985); }
  66% {
    transform: scale(1, 0.98664); }
  67% {
    transform: scale(1, 0.98814); }
  68% {
    transform: scale(1, 0.98952); }
  69% {
    transform: scale(1, 0.99077); }
  70% {
    transform: scale(1, 0.9919); }
  71% {
    transform: scale(1, 0.99293); }
  72% {
    transform: scale(1, 0.99385); }
  73% {
    transform: scale(1, 0.99469); }
  74% {
    transform: scale(1, 0.99543); }
  75% {
    transform: scale(1, 0.99609); }
  76% {
    transform: scale(1, 0.99668); }
  77% {
    transform: scale(1, 0.9972); }
  78% {
    transform: scale(1, 0.99766); }
  79% {
    transform: scale(1, 0.99806); }
  80% {
    transform: scale(1, 0.9984); }
  81% {
    transform: scale(1, 0.9987); }
  82% {
    transform: scale(1, 0.99895); }
  83% {
    transform: scale(1, 0.99916); }
  84% {
    transform: scale(1, 0.99934); }
  85% {
    transform: scale(1, 0.99949); }
  86% {
    transform: scale(1, 0.99962); }
  87% {
    transform: scale(1, 0.99971); }
  88% {
    transform: scale(1, 0.99979); }
  89% {
    transform: scale(1, 0.99985); }
  90% {
    transform: scale(1, 0.9999); }
  91% {
    transform: scale(1, 0.99993); }
  92% {
    transform: scale(1, 0.99996); }
  93% {
    transform: scale(1, 0.99998); }
  94% {
    transform: scale(1, 0.99999); }
  95% {
    transform: scale(1, 0.99999); }
  96% {
    transform: scale(1, 1.0); }
  97% {
    transform: scale(1, 1.0); }
  98% {
    transform: scale(1, 1.0); }
  99% {
    transform: scale(1, 1.0); }
  100% {
    transform: scale(1, 1); } }

@keyframes menuContent {
  1% {
    transform: scale(1, 25.31642); }
  2% {
    transform: scale(1, 12.86603); }
  3% {
    transform: scale(1, 8.71113); }
  4% {
    transform: scale(1, 6.63401); }
  5% {
    transform: scale(1, 5.38865); }
  6% {
    transform: scale(1, 4.55936); }
  7% {
    transform: scale(1, 3.9679); }
  8% {
    transform: scale(1, 3.52512); }
  9% {
    transform: scale(1, 3.18148); }
  10% {
    transform: scale(1, 2.90727); }
  11% {
    transform: scale(1, 2.68355); }
  12% {
    transform: scale(1, 2.49772); }
  13% {
    transform: scale(1, 2.34104); }
  14% {
    transform: scale(1, 2.20728); }
  15% {
    transform: scale(1, 2.09185); }
  16% {
    transform: scale(1, 1.99132); }
  17% {
    transform: scale(1, 1.90308); }
  18% {
    transform: scale(1, 1.82507); }
  19% {
    transform: scale(1, 1.75569); }
  20% {
    transform: scale(1, 1.69365); }
  21% {
    transform: scale(1, 1.6379); }
  22% {
    transform: scale(1, 1.58759); }
  23% {
    transform: scale(1, 1.54201); }
  24% {
    transform: scale(1, 1.50057); }
  25% {
    transform: scale(1, 1.46279); }
  26% {
    transform: scale(1, 1.42824); }
  27% {
    transform: scale(1, 1.39656); }
  28% {
    transform: scale(1, 1.36745); }
  29% {
    transform: scale(1, 1.34065); }
  30% {
    transform: scale(1, 1.31592); }
  31% {
    transform: scale(1, 1.29307); }
  32% {
    transform: scale(1, 1.27193); }
  33% {
    transform: scale(1, 1.25233); }
  34% {
    transform: scale(1, 1.23415); }
  35% {
    transform: scale(1, 1.21727); }
  36% {
    transform: scale(1, 1.20157); }
  37% {
    transform: scale(1, 1.18696); }
  38% {
    transform: scale(1, 1.17336); }
  39% {
    transform: scale(1, 1.16069); }
  40% {
    transform: scale(1, 1.14888); }
  41% {
    transform: scale(1, 1.13787); }
  42% {
    transform: scale(1, 1.12759); }
  43% {
    transform: scale(1, 1.118); }
  44% {
    transform: scale(1, 1.10906); }
  45% {
    transform: scale(1, 1.10071); }
  46% {
    transform: scale(1, 1.09292); }
  47% {
    transform: scale(1, 1.08565); }
  48% {
    transform: scale(1, 1.07888); }
  49% {
    transform: scale(1, 1.07255); }
  50% {
    transform: scale(1, 1.06666); }
  51% {
    transform: scale(1, 1.06117); }
  52% {
    transform: scale(1, 1.05605); }
  53% {
    transform: scale(1, 1.05129); }
  54% {
    transform: scale(1, 1.04687); }
  55% {
    transform: scale(1, 1.04276); }
  56% {
    transform: scale(1, 1.03894); }
  57% {
    transform: scale(1, 1.03539); }
  58% {
    transform: scale(1, 1.03211); }
  59% {
    transform: scale(1, 1.02908); }
  60% {
    transform: scale(1, 1.02627); }
  61% {
    transform: scale(1, 1.02368); }
  62% {
    transform: scale(1, 1.02129); }
  63% {
    transform: scale(1, 1.0191); }
  64% {
    transform: scale(1, 1.01708); }
  65% {
    transform: scale(1, 1.01523); }
  66% {
    transform: scale(1, 1.01354); }
  67% {
    transform: scale(1, 1.012); }
  68% {
    transform: scale(1, 1.0106); }
  69% {
    transform: scale(1, 1.00932); }
  70% {
    transform: scale(1, 1.00817); }
  71% {
    transform: scale(1, 1.00712); }
  72% {
    transform: scale(1, 1.00618); }
  73% {
    transform: scale(1, 1.00534); }
  74% {
    transform: scale(1, 1.00459); }
  75% {
    transform: scale(1, 1.00392); }
  76% {
    transform: scale(1, 1.00333); }
  77% {
    transform: scale(1, 1.00281); }
  78% {
    transform: scale(1, 1.00235); }
  79% {
    transform: scale(1, 1.00195); }
  80% {
    transform: scale(1, 1.0016); }
  81% {
    transform: scale(1, 1.0013); }
  82% {
    transform: scale(1, 1.00105); }
  83% {
    transform: scale(1, 1.00084); }
  84% {
    transform: scale(1, 1.00066); }
  85% {
    transform: scale(1, 1.00051); }
  86% {
    transform: scale(1, 1.00038); }
  87% {
    transform: scale(1, 1.00029); }
  88% {
    transform: scale(1, 1.00021); }
  89% {
    transform: scale(1, 1.00015); }
  90% {
    transform: scale(1, 1.0001); }
  91% {
    transform: scale(1, 1.00007); }
  92% {
    transform: scale(1, 1.00004); }
  93% {
    transform: scale(1, 1.00002); }
  94% {
    transform: scale(1, 1.00001); }
  95% {
    transform: scale(1, 1.00001); }
  96% {
    transform: scale(1, 1.0); }
  97% {
    transform: scale(1, 1.0); }
  98% {
    transform: scale(1, 1.0); }
  99% {
    transform: scale(1, 1.0); }
  100% {
    transform: scale(1, 1); } }

@keyframes linear-menu {
  1% {
    transform: scale(1, 0.01); }
  2% {
    transform: scale(1, 0.02); }
  3% {
    transform: scale(1, 0.03); }
  4% {
    transform: scale(1, 0.04); }
  5% {
    transform: scale(1, 0.05); }
  6% {
    transform: scale(1, 0.06); }
  7% {
    transform: scale(1, 0.07); }
  8% {
    transform: scale(1, 0.08); }
  9% {
    transform: scale(1, 0.09); }
  10% {
    transform: scale(1, 0.1); }
  11% {
    transform: scale(1, 0.11); }
  12% {
    transform: scale(1, 0.12); }
  13% {
    transform: scale(1, 0.13); }
  14% {
    transform: scale(1, 0.14); }
  15% {
    transform: scale(1, 0.15); }
  16% {
    transform: scale(1, 0.16); }
  17% {
    transform: scale(1, 0.17); }
  18% {
    transform: scale(1, 0.18); }
  19% {
    transform: scale(1, 0.19); }
  20% {
    transform: scale(1, 0.2); }
  21% {
    transform: scale(1, 0.21); }
  22% {
    transform: scale(1, 0.22); }
  23% {
    transform: scale(1, 0.23); }
  24% {
    transform: scale(1, 0.24); }
  25% {
    transform: scale(1, 0.25); }
  26% {
    transform: scale(1, 0.26); }
  27% {
    transform: scale(1, 0.27); }
  28% {
    transform: scale(1, 0.28); }
  29% {
    transform: scale(1, 0.29); }
  30% {
    transform: scale(1, 0.3); }
  31% {
    transform: scale(1, 0.31); }
  32% {
    transform: scale(1, 0.32); }
  33% {
    transform: scale(1, 0.33); }
  34% {
    transform: scale(1, 0.34); }
  35% {
    transform: scale(1, 0.35); }
  36% {
    transform: scale(1, 0.36); }
  37% {
    transform: scale(1, 0.37); }
  38% {
    transform: scale(1, 0.38); }
  39% {
    transform: scale(1, 0.39); }
  40% {
    transform: scale(1, 0.4); }
  41% {
    transform: scale(1, 0.41); }
  42% {
    transform: scale(1, 0.42); }
  43% {
    transform: scale(1, 0.43); }
  44% {
    transform: scale(1, 0.44); }
  45% {
    transform: scale(1, 0.45); }
  46% {
    transform: scale(1, 0.46); }
  47% {
    transform: scale(1, 0.47); }
  48% {
    transform: scale(1, 0.48); }
  49% {
    transform: scale(1, 0.49); }
  50% {
    transform: scale(1, 0.5); }
  51% {
    transform: scale(1, 0.51); }
  52% {
    transform: scale(1, 0.52); }
  53% {
    transform: scale(1, 0.53); }
  54% {
    transform: scale(1, 0.54); }
  55% {
    transform: scale(1, 0.55); }
  56% {
    transform: scale(1, 0.56); }
  57% {
    transform: scale(1, 0.57); }
  58% {
    transform: scale(1, 0.58); }
  59% {
    transform: scale(1, 0.59); }
  60% {
    transform: scale(1, 0.6); }
  61% {
    transform: scale(1, 0.61); }
  62% {
    transform: scale(1, 0.62); }
  63% {
    transform: scale(1, 0.63); }
  64% {
    transform: scale(1, 0.64); }
  65% {
    transform: scale(1, 0.65); }
  66% {
    transform: scale(1, 0.66); }
  67% {
    transform: scale(1, 0.67); }
  68% {
    transform: scale(1, 0.68); }
  69% {
    transform: scale(1, 0.69); }
  70% {
    transform: scale(1, 0.7); }
  71% {
    transform: scale(1, 0.71); }
  72% {
    transform: scale(1, 0.72); }
  73% {
    transform: scale(1, 0.73); }
  74% {
    transform: scale(1, 0.74); }
  75% {
    transform: scale(1, 0.75); }
  76% {
    transform: scale(1, 0.76); }
  77% {
    transform: scale(1, 0.77); }
  78% {
    transform: scale(1, 0.78); }
  79% {
    transform: scale(1, 0.79); }
  80% {
    transform: scale(1, 0.8); }
  81% {
    transform: scale(1, 0.81); }
  82% {
    transform: scale(1, 0.82); }
  83% {
    transform: scale(1, 0.83); }
  84% {
    transform: scale(1, 0.84); }
  85% {
    transform: scale(1, 0.85); }
  86% {
    transform: scale(1, 0.86); }
  87% {
    transform: scale(1, 0.87); }
  88% {
    transform: scale(1, 0.88); }
  89% {
    transform: scale(1, 0.89); }
  90% {
    transform: scale(1, 0.9); }
  91% {
    transform: scale(1, 0.91); }
  92% {
    transform: scale(1, 0.92); }
  93% {
    transform: scale(1, 0.93); }
  94% {
    transform: scale(1, 0.94); }
  95% {
    transform: scale(1, 0.95); }
  96% {
    transform: scale(1, 0.96); }
  97% {
    transform: scale(1, 0.97); }
  98% {
    transform: scale(1, 0.98); }
  99% {
    transform: scale(1, 0.99); }
  100% {
    transform: scale(1, 1); } }

@keyframes linear-menu-content {
  1% {
    transform: scale(1, 100); }
  2% {
    transform: scale(1, 50); }
  3% {
    transform: scale(1, 33.33333); }
  4% {
    transform: scale(1, 25); }
  5% {
    transform: scale(1, 20); }
  6% {
    transform: scale(1, 16.66667); }
  7% {
    transform: scale(1, 14.28571); }
  8% {
    transform: scale(1, 12.5); }
  9% {
    transform: scale(1, 11.11111); }
  10% {
    transform: scale(1, 10); }
  11% {
    transform: scale(1, 9.09091); }
  12% {
    transform: scale(1, 8.33333); }
  13% {
    transform: scale(1, 7.69231); }
  14% {
    transform: scale(1, 7.14286); }
  15% {
    transform: scale(1, 6.66667); }
  16% {
    transform: scale(1, 6.25); }
  17% {
    transform: scale(1, 5.88235); }
  18% {
    transform: scale(1, 5.55556); }
  19% {
    transform: scale(1, 5.26316); }
  20% {
    transform: scale(1, 5); }
  21% {
    transform: scale(1, 4.7619); }
  22% {
    transform: scale(1, 4.54545); }
  23% {
    transform: scale(1, 4.34783); }
  24% {
    transform: scale(1, 4.16667); }
  25% {
    transform: scale(1, 4); }
  26% {
    transform: scale(1, 3.84615); }
  27% {
    transform: scale(1, 3.7037); }
  28% {
    transform: scale(1, 3.57143); }
  29% {
    transform: scale(1, 3.44828); }
  30% {
    transform: scale(1, 3.33333); }
  31% {
    transform: scale(1, 3.22581); }
  32% {
    transform: scale(1, 3.125); }
  33% {
    transform: scale(1, 3.0303); }
  34% {
    transform: scale(1, 2.94118); }
  35% {
    transform: scale(1, 2.85714); }
  36% {
    transform: scale(1, 2.77778); }
  37% {
    transform: scale(1, 2.7027); }
  38% {
    transform: scale(1, 2.63158); }
  39% {
    transform: scale(1, 2.5641); }
  40% {
    transform: scale(1, 2.5); }
  41% {
    transform: scale(1, 2.43902); }
  42% {
    transform: scale(1, 2.38095); }
  43% {
    transform: scale(1, 2.32558); }
  44% {
    transform: scale(1, 2.27273); }
  45% {
    transform: scale(1, 2.22222); }
  46% {
    transform: scale(1, 2.17391); }
  47% {
    transform: scale(1, 2.12766); }
  48% {
    transform: scale(1, 2.08333); }
  49% {
    transform: scale(1, 2.04082); }
  50% {
    transform: scale(1, 2); }
  51% {
    transform: scale(1, 1.96078); }
  52% {
    transform: scale(1, 1.92308); }
  53% {
    transform: scale(1, 1.88679); }
  54% {
    transform: scale(1, 1.85185); }
  55% {
    transform: scale(1, 1.81818); }
  56% {
    transform: scale(1, 1.78571); }
  57% {
    transform: scale(1, 1.75439); }
  58% {
    transform: scale(1, 1.72414); }
  59% {
    transform: scale(1, 1.69492); }
  60% {
    transform: scale(1, 1.66667); }
  61% {
    transform: scale(1, 1.63934); }
  62% {
    transform: scale(1, 1.6129); }
  63% {
    transform: scale(1, 1.5873); }
  64% {
    transform: scale(1, 1.5625); }
  65% {
    transform: scale(1, 1.53846); }
  66% {
    transform: scale(1, 1.51515); }
  67% {
    transform: scale(1, 1.49254); }
  68% {
    transform: scale(1, 1.47059); }
  69% {
    transform: scale(1, 1.44928); }
  70% {
    transform: scale(1, 1.42857); }
  71% {
    transform: scale(1, 1.40845); }
  72% {
    transform: scale(1, 1.38889); }
  73% {
    transform: scale(1, 1.36986); }
  74% {
    transform: scale(1, 1.35135); }
  75% {
    transform: scale(1, 1.33333); }
  76% {
    transform: scale(1, 1.31579); }
  77% {
    transform: scale(1, 1.2987); }
  78% {
    transform: scale(1, 1.28205); }
  79% {
    transform: scale(1, 1.26582); }
  80% {
    transform: scale(1, 1.25); }
  81% {
    transform: scale(1, 1.23457); }
  82% {
    transform: scale(1, 1.21951); }
  83% {
    transform: scale(1, 1.20482); }
  84% {
    transform: scale(1, 1.19048); }
  85% {
    transform: scale(1, 1.17647); }
  86% {
    transform: scale(1, 1.16279); }
  87% {
    transform: scale(1, 1.14943); }
  88% {
    transform: scale(1, 1.13636); }
  89% {
    transform: scale(1, 1.1236); }
  90% {
    transform: scale(1, 1.11111); }
  91% {
    transform: scale(1, 1.0989); }
  92% {
    transform: scale(1, 1.08696); }
  93% {
    transform: scale(1, 1.07527); }
  94% {
    transform: scale(1, 1.06383); }
  95% {
    transform: scale(1, 1.05263); }
  96% {
    transform: scale(1, 1.04167); }
  97% {
    transform: scale(1, 1.03093); }
  98% {
    transform: scale(1, 1.02041); }
  99% {
    transform: scale(1, 1.0101); }
  100% {
    transform: scale(1, 1); } }

@keyframes ease-in-out-menu {
  1% {
    transform: scale(1, 0.0001); }
  2% {
    transform: scale(1, 0.00042); }
  3% {
    transform: scale(1, 0.00096); }
  4% {
    transform: scale(1, 0.00173); }
  5% {
    transform: scale(1, 0.00276); }
  6% {
    transform: scale(1, 0.00406); }
  7% {
    transform: scale(1, 0.00563); }
  8% {
    transform: scale(1, 0.0075); }
  9% {
    transform: scale(1, 0.00969); }
  10% {
    transform: scale(1, 0.0122); }
  11% {
    transform: scale(1, 0.01505); }
  12% {
    transform: scale(1, 0.01826); }
  13% {
    transform: scale(1, 0.02184); }
  14% {
    transform: scale(1, 0.02582); }
  15% {
    transform: scale(1, 0.0302); }
  16% {
    transform: scale(1, 0.03501); }
  17% {
    transform: scale(1, 0.04026); }
  18% {
    transform: scale(1, 0.04597); }
  19% {
    transform: scale(1, 0.05215); }
  20% {
    transform: scale(1, 0.05882); }
  21% {
    transform: scale(1, 0.066); }
  22% {
    transform: scale(1, 0.07369); }
  23% {
    transform: scale(1, 0.08191); }
  24% {
    transform: scale(1, 0.09068); }
  25% {
    transform: scale(1, 0.1); }
  26% {
    transform: scale(1, 0.10988); }
  27% {
    transform: scale(1, 0.12034); }
  28% {
    transform: scale(1, 0.13137); }
  29% {
    transform: scale(1, 0.14298); }
  30% {
    transform: scale(1, 0.15517); }
  31% {
    transform: scale(1, 0.16795); }
  32% {
    transform: scale(1, 0.1813); }
  33% {
    transform: scale(1, 0.19523); }
  34% {
    transform: scale(1, 0.20972); }
  35% {
    transform: scale(1, 0.22477); }
  36% {
    transform: scale(1, 0.24036); }
  37% {
    transform: scale(1, 0.25646); }
  38% {
    transform: scale(1, 0.27307); }
  39% {
    transform: scale(1, 0.29016); }
  40% {
    transform: scale(1, 0.30769); }
  41% {
    transform: scale(1, 0.32565); }
  42% {
    transform: scale(1, 0.34399); }
  43% {
    transform: scale(1, 0.36269); }
  44% {
    transform: scale(1, 0.3817); }
  45% {
    transform: scale(1, 0.40099); }
  46% {
    transform: scale(1, 0.42051); }
  47% {
    transform: scale(1, 0.44022); }
  48% {
    transform: scale(1, 0.46006); }
  49% {
    transform: scale(1, 0.48001); }
  50% {
    transform: scale(1, 0.5); }
  51% {
    transform: scale(1, 0.51999); }
  52% {
    transform: scale(1, 0.53994); }
  53% {
    transform: scale(1, 0.55978); }
  54% {
    transform: scale(1, 0.57949); }
  55% {
    transform: scale(1, 0.59901); }
  56% {
    transform: scale(1, 0.6183); }
  57% {
    transform: scale(1, 0.63731); }
  58% {
    transform: scale(1, 0.65601); }
  59% {
    transform: scale(1, 0.67435); }
  60% {
    transform: scale(1, 0.69231); }
  61% {
    transform: scale(1, 0.70984); }
  62% {
    transform: scale(1, 0.72693); }
  63% {
    transform: scale(1, 0.74354); }
  64% {
    transform: scale(1, 0.75964); }
  65% {
    transform: scale(1, 0.77523); }
  66% {
    transform: scale(1, 0.79028); }
  67% {
    transform: scale(1, 0.80477); }
  68% {
    transform: scale(1, 0.8187); }
  69% {
    transform: scale(1, 0.83205); }
  70% {
    transform: scale(1, 0.84483); }
  71% {
    transform: scale(1, 0.85702); }
  72% {
    transform: scale(1, 0.86863); }
  73% {
    transform: scale(1, 0.87966); }
  74% {
    transform: scale(1, 0.89012); }
  75% {
    transform: scale(1, 0.9); }
  76% {
    transform: scale(1, 0.90932); }
  77% {
    transform: scale(1, 0.91809); }
  78% {
    transform: scale(1, 0.92631); }
  79% {
    transform: scale(1, 0.934); }
  80% {
    transform: scale(1, 0.94118); }
  81% {
    transform: scale(1, 0.94785); }
  82% {
    transform: scale(1, 0.95403); }
  83% {
    transform: scale(1, 0.95974); }
  84% {
    transform: scale(1, 0.96499); }
  85% {
    transform: scale(1, 0.9698); }
  86% {
    transform: scale(1, 0.97418); }
  87% {
    transform: scale(1, 0.97816); }
  88% {
    transform: scale(1, 0.98174); }
  89% {
    transform: scale(1, 0.98495); }
  90% {
    transform: scale(1, 0.9878); }
  91% {
    transform: scale(1, 0.99031); }
  92% {
    transform: scale(1, 0.9925); }
  93% {
    transform: scale(1, 0.99437); }
  94% {
    transform: scale(1, 0.99594); }
  95% {
    transform: scale(1, 0.99724); }
  96% {
    transform: scale(1, 0.99827); }
  97% {
    transform: scale(1, 0.99904); }
  98% {
    transform: scale(1, 0.99958); }
  99% {
    transform: scale(1, 0.9999); }
  100% {
    transform: scale(1, 1); } }

@keyframes ease-in-out-menu-content {
  1% {
    transform: scale(1, 9802); }
  2% {
    transform: scale(1, 2402); }
  3% {
    transform: scale(1, 1046.44444); }
  4% {
    transform: scale(1, 577); }
  5% {
    transform: scale(1, 362); }
  6% {
    transform: scale(1, 246.44444); }
  7% {
    transform: scale(1, 177.5102); }
  8% {
    transform: scale(1, 133.25); }
  9% {
    transform: scale(1, 103.23457); }
  10% {
    transform: scale(1, 82); }
  11% {
    transform: scale(1, 66.46281); }
  12% {
    transform: scale(1, 54.77778); }
  13% {
    transform: scale(1, 45.78698); }
  14% {
    transform: scale(1, 38.73469); }
  15% {
    transform: scale(1, 33.11111); }
  16% {
    transform: scale(1, 28.5625); }
  17% {
    transform: scale(1, 24.83737); }
  18% {
    transform: scale(1, 21.75309); }
  19% {
    transform: scale(1, 19.17452); }
  20% {
    transform: scale(1, 17); }
  21% {
    transform: scale(1, 15.15193); }
  22% {
    transform: scale(1, 13.57025); }
  23% {
    transform: scale(1, 12.20794); }
  24% {
    transform: scale(1, 11.02778); }
  25% {
    transform: scale(1, 10); }
  26% {
    transform: scale(1, 9.10059); }
  27% {
    transform: scale(1, 8.31001); }
  28% {
    transform: scale(1, 7.61224); }
  29% {
    transform: scale(1, 6.99405); }
  30% {
    transform: scale(1, 6.44444); }
  31% {
    transform: scale(1, 5.95421); }
  32% {
    transform: scale(1, 5.51563); }
  33% {
    transform: scale(1, 5.12213); }
  34% {
    transform: scale(1, 4.76817); }
  35% {
    transform: scale(1, 4.44898); }
  36% {
    transform: scale(1, 4.16049); }
  37% {
    transform: scale(1, 3.8992); }
  38% {
    transform: scale(1, 3.66205); }
  39% {
    transform: scale(1, 3.44642); }
  40% {
    transform: scale(1, 3.25); }
  41% {
    transform: scale(1, 3.07079); }
  42% {
    transform: scale(1, 2.90703); }
  43% {
    transform: scale(1, 2.75717); }
  44% {
    transform: scale(1, 2.61983); }
  45% {
    transform: scale(1, 2.49383); }
  46% {
    transform: scale(1, 2.37807); }
  47% {
    transform: scale(1, 2.27162); }
  48% {
    transform: scale(1, 2.17361); }
  49% {
    transform: scale(1, 2.0833); }
  50% {
    transform: scale(1, 2); }
  51% {
    transform: scale(1, 1.92311); }
  52% {
    transform: scale(1, 1.85207); }
  53% {
    transform: scale(1, 1.7864); }
  54% {
    transform: scale(1, 1.72565); }
  55% {
    transform: scale(1, 1.66942); }
  56% {
    transform: scale(1, 1.61735); }
  57% {
    transform: scale(1, 1.5691); }
  58% {
    transform: scale(1, 1.52438); }
  59% {
    transform: scale(1, 1.48291); }
  60% {
    transform: scale(1, 1.44444); }
  61% {
    transform: scale(1, 1.40876); }
  62% {
    transform: scale(1, 1.37565); }
  63% {
    transform: scale(1, 1.34492); }
  64% {
    transform: scale(1, 1.31641); }
  65% {
    transform: scale(1, 1.28994); }
  66% {
    transform: scale(1, 1.26538); }
  67% {
    transform: scale(1, 1.24259); }
  68% {
    transform: scale(1, 1.22145); }
  69% {
    transform: scale(1, 1.20185); }
  70% {
    transform: scale(1, 1.18367); }
  71% {
    transform: scale(1, 1.16683); }
  72% {
    transform: scale(1, 1.15123); }
  73% {
    transform: scale(1, 1.1368); }
  74% {
    transform: scale(1, 1.12345); }
  75% {
    transform: scale(1, 1.11111); }
  76% {
    transform: scale(1, 1.09972); }
  77% {
    transform: scale(1, 1.08922); }
  78% {
    transform: scale(1, 1.07955); }
  79% {
    transform: scale(1, 1.07066); }
  80% {
    transform: scale(1, 1.0625); }
  81% {
    transform: scale(1, 1.05502); }
  82% {
    transform: scale(1, 1.04819); }
  83% {
    transform: scale(1, 1.04195); }
  84% {
    transform: scale(1, 1.03628); }
  85% {
    transform: scale(1, 1.03114); }
  86% {
    transform: scale(1, 1.0265); }
  87% {
    transform: scale(1, 1.02233); }
  88% {
    transform: scale(1, 1.0186); }
  89% {
    transform: scale(1, 1.01528); }
  90% {
    transform: scale(1, 1.01235); }
  91% {
    transform: scale(1, 1.00978); }
  92% {
    transform: scale(1, 1.00756); }
  93% {
    transform: scale(1, 1.00567); }
  94% {
    transform: scale(1, 1.00407); }
  95% {
    transform: scale(1, 1.00277); }
  96% {
    transform: scale(1, 1.00174); }
  97% {
    transform: scale(1, 1.00096); }
  98% {
    transform: scale(1, 1.00042); }
  99% {
    transform: scale(1, 1.0001); }
  100% {
    transform: scale(1, 1); } }

@keyframes shake {
  0% {
    transform: translateX(10px); }
  25% {
    transform: translateX(-10px); }
  50% {
    transform: translateX(10px); }
  75% {
    transform: translateX(-10px); }
  100% {
    transform: translateX(0); } }

@keyframes ellipsis-1 {
  0% {
    opacity: 0; }
  20% {
    opacity: 1; }
  80% {
    opacity: 1; }
  100% {
    opacity: 0; } }

@keyframes ellipsis-2 {
  0% {
    opacity: 0; }
  20% {
    opacity: 0; }
  40% {
    opacity: 1; }
  80% {
    opacity: 1; }
  100% {
    opacity: 0; } }

@keyframes ellipsis-3 {
  0% {
    opacity: 0; }
  40% {
    opacity: 0; }
  60% {
    opacity: 1; }
  80% {
    opacity: 1; }
  100% {
    opacity: 0; } }

/*This sheet imports all other common modules and serves as a base reference, so that all modules can be brought into any stylesheet with a single import statement.*/
/*  
    For use in sketch, download "sketch-palettes" plugin: https://github.com/andrewfiorillo/sketch-palettes
    Load this palette: https://www.dropbox.com/s/8ipa5kei755nq3k/swyfft-document-colors.sketchpalette?dl=0
    Visual style guide: https://www.dropbox.com/s/oeize3nk1ruvaup/01-base-palette.png?dl=0
*/
/* Greens */
/* Neutrals */
/* ui element colors */
/* 
    note: 
    - numbers go from brightest (1) to darkest (3) 
    - grays all have same hue + saturation but lightness varies on HSL scale 
*/
/*
    11/9/16: old variables added back so code doesn't break on current site.  CB to find all, replace with new variables names and delete from this file.
*/
/*container for modals to be used with React-Bootstrap modals*/
/*  
    For use in sketch, download "sketch-palettes" plugin: https://github.com/andrewfiorillo/sketch-palettes
    Load this palette: https://www.dropbox.com/s/8ipa5kei755nq3k/swyfft-document-colors.sketchpalette?dl=0
    Visual style guide: https://www.dropbox.com/s/oeize3nk1ruvaup/01-base-palette.png?dl=0
*/
/* Greens */
/* Neutrals */
/* ui element colors */
/* 
    note: 
    - numbers go from brightest (1) to darkest (3) 
    - grays all have same hue + saturation but lightness varies on HSL scale 
*/
/*
    11/9/16: old variables added back so code doesn't break on current site.  CB to find all, replace with new variables names and delete from this file.
*/
/*
    Visual Style Guide: https://www.dropbox.com/s/5w88x69rullg6h7/02-layout.png?dl=0
*/
/* display text - bubble preview font size */
/* large headers, page level */
/* mid headers, page level */
/* small-mid headers, page level */
/* small headers, section level */
/* body copy */
/* subtext, footnotes */
/* common transitions slowest (1) to fastest (3) */
/* cubic bezier functions for rc-tooltip animation timing */
.bank-name-bs .bank-name-autocomplete-bs, .bank-name-bs .selector, .autocomplete .bank-name-autocomplete-bs, .autocomplete .selector {
  position: relative;
  width: 100%; }
  .bank-name-bs .bank-name-autocomplete-bs > div, .bank-name-bs .selector > div, .autocomplete .bank-name-autocomplete-bs > div, .autocomplete .selector > div {
    position: absolute;
    z-index: 2;
    top: 0;
    width: 100%;
    max-height: 400px;
    overflow-y: scroll;
    border: solid 2px #dbe6c6;
    border-top: none;
    background: white;
    transition: height 350ms ease-in-out; }
    .bank-name-bs .bank-name-autocomplete-bs > div div, .bank-name-bs .selector > div div, .autocomplete .bank-name-autocomplete-bs > div div, .autocomplete .selector > div div {
      box-sizing: border-box;
      padding: 10px 15px;
      width: 100%;
      cursor: pointer; }
      .bank-name-bs .bank-name-autocomplete-bs > div div:hover, .bank-name-bs .selector > div div:hover, .autocomplete .bank-name-autocomplete-bs > div div:hover, .autocomplete .selector > div div:hover {
        background: #F8F8F8; }
      .bank-name-bs .bank-name-autocomplete-bs > div div:first-child, .bank-name-bs .selector > div div:first-child, .autocomplete .bank-name-autocomplete-bs > div div:first-child, .autocomplete .selector > div div:first-child {
        border-top: none; }
      .bank-name-bs .bank-name-autocomplete-bs > div div span, .bank-name-bs .selector > div div span, .autocomplete .bank-name-autocomplete-bs > div div span, .autocomplete .selector > div div span {
        display: block; }
        .bank-name-bs .bank-name-autocomplete-bs > div div span.company-name, .bank-name-bs .selector > div div span.company-name, .autocomplete .bank-name-autocomplete-bs > div div span.company-name, .autocomplete .selector > div div span.company-name {
          font-size: 16px;
          font-weight: bold;
          text-transform: uppercase; }
  .bank-name-bs .bank-name-autocomplete-bs.autocomplete-hidden > div, .bank-name-bs .selector.autocomplete-hidden > div, .autocomplete .bank-name-autocomplete-bs.autocomplete-hidden > div, .autocomplete .selector.autocomplete-hidden > div {
    display: none; }

.bank-name-bs input:focus {
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
  border: solid 2px #dbe6c6 !important;
  border-bottom: solid 1px #DDD !important;
  transition: none; }

.bank-name-bs .bank-name-autocomplete-bs > div {
  top: 84px !important; }

.continuous-progress {
  margin: 15px 0;
  text-align: center;
  width: 100%;
  height: 30px; }
  .continuous-progress .spinner {
    border: solid 3px #AAA;
    border-right-color: transparent;
    border-radius: 50%;
    width: 30px;
    height: 100%;
    margin: auto;
    animation: spin 750ms infinite linear; }

.alternating-rows-table {
  width: 100%;
  table-layout: fixed;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  border: solid 1px #dbe6c6;
  font-weight: 400;
  font-size: 14px;
  padding-top: 11px;
  line-height: 1.5;
  margin-bottom: 0;
  letter-spacing: 0.4px;
  color: #000000 !important; }
  @media all and (min-width: 768px) and (max-width: 992px) {
    .alternating-rows-table {
      font-weight: 400;
      font-size: 16px; } }
  @media all and (min-width: 992px) and (max-width: 1200px) {
    .alternating-rows-table {
      font-weight: 400;
      font-size: 16px; } }
  @media all and (min-width: 1200px) {
    .alternating-rows-table {
      font-weight: 400;
      font-size: 16px; } }
  .alternating-rows-table a {
    color: #8FBF21;
    transition: all 100ms ease-out; }
  .alternating-rows-table a:hover {
    color: #4E6B0B; }
  .alternating-rows-table td, .alternating-rows-table th {
    padding: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden; }
    .alternating-rows-table td a, .alternating-rows-table th a {
      color: #8FBF21; }
  .alternating-rows-table tr, .alternating-rows-table div.table-row {
    border: solid 1px #E8EAEB; }
    .alternating-rows-table tr:nth-child(even), .alternating-rows-table div.table-row:nth-child(even) {
      background-color: #E8EAEB; }
  .alternating-rows-table.renew-management-table span {
    display: inline-block;
    padding: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden; }

.modal-backdrop {
  background-color: #302c3c;
  opacity: 0.9 !important; }

.address-info-modal-md .modal-content, .single-family-residence-modal-md .modal-content, .update-property-location-modal-md .modal-content {
  border: unset;
  border-top: 2px solid #8FBF21;
  border-radius: unset !important;
  box-shadow: 2px 3px 5px 2px rgba(0, 0, 0, 0.2);
  padding: 25px 0;
  padding: 15px; }
  @media all and (min-width: 768px) and (max-width: 992px) {
    .address-info-modal-md .modal-content, .single-family-residence-modal-md .modal-content, .update-property-location-modal-md .modal-content {
      padding: 50px 0; } }
  @media all and (min-width: 992px) and (max-width: 1200px) {
    .address-info-modal-md .modal-content, .single-family-residence-modal-md .modal-content, .update-property-location-modal-md .modal-content {
      padding: 70px 0; } }
  @media all and (min-width: 1200px) {
    .address-info-modal-md .modal-content, .single-family-residence-modal-md .modal-content, .update-property-location-modal-md .modal-content {
      padding: 70px 0; } }
  @media all and (min-width: 320px) and (max-width: 992px) {
    .address-info-modal-md .modal-content, .single-family-residence-modal-md .modal-content, .update-property-location-modal-md .modal-content {
      font-size: 12px;
      font-family: Lato;
      font-weight: normal;
      letter-spacing: 0.3px;
      line-height: 1.5; } }

.address-info-modal-md .modal-header, .single-family-residence-modal-md .modal-header, .update-property-location-modal-md .modal-header {
  background-color: unset;
  text-align: center;
  border-bottom: none;
  padding: 0; }

.address-info-modal-md .modal-title, .single-family-residence-modal-md .modal-title, .update-property-location-modal-md .modal-title {
  color: #000000 !important;
  font-weight: 900;
  font-size: 20px;
  letter-spacing: 0.4px;
  font-family: "Lato", sans-serif;
  text-transform: none; }
  @media all and (min-width: 768px) and (max-width: 992px) {
    .address-info-modal-md .modal-title, .single-family-residence-modal-md .modal-title, .update-property-location-modal-md .modal-title {
      font-size: 24px; } }
  @media all and (min-width: 992px) and (max-width: 1200px) {
    .address-info-modal-md .modal-title, .single-family-residence-modal-md .modal-title, .update-property-location-modal-md .modal-title {
      font-size: 24px; } }
  @media all and (min-width: 1200px) {
    .address-info-modal-md .modal-title, .single-family-residence-modal-md .modal-title, .update-property-location-modal-md .modal-title {
      font-size: 24px; } }

.address-info-modal-md .modal-body, .single-family-residence-modal-md .modal-body, .update-property-location-modal-md .modal-body {
  padding: 15px 15px 0 15px; }
  .address-info-modal-md .modal-body h5, .single-family-residence-modal-md .modal-body h5, .update-property-location-modal-md .modal-body h5 {
    font-weight: 400;
    font-size: 14px;
    padding-top: 11px;
    line-height: 1.5;
    margin-bottom: 0;
    letter-spacing: 0.4px;
    color: #979899;
    padding-top: 0;
    margin: 10px 0 20px 0; }
    @media all and (min-width: 768px) and (max-width: 992px) {
      .address-info-modal-md .modal-body h5, .single-family-residence-modal-md .modal-body h5, .update-property-location-modal-md .modal-body h5 {
        font-weight: 400;
        font-size: 16px; } }
    @media all and (min-width: 992px) and (max-width: 1200px) {
      .address-info-modal-md .modal-body h5, .single-family-residence-modal-md .modal-body h5, .update-property-location-modal-md .modal-body h5 {
        font-weight: 400;
        font-size: 16px; } }
    @media all and (min-width: 1200px) {
      .address-info-modal-md .modal-body h5, .single-family-residence-modal-md .modal-body h5, .update-property-location-modal-md .modal-body h5 {
        font-weight: 400;
        font-size: 16px; } }
    .address-info-modal-md .modal-body h5 a, .single-family-residence-modal-md .modal-body h5 a, .update-property-location-modal-md .modal-body h5 a {
      color: #8FBF21;
      transition: all 100ms ease-out; }
    .address-info-modal-md .modal-body h5 a:hover, .single-family-residence-modal-md .modal-body h5 a:hover, .update-property-location-modal-md .modal-body h5 a:hover {
      color: #4E6B0B; }

.address-info-modal-md label, .single-family-residence-modal-md label, .update-property-location-modal-md label {
  font-weight: 400;
  font-size: 11px;
  line-height: 1;
  margin-bottom: 10px;
  letter-spacing: 0.4px;
  color: #979899;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  margin: 10px 0 !important; }
  @media all and (min-width: 768px) and (max-width: 992px) {
    .address-info-modal-md label, .single-family-residence-modal-md label, .update-property-location-modal-md label {
      font-size: 12px; } }
  @media all and (min-width: 992px) and (max-width: 1200px) {
    .address-info-modal-md label, .single-family-residence-modal-md label, .update-property-location-modal-md label {
      font-size: 12px; } }
  @media all and (min-width: 1200px) {
    .address-info-modal-md label, .single-family-residence-modal-md label, .update-property-location-modal-md label {
      font-size: 12px; } }

.address-info-modal-md input, .single-family-residence-modal-md input, .update-property-location-modal-md input {
  margin-bottom: 10px; }

.address-info-modal-md .address-highlight-btn, .address-info-modal-md .ok-button, .single-family-residence-modal-md .address-highlight-btn, .single-family-residence-modal-md .ok-button, .update-property-location-modal-md .address-highlight-btn, .update-property-location-modal-md .ok-button {
  background-color: #8FBF21;
  border-radius: 30px;
  border: none !important;
  color: #FFFFFF !important;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 3px;
  font-size: 13px;
  transition: all 500ms ease-out 50ms;
  cursor: pointer;
  width: 100%; }

.address-info-modal-md .address-cancel-btn, .address-info-modal-md .cancel-button, .single-family-residence-modal-md .address-cancel-btn, .single-family-residence-modal-md .cancel-button, .update-property-location-modal-md .address-cancel-btn, .update-property-location-modal-md .cancel-button {
  background-color: #FAFBFC;
  border-radius: 30px;
  border: none !important;
  color: #979899;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 3px;
  font-size: 13px;
  transition: all 500ms ease-out 50ms;
  cursor: pointer;
  border: 1px solid #979899 !important;
  width: 100%; }

.address-info-modal-md .errorLabelOn, .single-family-residence-modal-md .errorLabelOn, .update-property-location-modal-md .errorLabelOn {
  font-weight: 400;
  font-size: 14px;
  padding-top: 11px;
  line-height: 1.5;
  margin-bottom: 0;
  letter-spacing: 0.4px;
  color: #ff6373;
  text-transform: none; }
  @media all and (min-width: 768px) and (max-width: 992px) {
    .address-info-modal-md .errorLabelOn, .single-family-residence-modal-md .errorLabelOn, .update-property-location-modal-md .errorLabelOn {
      font-weight: 400;
      font-size: 16px; } }
  @media all and (min-width: 992px) and (max-width: 1200px) {
    .address-info-modal-md .errorLabelOn, .single-family-residence-modal-md .errorLabelOn, .update-property-location-modal-md .errorLabelOn {
      font-weight: 400;
      font-size: 16px; } }
  @media all and (min-width: 1200px) {
    .address-info-modal-md .errorLabelOn, .single-family-residence-modal-md .errorLabelOn, .update-property-location-modal-md .errorLabelOn {
      font-weight: 400;
      font-size: 16px; } }
  .address-info-modal-md .errorLabelOn a, .single-family-residence-modal-md .errorLabelOn a, .update-property-location-modal-md .errorLabelOn a {
    color: #8FBF21;
    transition: all 100ms ease-out; }
  .address-info-modal-md .errorLabelOn a:hover, .single-family-residence-modal-md .errorLabelOn a:hover, .update-property-location-modal-md .errorLabelOn a:hover {
    color: #4E6B0B; }

.address-info-modal-md .modal-error, .single-family-residence-modal-md .modal-error, .update-property-location-modal-md .modal-error {
  font-weight: 400;
  font-size: 14px;
  padding-top: 11px;
  line-height: 1.5;
  margin-bottom: 0;
  letter-spacing: 0.4px;
  color: #ff6373; }
  @media all and (min-width: 768px) and (max-width: 992px) {
    .address-info-modal-md .modal-error, .single-family-residence-modal-md .modal-error, .update-property-location-modal-md .modal-error {
      font-weight: 400;
      font-size: 16px; } }
  @media all and (min-width: 992px) and (max-width: 1200px) {
    .address-info-modal-md .modal-error, .single-family-residence-modal-md .modal-error, .update-property-location-modal-md .modal-error {
      font-weight: 400;
      font-size: 16px; } }
  @media all and (min-width: 1200px) {
    .address-info-modal-md .modal-error, .single-family-residence-modal-md .modal-error, .update-property-location-modal-md .modal-error {
      font-weight: 400;
      font-size: 16px; } }
  .address-info-modal-md .modal-error a, .single-family-residence-modal-md .modal-error a, .update-property-location-modal-md .modal-error a {
    color: #8FBF21;
    transition: all 100ms ease-out; }
  .address-info-modal-md .modal-error a:hover, .single-family-residence-modal-md .modal-error a:hover, .update-property-location-modal-md .modal-error a:hover {
    color: #4E6B0B; }

.single-family-residence-modal-md, .update-property-location-modal-md {
  position: relative; }
  .single-family-residence-modal-md .no-padding, .update-property-location-modal-md .no-padding {
    padding-top: 0 !important; }
  .single-family-residence-modal-md .x, .update-property-location-modal-md .x {
    background: #8FBF21 !important;
    border-radius: 50px;
    width: 30px;
    height: 30px;
    padding-bottom: 3px !important;
    transition: all 500ms ease-out 50ms;
    font-size: 22px !important;
    cursor: pointer;
    line-height: 30px;
    height: 30px;
    vertical-align: middle;
    display: inline-block;
    position: absolute;
    z-index: 2;
    top: 15px;
    right: 15px;
    color: white;
    text-align: center; }
    .single-family-residence-modal-md .x:hover, .update-property-location-modal-md .x:hover {
      background: #273803 !important;
      color: white; }
  .single-family-residence-modal-md .modal-body.header, .update-property-location-modal-md .modal-body.header {
    padding-top: 0; }
  .single-family-residence-modal-md .modal-title-icon, .update-property-location-modal-md .modal-title-icon {
    display: inline; }
    .single-family-residence-modal-md .modal-title-icon span, .update-property-location-modal-md .modal-title-icon span {
      line-height: 35px;
      height: 35px;
      vertical-align: middle;
      display: inline-block;
      background-color: #E8EAEB;
      border-radius: 50%;
      color: white;
      font-size: 20px;
      margin-right: 15px;
      text-align: center;
      width: 35px; }
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    .single-family-residence-modal-md .cancel-button, .update-property-location-modal-md .cancel-button {
      margin-top: 15px; }
    .single-family-residence-modal-md .modal-title-icon, .update-property-location-modal-md .modal-title-icon {
      margin: auto;
      display: block;
      width: 100%;
      margin-bottom: 10px; }
    .single-family-residence-modal-md .modal-body, .update-property-location-modal-md .modal-body {
      text-align: center; }
      .single-family-residence-modal-md .modal-body.header, .update-property-location-modal-md .modal-body.header {
        margin-top: 40px; } }

#errorModal .modal-footer .reference {
  line-height: 52px;
  height: 52px;
  vertical-align: middle;
  display: inline-block;
  float: left;
  font-size: 16px;
  color: #979899; }

#errorModal .modal-footer button {
  float: right; }

.form-control-wrapper.select {
  position: relative; }
  .form-control-wrapper.select select {
    padding-right: 33px !important; }
  .form-control-wrapper.select .arrow-selector {
    line-height: 55px;
    height: 55px;
    vertical-align: middle;
    display: inline-block;
    position: absolute;
    pointer-events: none;
    top: 0;
    right: 0;
    font-size: 1.25rem;
    padding: 0 10px; }

.header-component-cp.transparent {
  background: transparent !important; }

.header-component-cp .navbar-hidden {
  display: none !important; }

.header-component-cp .navbar-shown {
  display: block !important; }

.header-component-cp .col-xs-12 {
  position: static; }

.header-component-cp .navbar-header {
  position: relative; }

.header-component-cp .hamburger-menu-layout-cp {
  position: static; }

.header-component-cp .user-details-layout-cp {
  margin-right: 70px !important; }

.header-component-cp .nav-tabs-layout-cp li {
  float: left; }
  .header-component-cp .nav-tabs-layout-cp li a {
    line-height: 59px !important;
    cursor: pointer; }

.header-component-cp .nav-elements-layout-cp li a {
  cursor: pointer;
  width: 300px; }

.header-component-cp .navbar-fade {
  transition: opacity 150ms linear; }
  .header-component-cp .navbar-fade.navbar-fade-out {
    opacity: 0; }

.header-component-cp .navbar-collapse-layout-cp {
  position: absolute;
  width: 100%;
  top: 59px;
  left: 0;
  background-color: #000000 !important;
  visibility: visible;
  overflow: hidden !important;
  transform-origin: top;
  animation-timing-function: linear;
  animation-duration: 400ms;
  will-change: transform; }
  .header-component-cp .navbar-collapse-layout-cp .navbar-transition-cp {
    transform-origin: top;
    animation-timing-function: linear;
    animation-duration: 400ms;
    will-change: transform; }
  .header-component-cp .navbar-collapse-layout-cp.expanding, .header-component-cp .navbar-collapse-layout-cp.collapsing {
    animation-name: menu; }
    .header-component-cp .navbar-collapse-layout-cp.expanding .navbar-transition-cp, .header-component-cp .navbar-collapse-layout-cp.collapsing .navbar-transition-cp {
      animation-name: menuContent; }
  .header-component-cp .navbar-collapse-layout-cp.expanding {
    transform: scale(1, 0.0001); }
  .header-component-cp .navbar-collapse-layout-cp.expanded {
    transform: scale(1, 1); }
    .header-component-cp .navbar-collapse-layout-cp.expanded .navbar-transition-cp {
      transform: scale(1, 1); }
  .header-component-cp .navbar-collapse-layout-cp.collapsing {
    animation-direction: reverse; }
    .header-component-cp .navbar-collapse-layout-cp.collapsing .navbar-transition-cp {
      animation-direction: reverse; }
  .header-component-cp .navbar-collapse-layout-cp.collapsed {
    transform: scale(1, 0.0001);
    background-color: transparent !important; }
    .header-component-cp .navbar-collapse-layout-cp.collapsed .navbar-transition-cp {
      transform: scale(1, 10000); }

.sliding-menu-cp {
  background-color: #302c3c;
  color: #FAFBFC;
  z-index: 3;
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  visibility: visible;
  overflow: hidden !important;
  transform-origin: top;
  animation-timing-function: linear;
  animation-duration: 400ms;
  will-change: transform; }
  .sliding-menu-cp .inner-container-cp {
    transform-origin: top;
    animation-timing-function: linear;
    animation-duration: 400ms;
    will-change: transform; }
  .sliding-menu-cp.sliding-menu-expanding, .sliding-menu-cp.sliding-menu-collapsing {
    animation-name: ease-in-out-menu; }
    .sliding-menu-cp.sliding-menu-expanding .inner-container-cp, .sliding-menu-cp.sliding-menu-collapsing .inner-container-cp {
      animation-name: ease-in-out-menu-content; }
  .sliding-menu-cp.sliding-menu-expanding {
    transform: scale(1, 0.0001); }
  .sliding-menu-cp.sliding-menu-expanded {
    transform: scale(1, 1); }
    .sliding-menu-cp.sliding-menu-expanded .inner-container-cp {
      transform: scale(1, 1); }
  .sliding-menu-cp.sliding-menu-collapsing {
    animation-direction: reverse; }
    .sliding-menu-cp.sliding-menu-collapsing .inner-container-cp {
      animation-direction: reverse; }
  .sliding-menu-cp.sliding-menu-collapsed {
    transform: scale(1, 0.0001);
    background-color: transparent !important; }
    .sliding-menu-cp.sliding-menu-collapsed .inner-container-cp {
      transform: scale(1, 10000); }

.hamburger-icon-bs {
  position: absolute;
  right: 0;
  top: 0;
  padding: 13px;
  box-sizing: content-box;
  width: 30px;
  height: 30px;
  cursor: pointer; }
  .hamburger-icon-bs .hamburger-icon-relative-ly {
    position: relative; }
  .hamburger-icon-bs .bar {
    position: absolute;
    width: 29px;
    height: 2px;
    background-color: #FFFFFF !important;
    left: 0;
    transition: transform 150ms linear, opacity 150ms linear;
    transform-origin: left; }
    .hamburger-icon-bs .bar.first {
      top: 8px; }
    .hamburger-icon-bs .bar.second {
      top: 14px; }
    .hamburger-icon-bs .bar.third {
      top: 20px; }
  .hamburger-icon-bs.closed .bar.first {
    transform: rotate(45deg) translateY(-6px); }
  .hamburger-icon-bs.closed .bar.second {
    opacity: 0; }
  .hamburger-icon-bs.closed .bar.third {
    transform: rotate(-45deg) translateY(6px); }
  .hamburger-icon-bs:active .bar, .hamburger-icon-bs:focus .bar {
    background-color: #FFFFFF !important; }

.expanding-menu-bs {
  background-color: #302c3c; }

.swyfft-modal-md {
  position: relative;
  border-top: solid 5px #8FBF21; }
  .swyfft-modal-md button {
    background-color: #8FBF21;
    border-radius: 30px;
    border: none !important;
    color: #FAFBFC;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 3px;
    font-size: 13px;
    transition: all 500ms ease-out 50ms;
    cursor: pointer;
    line-height: 40px;
    height: 40px;
    vertical-align: middle;
    display: inline-block;
    width: 100%;
    transition: background-color 250ms linear; }
  .swyfft-modal-md .optin-form-group-md {
    margin-bottom: 9px;
    position: relative; }
    .swyfft-modal-md .optin-form-group-md .error-md {
      font-size: 11px;
      color: #f0707e;
      height: 20px; }
    .swyfft-modal-md .optin-form-group-md.has-error label {
      color: #979899 !important; }
    .swyfft-modal-md .optin-form-group-md.has-error input, .swyfft-modal-md .optin-form-group-md.has-error select {
      border: solid 1px #f0707e !important; }
  .swyfft-modal-md .optin-input-field-md {
    border-radius: 30px !important;
    font-size: 12px !important;
    height: 40px !important;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 0 38px 0 15px;
    color: #979899 !important;
    border: 0; }
  .swyfft-modal-md .optin-input-field-md {
    border: solid 1px #E8EAEB;
    transition: all 500ms linear; }
    .swyfft-modal-md .optin-input-field-md::placeholder {
      color: #979899; }
    .swyfft-modal-md .optin-input-field-md:-ms-input-placeholder {
      color: #979899; }
    .swyfft-modal-md .optin-input-field-md:focus {
      border-color: #8FBF21;
      color: #000000 !important; }
  .swyfft-modal-md .optin-input-field-label-md {
    font-size: 12px;
    color: #979899;
    text-transform: capitalize;
    letter-spacing: 0.4px;
    font-weight: 500; }
  .swyfft-modal-md .x {
    position: absolute;
    z-index: 2;
    right: 15px;
    top: 15px;
    padding: 5px;
    cursor: pointer;
    font-size: 26px;
    line-height: 14px;
    color: #CCCCCC;
    transition: color 500ms linear; }
    .swyfft-modal-md .x:hover {
      color: #000000 !important; }
  .swyfft-modal-md .modal-content {
    border-radius: 0;
    border: none; }
  .swyfft-modal-md h4.modal-title {
    width: 100%;
    text-align: center;
    color: black;
    font-weight: bold;
    margin-top: 20px; }
  .swyfft-modal-md h6.modal-subtitle {
    width: 100%;
    text-align: center;
    color: black;
    font-size: 14px; }

.optin-modal-md .optin-footer {
  width: 100%;
  text-align: center;
  display: block;
  font-size: 12px;
  margin: 20px 0; }
  .optin-modal-md .optin-footer a {
    color: #8FBF21;
    text-decoration: underline;
    cursor: pointer; }
    .optin-modal-md .optin-footer a:hover, .optin-modal-md .optin-footer a:active, .optin-modal-md .optin-footer a:focus {
      color: #333333; }

.optin-modal-md .modal-content {
  height: 505px;
  transition: height 350ms ease-out; }

.optin-modal-md.finished .modal-content {
  height: 142px; }

.eo-ok-btn-bs {
  background-color: #8FBF21;
  border-radius: 30px;
  border: none !important;
  color: #FAFBFC;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 3px;
  font-size: 13px;
  transition: all 500ms ease-out 50ms;
  cursor: pointer; }

.dropdown-form-cp {
  position: relative;
  cursor: default; }
  .dropdown-form-cp .dropdown-value-cp {
    line-height: 40px;
    height: 40px;
    vertical-align: middle;
    display: inline-block;
    background-color: #FFFFFF !important;
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
    cursor: pointer;
    padding-right: 40px !important;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap; }
    .dropdown-form-cp .dropdown-value-cp:after {
      content: '';
      background: url("../../images/chevron-down.svg") no-repeat center #7EA81D;
      background-size: 12px;
      width: 38px;
      color: #FAFBFC;
      right: 0;
      border-radius: 0px 30px 30px 0px;
      top: 32px;
      height: 41px;
      padding: 12px 15px 15px 15px;
      position: absolute;
      pointer-events: none; }
      @media all and (min-width: 320px) and (max-width: 992px) {
        .dropdown-form-cp .dropdown-value-cp:after {
          top: 26px !important; } }
  .dropdown-form-cp .dropdown-value-placeholder-cp {
    color: #AEAEAE !important; }
  .dropdown-form-cp .dropdown-selector-cp {
    position: absolute;
    width: 100%;
    background-color: #F2F4F5;
    border-radius: 20px;
    max-height: 500px;
    overflow: hidden;
    box-shadow: 0 3px 4px 0 rgba(95, 95, 95, 0.5);
    margin-top: 1px;
    transition: opacity 150ms linear;
    transform-origin: top;
    pointer-events: none;
    opacity: 0;
    z-index: 4; }
    .dropdown-form-cp .dropdown-selector-cp.dropdown-selector-shown-cp {
      opacity: 1;
      pointer-events: auto; }
    .dropdown-form-cp .dropdown-selector-cp span {
      line-height: 38px;
      height: 38px;
      vertical-align: middle;
      display: inline-block;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      color: #555555;
      cursor: pointer;
      font-size: 12px;
      font-weight: normal;
      letter-spacing: 0.4px;
      padding: 0 15px; }
      .dropdown-form-cp .dropdown-selector-cp span:hover {
        color: #000000 !important;
        background-color: #E8EAEB; }
  .dropdown-form-cp.has-error .dropdown-value-cp:after {
    content: '';
    background: url("../../images/chevron-down.svg") no-repeat center #ff6373;
    background-size: 12px;
    width: 38px;
    color: #FAFBFC;
    right: 0;
    border-radius: 0px 30px 30px 0px;
    top: 32px;
    height: 41px;
    padding: 12px 15px 15px 15px;
    position: absolute;
    pointer-events: none; }

.modal-body .text-input-cp label, .modal-body .dropdown-form-cp label {
  color: #979899 !important;
  font-size: 14px;
  font-weight: 500;
  font-family: Lato;
  margin-bottom: 5px;
  float: left; }

.modal-body .text-input-cp {
  margin: 0;
  font-family: Lato; }
  .modal-body .text-input-cp input {
    width: 100%;
    height: 40px !important;
    line-height: 40px !important;
    vertical-align: middle;
    display: inline-block;
    padding: 0 15px !important;
    font-family: Lato;
    font-weight: normal;
    font-size: 12px !important;
    letter-spacing: 0.3px;
    color: #000000 !important !important;
    border: solid 1px #c6c6c6 !important;
    border-radius: 30px !important; }

.modal-body .dropdown-form-cp {
  margin: 0; }
  .modal-body .dropdown-form-cp .dropdown-label-cp {
    color: #979899 !important;
    font-size: 14px;
    font-weight: 500;
    float: left; }
  .modal-body .dropdown-form-cp .dropdown-value-cp {
    border: solid 1px #c6c6c6 !important;
    border-radius: 30px !important; }
    .modal-body .dropdown-form-cp .dropdown-value-cp:after {
      content: '';
      background: url("../../images/chevron-down.svg") no-repeat center #E8EAEB;
      background-size: 12px;
      width: 38px;
      color: #FFFFFF !important;
      right: 1px;
      border-radius: 0px 30px 30px 0px;
      top: 27px;
      height: 38px;
      padding: 12px 15px 15px 15px;
      position: absolute;
      pointer-events: none;
      padding-top: 11px; }

.tooltip-cp .tooltip-content-wrapper-cp {
  position: relative; }
  .tooltip-cp .tooltip-content-wrapper-cp .tooltip-content-cp, .tooltip-cp .tooltip-content-wrapper-cp .tooltip-arrow-cp {
    position: absolute;
    z-index: 2;
    opacity: 0;
    pointer-events: none;
    transition: opacity 150ms linear; }
  .tooltip-cp .tooltip-content-wrapper-cp.tooltip-content-wrapper-visible-cp .tooltip-content-cp, .tooltip-cp .tooltip-content-wrapper-cp.tooltip-content-wrapper-visible-cp .tooltip-arrow-cp {
    opacity: 1;
    pointer-events: auto; }
  .tooltip-cp .tooltip-content-wrapper-cp .tooltip-content-cp {
    letter-spacing: 0.3px;
    background-color: #555555;
    border-radius: 6px;
    width: 220px;
    padding: 20px;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75); }
    .tooltip-cp .tooltip-content-wrapper-cp .tooltip-content-cp .tooltip-title-cp, .tooltip-cp .tooltip-content-wrapper-cp .tooltip-content-cp .tooltip-message-cp {
      display: block;
      width: 100%;
      text-align: center;
      line-height: 1.3;
      font-size: 12px;
      color: #FAFBFC;
      font-weight: normal;
      letter-spacing: 0.3px;
      font-family: Lato; }
    .tooltip-cp .tooltip-content-wrapper-cp .tooltip-content-cp .tooltip-title-cp {
      margin-bottom: 8px;
      display: none;
      font-weight: bold; }
      .tooltip-cp .tooltip-content-wrapper-cp .tooltip-content-cp .tooltip-title-cp.tooltip-title-visible-cp {
        display: block; }
  .tooltip-cp .tooltip-content-wrapper-cp .tooltip-arrow-cp {
    border: solid 10px transparent; }
  .tooltip-cp .tooltip-content-wrapper-cp.bottom-cp .tooltip-arrow-cp {
    border-left-width: 6.66667px;
    border-right-width: 6.66667px;
    border-bottom-color: #555555;
    left: 50%;
    transform: translateX(-50%); }
  .tooltip-cp .tooltip-content-wrapper-cp.bottom-cp .tooltip-content-cp {
    top: 20px;
    left: -85px; }
  .tooltip-cp .tooltip-content-wrapper-cp.bottom-left-cp .tooltip-arrow-cp, .tooltip-cp .tooltip-content-wrapper-cp.bottom-right-cp .tooltip-arrow-cp {
    border-left-width: 6.66667px;
    border-right-width: 6.66667px;
    border-bottom-color: #555555;
    left: 50%;
    transform: translateX(-50%); }
  .tooltip-cp .tooltip-content-wrapper-cp.bottom-left-cp .tooltip-content-cp, .tooltip-cp .tooltip-content-wrapper-cp.bottom-right-cp .tooltip-content-cp {
    top: 20px;
    right: 0; }
  .tooltip-cp .tooltip-content-wrapper-cp.bottom-right-cp .tooltip-content-cp {
    left: 0; }

.input-field-error-md {
  float: right;
  color: #ff6373;
  font-size: 12px;
  opacity: 1;
  transition: opacity 200ms linear; }
  .input-field-error-md.input-field-error-hidden-md {
    opacity: 0; }

.alert-cp {
  font-family: Lato;
  font-weight: normal;
  letter-spacing: 0.3px; }
  .alert-cp .alert-header-cp {
    text-align: center;
    margin-top: 25px; }
    .alert-cp .alert-header-cp .alert-icon-cp, .alert-cp .alert-header-cp .alert-icon-cp > div {
      line-height: 31px;
      height: 31px;
      vertical-align: middle;
      display: inline-block; }
    .alert-cp .alert-header-cp .alert-icon-cp svg {
      width: 31px;
      height: 31px; }
    .alert-cp .alert-header-cp .alert-icon-cp.error-cp {
      color: #ff6373; }
    .alert-cp .alert-header-cp .alert-icon-cp.warning-cp {
      color: #FFC42E; }
    .alert-cp .alert-header-cp .alert-icon-cp.info-cp {
      color: #cccccc; }
    .alert-cp .alert-header-cp span {
      line-height: 31px;
      height: 31px;
      vertical-align: middle;
      display: inline-block;
      font-weight: 900;
      font-size: 24px;
      color: #000000 !important;
      margin-left: 15px;
      margin-top: 2px; }
  .alert-cp .alert-content-cp {
    margin-top: 15px;
    background-color: #F2F4F5;
    border: solid 1px #E8EAEB;
    padding: 15px;
    text-align: center;
    color: #000000 !important;
    font-size: 24px;
    font-weight: 900;
    line-height: 1.3; }
  .alert-cp .alert-footer-cp {
    margin-top: 15px;
    color: #555555;
    font-size: 14px; }
    .alert-cp .alert-footer-cp a {
      text-decoration: underline;
      color: #8FBF21; }
  .alert-cp button {
    background-color: #8FBF21;
    border-radius: 30px;
    border: none !important;
    color: #FFFFFF !important;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 3px;
    font-size: 13px;
    transition: all 500ms ease-out 50ms;
    cursor: pointer;
    margin-top: 25px; }

.modal-tiny-cp {
  width: 500px; }

.modal-small-cp {
  width: 650px; }

.modal-medium-cp {
  width: 800px; }

.modal-large-cp {
  width: 950px; }

.modal-huge-cp {
  width: 1100px; }

@media all and (min-width: 320px) and (max-width: 992px) {
  .modal-tiny-cp, .modal-small-cp, .modal-medium-cp, .modal-large-cp, .modal-huge-cp {
    width: calc(100% - 40px);
    margin: 20px; } }

.primary-green-button-cp {
  background-color: #8FBF21;
  border-radius: 30px;
  border: none !important;
  color: #FFFFFF !important;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 3px;
  font-size: 13px;
  transition: all 500ms ease-out 50ms;
  cursor: pointer; }
  .primary-green-button-cp:hover {
    background-color: #adcc66 !important;
    color: #FAFBFC !important; }
  .primary-green-button-cp:disabled {
    background-color: #F2F4F5 !important;
    color: #CCCCCC !important; }

.primary-black-button-cp {
  background-color: #000000 !important;
  border-radius: 30px;
  border: none !important;
  color: #FFFFFF !important;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 3px;
  font-size: 13px;
  transition: all 500ms ease-out 50ms;
  cursor: pointer; }
  .primary-black-button-cp:hover {
    background-color: #31332b !important;
    color: #FAFBFC !important; }
  .primary-black-button-cp:disabled {
    background-color: #F2F4F5 !important;
    color: #CCCCCC !important; }

.secondary-button-cp {
  background-color: #FFFFFF !important;
  border-radius: 30px;
  border: 1px solid #CCCCCC;
  color: #000000 !important;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 3px;
  font-size: 13px;
  transition: all 500ms ease-out 50ms;
  cursor: pointer;
  padding: 10px 20px !important;
  cursor: pointer;
  transition: all 500ms ease-out 50ms; }
  .secondary-button-cp i {
    float: left;
    color: #8FBF21;
    font-size: 1.4em;
    margin-right: 8px;
    margin-top: 3px; }
  .secondary-button-cp .secondary-button-icon-cp {
    float: left;
    width: 25px;
    height: 19px;
    margin-right: 10px;
    margin-top: 3px;
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
    transition: all 500ms ease-out 50ms; }
  .secondary-button-cp .secondary-button-label-cp {
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0.3px;
    color: #555555;
    font-family: Lato;
    text-transform: none;
    transition: all 500ms ease-out 50ms; }
  .secondary-button-cp:hover {
    border-color: #8FBF21; }
    .secondary-button-cp:hover .secondary-button-label-cp {
      color: #8FBF21; }
  .secondary-button-cp:disabled {
    cursor: default !important;
    border-color: #E4E4E4 !important; }
    .secondary-button-cp:disabled .secondary-button-icon-cp, .secondary-button-cp:disabled .secondary-button-label-cp {
      color: #E4E4E4 !important; }

/*
    Visual Style Guide: https://www.dropbox.com/s/5w88x69rullg6h7/02-layout.png?dl=0
*/
.container {
  max-width: none; }
  @media all and (min-width: 768px) and (max-width: 992px) {
    .container {
      max-width: 768px; } }
  @media all and (min-width: 992px) and (max-width: 1200px) {
    .container {
      max-width: 980px; } }
  @media all and (min-width: 1200px) {
    .container {
      max-width: 1200px; } }

#quote-menubar.quote-menubar-ly {
  background-color: #000000;
  top: 60px;
  border-top: none;
  margin-top: 0px;
  z-index: 110; }
  @media all and (min-width: 768px) and (max-width: 992px) {
    #quote-menubar.quote-menubar-ly {
      background-color: transparent;
      top: 0; } }
  @media all and (min-width: 992px) and (max-width: 1200px) {
    #quote-menubar.quote-menubar-ly {
      background-color: transparent;
      top: 0; } }
  @media all and (min-width: 1200px) {
    #quote-menubar.quote-menubar-ly {
      background-color: transparent;
      top: 0; } }
  #quote-menubar.quote-menubar-ly ul.nav-tabs {
    height: 30px;
    line-height: 0px;
    padding-left: 0px; }
    @media all and (min-width: 768px) and (max-width: 992px) {
      #quote-menubar.quote-menubar-ly ul.nav-tabs {
        height: 60px;
        line-height: 60px;
        padding-left: 65px; } }
    @media all and (min-width: 992px) and (max-width: 1200px) {
      #quote-menubar.quote-menubar-ly ul.nav-tabs {
        height: 60px;
        line-height: 60px;
        padding-left: 95px; } }
    @media all and (min-width: 1200px) {
      #quote-menubar.quote-menubar-ly ul.nav-tabs {
        height: 60px;
        line-height: 60px;
        padding-left: 95px; } }

@media all and (min-width: 768px) and (max-width: 992px) {
  #quote-menubar.hub-quote-menubar-ly ul.nav-tabs {
    padding-left: 195px; } }

@media all and (min-width: 992px) and (max-width: 1200px) {
  #quote-menubar.hub-quote-menubar-ly ul.nav-tabs {
    padding-left: 195px; } }

@media all and (min-width: 1200px) {
  #quote-menubar.hub-quote-menubar-ly ul.nav-tabs {
    padding-left: 195px; } }

#quote-menubar.quote-menubar-ly ul > li.nav-tabs-st > a {
  color: #979899;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 3px;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  padding: 0 !important;
  border: unset;
  line-height: 1;
  font-size: 14px !important;
  margin-right: 0;
  font-weight: 600; }
  @media all and (min-width: 768px) and (max-width: 992px) {
    #quote-menubar.quote-menubar-ly ul > li.nav-tabs-st > a {
      font-size: 16px;
      letter-spacing: 4px; } }
  @media all and (min-width: 992px) and (max-width: 1200px) {
    #quote-menubar.quote-menubar-ly ul > li.nav-tabs-st > a {
      font-size: 16px;
      letter-spacing: 4px; } }
  @media all and (min-width: 1200px) {
    #quote-menubar.quote-menubar-ly ul > li.nav-tabs-st > a {
      font-size: 16px;
      letter-spacing: 4px; } }
  @media all and (min-width: 768px) and (max-width: 992px) {
    #quote-menubar.quote-menubar-ly ul > li.nav-tabs-st > a {
      letter-spacing: 2px; } }
  #quote-menubar.quote-menubar-ly ul > li.nav-tabs-st > a:focus {
    color: #FAFBFC !important; }
  #quote-menubar.quote-menubar-ly ul > li.nav-tabs-st > a:hover {
    color: #FAFBFC !important; }

.quote-menubar-ly .highlight {
  color: #FAFBFC !important; }

nav.quote-menubar-ly ul {
  display: block !important;
  text-align: center; }
  @media all and (min-width: 768px) and (max-width: 992px) {
    nav.quote-menubar-ly ul {
      text-align: left; } }
  @media all and (min-width: 992px) and (max-width: 1200px) {
    nav.quote-menubar-ly ul {
      text-align: left; } }
  @media all and (min-width: 1200px) {
    nav.quote-menubar-ly ul {
      text-align: left; } }

.quote-menubar-ly .nav-tabs > li {
  padding: 0px 10px;
  display: inline-block;
  float: none; }
  @media all and (min-width: 768px) and (max-width: 992px) {
    .quote-menubar-ly .nav-tabs > li {
      padding: 0px 5px 0px 0px; } }
  @media all and (min-width: 992px) and (max-width: 1200px) {
    .quote-menubar-ly .nav-tabs > li {
      padding: 0px 10px 10px 15px; } }
  @media all and (min-width: 1200px) {
    .quote-menubar-ly .nav-tabs > li {
      padding: 0px 10px 10px 15px; } }

.nav-tabs-layout-cp {
  line-height: 0; }

#header.height-layout-cp {
  height: 60px;
  z-index: 100; }
  #header.height-layout-cp.header-nav-visible {
    height: auto !important;
    z-index: 103; }

@media screen and (-ms-high-contrast: active), all and (-ms-high-contrast: none) {
  #header {
    overflow: none !important;
    -ms-overflow-style: none; } }

.nav-elements-layout-cp li a {
  font-size: 14px;
  letter-spacing: 3px; }
  @media all and (min-width: 768px) and (max-width: 992px) {
    .nav-elements-layout-cp li a {
      font-size: 16px;
      letter-spacing: 4px; } }
  @media all and (min-width: 992px) and (max-width: 1200px) {
    .nav-elements-layout-cp li a {
      font-size: 16px;
      letter-spacing: 4px; } }
  @media all and (min-width: 1200px) {
    .nav-elements-layout-cp li a {
      font-size: 16px;
      letter-spacing: 4px; } }

.nav-elements-layout-cp li {
  margin: 0 0 2vh !important; }

#hamburger-menu .navbar-collapse-layout-cp .logo {
  margin-bottom: 20px; }
  @media all and (min-width: 768px) and (max-width: 992px) {
    #hamburger-menu .navbar-collapse-layout-cp .logo {
      margin-bottom: 30px; } }
  @media all and (min-width: 992px) and (max-width: 1200px) {
    #hamburger-menu .navbar-collapse-layout-cp .logo {
      margin-bottom: 30px; } }
  @media all and (min-width: 1200px) {
    #hamburger-menu .navbar-collapse-layout-cp .logo {
      margin-bottom: 30px; } }

.hamburger-menu-layout-cp.header-nav-visible {
  z-index: 115; }

.hamburger-menu-layout-cp .navbar-toggle {
  right: 20px; }
  .hamburger-menu-layout-cp .navbar-toggle.collapsed {
    right: -2px; }

/* Landscape for iphone 6+ */
@media only screen and (max-device-width: 736px) and (orientation: landscape) {
  #hamburger-menu .navbar-collapse-layout-cp .logo {
    margin-top: 0 !important; }
  .nav-elements-layout-cp li {
    width: 50%;
    display: inline-block;
    float: left; } }

.site-logo-layout-cp {
  width: auto;
  margin-right: 15px; }

.hub-logo-container-layout-cp {
  display: none;
  float: left;
  width: 100px;
  padding-left: 10px;
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  margin-top: 15px; }
  @media all and (min-width: 768px) and (max-width: 992px) {
    .hub-logo-container-layout-cp {
      margin-top: 12px; } }
  @media all and (min-width: 992px) and (max-width: 1200px) {
    .hub-logo-container-layout-cp {
      margin-top: 12px; } }
  @media all and (min-width: 1200px) {
    .hub-logo-container-layout-cp {
      margin-top: 12px; } }

#header #user-details .user-details-layout-cp {
  min-width: unset;
  margin: 0 55px 0 0;
  font-size: 12px;
  letter-spacing: 1px; }

@font-face {
  font-family: "icomoon";
  src: url("../../fonts/icomoon7a48.eot?j4ni0x");
  src: url("../../fonts/icomoond41d.eot?#iefixj4ni0x") format("embedded-opentype"), url("../../fonts/icomoon7a48.woff?j4ni0x") format("woff"), url("../../fonts/icomoon7a48.ttf?j4ni0x") format("truetype"), url("../../fonts/icomoon7a48.svg?j4ni0x#icomoon") format("svg");
  font-weight: normal;
  font-style: normal; }

[class^="icon-"]:not([class^="icon-button"]),
[class*=" icon-"] {
  font-family: "icomoon";
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; }

a {
  color: #428bca;
  font-weight: 400; }

.default-cursor {
  cursor: default !important; }

.margin-right-5px {
  margin-right: 5px; }

.margin-right-13px {
  margin-right: 13px; }

.margin-top-50px {
  margin-top: 50px; }

.margin-left-40px {
  margin-left: 40px; }

.margin-left-9em {
  margin-left: 9em; }

.icon-lock:before {
  content: "\E606"; }

.icon-click:before {
  content: "\E605"; }

.icon-edit:before {
  content: "\E601"; }

.icon-email:before {
  content: "\E602"; }

.icon-fb:before {
  content: "\E603"; }

.icon-twitter:before {
  content: "\E604"; }

.icon-keyboard-arrow-down:before {
  content: "\E600"; }

.icon-globe {
  position: relative;
  top: -2px; }

.icon-globe img {
  vertical-align: inherit; }

/* all */
::-webkit-input-placeholder {
  text-transform: initial; }

::-moz-placeholder {
  text-transform: initial; }

/* firefox 19+ */
:-ms-input-placeholder {
  text-transform: initial; }

/* ie */
input:-moz-placeholder {
  text-transform: initial; }

html, body {
  display: block;
  width: 100%;
  height: 100% !important;
  /*For ipad on IOS7*/
  top: 0;
  /*For ipad on IOS7*/
  left: 0;
  margin: 0;
  padding: 0;
  font-weight: 400;
  min-width: 342px; }

.text-capitalize {
  text-transform: capitalize !important; }

hr {
  border: 1px solid #eeeeee; }

.btn {
  /*padding: 10px 31px;*/
  background: none;
  color: #626363;
  border: 2px solid #9e9f9e;
  border-radius: 0;
  font-size: 16px;
  padding: 15px 0;
  letter-spacing: 0.5px;
  line-height: 1.4;
  width: 14.7em; }

.btn-danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a; }

.btn-danger:hover, .btn-danger:focus, .btn-danger.focus, .btn-danger:active, .btn-danger.active, .open > .btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #c9302c;
  border-color: #ac2925; }

.btn-danger:active, .btn-danger.active, .open > .btn-danger.dropdown-toggle {
  background-image: none; }

.btn-danger.disabled, .btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger.disabled:active, .btn-danger.disabled.active, .btn-danger[disabled], .btn-danger[disabled]:hover, .btn-danger[disabled]:focus, .btn-danger[disabled].focus, .btn-danger[disabled]:active, .btn-danger[disabled].active, fieldset[disabled] .btn-danger, fieldset[disabled] .btn-danger:hover, fieldset[disabled] .btn-danger:focus, fieldset[disabled] .btn-danger.focus, fieldset[disabled] .btn-danger:active, fieldset[disabled] .btn-danger.active {
  background-color: #d9534f;
  border-color: #d43f3a; }

.btn-danger .badge {
  color: #d9534f;
  background-color: #fff; }

.invalid {
  color: #d9534f;
  border-color: #d43f3a;
  font-weight: bold; }

.jqi {
  position: fixed !important; }

.jqititle {
  margin-bottom: 0; }

.lead-danger {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
  font-weight: 400; }

div.jqi {
  padding: 0; }

.floatLeft {
  float: left; }

/* See http://www.minimit.com/articles/solutions-tutorials/bootstrap-3-responsive-centered-columns */
.row-centered {
  text-align: center; }

.col-centered {
  display: inline-block;
  float: none;
  /* inline-block space fix */
  margin-right: -4px; }

.btn-default {
  border: 2px solid #90bf3e;
  background: #90bf3e;
  color: #fff; }

.ds-btn-md {
  width: 100%; }

.btn-default.disabled, .btn-default[disabled]:hover,
.btn-default[disabled], btn-default[disabled]:focus {
  background: #90bf3e;
  border-color: transparent; }

.btn-sm, .btn-group-sm > .btn {
  padding: 5px 10px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 3px; }

.btn-narrow, .btn-group-narrow > .btn {
  width: 120px; }

.white-top-border {
  border-top: 2px solid #FFF; }

.loading-message {
  font-size: 24px;
  margin-left: 20px; }

.gray-btn {
  background: none;
  color: #626363;
  border: 2px solid #9e9f9e; }

.gray-btn:hover {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad; }

input {
  border: 0;
  border-radius: 0; }

label {
  text-transform: uppercase;
  display: block;
  margin: 0 0 6px;
  font-weight: 300;
  color: #505150; }

.form-group {
  margin: 0 0 35px; }

.form-group-ly {
  margin-bottom: 20px; }

.form-group.address {
  margin: 0 0 17px; }

.form-group.address label {
  display: block; }

.alert-danger {
  background-image: -webkit-linear-gradient(top, #d9534f 0, #c12e2a 100%);
  background-image: -o-linear-gradient(top, #d9534f 0, #c12e2a 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#d9534f), to(#c12e2a));
  background-image: linear-gradient(to bottom, #d9534f 0, #c12e2a 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffd9534f', endColorstr='#ffc12e2a', GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  background-repeat: repeat-x;
  border-color: #b92c28; }

div.alert-danger {
  color: white; }

.custom-form-control {
  font-family: inherit !important;
  font-weight: 400;
  line-height: 20px !important;
  padding: 18px 18px 15px !important;
  margin: 0;
  box-shadow: none;
  -webkit-appearance: none !important;
  border-radius: 0 !important;
  display: block;
  width: 100%;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc; }

.form-control {
  font-family: Arial, Helvetica, sans-serif;
  height: 58px;
  line-height: 20px;
  padding: 18px 18px 17px;
  margin: 0;
  box-shadow: none;
  -webkit-appearance: none;
  border-radius: 0 !important; }

.form-control::-moz-placeholder {
  color: #fff;
  opacity: 1; }

.form-control:-ms-input-placeholder {
  color: #fff; }

.form-control::-webkit-input-placeholder {
  color: #fff; }

.visual-sec input[type="text"],
.visual-sec input[type="email"] {
  color: #515251;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  padding: 16px 23px;
  width: 90%;
  height: 56px;
  box-shadow: none;
  border: none; }

.visual-sec input[type="submit"], .visual-sec input[type="button"] {
  width: 183px;
  height: 56px;
  background: #90bf3e;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px; }

.visual-sec input[type="submit"]:hover {
  color: #515251; }

#wrapper.swyfftLayout {
  width: 100% !important; }

/*This is terrible*/
.font-size-28 {
  font-size: 28px; }

.font-size-15 {
  font-size: 15px; }

.font-weight-500 {
  font-weight: 500; }

h1 {
  font-weight: 300;
  color: #fff; }

h2 {
  text-transform: uppercase;
  font-weight: 400;
  margin: 0 0 13px;
  color: #686868; }

ul {
  list-style: none;
  padding: 0;
  margin: 0; }

a:hover {
  text-decoration: none; }

p {
  margin: 0 0 20px; }

#wrapper {
  position: relative;
  overflow: hidden; }

html[data-useragent*='MSIE 8.0'] #wrapper.home #header {
  background-color: #000; }

#wrapper.home #header .tell {
  margin: 0; }

#wrapper.home .navbar {
  display: none; }

#header, #header-without-top-navbar {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 102;
  padding: 3px 0;
  background: #000000; }

#header {
  top: -65px; }
  #header.header-component-cp {
    top: 0; }

html[data-useragent*='MSIE 8.0'] #header {
  top: 0; }

#header-without-top-navbar {
  padding: 13px 0 14px;
  background: transparent;
  position: absolute;
  display: none; }

#header .tell, #header-without-top-navbar .tell {
  float: right;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  margin: 0 0 0 0;
  position: relative;
  line-height: 43px;
  z-index: 99;
  text-transform: uppercase;
  padding: 8px 0; }

#header .tell {
  margin: 0 116px 0 0; }

#header #user-details .tell {
  min-width: 21%; }

#header .tell a, #header-without-top-navbar .tell a {
  color: #fff;
  font-weight: 400;
  margin: 0 0 0 5px; }

#EnhancedPersonalPropertyList {
  list-style: disc;
  margin-left: 50px; }

#EnhancedPersonalPropertyList li {
  padding-left: 15px;
  background: transparent !important; }

.navbar-toggle {
  position: absolute;
  /*right: 0;*/
  top: 20px;
  margin: 0;
  border: none;
  padding: 0;
  height: 20px;
  border-radius: 0;
  right: 15px; }

.navbar-toggle .icon-bar {
  background-color: #fff !important;
  width: 29px;
  height: 2px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  transform: rotate(45deg);
  margin: -3px 0 0 2px; }

.navbar-toggle .icon-bar:first-child {
  display: none; }

.navbar-toggle .icon-bar:last-child {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  margin: -3px 0 0 2px; }

.navbar-toggle.collapsed .icon-bar {
  -webkit-transform: rotate(0);
  -ms-transform: rotate(0);
  transform: rotate(0);
  margin: 4px 0 0; }

.navbar-toggle.collapsed .icon-bar:first-child {
  display: block;
  margin: 0; }

.navbar-toggle.collapsed .icon-bar:last-child {
  -webkit-transform: rotate(0);
  -ms-transform: rotate(0);
  transform: rotate(0);
  margin: 4px 0 0; }

.navbar {
  background: none;
  border: none;
  border-radius: 0; }

.navbar .nav {
  margin: 0;
  min-height: 52em;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 300; }

.navbar .nav li {
  /* ks 3/3/17 - Moved to 1.5% from 2.5% so that the hamburger menu doesn't expand off the bottom of the screen for admins. */
  margin: 0 0 1.5%; }

.navbar .nav li a {
  display: inline-block;
  vertical-align: top;
  padding: 0;
  color: #cfcece; }

.navbar .nav li a:hover {
  color: #fff; }

.navbar .logo {
  float: none;
  display: inline-block;
  vertical-align: top;
  width: 16.8%;
  margin: 3% 0 3% -28px; }

#hamburger-menu .logo {
  width: auto;
  margin-bottom: 50px;
  left: 10px; }

.navbar .mobile {
  display: none; }

.navbar .navbar-header {
  border: none; }

.navbar-collapse {
  border: none;
  box-shadow: none;
  text-align: center; }

.logo {
  float: left;
  position: relative;
  z-index: 200;
  width: 7%; }

.swyfftLayout .swyfftLayoutLogo,
.swyfftMenuLayout .swyfftLayoutLogo {
  min-width: 20px; }

.logo img {
  display: block;
  width: 100%; }

#swyfft-logo img {
  width: 54px !important;
  padding: 15px 0; }

#home.visual-sec .bg-stretch {
  width: 100%;
  height: 100%;
  background-image: url(../../images/HeroHome.jpg);
  background-color: #3C6585;
  background-size: cover; }

#home2.visual-sec .bg-stretch {
  width: 100%;
  height: 100%;
  background-image: url(../../images/BottomPhoto.jpg);
  background-color: #3C6585;
  background-size: cover; }

#contactUs .visual-sec .bg-stretch {
  background-image: url(../../images/HeroContact.jpg);
  background-color: #3C6585;
  background-size: cover; }

#about .visual-sec .bg-stretch {
  background-image: url(../../images/HeroAbout.jpg);
  background-color: #3C6585;
  background-size: cover; }

#faqs .visual-sec .bg-stretch {
  background-image: url(../../images/HeroFAQ.jpg);
  background-color: #3C6585;
  background-size: cover;
  background-position: bottom; }

#claims .visual-sec .bg-stretch {
  background-image: url(../../images/HeroClaims.jpg);
  background-color: #3C6585;
  background-size: cover; }

#login-hero .bg-stretch {
  background-image: url(../../images/HeroAgentLogin.jpg);
  background-color: #3C6585;
  background-size: cover; }

#dwellingInfo .visual-sec .bg-stretch {
  background-image: url(../../images/HeroSqFt.png);
  background-color: #3C6585;
  background-size: cover; }

#purchase-hero .bg-stretch {
  background-image: url(../../images/HeroPayment.jpg);
  background-color: #3C6585;
  background-size: cover; }

#crm-hero .bg-stretch {
  background-image: url(../../images/quote-map-hero-image.jpg);
  background-color: #3C6585;
  background-size: cover; }

#map-hero .bg-stretch {
  background-image: url(../../images/HeroAgentMap.jpg);
  background-color: #3C6585;
  background-size: cover; }

#address-hero {
  height: 240px; }

#address-hero .bg-stretch {
  background-image: url(../../images/HeroAgent.jpg);
  background-color: #3C6585;
  background-size: cover; }

.visual-sec {
  position: relative;
  overflow: hidden;
  height: 240px;
  /*min-height: 240px;*/ }

.visual-sec#confirmation-hero-image {
  height: 604px; }

.visual-sec#confirmation-hero-image .bg-stretch {
  background: url(../../images/HeroThankYou.jpg);
  background-size: cover; }

.visual-sec.visual-sec-short {
  height: 240px; }

.visual-sec.win-height {
  max-height: 100vh !important; }

.visual-sec.win-height .caption {
  text-align: center;
  padding: 195px 0 0 0; }

.visual-sec .bg-stretch {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0; }

.visual-sec .caption {
  text-align: left;
  padding: 45px 0 0 14px; }

/*rule below overrides site-module h1 rules due to css specificity*/
/*.visual-sec .caption h1 {
            margin: 0 auto 34px auto;
            letter-spacing: 0;
            width: 67%;
            color: #fff;
            font-size: 45px;
            text-transform: none;
            font-weight: 300;
            line-height: 55px;
            font-family: 'Lato' !important;
        }*/
.visual-sec .caption h1 strong {
  font-weight: 400; }

.visual-sec .caption h2 {
  margin: 0 auto 34px auto;
  letter-spacing: 0;
  width: 67%;
  color: #fff;
  font-size: 45px;
  text-transform: none;
  font-weight: 300;
  line-height: 55px;
  font-family: 'Lato' !important; }

.visual-sec .caption h2 strong {
  font-weight: 300; }

.visual-sec.add .caption {
  padding: 150px 0 0; }

.visual-sec.add .caption h1 {
  margin: 0 0 42px; }

/* ks 3/15/16 - form-quote is actually used on other pages besides the quote page */
.visual-sec.add .form-quote {
  padding: 0 .7% 0 0;
  width: 63.1%; }

.visual-sec.add .form-quote input[type="submit"] {
  width: 23.9%; }

.visual-sec.add .form-quote .input {
  overflow: hidden;
  width: 73.7%; }

/* Special attention to the styling of the homepage, and pages without nav headers, for medium/large viewport */
header#header + nav#quote-menubar + section #home.visual-sec .caption,
header#header + nav#quote-menubar + section .no-header .visual-sec .caption {
  margin-top: 0; }

/* Special attention to the contact us page styling */
header#header + nav#quote-menubar + section #contactUs .visual-sec .caption {
  margin-top: 70px; }

/* Ensures that caption text appears below nav bars */
header#header + nav#quote-menubar + section .visual-sec .caption {
  margin-top: 90px; }

#repriceInputSection {
  margin-top: 15px;
  margin-bottom: 30px; }

.form-quote {
  width: 59.6%;
  padding: 0 0 0 3%;
  margin: 0 auto; }

#about .form-quote {
  width: 90%; }

.hero-text-with-address-box {
  width: 100%;
  display: table; }

#contactUs .form-quote {
  width: 90%; }

#contactUs #address, #contactUs #btnSubmit, #termsQuote #address, #termsQuote #btnSubmit {
  height: 50px; }

#contactUs .main-section .article {
  padding: 100px 0 100px; }

#contactUs .main-section .article p {
  margin: 0; }

#claims {
  font-family: 'Lato', Arial, sans-serif; }

#claims h3 {
  font-size: 1.6em;
  line-height: 1.5;
  font-weight: 400; }

#claims .main-section .article a, #about .main-section .article a, #faqsSection a {
  color: #90bf3e;
  font-weight: 700; }

#claims .main-section .article {
  padding: 100px 0 100px;
  border-top: none;
  border-bottom: 2px solid #f4f3f4; }

#claims .main-section .article:last-child {
  border-bottom: none; }

#faqs .hero-text-with-address-box h1 {
  margin-bottom: 15px; }

#faqsSection > article:nth-child(6) {
  border-bottom: 2px solid #ebeaed; }

#faqsSection article {
  padding: 62px 0 25px; }

#faqsSection .container {
  max-width: 850px; }

#faqsSection.feature-area,
#quoteSection.feature-area {
  border-bottom: none !important; }

.agentCallDetails > div > div > h5 {
  font-weight: 700;
  font-size: 15px;
  word-spacing: 2px; }

.agentCallDetails {
  padding: 20px 0;
  background: #ebeaed; }

.form-quote .input {
  width: 73.7%;
  float: left; }

.form-quote input[type="submit"], .visual-sec input[type="button"] {
  width: 26.1%;
  float: left;
  letter-spacing: 0.5px; }

#aboutUsSection .article ul {
  list-style-type: disc;
  margin-left: 4%; }

#aboutUsSection .article ul li {
  line-height: 25px;
  margin-bottom: 15px; }

#aboutUsSection .article p {
  margin: 0 0 20px; }

#aboutUsSection .article ul li .bold-header {
  font-weight: 700; }

#aboutUsSection .article .margin-top-50px {
  margin-top: 50px !important; }

#aboutUsSection > article:nth-child(1) > div > div > div > h3 {
  color: #313131;
  margin: 0; }

.claims-main-section .main-section .article p {
  margin: 0 0 20px; }

#main > section > article:nth-child(1) > div > div > div > p.font-size-28 {
  line-height: 35px; }

.main-section {
  padding: 0 0 17px; }

.claims-main-section .main-section {
  padding: 0 0 0; }

#main .main-section > article:nth-child(4) {
  border-bottom: 2px solid #ebeaed; }

.main-section .article {
  padding: 123px 0 121px;
  border-top: 2px solid #ebeaed; }

.main-section .article p {
  margin: 0 0 36px; }

.main-section .article.value {
  padding: 127px 0 120px;
  font-weight: 300;
  font-size: 28px;
  line-height: 44px;
  min-height: 483px;
  color: #fff;
  background: #1c1c1e;
  border: none; }

.main-section .article.value p {
  margin: 0 0 46px; }

.aside {
  padding: 73px 0 40px 0;
  font-size: 11px;
  line-height: 22px;
  font-weight: 400;
  color: #888;
  text-transform: uppercase; }

.aside h2 {
  font-size: 12px;
  margin: 0 0 21px;
  font-weight: 700; }

.aside ul li {
  margin: 0 0 3px; }

.aside dl {
  margin: 0; }

.aside dl dt {
  font-weight: 400;
  float: left;
  margin: 0 0 5px; }

.aside dl dd {
  margin: 0 0 5px 15px; }

.aside p {
  margin: 0 0 4px; }

.aside .col-block {
  margin: 0 0 0 -42px; }

#footer {
  color: #9c9c9c;
  font-size: 12px;
  line-height: 20px;
  padding-bottom: 30px;
  font-weight: 700;
  border-top: 2px solid #f4f3f4; }

#footer a {
  color: #9c9c9c; }

#footer a:hover {
  color: #515251; }

#footer .proved-by {
  margin: 0 0 19px; }

#footer .proved-by li {
  display: inline-block;
  vertical-align: middle;
  margin: 0 3% 0 0; }

#footer .proved-by li img {
  display: block; }

.social-networks {
  letter-spacing: -4px;
  padding: 5px 0 0; }

.social-networks li {
  letter-spacing: 0;
  font-size: 16px;
  display: inline-block;
  vertical-align: top;
  margin: 0 6.3% 0 0 !important; }

.social-networks a {
  color: #616261 !important;
  display: block; }

.social-networks a.icon-email {
  margin: 1px 0 0; }

#main {
  overflow: hidden; }

.btn.btn-crm {
  /*padding: 15px 6% !important;*/
  display: none; }

/* See http://stackoverflow.com/questions/7273338/how-to-vertically-align-an-image-inside-div */
.vertical-align-helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle; }

#addressSearch {
  display: inline;
  width: 400px;
  position: relative;
  top: 5px;
  /*background-image: url("/images/search-icon.png");
    background-repeat: no-repeat;
    background-position-x: -20px;*/ }

#address-list {
  margin-left: 40px; }

.address-item {
  margin-top: 10px;
  font-size: 20px;
  color: #545554;
  font-weight: 400; }

.address-item:hover {
  background: whitesmoke; }

.address-item .address-pin {
  margin-top: 8px;
  float: left;
  height: 30px;
  width: 30px;
  background-image: url("../../images/GreenPin.png");
  background-repeat: no-repeat;
  background-size: 16px; }

.address-item .house-icon {
  margin-top: 8px;
  float: left;
  height: 30px;
  width: 30px;
  background-image: url("../../images/HouseIcon2.png");
  background-repeat: no-repeat;
  background-size: 24px; }

#addressInfoModal form label {
  margin-bottom: 0; }

.feature-area .container {
  max-width: 850px; }

.feature-area, .error-area {
  text-align: center;
  border-bottom: 2px solid #f4f3f4; }

.error-outline {
  padding: 150px 0 100px 0;
  background-color: #f9f9f9; }

.error-area {
  background-color: #fcfcfc;
  width: 100%;
  height: 100%; }

.error-area .error-block #errorText {
  color: #e492a2; }

.feature-area .feature-block, .error-area .error-block {
  padding: 72px 0 65px;
  border-top: 2px solid #f4f3f4;
  color: #6a6a6a;
  line-height: 29px; }

.feature-area h2, .error-area h2 {
  font-size: 20px;
  color: #505150;
  margin: 0 0 26px;
  font-weight: 700; }

.feature-area p, .error-area p {
  margin: 0 0 38px; }

#errorCode {
  font-size: 50px; }

#errorText {
  font-size: 25px; }

.feature-area .img {
  padding: 0 2.2% 0 0;
  text-align: center; }

.feature-area .img img {
  display: inline-block;
  width: 78px; }

.feature-area .img.img1 img {
  width: 84px; }

.feature-area .img.img2 img {
  width: 54px; }

.agent-admin-checkbox {
  overflow: hidden;
  cursor: default;
  height: 12px;
  width: 25px;
  background: #656666;
  transform: scale(1.5, 1.5); }

.jcf-checkbox {
  display: block;
  width: 100%;
  position: relative;
  overflow: hidden;
  cursor: default;
  height: 25px;
  background: #656666; }

.jcf-checkbox span {
  position: absolute;
  top: 13px;
  left: 10px;
  display: none; }

.jcf-checkbox input[type="checkbox"] {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 0;
  margin: 0;
  left: 0;
  top: 0;
  cursor: pointer; }

.jcf-checkbox.jcf-checked span {
  display: block; }

/*Custom jquery UI dialog box*/
.ui-dialog {
  box-shadow: 0 0 8px 1px #c8c8c8;
  border-radius: 0;
  font-family: 'Lato', Arial, sans-serif !important;
  transition: opacity .2s,visibility .2s;
  transition-delay: .1s;
  background: rgba(0, 0, 0, 0.8);
  height: 100% !important;
  left: 0 !important;
  position: fixed;
  top: 0 !important;
  bottom: 0 !important;
  width: 100% !important;
  z-index: 2500; }

.ui-widget input, .ui-widget button {
  font-family: 'Lato', Arial, sans-serif !important; }

.ui-widget-overlay {
  background: rgba(255, 255, 255, 0) url(../../images/ui-bg_flat_0_aaaaaa_40x100.html) 50% 50% repeat-x; }

.dialog-form {
  display: none;
  height: auto !important;
  margin: 0 auto;
  width: 630px !important;
  background: #fff !important;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  padding: 35px 50px; }

.dialog-form .buttonHolder {
  padding-bottom: 25px; }

#requiredSlidersModal .modal-title {
  text-align: center; }

#requiredSlidersModal .block {
  padding: 0 4%; }

@media (min-width: 1025px) {
  #requiredSlidersModal .modal-dialog {
    width: 940px; } }

.modal-footer .buttonHolder {
  padding-top: 25px;
  padding-bottom: 25px; }

.dialog-form p, .modal-body p {
  font-family: 'Lato';
  text-align: center;
  color: #757575;
  font-weight: 700;
  margin: 0; }

.dialog-form .address, .modal-body .address {
  color: #6C6C6C;
  font-style: italic;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.6px; }

.dialog-form input[type="text"], .dialog-form input[type="email"],
.modal-body input[type="text"], .modal-body input[type="email"] {
  color: #515251;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  padding: 16px 23px;
  width: 100%;
  height: 56px;
  box-shadow: none;
  border: 1px solid #c6c6c6;
  border-radius: 0; }

.modal-body .buttonHolder {
  margin-top: 10px; }

.dialog-form textarea {
  resize: none;
  width: 100%;
  overflow: auto;
  color: #6e6e6f;
  font-size: 18px; }

.input-holder textarea {
  width: 100%;
  padding: 16px 23px; }

.dialog-form .input-holder {
  margin-bottom: 50px; }

.dialog-form .input-holder label strong {
  font-size: 90%; }

.dialog-form input[type="submit"]:hover, .btn-default:hover, .btn-default:focus, .btn-default.focus, .btn-default:active, .btn-default.active {
  color: #fff !important;
  background-color: #81AD34 !important;
  border: 2px solid #81AD34; }

.dialog-form .btn.btn-quote, .modal .btn.btn-quote {
  background: none;
  color: #626363;
  border: 2px solid #9e9f9e; }

.dialog-form .btn.btn-quote:hover, .modal .btn.btn-quote:hover {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad; }

.dialog-form input[type="button"],
.modal-footer input[type="button"] {
  width: 240px;
  height: auto;
  float: right;
  font-weight: 700;
  padding: 15px 0; }

.dialog-form #updateCRM,
.modal-body #updateCRM {
  float: left; }

.dialog-form input[type="text"]::-webkit-input-placeholder, .dialog-form input[type="email"]::-webkit-input-placeholder {
  color: #656565; }

.dialog-form input[type="text"]:-moz-placeholder, .dialog-form input[type="email"]:-moz-placeholder {
  /* Firefox 18- */
  color: #656565; }

.dialog-form input[type="text"]::-moz-placeholder, .dialog-form input[type="email"]::-moz-placeholder {
  /* Firefox 19+ */
  color: #656565; }

.dialog-form input[type="text"]:-ms-input-placeholder, .dialog-form input[type="email"]:-ms-input-placeholder {
  color: #656565; }

/* custom radio styles */
.jcf-radio {
  display: block;
  width: 100%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  height: 34px;
  background: #dededd; }

.jcf-radio:hover {
  cursor: pointer; }

.options-check .jcf-radio {
  height: 56px; }

.jcf-radio span {
  position: absolute;
  top: 13px;
  left: 10px;
  display: none; }

.jcf-radio input[type="radio"] {
  position: absolute;
  height: 100%;
  width: 100%;
  border: 0;
  margin: 0;
  left: 0;
  top: 0; }

.jcf-radio.jcf-checked span {
  display: block; }

.jcf-disabled:hover {
  cursor: default; }

.payment-area, #cancellationForm {
  padding: 0 0 30px; }

.payment-area .head {
  padding: 15px 0 33px;
  background: #f0eff1; }

.payment-area .head .price {
  display: block;
  font-size: 26px;
  color: #686868;
  font-weight: 300;
  letter-spacing: -1px;
  line-height: 40px;
  margin: 19px 0 12px 0; }

.payment-area .head .price strong {
  color: #90bf3e;
  font-size: 40px;
  font-weight: 700; }

.payment-area .head .time-info {
  display: block;
  color: #505150;
  font-weight: 400;
  font-size: 14px;
  line-height: 34px; }

.payment-area .head .time-info strong {
  font-weight: 700; }

.payment-area .head .time-info .img {
  margin: -4px 4.4% 0 5px;
  display: inline-block;
  vertical-align: middle; }

.payment-area .head .time-info .img img {
  display: block;
  width: 25px;
  height: auto; }

.payment-area .head .list {
  font-size: 14px;
  padding: 21px 0 0 5.7%;
  color: #2c2c2c; }

.payment-area .head .list li {
  margin: 0 0 5px;
  position: relative;
  padding: 0 0 0 42px; }

.payment-area .head .list li.active:after {
  position: absolute;
  content: "\E605";
  left: 0;
  top: -6px;
  font-family: "icomoon";
  font-size: 18px;
  color: #7b7778; }

.payment-area .form-payment {
  padding-bottom: 88px; }

.payment-area .form-payment .paymentDetails {
  padding: 20px 0 40px 0; }

#cancellationForm .form-cancellation, .login-area .form-login,
#contactForm .form {
  padding: 55px 0 40px 0; }

.payment-area .form-payment #labelAddress {
  margin-bottom: 15px; }

.payment-area .form-group:before,
.payment-area .form-group:after {
  content: " ";
  display: table; }

.payment-area .form-group:after {
  clear: both; }

.payment-area .form-group .cell {
  float: right;
  width: 42.2%; }

.payment-area .form-group .cell:first-child {
  float: left;
  width: 51.8%; }

.payment-area .form-group.card {
  margin: 0 0 35px 15px; }

.payment-area .form-group.card .cell {
  width: 45.2%; }

.payment-area .form-group.card .cell:first-child {
  width: 52.6%; }

.payment-area .form-group.echeck-authorization {
  margin: 15px 0 35px 15px; }

.payment-area .form-group.card-info {
  margin: 0 0 35px 15px;
  padding: 0 60.4% 0 0; }

.payment-area .form-group.card-info .cell {
  width: 40.1%; }

.payment-area .form-group.echeck {
  margin: 0 0 35px 15px;
  width: 100%; }

.payment-area .echeck-example {
  margin: 0 0 35px 15px;
  /*position: absolute;
        bottom: 0;
        right: 0;*/ }

.payment-area .payments-cards {
  letter-spacing: -4px;
  padding: 7px 0 0; }

.payment-area .payments-cards li {
  margin: 0 15px 0 0;
  display: inline-block;
  vertical-align: middle; }

.payment-area .icon-lock {
  margin: 0 0 0 15px;
  font-size: 20px;
  color: #a5a5a5; }

.payment-area label.add, .login-holder label.add {
  font-size: 16px;
  text-transform: none;
  font-weight: 700;
  display: inline-block;
  cursor: pointer; }

div.payment-holder label {
  font-weight: 400;
  text-transform: initial;
  margin: 0; }

.payment-area .jcf-radio {
  margin: 5px 14px 0 0;
  display: inline-block;
  vertical-align: middle;
  border-radius: 100%;
  width: 25px;
  height: 25px;
  background: none;
  border: 2px solid #90bf3e; }

.payment-area .jcf-radio.jcf-checked span {
  left: 5px;
  top: 5px;
  border-radius: 100%;
  background: #90bf3e;
  width: 11px;
  height: 11px; }

.payment-area .jcf-radio.jcf-unchecked {
  border: 2px solid #ccc; }

.payment-area .payment-holder, .payment-area .cancellation-form-holder,
.login-area .login-holder {
  padding: 0 9999px 0;
  margin: 0 -9999px 0; }

.payment-area .payment-holder {
  padding: 20px 9999px 0 0;
  margin: 0 -9999px 0 15px; }

.payment-area .cancellation-form-holder, #contactForm .form-holder {
  padding: 0 9999px 0 0;
  margin: 0 -9999px 0 15px; }

#crm-section .payment-holder {
  margin: 0 -9999px 0 10px; }

.payment-area .termsGroup {
  margin-left: 15px;
  margin-top: 35px; }

/*.payment-area .termsGroup #payment-btn-area {
        padding: 0 15px;
    }*/
.login-holder #unauthorizedErrorLabel {
  height: 15px;
  display: block;
  margin-bottom: 10px; }

#billingAddress .form-group .cell {
  width: 47%; }

.pdleft_40 {
  padding-left: 40px; }

/*.defaultValue {
    color: #90bf3e !important;
}*/
.payment-area .payment-options {
  overflow: hidden;
  padding: 0 0 36px;
  background: #ebeaed; }

#paymentForm .payment-options .premiumOptions > div:nth-child(3) > label {
  width: 100%; }

.payment-area .payment-options label .premiumAmtEscrow {
  font-size: 12px;
  line-height: 12px;
  text-transform: none; }

/*.payment-area .col-xs-12 {
    padding-left: 0 !important;
    padding-right: 0 !important;
}*/
.payment-area .payment-options .premiumOptions {
  padding: 40px 115px 40px 14px; }

.payment-area .payment-options label {
  font-size: 16px;
  font-weight: 400;
  text-transform: none;
  /*width: 200px;*/
  color: #525352; }

.payment-area .payment-options label strong {
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  display: block;
  text-transform: uppercase;
  color: #313131;
  padding-left: 37px; }

.payment-area .payment-options label em {
  font-style: normal;
  font-size: 18px; }

.payment-area .payment-options .cell {
  float: left;
  width: 33%; }

.payment-area .payment-options .cell.add label {
  vertical-align: middle;
  margin: 0 20px 0 0; }

.payment-area .jcf-checkbox, .login-holder .jcf-checkbox {
  width: 25px;
  height: 25px;
  border: 2px solid #ccc;
  background: #fff;
  float: left;
  margin: 2px 15px 0 0; }

.payment-area .jcf-checkbox.jcf-checked span,
.login-holder .jcf-checkbox.jcf-checked span {
  position: relative;
  border: none;
  height: auto;
  width: auto; }

.payment-area .jcf-checkbox.jcf-checked span:after,
.login-holder .jcf-checkbox.jcf-checked span:after {
  font-family: "icomoon";
  content: "\E605";
  font-size: 15px;
  position: absolute;
  left: -9px;
  top: -16px;
  color: #90bf3e; }

.payment-area .save-money {
  border: 2px solid #ee6623;
  padding: 0 9px;
  margin: 8px 0 4px 0;
  color: #ee6623;
  font-weight: 400;
  border-radius: 7px;
  font-size: 12px;
  text-transform: uppercase;
  display: inline-block;
  vertical-align: top; }

.btn.gray-btn {
  margin-left: 9em; }

.payment-area .form-control {
  color: #555655; }

.payment-area label.add {
  display: inline-block; }

.payment-area label.add, .login-holder label .add {
  cursor: pointer; }

.errorLabel {
  color: #B03131;
  font-size: 14px;
  font-weight: 400;
  text-transform: initial;
  text-align: left;
  display: none;
  line-height: 1.5; }

.errorLabelOn {
  color: #B03131;
  font-size: 14px;
  font-weight: 400;
  text-transform: initial;
  text-align: left;
  display: block;
  line-height: 1.5; }

.errorLabelOnPrimary {
  color: #B03131;
  font-size: 18px;
  font-weight: 400;
  text-transform: initial;
  text-align: left;
  display: block;
  line-height: 1.5; }

html[data-useragent*='MSIE 9.0'] .errorLabel {
  text-transform: none; }

.hero-error-label {
  color: #FFFFFF;
  font-size: 12px;
  font-weight: 700;
  text-align: left;
  text-transform: capitalize; }

/* Text on a hero-image, which needs to look different than normal*/
.hero-text {
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  text-transform: none; }

.hero-text a {
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 400;
  text-decoration: underline; }

.payment-holder input[name=email], .dialog-form #emailIDTxtBox, .modal-body #email {
  text-transform: lowercase; }

.payment-holder input[name=email]:-ms-input-placeholder,
.dialog-form #emailIDTxtBox:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  text-transform: none !important; }

/* enable absolute positioning */
.inner-addon {
  position: relative; }

/* style glyph */
.inner-addon .glyphicon {
  position: absolute;
  padding: 16px;
  pointer-events: none; }

/* align glyph */
.left-addon .glyphicon {
  left: 0; }

.right-addon .glyphicon {
  right: 0; }

/* add padding  */
.left-addon input {
  padding-left: 30px; }

.right-addon input {
  padding-right: 30px; }

/*Custom Datepicker textbox Style*/
.relativePosition {
  position: relative; }

#fullCoverageStartDate {
  width: 100%;
  display: inline-block;
  float: left; }

#fullCoverageDatepicker .inner-addon {
  width: 58px;
  float: left;
  position: absolute;
  top: 0;
  right: 0; }

#fullCoverageDatepicker .inner-addon #datePicker {
  border-left-color: transparent;
  border-bottom-color: transparent;
  outline: none;
  background-color: transparent;
  color: transparent;
  cursor: pointer; }

#fullCoverageDatepicker .box {
  border: 1px solid #ccc;
  padding: 10px 18px 10px; }

#fullCoverageDatepicker .alert-danger-box {
  border: 1px solid #B03131 !important;
  border-left: none !important;
  border-bottom: none !important; }

#fullCoverageDatepicker label {
  display: inline-block;
  margin: 0;
  text-transform: none;
  font-weight: 700; }

#fullCoverageDatepicker #selectedCoverageStartDate {
  outline: none;
  width: 200px;
  padding-left: 0;
  padding-right: 0; }

#selectedCoverageStartDate {
  line-height: 0; }

#fullCoverageDatepicker > div > div.box.alert-danger > strong #selectedCoverageStartDate {
  background-color: #f2dede !important; }

/*Confirmation Page*/
#cancellationForm {
  font-weight: 400; }

#cancellationForm.payment-area .form-group .cell:first-child {
  float: left;
  width: 47%; }

#cancellationForm.payment-area .form-group .cell {
  float: right;
  width: 47%; }

#cancellationForm p {
  font-size: 15px;
  font-weight: 400; }

#cancellationForm label.bold-header {
  font-weight: 700;
  margin: 0 0 20px;
  font-size: 15px; }

#mail-sent-info {
  padding: 0 0 20px 0; }

#cancellationForm hr {
  margin: 0; }

#cancellationForm #electronicSignature {
  border: 1px solid #A1B393; }

#cancellationForm #electronicSignature::-webkit-input-placeholder {
  color: #799F6D; }

#cancellationForm #electronicSignature:-moz-placeholder {
  /* Firefox 18- */
  color: #799F6D; }

#cancellationForm #electronicSignature::-moz-placeholder {
  /* Firefox 19+ */
  color: #799F6D; }

#cancellationForm #electronicSignature:-ms-input-placeholder {
  color: #799F6D; }

#cancellation-request-info label.add {
  color: #6e6e6f;
  font-size: 15px;
  margin-bottom: 20px; }

.ui-menu .ui-menu-item {
  padding: 10px 1em;
  font-size: 16px;
  font-weight: 400;
  color: #515251;
  font-family: 'Lato', Arial, sans-serif; }

li.defaultValue span.labelValue {
  left: -12.5%;
  position: inherit; }

#cancellationForm #mail-sent-info h4,
#cancellationForm #mail-sent-info h4 #emailID {
  font-size: 28px;
  font-weight: 300;
  margin-top: 0; }

#cancellationForm #mail-sent-info h4 #emailID {
  font-weight: bold; }

.cancellationCalendarIcon {
  position: absolute;
  top: 0;
  right: 0; }

#cancellationDatePicker {
  cursor: pointer; }

/*Quote-Map Page*/
#quote-map hr, #quote-history hr {
  margin-top: 25px;
  margin-bottom: 0;
  /* Set the hr color */
  color: #EFEEEE;
  /* old IE */
  background-color: #EFEEEE;
  /* Modern Browsers */ }

#quote-map #search, #quote-history .search {
  padding: 25px 27.8% 0 .9%; }

.search {
  padding-top: 20px;
  padding-bottom: 10px; }

#quote-map .form-group, #quote-history .form-group {
  margin: 0; }

.search-box input[type=search] {
  width: 80%;
  padding-left: 18px;
  padding-right: 18px;
  display: inline; }

/*Quote-Map Page*/
#quote-map #search {
  padding: 25px 27.8% 0 .9%; }

#quote-map .search-box input[type=search] {
  width: 80%;
  font-weight: 400; }

input:focus, button:focus, textarea:focus, select:focus {
  outline: none !important; }

a:active, a:focus {
  -moz-outline-style: none;
  outline-style: none;
  text-decoration: none; }

#user-details, #customer-care-call-details {
  display: none; }

html[data-useragent*='MSIE 8.0'] #customer-care-call-details {
  display: block; }

html[data-useragent*='MSIE 8.0'] #footer .col-xs-12 {
  width: auto; }

/*Swyfft-Menu-Layout Page*/
nav#quote-menubar {
  position: fixed;
  left: 0;
  top: 65px;
  display: none;
  right: 0;
  z-index: 100;
  overflow: hidden;
  background: white; }

nav#quote-menubar ul {
  display: table;
  margin: 0 auto; }

nav#quote-menubar ul.nav > li > a {
  padding: 10px 45px;
  color: #000;
  font-weight: 700;
  font-size: 17px; }

nav#quote-menubar ul.nav-tabs {
  border-bottom: none; }

#quote-menubar .nav-tabs > li > a:hover {
  border-color: transparent !important; }

#quote-menubar .nav > li > a:hover,
#quote-menubar .nav > li > a:focus {
  background-color: transparent !important;
  color: #90bf3e !important; }

.highlight {
  color: #90bf3e !important; }

/*Quote-CRM -Page*/
#crm-section .payment-holder .form-group h5 {
  text-transform: uppercase;
  font-weight: bold;
  color: #000;
  font-family: 'Lato', Arial, sans-serif !important; }

#crm-section .form-group textarea {
  height: 200px;
  max-height: 200px;
  max-width: 800px; }

#crm-section select {
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url(../../images/dropdown_arrow.png) 99% center no-repeat #fff;
  padding: 5px;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 0;
  font-size: 16px;
  background-size: 48px;
  line-height: 20px;
  white-space: normal; }

select::-ms-expand {
  display: none; }

.left-border {
  border-left: 1px solid #c3c3c3;
  position: absolute;
  top: 78px;
  right: 215px;
  padding-top: 44px;
  margin: 0; }

#crm-results {
  padding: 11px !important;
  height: 44px; }

#crm-section option {
  text-transform: capitalize !important; }

#crm-section select option.active {
  color: #90bf3e; }

/*.historyDialog .input-holder label strong {
    text-transform: uppercase;
    font-size: 15px !important;
    font-family: 'Lato', Arial, sans-serif !important;
}

.historyDialog .input-holder {
    margin-bottom: 35px !important;
}

.historyDialog input[type="submit"], .historyDialog input[type="button"] {
    width: 180px !important;
    padding: 10px 0 !important;
}

.historyDialog .buttonHolder {
    width: 85%;
    margin: 0 auto;
}

.historyDialog textarea {
    font-size: 15px !important;
}*/
.termsText {
  line-height: 24px;
  margin-bottom: 10px;
  font-size: 90%; }

.modal-height {
  max-height: 400px;
  overflow: auto; }

.custom-combobox {
  position: relative;
  display: inline-block;
  width: 100%; }

.custom-combobox-toggle {
  position: absolute;
  top: 0;
  bottom: 0;
  margin-left: -1px;
  padding: 0;
  border-radius: 0;
  /*width: 56px;*/
  height: 56px; }

button.ui-button-icon-only.custom-combobox-toggle {
  width: 3em; }

.custom-combobox-input.ui-autocomplete-input {
  margin: 0;
  /*padding: 5px 10px;*/
  width: 89% !important;
  height: 56px;
  color: #515251;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 18px;
  padding: 16px 23px !important;
  border-radius: 0;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  -webkit-appearance: none;
  text-align: left !important; }

input[disabled].custom-combobox-input.ui-autocomplete-input {
  opacity: 1 !important;
  color: #515251 !important;
  -webkit-text-fill-color: #515251 !important; }

.custom-combobox-toggle.ui-state-default .ui-icon {
  background: url(../../images/dropdown_arrow.png) center center no-repeat transparent; }

.custom-combobox-toggle.ui-button-icon-only .ui-icon {
  left: 0;
  top: 0; }

.custom-combobox-toggle .ui-icon {
  /*width: 54px;
    height: 54px;*/
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
  margin: 0; }

.flip-drop-arrow {
  -moz-transform: scaleY(-1);
  -o-transform: scaleY(-1);
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
  filter: FlipV;
  -ms-filter: "FlipV"; }

.ui-autocomplete {
  max-height: 200px;
  overflow-y: auto;
  /* prevent horizontal scrollbar */
  overflow-x: hidden;
  z-index: 99 !important; }

ul.ui-autocomplete li a.active:before {
  content: "\2713   "; }

ul.ui-autocomplete li a.active {
  color: #90bf3e !important;
  padding: 15px 7px !important; }

/*Edit CRM Popup*/
.dialog-form button.ui-button-icon-only.custom-combobox-toggle {
  width: 56px; }

label#characterLeft {
  visibility: hidden;
  display: block !important;
  text-transform: none;
  font-size: 12px;
  margin: 2px 0 0 10px;
  padding: 0;
  font-family: 'Lato', Arial, sans-serif !important;
  font-weight: bold;
  line-height: 36px; }

#characterLeft input[disabled] {
  opacity: 1 !important;
  background: #fff;
  border: none;
  width: 26px;
  padding: 0 2px;
  font-size: 12px;
  font-family: 'Lato', Arial, sans-serif !important;
  text-align: center;
  height: 15px !important;
  color: #515251 !important; }

#crm-section label#characterLeft {
  line-height: 44.5px; }

#crm-section #characterLeft input[disabled] {
  height: 27px !important; }

/*Contact Page*/
#contactForm .form-holder label {
  text-transform: none; }

#contactForm.payment-area .form-group .cell:first-child,
#contactForm.payment-area .form-group .cell {
  width: 46%; }

#contactForm textarea {
  max-width: 100%;
  width: 100%;
  max-height: 175px; }

/*Custom Calender Control*/
#ui-datepicker-div {
  margin: 0 auto !important;
  width: 100%;
  top: 331px;
  position: absolute !important;
  left: 0 !important;
  right: 0 !important; }

.ui-datepicker .ui-datepicker-title {
  color: #90bf3e;
  display: inline-block;
  width: 40em; }

.ui-datepicker table {
  width: 96% !important;
  margin: 0 auto !important; }

.ui-datepicker .ui-datepicker-header {
  background: #fff !important;
  border: none;
  text-align: center;
  width: 96%;
  margin: 0 auto; }

.ui-datepicker .ui-datepicker-next {
  width: 30px;
  margin-right: 20em; }

.ui-datepicker .ui-datepicker-prev {
  width: 30px;
  margin-left: 18em; }

#ui-datepicker-div .ui-state-disabled {
  top: 0 !important; }

.ui-datepicker-prev-hover, .ui-datepicker-next-hover {
  border: none !important; }

#ui-datepicker-div table tbody > tr {
  width: 20% !important; }

.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default {
  padding: 0;
  text-align: center;
  font-size: 45px;
  font-family: 'Lato';
  font-weight: 700;
  color: #686868;
  line-height: 1.3; }

.ui-slider-disabled {
  top: 0 !important; }

.ui-slider-disabled .ui-slider-handle:hover {
  cursor: default; }

.ui-datepicker td {
  padding: 10px;
  width: 10%; }

#ui-datepicker-div table thead {
  display: none; }

#ui-datepicker-div > table > tbody > tr > td > span {
  padding: 24px 0;
  border: 1px solid; }

.ui-datepicker-prev span {
  background-image: url("../../images/previous.png") !important;
  background-position: 0 0 !important;
  cursor: pointer; }

.ui-datepicker-next span {
  background-image: url("../../images/next.png") !important;
  background-position: 0 0 !important;
  cursor: pointer; }

#ui-datepicker-div .ui-state-disabled .ui-icon {
  cursor: default; }

#ui-datepicker-div .ui-icon {
  width: 30px;
  height: 30px;
  margin-left: -15px;
  margin-top: -15px; }

.ui-datepicker .ui-datepicker-next-hover {
  right: 2px !important;
  top: 2px !important; }

.ui-datepicker .ui-datepicker-prev-hover {
  left: 2px !important;
  top: 2px !important; }

input[type=search].ui-autocomplete-input {
  line-height: normal; }

iframe.claims {
  margin: 0;
  padding: 0;
  border: none;
  width: 100%;
  /*min-width: 700px;
    min-height: 750px;
    overflow: hidden;*/ }

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .errorLabel {
    text-transform: none; }
  #history-list .block img {
    max-height: 26px;
    padding-top: 5px; }
  #history-list .btn-info {
    line-height: 1.7; } }

/*Error Page*/
.wrap {
  margin: 0 auto;
  width: 1000px; }

.sub-container {
  margin-top: 50px; }

.sub-container h2 {
  font-family: 'Courgette', cursive;
  font-size: 200px;
  color: #8F8E8C;
  text-align: center;
  margin-bottom: 1px;
  text-shadow: 1px 1px 6px #fff; }

.sub-container p {
  font-family: 'Courgette', cursive;
  color: #e492a2;
  font-size: 20px;
  margin-top: 1px;
  text-align: center; }

.sub-container p span {
  font-family: 'Courgette', cursive;
  color: lightgreen; }

.sub a {
  font-family: 'Courgette', cursive;
  color: white;
  background: #8F8E8C;
  text-decoration: none;
  padding: 7px 120px;
  font-size: 13px;
  font-family: arial, serif;
  font-weight: bold;
  -webkit-border-radius: 3em;
  -moz-border-radius: .1em;
  -border-radius: .1em; }

/*Auto-Complete Styling*/
.ui-autocomplete.ui-menu .ui-menu-item.ui-state-focus {
  background: #c8c8c8 !important;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  border: none; }

.ui-autocomplete.ui-corner-all {
  border-radius: 0;
  -webkit-border-radius: 0;
  -moz-border-radius: 0; }

.ui-autocomplete.ui-menu {
  background: rgba(255, 255, 255, 0.91) !important;
  padding: 0; }

.ui-autocomplete.ui-menu li {
  padding: 15px 21px;
  border: 0;
  line-height: normal; }

.ui-menu .ui-menu-item.ui-state-focus, .ui-menu .ui-menu-item.ui-state-active {
  margin: 0; }

/* Progressbar */
/* Make clicks pass-through */
#nprogress {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2501;
  background: transparent; }

#nprogress .bar {
  background: #BADA55;
  position: fixed;
  z-index: 105;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px; }

/* Css menu of History and Map*/
ul#cssmenu {
  margin: 0;
  list-style: none;
  background-color: #FFFFFF;
  border-width: 0;
  border-style: solid;
  font-size: 0;
  position: relative;
  display: inline-block;
  zoom: 1;
  width: 100%;
  padding: 0;
  background-color: #fff;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
  *display: inline; }

ul#cssmenu li {
  position: relative;
  display: inline-block;
  white-space: nowrap;
  font-size: 0; }

ul#cssmenu li:hover {
  z-index: 1; }

ul#cssmenu li a {
  display: inline-block;
  text-align: center; }

ul#cssmenu > li {
  margin: 0;
  width: 24.5%; }

ul#cssmenu > .showall.active {
  border-bottom: 4px solid #7a7a7a; }

ul#cssmenu > .showall.active > a {
  color: #7a7a7a; }

ul#cssmenu > .retrieved.active {
  border-bottom: 4px solid #E89A23;
  color: #E89A23; }

ul#cssmenu > .retrieved.active > a {
  color: #E89A23; }

ul#cssmenu > .email.active {
  border-bottom: 4px solid #48A4DC;
  color: #48A4DC; }

ul#cssmenu > .email.active > a {
  color: #48A4DC; }

ul#cssmenu > .purchase.active {
  border-bottom: 4px solid #91BE3F;
  color: #91BE3F; }

ul#cssmenu > .purchase.active > a {
  color: #91BE3F; }

ul#cssmenu a:active, ul#cssmenu a:focus {
  outline-style: none; }

ul#cssmenu a {
  display: block;
  vertical-align: middle;
  text-align: left;
  text-decoration: none;
  font: 13px Open Sans,Arial,sans-serif;
  color: #787878;
  cursor: pointer;
  padding: 3px;
  background-repeat: repeat;
  border-width: 0;
  border-style: none; }

ul#cssmenu > li > a {
  padding: 10px 12px; }

ul#cssmenu li > a {
  background-color: #fff;
  border-radius: 0;
  font-size: 16px;
  font-weight: 400;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  padding: 20px 12px;
  text-align: center; }

ul#cssmenu li.showall > a {
  padding: 26.5px 12px; }

ul#cssmenu li:hover > a, ul#cssmenu li a.pressed {
  border-style: none;
  text-decoration: none;
  background-color: #F9F9F9;
  border-style: solid;
  border-color: #D3D2D2 #D3D2D2 #DB3937 transparent;
  -webkit-tap-highlight-color: #FFF !important; }

ul#cssmenu li:focus > a.active, ul#cssmenu li:hover > a.active {
  background-color: #FFF !important; }

ul#cssmenu img {
  vertical-align: middle;
  padding-right: 10px; }

#filter-history {
  line-height: normal; }

.labelDisplay {
  display: block !important; }

div#holder {
  position: relative; }

.hidden {
  display: none; }

div.mapOverlay {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #fff;
  opacity: 0.7;
  z-index: 1; }

div.mapOverlay.standard {
  background: #fff url(../../images/loading.gif) no-repeat 50% 50%;
  height: 200px; }

.positiveNumber {
  color: black; }

.negativeNumber {
  color: #d9534f; }

@media print {
  /* BEGIN DEFAULT PRINT STYLING */
  body {
    background: #fff;
    color: #000;
    font-size: 8pt;
    line-height: 150%;
    margin: 0px; }
  hr {
    color: #ccc;
    background-color: #ccc; }
  h1, h2, h3, h4, h5, h6, code, pre {
    color: #000;
    text-transform: none;
    margin-top: 2em;
    margin-bottom: 1em; }
  h1 {
    font-size: 11pt;
    font-weight: 700; }
  h2 {
    font-size: 10pt;
    font-weight: 700; }
  h3 {
    font-size: 9pt;
    font-weight: 700; }
  h4, h5, h6 {
    font-size: 8pt; }
  code, pre {
    font-size: 8pt;
    background-color: transparent; }
  blockquote {
    background-image: none; }
  a:link, a:visited {
    text-decoration: underline;
    color: #000; }
  abbr:after, acronym:after {
    content: " (" attr(title) ") "; }
  /* END DEFAULT PRINT STYLING */
  /* specify page break preferences */
  h1, h2, h3 {
    /* We'd rather not have page break right after a major heading */
    page-break-after: avoid;
    break-after: avoid; }
  footer#footer {
    padding-bottom: 5pt; }
  footer#footer h2 {
    margin-bottom: 0pt; }
  footer#footer > div.aside.container {
    padding: 13pt 0 10pt 0; }
  .aside ul li {
    margin: 0 0 1px; }
  footer#footer h2 {
    font-size: 7pt; }
  footer#footer li {
    font-size: 6pt; } }

#errorModal {
  z-index: 5000; }

.hamburger-icon-ly {
  z-index: 201; }

.noscroll {
  overflow: hidden !important; }

#hubLogoContainer {
  display: none; }

#hubBlurb {
  display: none; }

.svg-cp svg {
  width: 100%;
  height: 100%; }

.svg-cp path, .svg-cp g, .svg-cp use {
  fill: currentColor; }

/* Overrides for tablet-size form factors (e.g., 768 < width < MAX) */
/* ks 2/3/16 - We really need to figure out how to simplify all this. 
    We simply can't be very agile when there are this many weird, one-off customizations. 
    It makes it virtually impossible to test everything that needs to be tested, and because it's
    all CSS, none of the testing can be automated. Worth spending some time on it.
*/
@media only screen and (max-width: 1229px) {
  .visual-sec .caption h2 {
    width: 85%; }
  nav#quote-menubar {
    top: 65px; } }

@media only screen and (max-width: 1199px) {
  nav#quote-menubar {
    top: 65px; }
  /*Calendar control*/
  .ui-datepicker .ui-datepicker-prev {
    margin-left: 4em; }
  .ui-datepicker .ui-datepicker-next {
    margin-right: 6em; }
  .ui-datepicker .ui-datepicker-title {
    width: 36em; } }

@media only screen and (max-width: 1025px) {
  .payment-area .head .list {
    padding: 21px 0 0; }
  .payment-area .form-payment {
    padding-bottom: 88px; }
  .payment-area .payment-holder, #contactForm .form-holder {
    padding: 0 10039px 0 0;
    margin: 0 -9999px 0 16px; }
  .payment-area .cancellation-form-holder {
    padding: 0 9795px 0 0;
    margin: 0 -9999px 0 16px; }
  .payment-area .payment-options .premiumOptions {
    padding: 40px 25px; }
  .payment-area .termsGroup {
    margin-left: 25px; }
  .payment-area .form-payment .paymentDetails {
    padding: 45px 0 0 0; }
  #contactForm .form {
    padding: 45px 0 0 0; }
  #mail-sent-info {
    padding: 0 0 20px 0; }
  .visual-sec .caption h2 {
    width: 85%;
    font-size: 35px; }
  #pagination > li.prev {
    margin-right: 15%; }
  #pagination > li.next {
    margin-left: 15%; }
  #demo .col-xs-12 {
    padding: 0 7%; }
  nav#quote-menubar {
    top: 65px; } }

@media only screen and (max-width: 990px) and (min-width: 801px) {
  nav#quote-menubar {
    top: 65px; }
  #ui-datepicker-div {
    width: 98%; } }

@media only screen and (max-width: 800px) and (min-width: 768px) {
  nav#quote-menubar {
    top: 65px; }
  /*Calendar control*/
  #ui-datepicker-div {
    width: 98%; }
  #about .form-quote .input {
    width: 100%;
    margin-bottom: 7px; }
  #about .visual-sec input[type="button"] {
    float: none;
    width: 183px; } }

@media only screen and (max-width: 990px) and (min-width: 768px) {
  #pagination > li.prev {
    margin-right: 10%; }
  #pagination > li.next {
    margin-left: 10%; } }

/* Overrides for cell-phone-sized form factors (e.g., < 768px) */
/* ks 2/3/16 - We really need to figure out how to simplify all this. 
    We simply can't be very agile when there are this many weird, one-off customizations. 
    It makes it virtually impossible to test everything that needs to be tested, and because it's
    all CSS, none of the testing can be automated. Worth spending some time on it.
*/
@media only screen and (max-width: 767px) {
  body {
    font-size: 14px;
    /*line-height: 23px;*/ }
  h1 {
    font-size: 26px; }
  h2 {
    font-size: 18px;
    margin: 0 0 10px; }
  .visual-sec input[type="text"],
  .visual-sec input[type="email"] {
    height: 48px;
    font-size: 14px;
    padding: 16px 14px;
    line-height: 16px; }
  /* Special attention to the home page styling for a small viewport */
  header#header + nav#quote-menubar + section #home.visual-sec .caption {
    padding-top: 110px; }
  /* Special attention to the claims page styling for a small viewport */
  header#header + nav#quote-menubar + section #claims .visual-sec .caption {
    margin-top: 90px; }
  /* override medium/large viewport styling to ensure proper look and feel for a small viewport */
  header#header + nav#quote-menubar + section section.visual-sec .caption,
  header#header + nav#quote-menubar + section :not(.no-header) section.visual-sec .caption {
    padding-top: initial; }
  #dwellingInfo .form-quote {
    padding: 0;
    width: 100%; }
  #header {
    background: #000000 !important; }
  #header .tell {
    margin: 0 45px 0 0;
    text-align: right; }
  #header-without-top-navbar .tell {
    margin: 0; }
  .logo {
    width: 50px; }
  .logo img {
    display: block;
    width: 100%; }
  .visual-sec {
    height: auto; }
  .visual-sec .caption {
    padding: 90px 15px 20px 15px;
    text-align: left; }
  /*removing for now to avoid h1 styling overrides, this will eventually be removed from SiteSmall.css. Ideally everything in this sheet will be migrated to new SMACSS-compliant sheets, but this will depend on our timeline*/
  /*.visual-sec .caption h1 {
                margin: 15px auto 25px auto;
                font-size: 26px;
                line-height: 35px;
                width: 100%;
                font-weight: 300;
                letter-spacing: 0;
            }

                .visual-sec .caption h1 strong {
                    font-weight: 400;
                }*/
  .visual-sec#confirmation-hero-image .caption {
    padding: 122px 4.5% 0 2%; }
  .visual-sec .caption h2 {
    margin: 15px auto 25px auto;
    font-size: 26px;
    line-height: 35px;
    width: 100%;
    font-weight: 300; }
  .visual-sec .caption h2 strong {
    font-weight: 400; }
  .visual-sec.add .caption {
    padding: 37px 4.3% 0 6.1%; }
  .visual-sec.add .caption h1 {
    margin: 0 0 20px; }
  .visual-sec.add .form-quote {
    width: 100%;
    padding: 0; }
  .visual-sec.add .form-quote .input {
    float: none;
    width: 100%;
    margin: 0 0 10px; }
  .visual-sec.add .form-quote input[type="submit"] {
    float: none;
    width: 58%;
    height: 44px;
    font-size: 15px; }
  .visual-sec input[type="submit"], .visual-sec input[type="button"] {
    height: 48px; }
  .form-quote {
    width: 100%;
    padding: 0; }
  .form-quote .input {
    float: none;
    width: 100%;
    margin: 0 0 10px; }
  .form-quote input[type="submit"] {
    float: none;
    width: 58%;
    height: 44px;
    font-size: 15px; }
  .visual-sec input[type="button"] {
    float: left;
    width: 58%; }
  .form-quote input[type="submit"]:hover {
    color: #9c9c9c; }
  .main-section {
    padding: 0 0 24px; }
  .main-section .article {
    padding: 100px 0 100px; }
  .main-section .article p {
    margin: 0 0 30px; }
  .main-section .article.value {
    font-size: 16px;
    color: #d5d5d5;
    line-height: 27px;
    padding: 39px 3.6% 49px;
    min-height: inherit; }
  .main-section .article.value p {
    font-weight: 300;
    margin: 0 0 36px; }
  .aside {
    padding: 67px 1%; }
  .aside h2 {
    margin: 0 0 8px; }
  .aside ul {
    font-size: 10px;
    line-height: 15px; }
  .aside .nav-sec {
    margin: 0 0 52px; }
  .aside .info {
    font-size: 10px;
    line-height: 15px;
    margin: 0 0 46px; }
  .aside dl dt {
    margin: 0; }
  .aside dl dd {
    margin: 0 0 0 10px; }
  .aside .col-block {
    margin: 0; }
  #footer {
    font-size: 10px;
    line-height: 15px; }
  .payment-area .head {
    padding: 10px 3.2% 10px; }
  .payment-area .head .price {
    font-size: 20px;
    margin: 0 0 11px; }
  .payment-area .head .price strong {
    font-size: 30px; }
  .payment-area .head .time-info {
    font-size: 12px;
    line-height: 16px; }
  .payment-area .head .time-info strong {
    display: block; }
  .payment-area .head .time-info .img {
    float: left;
    margin: 1px 5.9% 0 5px; }
  .payment-area .head .time-info .img img {
    width: 20px; }
  .payment-area .head .list {
    font-size: 12px; }
  .payment-area .head .list li {
    margin: 0 0 7px; }
  .payment-area .head .list li.active:after {
    font-size: 16px;
    top: 0;
    left: 3px; }
  .payment-area .form-group .cell {
    width: 100%;
    margin: 19px 0 0; }
  .payment-area .form-group .cell:first-child, #contactForm.payment-area .form-group .cell:first-child {
    margin: 0;
    width: 100%; }
  .payment-area .form-group.card .cell, #contactForm.payment-area .form-group .cell {
    width: 100%; }
  .payment-area .form-group.card .cell:first-child {
    width: 100%; }
  .payment-area .form-group.card-info {
    padding: 0;
    margin-left: 0; }
  .payment-area .form-group.card-info .cell {
    width: 49%; }
  .payment-area .form-group.card-info .cell:last-child {
    margin: 0; }
  .payment-area .payment-options .premiumOptions {
    padding: 40px 15px 0 15px; }
  .payment-area .termsGroup {
    margin-left: 0; }
  .payment-area .termsGroup #payment-btn-area {
    padding: 0; }
  .payment-area .payments-cards {
    padding: 0; }
  .payment-area .form-payment .paymentDetails, #cancellationForm .form-cancellation, .login-area .form-login {
    padding: 40px 7px 0 0; }
  input[type="submit"] {
    width: 100%; }
  #cancellationForm .btn {
    margin: 0 0 20px; }
  .payment-area .payment-options {
    margin: 0 0 27px; }
  .payment-area .payment-options .cell {
    width: 100%;
    float: none;
    margin: 0 0 43px; }
  .payment-area .payment-options .cell:first-child {
    float: none;
    width: 100%; }
  .payment-area .payment-options label {
    display: block;
    font-size: 15px; }
  .payment-area .payment-options label strong {
    font-size: 11px; }
  .payment-area .payment-options label strong em {
    font-size: 16px; }
  .payment-area .btn {
    width: 100%;
    padding: 12px 76px; }
  #payment-btn-area .btn {
    margin: 0 0 20px; }
  #payment-btn-area .gray-btn {
    margin-left: 0; }
  .payment-area label.add {
    margin-bottom: 0 !important;
    font-size: 14px; }
  .payment-area .jcf-radio {
    width: 38px;
    height: 38px; }
  .payment-area .jcf-radio.jcf-checked span {
    left: 7px;
    top: 7px;
    width: 20px;
    height: 20px; }
  .payment-area .jcf-radio.jcf-checked span:after {
    width: 14px;
    height: 14px; }
  .payment-area .jcf-checkbox, .login-holder .jcf-checkbox {
    width: 38px;
    height: 38px;
    border: 2px solid #ccc;
    margin: -3px 12px 15px 5px; }
  .payment-area .jcf-checkbox.jcf-checked span,
  .login-holder .jcf-checkbox.jcf-checked span {
    left: 22px;
    top: 23px; }
  .payment-area .jcf-checkbox.jcf-checked span:after,
  .login-holder .jcf-checkbox.jcf-checked span:after {
    font-size: 16px;
    width: 14px;
    height: 14px;
    margin: -1px 0 0 -5px;
    top: -21px; }
  .payment-area .payment-options label strong {
    padding-left: 40px; }
  /*.payment-area .save-money {
        font-size: 11px;
        border-radius: 6px;
        border-width: 1px;
        position: absolute;
        margin: 5px 0 0 40px;
    }*/
  .payment-area .payment-holder, .payment-area .cancellation-form-holder, .login-area .login-holder, #contactForm .form-holder {
    margin: 0 -9999px 0 !important;
    padding: 0 9999px 10px; }
  .form-group {
    margin: 0 0 19px; }
  .form-group.address {
    margin: 0 0 10px; }
  .payment-area .form-group.card {
    margin: 0 0 35px 0; }
  .form-control {
    height: 43px;
    font-size: 13px;
    padding: 12px 9px;
    color: #555655 !important; }
  .form-control::-moz-placeholder {
    color: #555655;
    opacity: 1; }
  .form-control:-ms-input-placeholder {
    color: #555655; }
  .form-control::-webkit-input-placeholder {
    color: #555655; }
  .jcf-range {
    padding: 14px 0 3px; }
  .jcf-range:after {
    margin: 14px 0 0;
    height: 8px; }
  .jcf-range .jcf-range-track {
    font-size: 8px;
    margin: 0 20px 0 0; }
  .jcf-range .jcf-range-handle {
    width: 20px;
    height: 20px;
    margin: -9px 0 0; }
  .jcf-range .jcf-range-handle:after {
    top: 4px;
    height: 8px;
    margin: 2px 18px 0 -397px; }
  .jcf-range .jcf-range-mark {
    padding: 15px 0 0; }
  .jcf-range .jcf-range-mark:after {
    margin: 11px 0 0 -18px; }
  .discount-sec .frame .options-check {
    display: none; }
  .feature-area .feature-block {
    padding: 42px 0 39px;
    line-height: 24px; }
  .feature-area .feature-block p {
    margin: 0 0 15px; }
  .feature-area .feature-block h2 {
    font-size: 18px;
    margin: 0 0 6px; }
  .feature-area .feature-block .img img {
    width: 40px; }
  .navbar-toggle {
    top: 20px;
    height: 20px;
    right: -2px; }
  .navbar {
    display: block !important; }
  .navbar .nav {
    font-size: 14px; }
  .navbar .nav li {
    margin: 0 0 15px; }
  .navbar .logo {
    margin: 30px 0 40px; }
  #hamburger-menu .logo {
    margin-bottom: 30px;
    left: 0; }
  #about .form-quote {
    width: 100%; }
  .navbar .mobile {
    display: block;
    width: 75px;
    height: 65px; }
  .navbar .desktop {
    display: none; }
  .visual-sec.win-height .caption {
    padding: 96px 5.1% 0 4.6%;
    text-align: left; }
  .range-pointer li {
    padding: 6px 0 0;
    font-size: 10px; }
  #wrapper.home #header {
    padding: 10px 0 16px; }
  #wrapper.home #header .navbar-collapse {
    background: #202529;
    margin: 10px -999px;
    padding: 0 999px; }
  .navbar-toggle .icon-bar {
    height: 2px; }
  #history-list .info-area .info-block {
    padding: 21px 42px; }
  .quote-header #editAddress a:after {
    top: -7px; }
  .form-group.card .input-holder {
    position: relative; }
  .form-group.card .input-holder:after {
    position: absolute;
    right: 16px;
    top: 18px;
    font-size: 16px;
    color: #a5a5a5; }
  .form-group.card .input-holder .form-control {
    padding-left: 36px; }
  #history-list .commentsContent {
    width: 100%; }
  #history-list .commentsContent p {
    margin: 10px 0 14px; }
  #quote-history #history-list li {
    padding: 0 15px !important; }
  #history-list .CommentButton button {
    margin: 0; }
  #quote-history .payment-area .jcf-checkbox {
    margin: 0 15px 15px 0; }
  .historyDialog select {
    width: 100%; }
  .left-border {
    border-left: 1px solid #c3c3c3;
    position: absolute;
    top: 64px;
    right: 115px;
    height: 43px; }
  .sm-mb20 {
    margin-bottom: 20px; }
  .social-networks li {
    font-size: 25px;
    margin: 2px 30px 0 0 !important; }
  .social-networks li .icon-twitter {
    margin: 3px 0 0 4px; }
  .social-networks li .icon-fb {
    font-size: 27px;
    margin: 2px 0 0; }
  .social-networks li .icon-email {
    margin: 4px 0 0 0;
    font-size: 21px; }
  .social-networks li .icon-globe {
    top: 0; }
  .social-networks li .icon-globe img {
    width: 27px;
    height: 27px; }
  .payment-area .payment-options label {
    margin: 0 0 27px; }
  .payment-area .payment-options .cell.add label {
    margin: 0;
    width: 196px; }
  .ui-menu .ui-menu-item {
    padding: 2px 10px; }
  #fullCoverageDatepicker .box {
    padding: 15px 42px 16px 18px; }
  #cancellationForm.payment-area .form-group .cell {
    margin: 0; }
  .errorLabel {
    display: table;
    width: 100%; }
  /* Quote-Map*/
  #quote-map.payment-area label {
    display: block; }
  /* Swyfft -Menu -Layout*/
  .swyfftMenuLayout .visual-sec {
    height: 250px; }
  nav#quote-menubar {
    top: 63px; }
  nav#quote-menubar ul.nav > li > a {
    padding: 6.5px 20px; }
  .termsText {
    font-size: 100%; }
  .payment-area .col-xs-12 {
    padding-left: 15px !important;
    padding-right: 15px !important; }
  #pagination > li.prev {
    margin-right: 9%; }
  #pagination > li.next {
    margin-left: 9%; }
  #history-list .toggleButton, #history-list .frame {
    width: 100%; }
  #history-list .noResult .frame {
    width: 49.5%; }
  #quote-history #history-list li .comments {
    height: 44px;
    line-height: 44px; }
  #quote-history #history-list .noResult .comments span {
    display: inline;
    padding-left: 0; }
  #history-list .history-item {
    width: 100%;
    padding: 15px 0 0 0 !important;
    margin-bottom: 0; }
  #history-list .btn-add {
    width: 100%;
    padding: 15px 0 0 29px !important; }
  #history-list .noResult .btn-add {
    width: 50.5%;
    padding: 0 0 0 26px !important;
    height: 90px;
    margin: 0 !important; }
  .info_content {
    max-width: 250px !important; }
  .info_content h3, .info_content p {
    margin-bottom: 10px;
    margin-top: 15px; }
  #quote-history #history-list .noResult .comments {
    width: 60%;
    display: inline;
    height: 90px;
    line-height: 82px; }
  #history-list .CommentButton {
    padding: 13px 0;
    height: auto;
    line-height: 1.4; }
  #history-list .noResult .CommentButton {
    padding: 0;
    height: 90px;
    line-height: 90px; }
  #quote-history #history-list .frame .comments span.chat {
    width: 6%; }
  .comments span:nth-child(3) {
    padding-left: 0 !important; }
  #quote-history #history-list li .comments span:nth-child(1) {
    width: 59% !important; }
  #quote-history #history-list .frame .comments span.chat {
    background-position: 0 0; }
  #quote-history #history-list li .comments span:nth-child(2) {
    width: 36% !important; }
  #quote-history #history-list .noResult .comments span:nth-child(2) {
    width: 84% !important;
    padding-left: 5px; }
  .dialog-form .buttonHolder,
  .modal-footer .buttonHolder {
    padding-top: 25px; }
  .dialog-form .comments-holder {
    display: inline; }
  .dialog-form .selection-holder {
    padding-left: 0 !important;
    padding-right: 0 !important; }
  /*Contact Us*/
  #contactUs .form-quote {
    width: 100%; }
  /*Calendar Style*/
  .ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default {
    font-size: 1.5em; }
  #ui-datepicker-div {
    width: 96%;
    top: 244px !important; }
  #cancellationDatePicker #ui-datepicker-div {
    top: 1112.5px !important; }
  .ui-datepicker td a:before {
    font-size: 10px !important;
    padding-top: 0; }
  .ui-datepicker .ui-datepicker-title {
    width: 12em; }
  #ui-datepicker-div > table > tbody > tr > td > span {
    padding: 20px 0; }
  .dialog-form .monthly-price {
    margin: 50px 0 60px; }
  .dialog-form input[type="submit"], .dialog-form input[type="button"] {
    width: 46%; }
  #crm-section select {
    width: 100%;
    padding-right: 35px !important; }
  .dialog-form #cancelBtn {
    float: right; }
  #fullCoverageDatepicker #selectedCoverageStartDate {
    outline: none;
    /*width: 83px; bug fix - date was truncated*/ }
  ul#cssmenu > li {
    margin: 0;
    width: 49% !important; }
  #billingAddress .form-group .cell {
    width: 100%; } }

@media only screen and (max-width: 690px) {
  .dialog-form {
    width: 90% !important;
    padding: 20px 25px; } }

@media only screen and (max-width: 690px) {
  .dialog-form .buttonHolder {
    width: 100%; }
  .dialog-form input[type="submit"], .dialog-form input[type="button"],
  modal-body input[type="submit"], .modal-body input[type="button"] {
    width: 100% !important;
    margin-bottom: 20px; }
  .left-border {
    border-left: 1px solid #c3c3c3;
    position: absolute;
    top: 50px;
    right: 90px;
    height: 43px; } }

@media only screen and (max-width: 495px) {
  .dialog-form {
    width: 100%;
    overflow: auto; }
  .dialog-form input[type="submit"], .dialog-form input[type="button"],
  .modal-body input[type="submit"], .modal-body input[type="button"] {
    width: 100%;
    margin-bottom: 20px; } }

@media screen and (max-height: 600px) {
  .navbar .nav li {
    margin: 0 0 2%; } }

@media screen and (max-height: 555px) {
  .navbar .nav li {
    margin: 0 0 1%; } }

@media screen and (max-height: 500px) {
  .dialog-form {
    overflow: auto;
    top: 0;
    height: 100% !important;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0); }
  .dialog-form::-webkit-scrollbar {
    width: 8px;
    background-color: #90bf3e; }
  .dialog-form::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5; }
  .dialog-form::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #90bf3e; } }

@media screen and (max-width: 620px) {
  /* Edit CRM Popup */
  .dialog-form button.ui-button-icon-only.custom-combobox-toggle {
    width: 42px; }
  .dialog-form .custom-combobox-toggle.ui-button-icon-only .ui-icon {
    left: 1% !important; } }

@media screen and (max-width: 500px) {
  /* combobox styling */
  .custom-combobox-input.ui-autocomplete-input {
    width: 85% !important; }
  button.ui-button-icon-only.custom-combobox-toggle {
    width: 3em; } }

@media only screen and (max-width: 492px) {
  #header .tell, #header-without-top-navbar .tell {
    font-size: 13px;
    margin: 0 40px 0 0;
    line-height: 13px; }
  #header .tell a {
    display: inline-block;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 17px 0 0 5px; }
  nav#quote-menubar {
    min-width: 327px; }
  nav#quote-menubar ul.nav > li > a {
    font-size: 14px;
    line-height: inherit; }
  nav#quote-menubar ul.nav > li > a {
    padding: 7.5px 12.5px; }
  .nav-tabs > li {
    text-align: center; }
  .visual-sec.win-height .caption {
    padding: 110px 2.1% 0 2.6%; }
  .info_content {
    max-width: 200px !important; }
  .info_content h3, .info_content p {
    margin-bottom: 10px;
    margin-top: 10px; }
  .pagination > li {
    display: table-cell; }
  .ui-datepicker .ui-datepicker-prev {
    margin-left: 1em; }
  .ui-datepicker .ui-datepicker-next {
    margin-right: 3em; }
  #closeButton {
    margin-right: 0; } }

@media only screen and (max-width: 399px) {
  #header .tell a {
    max-width: 130px; }
  /*Combobox*/
  .custom-combobox-input.ui-autocomplete-input {
    width: 85% !important; }
  .dialog-form .custom-combobox-toggle.ui-button-icon-only .ui-icon,
  .custom-combobox-toggle.ui-button-icon-only .ui-icon {
    left: 27% !important; }
  button.ui-button-icon-only.custom-combobox-toggle {
    width: 2.6em; }
  .custom-combobox-toggle .ui-icon {
    width: 20px; }
  /*Edit CRM Popup*/
  .dialog-form button.ui-button-icon-only.custom-combobox-toggle {
    width: 1.7em; } }

/* nexus 5 fix, changes order of header and input box*/
@media only screen and (min-width: 358px) and (max-width: 360px) {
  .address-input-container {
    display: flex;
    flex-direction: column-reverse;
    padding-top: 2%; } }

/*# sourceMappingURL=commonStyle.bundle.css.map*/