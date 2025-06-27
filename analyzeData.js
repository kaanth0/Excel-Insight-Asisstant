// En çok geçen değeri bul (örnek: ürün, temsilci)
export function getMostFrequentValue(data, field) {
  const counts = {};
  data.forEach(row => {
    const value = row[field];
    if (value) counts[value] = (counts[value] || 0) + 1;
  });
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  return sorted.length ? { value: sorted[0][0], count: sorted[0][1] } : null;
}

// Sayısal toplam (örnek: toplam satış)
export function getSum(data, field) {
  return data.reduce((acc, row) => acc + (parseFloat(row[field]) || 0), 0);
}

// Belirli bir alana göre gruplandırılmış toplamlar (örnek: temsilci bazlı satış)
export function getGroupedSums(data, groupField, valueField) {
  const totals = {};
  data.forEach(row => {
    const group = row[groupField];
    const value = parseFloat(row[valueField]) || 0;
    if (group) totals[group] = (totals[group] || 0) + value;
  });
  return totals;
}

// Tarih filtresiyle veri çekme
export function filterByDate(data, dateField, targetDate) {
  return data.filter(row => row[dateField] === targetDate);
}