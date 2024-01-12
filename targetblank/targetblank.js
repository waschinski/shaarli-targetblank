document.addEventListener("DOMContentLoaded", function(event) {
    const linklist = document.getElementsByClassName("linklist-real-url");
    if (linklist.length > 0) {
        for (let link of linklist) {
            if (link.href.includes('shaare/') === false) {
               link.target = "_blank";
            }
        }
    }
    const picwall = document.getElementById("picwall");
    if (picwall !== null) {
        const piclist = picwall.getElementsByTagName("a");
        if (piclist.length > 0) {
            for (let link of piclist) {
                if (link.href.includes('shaare/') === false) {
                    link.target = "_blank";
                }
            }
        }
    }
});
