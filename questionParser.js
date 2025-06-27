import {
  getMostFrequentValue,
  getSum,
  getGroupedSums,
  filterByDate
} from "./analyzeData.js";

export function parseAndAnalyze(question, data) {
  question = question.toLowerCase();

  // En çok geçen ürün
  if (question.includes("en çok") && question.includes("ürün")) {
    const result = getMostFrequentValue(data, "Ürün");
    return `En çok satılan ürün: ${result.value} (${result.count} adet)`;
  }

  // En çok satış yapan temsilci
  if (question.includes("en çok") && question.includes("temsilci")) {
    const grouped = getGroupedSums(data, "Temsilci", "Satış Tutarı");
    const best = Object.entries(grouped).sort((a, b) => b[1] - a[1])[0];
    return `En çok satış yapan temsilci: ${best[0]} (₺${best[1]})`;
  }

  // Toplam satış
  if (question.includes("toplam") && question.includes("satış")) {
    const total = getSum(data, "Satış Tutarı");
    return `Toplam satış tutarı: ₺${total}`;
  }

  // Tarih bazlı sorgulama
  if (question.match(/\d{4}-\d{2}-\d{2}/)) {
    const date = question.match(/\d{4}-\d{2}-\d{2}/)[0];
    const filtered = filterByDate(data, "Tarih", date);
    const total = getSum(filtered, "Satış Tutarı");
    return `${date} tarihinde toplam satış: ₺${total}`;
  }

  // Uygun analiz bulunamazsa
  return "Bu soru henüz desteklenmiyor. Daha fazla analiz yeteneği yakında!";
}