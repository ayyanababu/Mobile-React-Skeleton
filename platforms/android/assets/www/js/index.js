





define(function (require) {
    var App = React.createFactory (require ("js/components/app"));
    ReactDOM.render (new App ({}), document.getElementById ("container"));
});
