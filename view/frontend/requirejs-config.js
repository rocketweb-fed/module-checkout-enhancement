
var config = {
    map: {
        "*": {
            shipAddressForm: "RocketWeb_CheckoutEnhancement/js/ship-address-form",
            rwAddressValidation: 'RocketWeb_CheckoutEnhancement/js/account/addressValidation'
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/view/payment/default': {
                'RocketWeb_CheckoutEnhancement/js/view/payment/default-mixin': true
            },
            'Magento_Checkout/js/view/shipping': {
                'RocketWeb_CheckoutEnhancement/js/view/shipping-mixin': true
            },
            'Amazon_Payment/js/view/shipping': {
                'RocketWeb_CheckoutEnhancement/js/view/amazon-shipping-mixin': true
            },
        }
    },
    paths: {
            "TweenLite": "//cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenLite.min",
    }
};
