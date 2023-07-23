import banner from "../.././../../assets/image/banner.jpg";

const ClinicsBanner = () => {
  return (
    <>
      <div className="relative">
        <div
          className="relative h-52 w-full flex items-center justify-center text-center bg-cover bg-center "
          style={{
            backgroundImage:
              `url(${banner})`,
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-brand opacity-75" />
          <main className="px-4 lg:px-8 z-10 sm:max-w-3xl sm:mx-auto">
            <div className="text-center">
              <h2 className="text-2xl tracking-tight leading-10 font-medium sm:text-3xl text-secondary md:text-4xl">
              Medical terminology allows all medical professionals.
              </h2>
              <div className="py-5 text-sm font-regular text-secondary flex items-center justify-center">
                <span className="mr-3 flex flex-row items-center">
                  <svg
                    
                    fill="currentColor"
                    height="13px"
                    width="13px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path
                          d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
        c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
        c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span className="ml-1 text-accent">6 mins ago</span>
                </span>
                <a
                  href="#"
                  className="flex flex-row items-center hover:text-black mr-3"
                >
                  <svg
                    
                    fill="currentColor"
                    height="16px"
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                  <span className="ml-1 text-accent">AliSher Azimi</span>
                </a>
                <a
                  href="#"
                  className="flex flex-row items-center hover:text-black"
                >
                  <svg
                    
                    fill="currentColor"
                    height="16px"
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 18"
                  >
                    <path
                      fill
                      d="M15.4496399,8.42490555 L8.66109799,1.63636364 L1.63636364,1.63636364 L1.63636364,8.66081885 L8.42522727,15.44178 C8.57869221,15.5954158 8.78693789,15.6817418 9.00409091,15.6817418 C9.22124393,15.6817418 9.42948961,15.5954158 9.58327627,15.4414581 L15.4486339,9.57610048 C15.7651495,9.25692435 15.7649133,8.74206554 15.4496399,8.42490555 Z M16.6084423,10.7304545 L10.7406818,16.59822 C10.280287,17.0591273 9.65554997,17.3181054 9.00409091,17.3181054 C8.35263185,17.3181054 7.72789481,17.0591273 7.26815877,16.5988788 L0.239976954,9.57887876 C0.0863319284,9.4254126 0,9.21716044 0,9 L0,0.818181818 C0,0.366312477 0.366312477,0 0.818181818,0 L9,0 C9.21699531,0 9.42510306,0.0862010512 9.57854191,0.239639906 L16.6084423,7.26954545 C17.5601275,8.22691012 17.5601275,9.77308988 16.6084423,10.7304545 Z M5,6 C4.44771525,6 4,5.55228475 4,5 C4,4.44771525 4.44771525,4 5,4 C5.55228475,4 6,4.44771525 6,5 C6,5.55228475 5.55228475,6 5,6 Z"
                    />
                  </svg>
                  <span className="ml-1 text-accent">activewear</span>
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ClinicsBanner;
