'use strict'

var imagefilms;
var filmid = 10;

Handlebars.registerHelper("inc", function (value, options) {
    return parseInt(value) + 1;
});

const items = new Map();

class ItemLine {
    constructor(imgsource, price, title, name,description) {
        this.imgsource = imgsource;
        this.price = parseInt(price);
        this.title = title;
        this.name = name;
        this.description = description;
    }

    static createFrom(item) {
        return new ItemLine(item.imgsource, item.price, item.title, item.name, item.description);
    }
};

function loadItemsTable() {
    console.info('Try to load data');

    function drawItemsTable() {
        console.info('Try to draw table');

        const table = document.querySelector(".books #out");
        if (table == null) {
            throw 'Table is not found';
        }

        fetch("handlebars/items-table.html")
            .then(function (response) {
                return response.text();
            })
            .then(function (html) {
                const template = Handlebars.compile(html);
                table.innerHTML = template({ 'items': Object.fromEntries(items.entries()) });
                console.info('Drawn');
            })
            .catch(function (error) {
                console.error('Error:', error);
                throw "Can't render template";
            });
    }

    fetch("http://localhost:8079/lines")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.info('Loaded');
            items.clear();
            for (let i = 0; i < data.length; i++) {
                const current = data[i];
                items.set(current.id, ItemLine.createFrom(current));
            }
            drawItemsTable();
        })
        .catch(function (error) {
            console.error('Error:', error);
            throw "Can't load items";
        });
}

butt.onclick = function() {

    var imglem = document.getElementById('urltoimage').innerHTML = imagefilms;
    var namelem = document.getElementById('namelem').value;
    var pricelem = document.getElementById('pricelem').value;
    var authorlem = document.getElementById('authorlem').value;
    var descriptionlem = document.getElementById('descriptionlem').value;
    
    filmid = filmid + 1;

    const current = {imgsource: imglem, price: pricelem, title: namelem, name: authorlem, description: descriptionlem};
    const currentname = {name: namelem, id: userid};

    fetch("http://localhost:8079/lines", 
    { 
        method: 'POST', 
        body: JSON.stringify(current),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.info('Added');
        console.log(data);
        
        loadItemsTable();
    })
    .catch(function (error) {
        console.error('Error:', error);
        throw "Can't add item";
    });

    fetch("http://localhost:8079/items/", 
    { 
        method: 'POST',
        body: JSON.stringify(currentname),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.info('Added');
        console.log(data);
    })
    .catch(function (error) {
        console.error('Error:', error);
        throw "Can't add item";
    });
};

function removeItemFromTable(id) {
    console.info('Try to remove item');

    if (!confirm('Do you really want to remove this item?')) {
        console.info('Canceled');
        return;
    }

    if (!items.has(id)) {
        throw 'Item with id [' + id + '] is not found';
    }

    fetch("http://localhost:8079/lines/" + id,
        {
            method: 'DELETE'
        })
        .then(function () {
            console.info('Removed');
            loadItemsTable();
        })
        .catch(function (error) {
            console.error('Error:', error);
            throw "Can't add item";
        });
    
    fetch("http://localhost:8079/items/" + id,
        {
            method: 'DELETE'
        })
        .then(function () {
            console.info('Removed');
            loadItemsTable();
        })
        .catch(function (error) {
            console.error('Error:', error);
            throw "Can't add item";
        });
    
}

edititem.onclick = async function() {

    let response = await fetch("http://localhost:8079/lines/" + userid);
    let content = await response.json();

    if(imagefilms == null) {
        var imglem = document.getElementById('urltoimage').innerHTML = content.imgsource;
        var namelem = document.getElementById('namelem').value;
        var pricelem = document.getElementById('pricelem').value;
        var authorlem = document.getElementById('authorlem').value;
        var descriptionlem = document.getElementById('descriptionlem').value;
    
        const current = {imgsource: imglem, price: pricelem, title: namelem, name: authorlem,description: descriptionlem};
        const currentname = {name: namelem, id: filmid};
    
        fetch("http://localhost:8079/lines/" + userid,
        {
            method: 'PUT',
            headers: {
                'Content-type': "application/json",
            },
            body: JSON.stringify(current),
        });
    
        fetch("http://localhost:8079/items/" + userid, 
        { 
            method: 'PUT',
            headers: {
                'Content-type': "application/json",
            },
            body: JSON.stringify(currentname),
        });
    
        loadItemsTable();
    }
    else

    var imglem = document.getElementById('urltoimage').innerHTML = imagefilms;
    var namelem = document.getElementById('namelem').value;
    var pricelem = document.getElementById('pricelem').value;
    var authorlem = document.getElementById('authorlem').value;
    var descriptionlem = document.getElementById('descriptionlem').value;

    const current = {imgsource: imglem, price: pricelem, title: namelem, name: authorlem,description: descriptionlem};
    const currentname = {name: namelem, id: filmid};

    fetch("http://localhost:8079/lines/" + userid,
    {
        method: 'PUT',
        headers: {
            'Content-type': "application/json",
        },
        body: JSON.stringify(current),
    });

    fetch("http://localhost:8079/items/" + userid, 
    { 
        method: 'PUT',
        headers: {
            'Content-type': "application/json",
        },
        body: JSON.stringify(currentname),
    });

    loadItemsTable();
}

var userid;

function editItemFromTable(id) {
    userid = id;
    console.log(userid);
}

modalokno.onclick = function() {
    document.getElementById("butt").style.visibility = "visible";
    document.getElementById("edititem").style.visibility = "hidden"

}

async function addtoitem() {
    let response = await fetch("http://localhost:8079/lines/" + userid);
    let content = await response.json();

    document.getElementById("urltoimage").innerHTML = content.imgsource;
    document.getElementById("namelem").value = content.title;
    document.getElementById("pricelem").value = content.price;
    document.getElementById("authorlem").value = content.name;
    document.getElementById("descriptionlem").value = content.description;

    document.getElementById("edititem").style.visibility = "visible";
    document.getElementById("butt").style.visibility = "hidden"
}

async function GetDescription() {
    
    let response = await fetch("http://localhost:8079/lines/" + userid);
    let content = await response.json();

    function drawItemsTable() {
        console.info('Try to draw table');

        const desc = document.querySelector("#exampleModal1 .modal-dialog .modal-content .modal-header #exampleModal1Label");
        const table = document.querySelector("#exampleModal1 .modal-dialog .modal-content .modal-body #infodesc");

        desc.innerHTML = content.title;
        table.innerHTML = content.description;
    }

    drawItemsTable();

}

function loadItemsSelect(select) {
    function drawItemsSelect(select, data) {
        fetch("handlebars/items-select.html")
            .then(function (response) {
                return response.text();
            })
            .then(function (html) {
                const template = Handlebars.compile(html);
                select.innerHTML += template({ 'items': data });
            })
            .catch(function (error) {
                console.log('Error:', error);
                throw "Can't load items";
            });
    }

    fetch("http://localhost:8079/items")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            drawItemsSelect(select, data);
        })
        .catch(function (error) {
            console.log('Error:', error);
            throw "Can't load items";
        });
}

function donwload(input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
        imagefilms = reader.result;
    }
}

loadItemsSelect(itemtable);
loadItemsTable();