define(
    [
        'jquery',
        'underscore',
        'Magento_Ui/js/form/form',
        'ko',
        'Magento_Customer/js/model/customer',
        'Magento_Customer/js/model/address-list',
        'Magento_Checkout/js/model/address-converter',
        'Magento_Checkout/js/model/quote',
        'Magento_Checkout/js/action/create-shipping-address',
        'Magento_Checkout/js/action/select-shipping-address',
        'Magento_Checkout/js/model/shipping-rates-validator',
        'Magento_Checkout/js/model/shipping-address/form-popup-state',
        'Magento_Checkout/js/model/shipping-service',
        'Magento_Checkout/js/action/select-shipping-method',
        'Magento_Checkout/js/model/shipping-rate-registry',
        'Magento_Checkout/js/action/set-shipping-information',
        'Magento_Checkout/js/model/step-navigator',
        'Magento_Ui/js/modal/modal',
        'Magento_Checkout/js/model/checkout-data-resolver',
        'Magento_Checkout/js/checkout-data',
        'uiRegistry',
        'mage/translate',
        'Magento_Checkout/js/model/shipping-rate-service'
    ],function (
        $,
        _,
        Component,
        ko,
        customer,
        addressList,
        addressConverter,
        quote,
        createShippingAddress,
        selectShippingAddress,
        shippingRatesValidator,
        formPopUpState,
        shippingService,
        selectShippingMethodAction,
        rateRegistry,
        setShippingInformationAction,
        stepNavigator,
        modal,
        checkoutDataResolver,
        checkoutData,
        registry,
        $t) {
        'use strict';

        var mixin = {
            setShippingInformation: function () {
                if (!this.validateShippingInformation()) {
                    var errorElement = $("#rw-google-complete-form div[class*='mage-error'], #rw-google-complete-form div[class*='field-error']");
                    if(errorElement.length) {
                        $('#rw-google-complete-form').addClass('complete').show();
                    }
                }
                this._super();
            },
            saveNewAddress: function () {
                this._super();

                if (this.source.get('params.invalid')) {
                    var errorElement = $(".modal-popup._show #rw-google-complete-form div[class*='field-error'], .modal-popup._show #rw-google-complete-form div[class*='mage-error']");
                    if(errorElement.length) {
                        $('#rw-google-complete-form').addClass('complete').show();
                    }
                }
            }
        };

        return function (target) {
            return target.extend(mixin);
        };
    });

