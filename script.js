let selectedTicker = 'Ticker';
let selectedTime = 'Time';
let selectedBlock = 'Block';
let selectedB2tm = 'Time';
let selectedB2blk = 'Block';
let selectedTfc = 'Time';
let selectedDecisiveTime = 'Time';
let selectedDecisiveBlock = 'Block';
let selectedC1tm = 'Time';
let selectedC1nc = 'c';
let selectedC2tm = 'Time';
let selectedC2nc = 'c';
let selectedC3tm = 'Time';
let selectedC3nc = 'c';
let selectedBroker = 'Broker';

// スプレッドデータの定義
const spreadData = {
    'BTC_XM': 300,
    'ETH_XM': 150,
    'BTC_TITAN': 100,
    'ETH_TITAN': 200,
    'SOL_XM': 250,
    'SOL_TITAN': 180,
};

function updateTicker(value) {
    selectedTicker = value;
}

function updateTime(value) {
    selectedTime = value;
}

function updateBlock(value) {
    selectedBlock = value;
}

function updateB2tm(value) {
    selectedB2tm = value;
}

function updateB2blk(value) {
    selectedB2blk = value;
}

function updateTfc(value) {
    selectedTfc = value;
}

function updateDecisiveTime(value) {
    selectedDecisiveTime = value;
}

function updateDecisiveBlock(value) {
    selectedDecisiveBlock = value;
}

function updateC1tm(value) {
    selectedC1tm = value;
}

function updateC1nc(value) {
    selectedC1nc = value;
}

function updateC2tm(value) {
    selectedC2tm = value;
}

function updateC2nc(value) {
    selectedC2nc = value;
}

function updateC3tm(value) {
    selectedC3tm = value;
}

function updateC3nc(value) {
    selectedC3nc = value;
}

function updateBroker(value) {
    selectedBroker = value;
}

function executeSelection() {
    const resultDiv = document.getElementById('result');
    const key = `${selectedTicker}_${selectedBroker}`;
    const spread = spreadData[key] !== undefined ? spreadData[key] : "N/A";

    const resultInfo = `
        ${selectedTicker}: ${selectedTime} ${selectedBlock}   
        ${selectedB2tm} ${selectedB2blk} / TFC: ${selectedTfc} / 
        決定打: ${selectedDecisiveTime} ${selectedDecisiveBlock} / 
        ...
        ${selectedC1tm} ${selectedC1nc} / 
        ${selectedC2tm} ${selectedC2nc} / 
        ${selectedC3tm} ${selectedC3nc}...
        
        ${selectedBroker} Spread: ${spread}
        
    `;
    resultDiv.innerText = resultInfo;
}

function copyInfo() {
    const resultDiv = document.getElementById('result');
    navigator.clipboard.writeText(resultDiv.innerText).then(() => {
        alert('Copy‼');
    });
}

function copySpread() {
    const key = `${selectedTicker}_${selectedBroker}`;
    const spread = spreadData[key] !== undefined ? spreadData[key] : "N/A";
    navigator.clipboard.writeText(`${spread}`).then(() => {
        alert(`Spread: ${spread}`);
    });
}
