const countdown = [
  {
    date: "October 31, ",
    holiday: "Halloween"
  },
  {
    date: "November 24, ",
    holiday: "Black Friday"
  },
  {
    date: "November 27, ",
    holiday: "Cyber Monday"
  },
  {
    date: "December 25, ",
    holiday: "Hexmas"
  },
  {
    date: "December 31, ",
    holiday: "New Year's Eve"
  }
];
const now = new Date();
let year = now.getFullYear();
const slideshow = document.getElementsByTagName("slideshow-component")[0].getElementsByClassName("slideshow")[0].getElementsByClassName("slideshow__slide");

for (let i=0; i < slideshow.length; i++) {
  const heading = slideshow[i].getElementsByClassName("banner__heading")[0];
  const text = heading.innerText;
  const holiday = countdown.find(day => day.holiday === text);
  
  if (holiday) {
    // if (now.getMonth() > 9) { year += 1 }
    const upcoming = new Date(`${holiday.date} ${year} 00:00:00`);
    const timeUntil = upcoming.getTime() - now.getTime();
    const daysUntil = Math.abs(Math.ceil(timeUntil / (1000 * 60 * 60 * 24)));
    let textReplacement = "";
    if (daysUntil === 0) {
      textReplacement = `It's ${holiday.holiday}!`
    } else {
      textReplacement = `${daysUntil} days until ${holiday.holiday}!`;
    }
    heading.innerHTML = heading.innerHTML.replace(text, textReplacement);
  }
}