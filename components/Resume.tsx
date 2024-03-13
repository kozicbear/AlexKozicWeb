"use client";

const Resume = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
     
    // using Java Script method to get PDF file
    fetch("Resume.pdf").then((response) => {
        response.blob().then((blob) => {
         
            // Creating new object of PDF file
            const fileURL =
                window.URL.createObjectURL(blob);
                 
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "Resume.pdf";
            alink.click();
        });
    });
  };

  return (
    <button className="border-2 border-stone-200 bg-stone-200 hover:bg-stone-50 rounded-lg px-1.5 py-1" onClick={onButtonClick}>
      Resume
    </button>
  )
}

export default Resume;

