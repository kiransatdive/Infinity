// src/colorUtils.js or src/utils/colorUtils.js

export function getRandomColor() {
  const colors = [
    "#FF6B6B",
    "#6BCB77",
    "#4D96FF",
    "#FFD93D",
    "#FF9F1C",
    "#9B5DE5",
    "#00BBF9",
    "#F15BB5",
    "#00F5D4",
    "#B8F2E6",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
