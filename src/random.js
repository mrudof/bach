import contestantData from './contestant-data';
const n = 16;
    const shuffled = contestantData.sort(() => .5 - Math.random());// shuffle  
    let selected = shuffled.slice(0,n);
    selected.forEach(function(item){ 
      item.clicked = 0;
    });

export default selected;