let table_config;
let table_data;


// Fetching JSON Data
fetch('./table_config.json')
    .then(response => {
        response.json().then(data => {
            table_config = data;
        });
    });

fetch('./table_data.json')
    .then(response => {
        response.json().then(data => {
            table_data = data;
        });
    });

// Title Creator
function createTitle(titleInfo) {
    let title = document.createElement("h1");
    let titleText = document.createTextNode(titleInfo);
    title.appendChild(titleText);
    return title;
}

// Utility function for parsing Config file 
// for column header and value_keys of table_data
function splitConfig(config) {
    let header = [];
    let key = [];
    for (let i = 0; i < config.length; i++) {
        header.push(config[i].header);
        key.push(config[i].cell);
    }
    return { header, key };
}

// Utility function for parsing expected data from table_data
function parseTableDataColumn(object, key) {
    // spliting key for ease of search
    let keys = key.split('.');

    // Safely copying object data
    let tempObject = { ...object };


    for (let i = 0; i < keys.length; i++) {
        if (tempObject.hasOwnProperty(keys[i])) {
            if (typeof tempObject[keys[i]] === "object") {
                tempObject = { ...tempObject[keys[i]] };
            }
            else {
                return tempObject[keys[i]];
            }
        }
        else {
            return null;
        }
    }
}

// parsing for table row data
function parseTableDataRow(object, key) {
    let data = [];
    for (let i = 0; i < key.length; i++) {
        data.push(parseTableDataColumn(object, key[i]));
    }
    return data;
}

// Creating Table Column
function createColumn(item, headerFlag) {
    let column;
    if (headerFlag) {
        column = document.createElement("th");
    }
    else {
        column = document.createElement("td");
    }
    let columnText = document.createTextNode(item);
    column.appendChild(columnText);
    return column;
}

// Creating Table Row
function createRow(columnItems, headerFlag) {
    let row = document.createElement('tr');
    for (let i = 0; i < columnItems.length; i++) {
        row.appendChild(createColumn(columnItems[i], headerFlag));
    }
    return row;
}

// Creating Table 
function createTable(config, data) {

    //create table and tablebody element
    let table = document.createElement("table");
    let tablebody = document.createElement("tbody");

    // parse config file for creating header
    let results = splitConfig(table_config.columns);
    let columnHeader = results.header;
    let columnKey = results.key;

    //Add header to the table
    tablebody.appendChild(createRow(columnHeader, true));

    // parse data for populating table
    for (let i = 0; i < table_data.length; i++) {
        let data = parseTableDataRow(table_data[i], columnKey);
        tablebody.appendChild(createRow(data, false));
    }

    table.appendChild(tablebody);
    return table;
}

setTimeout(() => {

    document.body.appendChild(createTitle(table_config.title));
    document.title = table_config.title;
    document.body.appendChild(createTable(table_config, table_data));
}, 1000);