const works = [
   {
      title: "Ecommerce Website",
      description: "Asp.net Core Web API",
      image: "./images/foodmart.png",
      link: "https://fooodmaart.netlify.app/",
    },
    {
      title: "Yoga Website",
      description: "Website for Yoga Classes",
      image: "./images/work-1.png",
      link: "https://yogastic.netlify.app/",
    },
    {
      title: "Search Any Image",
      description: "Unsplash Web API",
      image: "./images/work-3.png",
      link: "https://pixplorer-imagesearch.netlify.app/",
    },
    {
      title: "Cyber Security Page",
      description: "Cyber Security Awareness",
      image: "./images/work-4.png",
      link: "https://cyber-sec-avs.netlify.app/",
    },
  ];
  
  const container = document.getElementById("work-container");
  
  works.forEach((work) => {
    const card = document.createElement("div");
    card.className =
      "aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group";
    card.style.backgroundImage = `url('${work.image}')`;
  
    card.innerHTML = `
    <a href="${work.link}" target="_blank" >
      <div
        class="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
        
        >
        <div>
          <h2 class="font-semibold">${work.title}</h2>
          <p class="text-sm text-gray-700">${work.description}</p>
        </div>
        <a href="${work.link}" target="_blank">
          <div
            class="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
          >
            <img
              src="./images/send-icon.png"
              class="w-5"
              alt="Send Icon"
            />
          </div>
       
      </div> 
      </a>
    `;
  
    container.appendChild(card);
  });
  