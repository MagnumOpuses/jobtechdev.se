function setDisplayTab(tab_set_id, number_of_tabs, btn_id) {


    for (let i = 0; i < number_of_tabs; i++) {

        let tabButton = $('#'+tab_set_id+'-'+i+'-btn');

        if (tabButton.attr('id') === btn_id+'-btn') {
            tabButton.addClass("tab-btn-active");
        } else {
            tabButton.removeClass("tab-btn-active");
        }

        let tabContent = $('#'+tab_set_id+'-'+i);
        if (tabContent.attr('id') === btn_id) {
            tabContent.show();
        } else {
            tabContent.hide();
        }
    }
}
