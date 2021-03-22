const data = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
};

function getName(data) {
    return data.displayedName.displayedName.value[0];
}

function getInStock(data) {
    const stock = data.stock.stocks;
    const inStockArr = [];

    for (let prop in stock) {
        for (let key in stock[prop]) {
            if (stock[prop][key] != "0") {
                inStockArr.push(key);
            }
        }
    }

    return inStockArr;
}

function getMaxProdCount(data, region) {
    const stock = data.stock.stocks[region];
    let market = 0;
    let max = 0;

    for (let prop in stock) {
        if (stock[prop] > max) {
            max = stock[prop];
            market = prop;
        }
    }

    return [market, stock[market]];
}