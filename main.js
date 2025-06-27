import { parseAndAnalyze } from "./questionParser.js";

let parsedData = [];

document.getElementById("file-input").addEventListener("change", handleFile);
document.getElementById("analyze-btn").addEventListener("click", handleQuestion);

function handleFile(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: "array" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    parsedData = XLSX.utils.sheet_to_json(sheet);

    document.getElementById("output").innerHTML =
      `<p><strong>✅ Dosya yüklendi:</strong> ${parsedData.length} satır veri bulundu.</p>`;
  };

  reader.readAsArrayBuffer(file);
}

function handleQuestion() {
  const question = document.getElementById("question").value;
  if (!parsedData.length) {
    document.getElementById("output").innerText = "Lütfen önce Excel dosyası yükleyin.";
    return;
  }
  if (!question.trim()) {
    document.getElementById("output").innerText = "Lütfen bir soru yazın.";
    return;
  }

  const answer = parseAndAnalyze(question, parsedData);
  document.getElementById("output").innerHTML = `<p><strong>🔍 Yanıt:</strong> ${answer}</p>`;
}