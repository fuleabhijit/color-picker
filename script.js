document.getElementById("colorPicker").addEventListener("input", function() {
    let selectedColor = this.value;
    document.getElementById("colorValue").textContent = selectedColor;
});
