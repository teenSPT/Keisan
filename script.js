    const spreadData = {
      'BTC': { 'XM': 300, 'TITAN': 100 },
      'ETH': { 'XM': 150, 'TITAN': 200 },
      'SOL': { 'XM': 250, 'TITAN': 180 }
    };

    let selections = {
      ticker: '',
      time: '',
      block: '',
      broker: ''
    };

    function updateSelection(type) {
      selections[type] = document.getElementById(type).value;
    }

    function executeSelection() {
      const { ticker, time, block, broker } = selections;
      const spread = spreadData[ticker] ? spreadData[ticker][broker] : "N/A";

      // 結果を表示
      const resultDiv = document.getElementById('result');
      const spreadDiv = document.getElementById('spread');

      if (ticker && time && block && broker) {
          resultDiv.innerHTML = `
              <strong>選択結果:</strong><br>
               ${ticker} ${time} ${block} ${broker}
          `;
          spreadDiv.innerHTML = `<strong>Spread:</strong> ${spread}`;
      } else {
          resultDiv.innerHTML = "<strong>すべての項目を選択してください。</strong>";
          spreadDiv.innerHTML = ""; // スプレッドの表示をクリア
      }
    }

    function copyToClipboard() {
      const resultDiv = document.getElementById('result');
      const spreadDiv = document.getElementById('spread');
      const textToCopy = `${resultDiv.innerText}\n${spreadDiv.innerText}`;
