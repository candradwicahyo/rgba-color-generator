window.onload = () => {
  
  const box = document.querySelector('.box');
  const input = document.querySelector('.input');
  const inputRange = document.querySelectorAll('.range');
  // looping
  inputRange.forEach(range => {
    // ketika input range digeser
    range.addEventListener('input', function() {
      // ambil semua value dari input range
      const value = inputRangeValue();
      // set ke element box dan input 
      box.style.background = setValue(value);
      input.value = setValue(value, true);
    });
  });
  
  function inputRangeValue() {
    // value dari tiap input range
    let red = document.querySelector('.red').value;
    let green = document.querySelector('.green').value;
    let blue = document.querySelector('.blue').value;
    let alpha = document.querySelector('.alpha').value;
    // kembalikan nilai
    return `${red}, ${green}, ${blue}, ${alpha}`;
  }
  
  function setValue(color, text = false) {
    /*
      jika parameter text menghasilkan boolean false,
      maka tampilkan string kosong. tapi jika parameter
      text menghasilkan boolean true, maka tampilkan
      text bertuliskan background:
    */
    return `${!text ? '' : 'background:'} rgba(${color})`;
  }
  
  // salin kode warna
  const copyButton = document.querySelector('.btn-copy');
  copyButton.addEventListener('click', () => {
    // jika input kosong
    if (!input.value) return alert('field is empty!');
    // pilih value input
    input.select();
    // salin
    document.execCommand('copy');
    // tampilkan pesan
    alert('code has been copied!');
  });
  
}