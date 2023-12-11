const PortfolioCard = ({ imgURL, label, link }) => {
  return (
    <div class="border rounded-lg shadow-3xl bg-transparent backdrop-blur-lg backdrop-brightness-50 border-gray-700 flex flex-col sm:flex-row  w-full">
      <img class="rounded-t-lg w-[100%]" src={imgURL} alt="" />

      <div class="p-5 ">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
          {label}
        </h5>

        <a
          href={link}
          class="inline-flex items-center justify-center px-3 py-2 mt-3 text-sm font-medium text-white rounded-lg   focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Visit website
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
