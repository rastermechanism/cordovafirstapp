(function () {

    homeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    employeeListView.prototype.template = Handlebars.compile($("#employee-list-tpl").html());
    employeeView.prototype.template = Handlebars.compile($("#employee-tpl").html());

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();
    var slider = new PageSlider($('body'));


    service.initialize().done(function () {

        router.addRoute('', function () {
            slider.slidePage(new homeView(service).render().$el);
        });
        router.addRoute('employees/:id', function (id) {
            service.findById(parseInt(id)).done(function (employee) {
                slider.slidePage(new employeeView(employee).render().$el);
            });
        });
        router.start();

        // $('body').html(new homeView(service).render().$el);
         console.log("Service initialized");
    });


    document.addEventListener('deviceready', function () {
        FastClick.attach(document.body);
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message, // message
                    null, // callback
                    "Workshop", // title
                    'OK' // buttonName
                );
            };
        }
    }, false);



}());