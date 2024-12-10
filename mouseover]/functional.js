const paragrah1 = document.querySelector("paragraph1");
paragrah1.addEventListener("mouseover", () => {
  paragrah1.style.color = "red";
});

paragrah1.addEventListener("mouseout", () => {
  paragrah1.style.color = "black";
})


/*  <script>
    const paragraph1 = document.querySelector("paragraph1");
    const paragraph2 = document.querySelector("paragraph2");

    paragraph1.addEventListener("mouseover", function() {
        paragraph1.textContent = "You have hovered over me";
    });

    paragraph1.addEventListener("mouseout", function() {
        paragraph1.textContent = "Hover over me";
    });

    paragraph2.addEventListener("mouseover", function() {
        paragraph2.textContent = "You have hovered over me";
    });

    paragraph2.addEventListener("mouseout", function() {
        paragraph2.textContent = "Mouse out";
    });
</script> */