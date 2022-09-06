window.onload = () => {
  
  const box = document.querySelector('.box');
  const input = document.querySelector('.input');
  
  const allInputRange = document.querySelectorAll('.range');
  allInputRange.forEach(range => {
    range.addEventListener('input', () => {
      
      let red = document.querySelector('.red').value;
      let green = document.querySelector('.green').value;
      let blue = document.querySelector('.blue').value;
      let alpha = document.querySelector('.alpha').value;
      
      box.style.background = color(red,green,blue,alpha);
      input.value = color(red,green,blue,alpha,true);
      
    });
  });
  
  function color(red,green,blue,alpha,show = false) {
    return `${!show ? '' : 'background: '}rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }
  
  // salin warna
  const copyButton = document.querySelector('.copy');
  copyButton.addEventListener('click', () => {
    input.select();
    document.execCommand("copy");
    alert('warna berhasil disalin!');
  });
  
}