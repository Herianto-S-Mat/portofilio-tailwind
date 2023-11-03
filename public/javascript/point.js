fetch('./section/start.html')
.then(response => response.text())
.then(data => {
  document.body.innerHTML = data;
});
function fillSection(){
fetch('./section/introduce.html')
.then(response => response.text())
.then(data => {
  document.getElementById('introduce').innerHTML = data;
});

fetch('./section/contact.html')
.then(response => response.text())
.then(data => {
  document.getElementById('contact').innerHTML = data;
}); 

fetch('./section/project.html')
.then(response => response.text())
.then(data => {
  document.getElementById('project').innerHTML = data;
});
}
fillSection();
function writeHtmlSection(sections) {
let html = ''; // Perlu inisialisasi dengan nilai kosong
sections.forEach(section => {
html += `<section id="${section}" class="bg-orange-200 p-5 mb-5 shadow-lg shadow-green-900"></section>`; // Gunakan += untuk menggabungkan setiap bagian
});
document.getElementById('section').innerHTML = html;
}
fillSection();

function writeHtmlSection(sections) {
let html = ''; // Perlu inisialisasi dengan nilai kosong
let id ='';
sections.forEach(section => {
id =`nav-${section}`;
document.getElementById(id).classList.remove('bg-orange-300');
html += `<section id="${section}" class="bg-orange-200 p-5 mb-5 shadow-lg shadow-green-900"></section>`; // Gunakan += untuk menggabungkan setiap bagian
});
document.getElementById('section').innerHTML = html;
fillSection();
}

function first(id_section) {
  let sections = []; // Deklarasi variabel sections
  switch (id_section) {
  case 'introduce':
    sections = ['introduce', 'project', 'contact'];
    writeHtmlSection(sections);
    break;
  case 'project':
    sections = ['project', 'introduce', 'contact'];
    writeHtmlSection(sections);
    break;
  case 'contact':
    sections = ['contact', 'introduce', 'project'];
    writeHtmlSection(sections);
    break;
  }
document.getElementById(`nav-${id_section}`).classList.add('bg-orange-300');
}


document.body.classList.add('w-auto');
document.body.classList.add('lg:px-40');
document.body.classList.add('p-10');
document.body.classList.add('pt-5');
// document.body.classList.add('w-auto  lg:px-40 p-10 pt-5 bg-pnk-500');