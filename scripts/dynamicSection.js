function createMobileView() {
    const section = document.createElement('section');
    section.className = 'section-tournament-support';
  
    const textWrapper = document.createElement('div');
    textWrapper.className = 'text-wrapper';
  
    const heading = document.createElement('h2');
    heading.className = 'section-tournament-support__heading';
    heading.innerHTML = 'Чтобы поддержать<br>Международный васюкинский<br>турнир';
  
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'image-wrapper';
  
    const image = document.createElement('img');
    image.src = '/assets/mens.png';
    image.alt = 'Турнир по шахматам';
    image.className = 'section-tournament-support__image';
  
    imageWrapper.appendChild(image);
  
    const span = document.createElement('span');
    span.className = 'lecture-topic';
    span.innerHTML = 'посетите лекцию на тему: <span class="section-tournament-support__highlight">«Плодотворная дебютная идея»</span>';
  
    textWrapper.appendChild(heading);
    textWrapper.appendChild(imageWrapper);
    textWrapper.appendChild(span);
    section.appendChild(textWrapper);
  
    return section;
  }
  
  function createDesktopView() {
    const section = document.createElement('section');
    section.className = 'section-tournament-support';
  
    const textWrapper = document.createElement('div');
    textWrapper.className = 'text-wrapper';
  
    const heading = document.createElement('h2');
    heading.className = 'section-tournament-support__heading';
    heading.innerHTML = 'Чтобы поддержать<br> Международный васюкинский<br> турнир посетите лекцию на тему:<br><span class="section-tournament-support__highlight">«Плодотворная дебютная идея»</span>';
  
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'image-wrapper';
  
    const image = document.createElement('img');
    image.src = '/assets/mens.png';
    image.alt = 'Турнир по шахматам';
    image.className = 'section-tournament-support__image';
  
    imageWrapper.appendChild(image);
  
    textWrapper.appendChild(heading);
    textWrapper.appendChild(imageWrapper);
    section.appendChild(textWrapper);
  
    return section;
  }
  
  export function adjustContent() {
    const dynamicSection = document.getElementById('dynamic-section');
    dynamicSection.innerHTML = '';
  
    if (window.innerWidth >= 769) {
      dynamicSection.appendChild(createDesktopView());
    } else {
      dynamicSection.appendChild(createMobileView());
    }
  }