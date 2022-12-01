'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var imagefilms;
var filmid = 10;
Handlebars.registerHelper("inc", function (value, options) {
  return parseInt(value) + 1;
});
var items = new Map();

var ItemLine =
/*#__PURE__*/
function () {
  function ItemLine(imgsource, price, title, name, description) {
    _classCallCheck(this, ItemLine);

    this.imgsource = imgsource;
    this.price = parseInt(price);
    this.title = title;
    this.name = name;
    this.description = description;
  }

  _createClass(ItemLine, null, [{
    key: "createFrom",
    value: function createFrom(item) {
      return new ItemLine(item.imgsource, item.price, item.title, item.name, item.description);
    }
  }]);

  return ItemLine;
}();

;

function loadItemsTable() {
  console.info('Try to load data');

  function drawItemsTable() {
    console.info('Try to draw table');
    var table = document.querySelector(".books #out");

    if (table == null) {
      throw 'Table is not found';
    }

    fetch("handlebars/items-table.html").then(function (response) {
      return response.text();
    }).then(function (html) {
      var template = Handlebars.compile(html);
      table.innerHTML = template({
        'items': Object.fromEntries(items.entries())
      });
      console.info('Drawn');
    })["catch"](function (error) {
      console.error('Error:', error);
      throw "Can't render template";
    });
  }

  fetch("http://localhost:8079/lines").then(function (response) {
    return response.json();
  }).then(function (data) {
    console.info('Loaded');
    items.clear();

    for (var i = 0; i < data.length; i++) {
      var current = data[i];
      items.set(current.id, ItemLine.createFrom(current));
    }

    drawItemsTable();
  })["catch"](function (error) {
    console.error('Error:', error);
    throw "Can't load items";
  });
}

butt.onclick = function () {
  var imglem = document.getElementById('urltoimage').innerHTML = imagefilms;
  var namelem = document.getElementById('namelem').value;
  var pricelem = document.getElementById('pricelem').value;
  var authorlem = document.getElementById('authorlem').value;
  var descriptionlem = document.getElementById('descriptionlem').value;
  filmid = filmid + 1;
  var current = {
    imgsource: imglem,
    price: pricelem,
    title: namelem,
    name: authorlem,
    description: descriptionlem
  };
  var currentname = {
    name: namelem,
    id: userid
  };
  fetch("http://localhost:8079/lines", {
    method: 'POST',
    body: JSON.stringify(current),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.info('Added');
    console.log(data);
    loadItemsTable();
  })["catch"](function (error) {
    console.error('Error:', error);
    throw "Can't add item";
  });
  fetch("http://localhost:8079/items/", {
    method: 'POST',
    body: JSON.stringify(currentname),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.info('Added');
    console.log(data);
  })["catch"](function (error) {
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

  fetch("http://localhost:8079/lines/" + id, {
    method: 'DELETE'
  }).then(function () {
    console.info('Removed');
    loadItemsTable();
  })["catch"](function (error) {
    console.error('Error:', error);
    throw "Can't add item";
  });
  fetch("http://localhost:8079/items/" + id, {
    method: 'DELETE'
  }).then(function () {
    console.info('Removed');
    loadItemsTable();
  })["catch"](function (error) {
    console.error('Error:', error);
    throw "Can't add item";
  });
}

edititem.onclick = function _callee() {
  var response, content, imglem, namelem, pricelem, authorlem, descriptionlem, _current, _currentname, current, currentname;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("http://localhost:8079/lines/" + userid));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          content = _context.sent;

          if (imagefilms == null) {
            imglem = document.getElementById('urltoimage').innerHTML = content.imgsource;
            namelem = document.getElementById('namelem').value;
            pricelem = document.getElementById('pricelem').value;
            authorlem = document.getElementById('authorlem').value;
            descriptionlem = document.getElementById('descriptionlem').value;
            _current = {
              imgsource: imglem,
              price: pricelem,
              title: namelem,
              name: authorlem,
              description: descriptionlem
            };
            _currentname = {
              name: namelem,
              id: filmid
            };
            fetch("http://localhost:8079/lines/" + userid, {
              method: 'PUT',
              headers: {
                'Content-type': "application/json"
              },
              body: JSON.stringify(_current)
            });
            fetch("http://localhost:8079/items/" + userid, {
              method: 'PUT',
              headers: {
                'Content-type': "application/json"
              },
              body: JSON.stringify(_currentname)
            });
            loadItemsTable();
          } else imglem = document.getElementById('urltoimage').innerHTML = imagefilms;

          namelem = document.getElementById('namelem').value;
          pricelem = document.getElementById('pricelem').value;
          authorlem = document.getElementById('authorlem').value;
          descriptionlem = document.getElementById('descriptionlem').value;
          current = {
            imgsource: imglem,
            price: pricelem,
            title: namelem,
            name: authorlem,
            description: descriptionlem
          };
          currentname = {
            name: namelem,
            id: filmid
          };
          fetch("http://localhost:8079/lines/" + userid, {
            method: 'PUT',
            headers: {
              'Content-type': "application/json"
            },
            body: JSON.stringify(current)
          });
          fetch("http://localhost:8079/items/" + userid, {
            method: 'PUT',
            headers: {
              'Content-type': "application/json"
            },
            body: JSON.stringify(currentname)
          });
          loadItemsTable();

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
};

var userid;

function editItemFromTable(id) {
  userid = id;
  console.log(userid);
}

modalokno.onclick = function () {
  document.getElementById("butt").style.visibility = "visible";
  document.getElementById("edititem").style.visibility = "hidden";
};

function addtoitem() {
  var response, content;
  return regeneratorRuntime.async(function addtoitem$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("http://localhost:8079/lines/" + userid));

        case 2:
          response = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          content = _context2.sent;
          document.getElementById("urltoimage").innerHTML = content.imgsource;
          document.getElementById("namelem").value = content.title;
          document.getElementById("pricelem").value = content.price;
          document.getElementById("authorlem").value = content.name;
          document.getElementById("descriptionlem").value = content.description;
          document.getElementById("edititem").style.visibility = "visible";
          document.getElementById("butt").style.visibility = "hidden";

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function GetDescription() {
  var response, content, drawItemsTable;
  return regeneratorRuntime.async(function GetDescription$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          drawItemsTable = function _ref() {
            console.info('Try to draw table');
            var desc = document.querySelector("#exampleModal1 .modal-dialog .modal-content .modal-header #exampleModal1Label");
            var table = document.querySelector("#exampleModal1 .modal-dialog .modal-content .modal-body #infodesc");
            desc.innerHTML = content.title;
            table.innerHTML = content.description;
          };

          _context3.next = 3;
          return regeneratorRuntime.awrap(fetch("http://localhost:8079/lines/" + userid));

        case 3:
          response = _context3.sent;
          _context3.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          content = _context3.sent;
          drawItemsTable();

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function loadItemsSelect(select) {
  function drawItemsSelect(select, data) {
    fetch("handlebars/items-select.html").then(function (response) {
      return response.text();
    }).then(function (html) {
      var template = Handlebars.compile(html);
      select.innerHTML += template({
        'items': data
      });
    })["catch"](function (error) {
      console.log('Error:', error);
      throw "Can't load items";
    });
  }

  fetch("http://localhost:8079/items").then(function (response) {
    return response.json();
  }).then(function (data) {
    drawItemsSelect(select, data);
  })["catch"](function (error) {
    console.log('Error:', error);
    throw "Can't load items";
  });
}

function donwload(input) {
  var file = input.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function () {
    imagefilms = reader.result;
  };
}

loadItemsSelect(item);
loadItemsTable();
//# sourceMappingURL=items.dev.js.map
