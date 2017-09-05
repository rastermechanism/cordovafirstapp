var homeView = function (service) {
    var employeeListView1;
    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.$el.on('keyup', '.search-key', this.findByName);
        employeeListView1 = new employeeListView();
        this.render();
    };

    this.render = function () {
        this.$el.html(this.template());
        $('.content', this.$el).html(employeeListView1.$el);
        return this;
    }

    this.findByName = function () {
        service.findByName($('.search-key').val()).done(function (employees) {
            employeeListView1.setEmployees(employees);
        });
    };

    this.initialize();
};


