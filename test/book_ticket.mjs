import {IRCTC} from "irctc-api";
const params = {
    "UPI": "9876543210@ybl",
    "class": "2S",
    "quota": "GN",
    "train_number": "17201",
    "from": "GNT",
    "to": "PDKN",
    "journey_date": "20240530",
    "mobile_number": "9876543210",
    "userID": "XXXXX",
    "password": "XXXXXXX",
    "passengers": [
        {
            "age": "22",
            "food": "",
            "name": "Virat Kohli",
            "sex": "M"
        },
    ]
};
const irctc = new IRCTC();
const response = await irctc.book(params);
console.log(response);