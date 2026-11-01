document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("courseSearch");
    const courses = document.querySelectorAll(".course-card");

    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase().trim();

        courses.forEach(function (course) {
            const courseName = course.textContent.toLowerCase();

            if (courseName.includes(searchValue)) {
                course.style.display = "";
            } else {
                course.style.display = "none";
            }
        });
    });
});