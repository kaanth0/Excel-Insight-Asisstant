let parsedData = [];

document.getElementById("file-input").addEventListener("change", handleFile);

function handleFile(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: "array" });

    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    parsedData = XLSX.utils.sheet_to_json(sheet);
    document.getElementById("output").innerHTML = `
      <p><strong>✅ Veri Yüklendi:</strong> ${parsedData.length} satır bulundu.</p>
    `;
  };

  reader.readAsArrayBuffer(file);
}

document.getElementById("analyze-btn").addEventListener("click", () => {
  const question = document.getElementById("question").value.trim().toLowerCase();
  if (!parsedData.length) {
    document.getElementById("output").innerText = "Lütfen önce bir Excel dosyası yükleyin.";
    return;
  }

  // Basit analiz örnekleri (şimdilik sabit)
  if (question.includes("toplam")) {
    const numericFields = Object.keys(parsedData[0]).filter(key =>
      typeof parsedData[0][key] === "number"
    );

    if (numericFields.length) {
      const sum = parsedData.reduce((acc, row) => acc + (row[numericFields[0]] || 0), 0);
      document.getElementById("output").innerText = `Toplam ${numericFields[0]}: ${sum}`;
    } else {
      document.getElementById("output").innerText = "Sayı içeren bir kolon bulunamadı.";
    }
  } else {
    document.getElementById("output").innerText = "Bu soru türü henüz desteklenmiyor.";
  }
});