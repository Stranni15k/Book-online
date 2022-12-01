'use strict'

var tableid = 1;

Handlebars.registerHelper("inc", function (value, options) {
    return parseInt(value) + 1;
});

const itemstables = new Map();

class ItemTable {
	constructor(name, count) {
    this.name = name;
    this.count = parseInt(count);
    }

     static createFrom(tableItem) {
         return new ItemTable(tableItem.name, tableItem.count); 
	}
};

function LoadItemToTable() {
    console.info('Try to load data');

    function drawItemsTable() {
        console.info('Try to draw table');

        const table = document.querySelector("#tbl-items #tbodyout");
        if (table == null) {
            throw 'Table is not found';
        }

        fetch("handlebars/items-tablesave.html")
            .then(function (response) {
                return response.text();
            })
            .then(function (html) {
                const template = Handlebars.compile(html);
                table.innerHTML = template({ 'items': Object.fromEntries(itemstables.entries()) });
                console.info('Drawn');
            })
            .catch(function (error) {
                console.error('Error:', error);
                throw "Can't render template";
            });
    }

    fetch("http://localhost:8079/itemstable")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.info('Loaded');
            itemstables.clear();
            for (let i = 0; i < data.length; i++) {
                const current = data[i];
                itemstables.set(current.id, ItemTable.createFrom(current));
            }
            drawItemsTable();
        })
        .catch(function (error) {
            console.error('Error:', error);
            throw "Can't load items";
        });
}

btnadditem.onclick = function () {
    console.info('try to add item');
	
    var namelem = document.getElementById('itemtable').value;
    var halllem = document.getElementById('halltable').value;
    
    tableid = tableid + 1;

    const current = {name: namelem, count: halllem};

    fetch("http://localhost:8079/itemstable", 
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
        
        LoadItemToTable();
    })
    .catch(function (error) {
        console.error('Error:', error);
        throw "Can't add item";
    });
}


document.addEventListener('DOMContentLoaded', function () { 
    console.info('Loaded');
	LoadItemToTable();

    const form = document.querySelector("#frm-items");
    if (form !== null) {
        form.addEventListener('submit', function(event) {
            console.info('Form onsubmit');
            event.preventDefault();

            const item = document.querySelector("#item");
            if (item == null) {
                throw 'Item control is not found';
            }
            const hall = document.querySelector("#hall");
            if (hall == null) {
                throw 'Item control is not found';
            }
            

            addItemToTable(item.value, parseInt(hall.value));
        });
    }
});