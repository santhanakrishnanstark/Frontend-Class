// 1. Window Event


document.querySelector("main").addEventListener("scroll", (e) => {
    const structureSection = document.getElementById("structure");
    const structureSectionPosition = structureSection.offsetTop - structureSection.offsetHeight;


    // if scrollPosition is > structureSectionPosition then add class to structure section

    const scrollPosition = e.target.scrollTop;
    console.log(scrollPosition, structureSectionPosition);

    // 600 1200
    if (scrollPosition > structureSectionPosition && scrollPosition < ((structureSection.offsetHeight) * 3)) {
        structureSection.classList.add("animate");
    } else {
        structureSection.classList.remove("animate");
    }



    const contentSection = document.getElementById("content");
    const contentSectionPosition = contentSection.offsetTop - contentSection.offsetHeight;


    // if scrollPosition is > contentSectionPosition then add class to structure section

    // const scrollPosition = e.target.scrollTop;
    console.log(scrollPosition, contentSectionPosition);

    // 600 1200
    if (scrollPosition > contentSectionPosition && scrollPosition < ((contentSection.offsetHeight) * 6)) {
        contentSection.classList.add("animate");
    } else {
        contentSection.classList.remove("animate");
    }

})