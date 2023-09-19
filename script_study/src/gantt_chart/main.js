function createChart(e){
  const days = document.querySelectorAll('.chart-values li');
  const tasks = document.querySelectorAll('.chart-bars li');
  const daysArray = [...days];  // nodelist를 array로 변경
  
  tasks.forEach(el =>{ // forEach(function(currentvalue, index, array){...});문법 -> 간단히 forEach(currentvalue =>){}
    // 변수지정 
    const duration = el.dataset.duration.split('-');  // el= list, html에서 data값을 가저올때 dataset.duration사용
    const startDay = duration[0];
    console.log(startDay);
    const endDay = duration[1];
    console.log(endDay);
    let left = 0,
        width = 0;
        
    // bar의 left 확인
    if (startDay.endsWith('½')){
      const filteredArray = daysArray.filter(day => day.textContent == startDay.slice(0, -1));
      left = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2 ;
    } else {
      const filteredArray = daysArray.filter(day => day.textContent == startDay);
      left = filteredArray[0].offsetLeft;
    }
    // bar의 width 확인
    if (endDay.endsWith('½')){
      const filteredArray = daysArray.filter(day => day.textContent == endDay.slice(0, -1));
      width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2 - left;
    } else {
      const filteredArray = daysArray.filter(day => day.textContent == endDay);
      width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth - left;
    }

    // left, width li css 지정
    el.style.left = `${left}px`;  // el.style.left = left + 'px'
    el.style.width = `${width}px`;
    if(e.type == 'load'){
      el.style.backgroundColor = el.dataset.color;
      el.style.opacity = 1;
    };
    
  }); // forEach
}; // create Chart

window.addEventListener('load', createChart);
window.addEventListener('resize', createChart);