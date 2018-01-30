define(
    [
        'jquery',
        "underscore",
        'ko',
        'Magento_Checkout/js/view/shipping',
        'Magento_Customer/js/model/customer',
        'Magento_Checkout/js/action/set-shipping-information',
        'Magento_Checkout/js/model/step-navigator',
        'Amazon_Payment/js/model/storage'
    ],
    function (
        $,
        _,
        ko,
        Component,
        customer,
        setShippingInformationAction,
        stepNavigator,
        amazonStorage
    ) {
        'use strict';
        var mixin = {
            setShippingInformation: function () {
                if (amazonStorage.isAmazonAccountLoggedIn() && customer.isLoggedIn()) {
                } else if (amazonStorage.isAmazonAccountLoggedIn() && !customer.isLoggedIn()) {
                } else {

                    //if using guest checkout or guest checkout with amazon pay we need to use the main validation
                    if (!this.validateShippingInformation()) {

                        var errorElement = $("main #rw-google-complete-form div[class*='mage-error']");
                        if(errorElement.length) {
                            //show shipping form
                            $('#rw-google-complete-form').addClass('complete').show();
                        }
                    }
                }
                this._super();
            }
        };

        return function (target) {
            return target.extend(mixin);
        };
    });