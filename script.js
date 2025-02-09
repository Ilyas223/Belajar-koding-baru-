// Fungsi untuk mengarahkan ke halaman pembelajaran sesuai bahasa yang dipilih
function goToLesson(language) {
    window.location.href = `lesson.html?lang=${language}`;
}

// Menangani logika di halaman pembelajaran (lesson.html)
const urlParams = new URLSearchParams(window.location.search);
const language = urlParams.get('lang');

// Materi untuk masing-masing bahasa pemrograman
const lessons = {
    html: { title: "HTML & CSS", content: "HTML digunakan untuk struktur, CSS untuk gaya." },
    js: { title: "JavaScript", content: "JavaScript digunakan untuk logika dan interaksi web." },
    c: { title: "Bahasa C", content: "C adalah bahasa pemrograman tingkat rendah yang cepat." },
    cpp: { title: "C++", content: "C++ adalah bahasa berbasis C dengan fitur OOP." },
    rust: { title: "Rust", content: "Rust fokus pada performa dan keamanan memory." },
    go: { title: "Go", content: "Go adalah bahasa buatan Google untuk efisiensi." }
};

// Menampilkan materi pembelajaran sesuai bahasa yang dipilih
document.getElementById("lesson-title").innerText = `Belajar ${lessons[language].title}`;
document.getElementById("lesson-subtitle").innerText = lessons[language].title;
document.getElementById("lesson-content").innerText = lessons[language].content;

// Fungsi untuk menjalankan kode yang ditulis oleh pengguna
function runCode() {
    let code = document.getElementById("code-editor").value;
    let outputFrame = document.getElementById("output").contentWindow.document;
    outputFrame.open();
    outputFrame.write(code);
    outputFrame.close();
}
