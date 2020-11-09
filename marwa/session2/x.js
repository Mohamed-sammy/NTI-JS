https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.9.0/sha256.js
function FawryPayAtFawry() {
let merchantCode    = "pmMFlkCu0P06m70HHkcCYQ==";
let merchantRefNum  = "99900642041";
let merchant_cust_prof_id  = "458626698";
let payment_method = "PAYATFAWRY";
let amount = "10.00";
let merchant_sec_key =  "c6d6e03702a14621a4dc44563b9cc69c";
let signature_body = merchantCode.concat(merchantCode , merchantRefNum , merchant_cust_prof_id , payment_method , amount , merchant_sec_key);
let sha256 = new jsSHA('SHA-256', 'TEXT');
sha256.update(signature_body);
let hash_signature = sha256.getHash("HEX");
console.log({
    'merchantCode' : merchantCode,
    'merchantRefNum' : merchantRefNum,
    'customerName' : 'Ahmed Ali',
    'customerMobile' : '01060507925',
    'customerEmail' : 'marwaradwan872@hotmail.com',
    'customerProfileId' : '777777',
    'amount' : '10.00',
    'paymentExpiry' : '1631138400000',
    'currencyCode' : 'EGP',
    'language' : 'en-gb',
    'chargeItems' : {
                          'itemId' : '897fa8e81be26df25db592e81c31c',
                          'description' : 'Item Description',
                          'price' : '580.55',
                          'quantity' : '1'
                      },
    'signature' : hash_signature,
    'payment_method' : payment_method,
    'description': 'example description'
})
axios.post('https://atfawry.fawrystaging.com/ECommerceWeb/Fawry/payments/charge', {
                'merchantCode' : merchantCode,
                'merchantRefNum' : merchantRefNum,
                'customerName' : 'Ahmed Ali',
                'customerMobile' : '01060507925',
                'customerEmail' : 'marwaradwan872@hotmail.com',
                'customerProfileId' : '777777',
                'amount' : '10.00',
                'paymentExpiry' : '1631138400000',
                'currencyCode' : 'EGP',
                'language' : 'en-gb',
                'chargeItems' : {
                                      'itemId' : '897fa8e81be26df25db592e81c31c',
                                      'description' : 'Item Description',
                                      'price' : '580.55',
                                      'quantity' : '1'
                                  },
                'signature' : hash_signature,
                'payment_method' : payment_method,
                'description': 'example description'
            })
                .then(response => {
                    // Get Response Contents
                    let type          = response.data.type;
                    let paymentStatus = response.data.paymentStatus;
                    //
                })
                .catch(error => {
                    console.log(error.response.data)
                })
}

FawryPayAtFawry()