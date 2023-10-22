
//كتب بواسطه زيد علي
function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    const birthYear = new Date(birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    // تحديد العناصر الصحيحة باستخدام المعرفات الصحيحة
    const dataParagraph = document.getElementById("dataParagraph");
    const kaka = document.getElementById("kaka");
    const h_b = document.getElementById("h-b");

    // تحديث النص في العناصر
    dataParagraph.textContent = `عمرك بالسنين: ${age} سنة`;
    kaka.textContent = `عمرك بالشهور: ${age * 12} شهرًا`;
    h_b.textContent = `عمرك بالأسابيع: ${age * 52} أسبوعًا`;
    const theEnd = document.getElementById("theEnd");
    theEnd.innerHTML = "العمر كله حبيبي"

}




















































      












