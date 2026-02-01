const tg = window.Telegram.WebApp;
tg.expand();

const deck = [
  // ─── Старшие арканы ───
  {name:"Шут", img:"cards/major/fool.jpg"},
  {name:"Маг", img:"cards/major/magician.jpg"},
  {name:"Верховная Жрица", img:"cards/major/high_priestess.jpg"},
  {name:"Императрица", img:"cards/major/empress.jpg"},
  {name:"Император", img:"cards/major/emperor.jpg"},
  {name:"Иерофант", img:"cards/major/hierophant.jpg"},
  {name:"Влюблённые", img:"cards/major/lovers.jpg"},
  {name:"Колесница", img:"cards/major/chariot.jpg"},
  {name:"Сила", img:"cards/major/strength.jpg"},
  {name:"Отшельник", img:"cards/major/hermit.jpg"},
  {name:"Колесо Фортуны", img:"cards/major/wheel.jpg"},
  {name:"Справедливость", img:"cards/major/justice.jpg"},
  {name:"Повешенный", img:"cards/major/hanged_man.jpg"},
  {name:"Смерть", img:"cards/major/death.jpg"},
  {name:"Умеренность", img:"cards/major/temperance.jpg"},
  {name:"Дьявол", img:"cards/major/devil.jpg"},
  {name:"Башня", img:"cards/major/tower.jpg"},
  {name:"Звезда", img:"cards/major/star.jpg"},
  {name:"Луна", img:"cards/major/moon.jpg"},
  {name:"Солнце", img:"cards/major/sun.jpg"},
  {name:"Суд", img:"cards/major/judgement.jpg"},
  {name:"Мир", img:"cards/major/world.jpg"},
];

// ─── Младшие арканы ───
const suits = [
  {name:"Жезлов", folder:"wands"},
  {name:"Кубков", folder:"cups"},
  {name:"Мечей", folder:"swords"},
  {name:"Пентаклей", folder:"pentacles"},
];

const ranks = [
  "Туз","Двойка","Тройка","Четвёрка","Пятёрка","Шестёрка",
  "Семёрка","Восьмёрка","Девятка","Десятка",
  "Паж","Рыцарь","Королева","Король"
];

suits.forEach(suit=>{
  ranks.forEach(rank=>{
    deck.push({
      name: `${rank} ${suit.name}`,
      img: `cards/${suit.folder}/${rank.toLowerCase()}.jpg`
    });
  });
});
