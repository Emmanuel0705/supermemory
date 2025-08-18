export default function LoginPage() {
  return (
    <section className="min-h-screen flex flex-col lg:grid lg:grid-cols-12 items-center justify-center p-4 sm:p-6 md:p-8 lg:px-[5rem] lg:py-[3.125rem] gap-6 lg:gap-[5rem] max-w-[400rem] mx-auto">
      {/* Carousel Section */}
      <section className="relative hidden lg:block lg:col-span-6" data-slot="carousel">
        <div className="overflow-hidden" data-slot="carousel-content">
          <div className="flex -ml-4" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
            <div 
              aria-roledescription="slide" 
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 relative" 
              data-slot="carousel-item" 
              role="group" 
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              <img 
                alt="supermemory abstract 2d" 
                loading="lazy" 
                width="600" 
                height="600" 
                decoding="async" 
                data-nimg="1" 
                srcSet="/_next/image?url=%2Fimages%2Flogin-carousel-1.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimages%2Flogin-carousel-1.png&amp;w=1200&amp;q=75 2x" 
                src="/_next/image?url=%2Fimages%2Flogin-carousel-1.png&amp;w=1200&amp;q=75" 
                style={{ color: "transparent" }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-12">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-0.8px] text-white mb-2 leading-tight">
                  Your memory, everywhere, with you.
                </h1>
              </div>
            </div>
            <div 
              aria-roledescription="slide" 
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 relative" 
              data-slot="carousel-item" 
              role="group"
            >
              <img 
                alt="supermemory abstract 3d" 
                loading="lazy" 
                width="600" 
                height="600" 
                decoding="async" 
                data-nimg="1" 
                srcSet="/_next/image?url=%2Fimages%2Flogin-carousel-2.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimages%2Flogin-carousel-2.png&amp;w=1200&amp;q=75 2x" 
                src="/_next/image?url=%2Fimages%2Flogin-carousel-2.png&amp;w=1200&amp;q=75" 
                style={{ color: "transparent" }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-12">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-0.8px] text-white mb-2 leading-tight">
                  Private, secure, and reliable.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Login Form Section */}
      <div className="w-full max-w-md lg:max-w-none lg:col-span-5 flex flex-col gap-4 lg:gap-6 min-h-2/3">
        <div className="flex flex-col gap-2 text-center lg:text-left md:mb-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-[70px] tracking-[-0.8px] text-sm-white flex flex-col justify-center md:justify-start md:flex-row items-center gap-3">
            <span className="block md:hidden">Welcome to </span>
            <svg className="h-8" fill="none" viewBox="0 0 1476 168" xmlns="http://www.w3.org/2000/svg">
              <title>supermemory Logo</title>
              <g clipPath="url(#a)" fill="#EFEFEF">
                <path d="M330.13 132.123c-11.97 0-21.792-2.607-29.438-7.823-7.66-5.216-12.284-12.665-13.888-22.362l21.477-5.59c.859 4.351 2.319 7.766 4.353 10.244 2.033 2.493 4.567 4.251 7.588 5.317 3.021 1.052 6.329 1.585 9.908 1.585 5.427 0 9.436-.966 12.027-2.882 2.592-1.931 3.895-4.308 3.895-7.175 0-2.868-1.231-5.058-3.709-6.614-2.477-1.556-6.414-2.824-11.855-3.818l-5.183-.936c-6.414-1.24-12.285-2.954-17.582-5.13-5.312-2.175-9.565-5.187-12.772-9.034-3.207-3.847-4.811-8.817-4.811-14.898 0-9.192 3.336-16.238 9.994-21.151 6.672-4.899 15.421-7.363 26.288-7.363 10.237 0 18.756 2.306 25.543 6.887 6.787 4.597 11.226 10.62 13.33 18.068l-21.663 6.7c-.988-4.711-2.992-8.068-6.013-10.057-3.022-1.988-6.759-2.982-11.197-2.982-4.439 0-7.846.778-10.18 2.334-2.348 1.556-3.522 3.703-3.522 6.426 0 2.982 1.231 5.187 3.708 6.613 2.463 1.427 5.799 2.522 9.994 3.257l5.183.936c6.916 1.24 13.173 2.882 18.785 4.942 5.613 2.046 10.051 4.971 13.33 8.76 3.265 3.79 4.911 8.919 4.911 15.374 0 9.682-3.493 17.175-10.466 22.448-6.973 5.288-16.323 7.924-28.049 7.924h.014ZM409.294 131.749c-7.159 0-13.416-1.643-18.785-4.942-5.369-3.285-9.536-7.853-12.499-13.688-2.964-5.835-4.439-12.549-4.439-20.114v-55.14h23.324v53.282c0 6.959 1.69 12.174 5.097 15.647 3.394 3.472 8.233 5.216 14.533 5.216 7.159 0 12.714-2.392 16.666-7.176 3.952-4.783 5.928-11.454 5.928-20.027V37.865h23.324v92.4h-22.952v-12.103h-3.336c-1.475 3.112-4.252 6.152-8.333 9.135-4.066 2.982-10.252 4.466-18.513 4.466l-.015-.014ZM479.095 167.525V37.865h22.952v11.18h3.336c2.09-3.601 5.369-6.8 9.807-9.595 4.439-2.795 10.796-4.193 19.072-4.193 7.402 0 14.261 1.83 20.546 5.49 6.3 3.66 11.355 9.034 15.177 16.108 3.823 7.074 5.742 15.647 5.742 25.704v2.983c0 10.057-1.919 18.63-5.742 25.704-3.822 7.074-8.891 12.449-15.177 16.108-6.3 3.66-13.144 5.49-20.546 5.49-5.555 0-10.209-.648-13.974-1.96-3.766-1.296-6.787-2.982-9.078-5.028-2.291-2.046-4.109-4.121-5.455-6.239h-3.336v47.879h-23.324v.029Zm48.137-55.141c7.288 0 13.301-2.334 18.055-6.988 4.753-4.654 7.13-11.454 7.13-20.402v-1.859c0-8.947-2.405-15.748-7.216-20.402-4.811-4.653-10.796-6.987-17.955-6.987-7.159 0-13.144 2.334-17.955 6.987-4.81 4.654-7.216 11.455-7.216 20.402v1.86c0 8.947 2.406 15.747 7.216 20.401 4.811 4.654 10.796 6.988 17.955 6.988h-.014ZM629.792 132.873c-9.135 0-17.182-1.96-24.155-5.864-6.973-3.919-12.399-9.438-16.294-16.584-3.88-7.147-5.827-15.561-5.827-25.243v-2.234c0-9.682 1.904-18.096 5.741-25.243 3.823-7.146 9.193-12.665 16.108-16.584 6.916-3.904 14.934-5.864 24.069-5.864s16.852 2.017 23.51 6.051c6.658 4.035 11.855 9.625 15.549 16.772 3.709 7.146 5.556 15.43 5.556 24.868v8.011h-66.837c.244 6.34 2.592 11.484 7.03 15.46 4.439 3.977 9.88 5.965 16.294 5.965 6.415 0 11.354-1.426 14.433-4.279 3.078-2.853 5.426-6.023 7.03-9.495l19.071 10.057c-1.732 3.227-4.223 6.743-7.502 10.532-3.279 3.79-7.617 7.017-13.058 9.683-5.427 2.665-12.342 4.005-20.733 4.005l.015-.014Zm-22.408-59.434h42.954c-.501-5.346-2.62-9.625-6.386-12.852-3.765-3.228-8.677-4.842-14.719-4.842s-11.297 1.614-14.991 4.842c-3.708 3.227-5.985 7.52-6.844 12.852h-.014ZM685.517 130.265v-92.4h22.952v10.431h3.336c1.36-3.731 3.608-6.454 6.758-8.198 3.15-1.743 6.816-2.608 11.011-2.608h11.111v20.863h-11.483c-5.928 0-10.796 1.585-14.619 4.755-3.823 3.17-5.742 8.04-5.742 14.624v52.533h-23.324ZM749.562 130.265v-92.4h22.951v10.057h3.337c1.603-3.098 4.252-5.807 7.96-8.098 3.709-2.29 8.577-3.443 14.619-3.443 6.543 0 11.784 1.268 15.736 3.818 3.951 2.55 6.972 5.864 9.077 9.97h3.336c2.091-3.976 5.055-7.261 8.892-9.87 3.823-2.607 9.249-3.904 16.294-3.904 5.67 0 10.824 1.21 15.463 3.631 4.625 2.42 8.333 6.08 11.111 10.993 2.778 4.914 4.166 11.08 4.166 18.544v60.731H859.18v-59.06c0-5.086-1.303-8.904-3.88-11.454-2.591-2.55-6.242-3.819-10.924-3.819-5.312 0-9.407 1.715-12.314 5.13-2.906 3.415-4.353 8.285-4.353 14.624v54.593h-23.324v-59.06c0-5.085-1.303-8.904-3.88-11.454-2.591-2.55-6.242-3.818-10.924-3.818-5.312 0-9.407 1.715-12.314 5.13-2.906 3.414-4.353 8.284-4.353 14.624v54.592H749.59l-.028-.057ZM940.249 132.873c-9.135 0-17.182-1.96-24.155-5.864-6.972-3.919-12.399-9.438-16.293-16.584-3.881-7.147-5.828-15.561-5.828-25.243v-2.234c0-9.682 1.904-18.096 5.742-25.243 3.823-7.146 9.192-12.665 16.107-16.584 6.916-3.904 14.934-5.864 24.069-5.864s16.852 2.017 23.51 6.051c6.658 4.035 11.855 9.625 15.549 16.772 3.709 7.146 5.556 15.43 5.556 24.868v8.011h-66.837c.244 6.34 2.592 11.484 7.031 15.46 4.438 3.977 9.879 5.965 16.294 5.965 6.414 0 11.354-1.426 14.446-4.279 3.079-2.853 5.427-6.023 7.031-9.495l19.071 10.057c-1.732 3.227-4.224 6.743-7.503 10.532-3.278 3.79-7.617 7.017-13.058 9.683-5.426 2.665-12.342 4.005-20.732 4.005v-.014Zm-22.393-59.434h42.954c-.502-5.346-2.621-9.625-6.386-12.852-3.766-3.228-8.677-4.842-14.719-4.842s-11.297 1.614-14.991 4.842c-3.708 3.227-5.985 7.52-6.844 12.852h-.014ZM995.975 130.265v-92.4h22.955v10.057h3.33c1.61-3.098 4.25-5.807 7.96-8.098 3.71-2.29 8.58-3.443 14.62-3.443 6.55 0 11.79 1.268 15.74 3.818 3.95 2.55 6.97 5.864 9.08 9.97h3.33c2.09-3.976 5.06-7.261 8.89-9.87 3.83-2.607 9.25-3.904 16.3-3.904 5.67 0 10.82 1.21 15.46 3.631 4.62 2.42 8.33 6.08 11.11 10.993 2.78 4.914 4.17 11.08 4.17 18.544v60.731h-23.33v-59.06c0-5.086-1.3-8.904-3.88-11.454-2.59-2.55-6.24-3.819-10.92-3.819-5.31 0-9.41 1.715-12.32 5.13-2.9 3.415-4.35 8.285-4.35 14.624v54.593h-23.32v-59.06c0-5.085-1.3-8.904-3.88-11.454-2.59-2.55-6.24-3.818-10.93-3.818-5.31 0-9.4 1.715-12.31 5.13-2.91 3.414-4.35 8.284-4.35 14.624v54.592h-23.327l-.028-.057ZM1188.52 132.873c-9.13 0-17.34-1.859-24.62-5.591-7.29-3.731-13.03-9.134-17.23-16.209-4.19-7.074-6.3-15.59-6.3-25.517v-2.982c0-9.942 2.09-18.443 6.3-25.517 4.2-7.075 9.94-12.478 17.23-16.21 7.27-3.731 15.49-5.59 24.62-5.59 9.14 0 17.34 1.859 24.63 5.59 7.27 3.732 13.02 9.135 17.22 16.21 4.2 7.074 6.29 15.59 6.29 25.517v2.982c0 9.942-2.1 18.443-6.29 25.517-4.19 7.075-9.93 12.478-17.22 16.209-7.29 3.732-15.49 5.591-24.63 5.591Zm0-20.863c7.16 0 13.08-2.335 17.77-6.988 4.7-4.654 7.03-11.34 7.03-20.028v-1.859c0-8.688-2.32-15.373-6.94-20.027-4.63-4.654-10.58-6.988-17.87-6.988-7.29 0-13.09 2.334-17.77 6.988-4.7 4.654-7.03 11.34-7.03 20.027v1.86c0 8.687 2.33 15.373 7.03 20.027 4.7 4.653 10.61 6.988 17.77 6.988h.01ZM1248.87 130.265v-92.4h22.96v10.431h3.33c1.36-3.731 3.61-6.454 6.76-8.198 3.15-1.743 6.81-2.608 11.01-2.608h11.11v20.863h-11.48c-5.93 0-10.8 1.585-14.62 4.755-3.82 3.17-5.74 8.04-5.74 14.624v52.533h-23.33ZM1322.93 167.525v-20.489h49.98c3.45 0 5.18-1.859 5.18-5.59v-23.284h-3.33c-.99 2.118-2.54 4.222-4.63 6.34-2.1 2.118-4.94 3.847-8.52 5.215-3.58 1.369-8.14 2.046-13.7 2.046-7.16 0-13.43-1.642-18.78-4.942-5.37-3.285-9.54-7.852-12.5-13.688-2.97-5.835-4.44-12.549-4.44-20.113V37.865h23.32v53.282c0 6.959 1.69 12.174 5.1 15.647 3.39 3.472 8.23 5.216 14.53 5.216 7.16 0 12.72-2.392 16.67-7.176 3.95-4.783 5.93-11.454 5.93-20.027V37.865h23.32V146.66c0 6.34-1.85 11.397-5.56 15.187-3.7 3.789-8.64 5.677-14.8 5.677H1322.93ZM1420.63 44.853h7.98v22.822h6.58V44.853h7.98V38.7h-22.54v6.153ZM1465.12 38.7l-4.5 22.794-4.48-22.794h-10.88v28.975h6.43v-20.69l4.09 20.69h9.7l4.09-20.69v20.69h6.43V38.7h-10.88ZM205.864 66.263h-76.401V0h-24.684v71.897c0 7.636 3.021 14.97 8.391 20.373l62.383 62.777 17.454-17.564-46.076-46.365h58.948v-24.84l-.015-.015ZM12.872 30.517l46.075 46.365H0v24.84h76.4v66.264h24.685V96.089c0-7.637-3.021-14.97-8.39-20.374l-62.37-62.762-17.453 17.564Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path d="M0 0h1476v168H0z" fill="#fff" />
                </clipPath>
              </defs>
            </svg>
          </h1>
          <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-[32px] tracking-[-0.4px] text-sm-silver-chalice">
            The unified memory API for the AI era.
          </h1>
        </div>
        
        <form>
          <div className="flex flex-col gap-4 lg:gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-[0.875rem] md:text-[1rem] font-normal leading-[1.5rem] tracking-[-0.4px] text-sm-white">
                Email
              </p>
              <input 
                className="file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 min-w-0 bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive w-full leading-[1.375rem] tracking-[-0.4px] rounded-2xl p-5 placeholder:text-sm-gray text-sm-white border-[1.5px] border-sm-gray disabled:cursor-not-allowed disabled:opacity-50" 
                data-slot="input" 
                placeholder="your@email.com" 
                aria-invalid="false" 
                id="email" 
                required={true} 
                type="email" 
                value=""
              />
            </div>
            <button 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-background text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 w-full" 
              data-slot="button" 
              type="submit"
            >
              Log in to supermemory
            </button>
          </div>
        </form>
        
        <div className="flex gap-4 items-center justify-center">
          <div className="w-full h-px bg-sm-gray" />
          <span className="text-sm-gray text-[0.75rem] uppercase tracking-[-0.2px] leading-[0.875rem]">
            OR
          </span>
          <div className="w-full h-px bg-sm-gray" />
        </div>
        
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 lg:gap-4">
          <button className="whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-9 has-[>svg]:px-3 flex flex-grow cursor-pointer max-w-full bg-sm-shark items-center justify-center gap-[0.625rem] rounded-xl border-[1.5px] border-sm-white px-6 py-5 hover:bg-sm-shark-alt" data-slot="button">
            <span className="aspect-square">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" height="25" viewBox="0 0 24 25" width="24" xmlns="http://www.w3.org/2000/svg">
                <title>Google</title>
                <path d="M21.8055 10.2563H21V10.2148H12V14.2148H17.6515C16.827 16.5433 14.6115 18.2148 12 18.2148C8.6865 18.2148 6 15.5283 6 12.2148C6 8.90134 8.6865 6.21484 12 6.21484C13.5295 6.21484 14.921 6.79184 15.9805 7.73434L18.809 4.90584C17.023 3.24134 14.634 2.21484 12 2.21484C6.4775 2.21484 2 6.69234 2 12.2148C2 17.7373 6.4775 22.2148 12 22.2148C17.5225 22.2148 22 17.7373 22 12.2148C22 11.5443 21.931 10.8898 21.8055 10.2563Z" fill="#FFC107" />
                <path d="M3.15234 7.56034L6.43784 9.96984C7.32684 7.76884 9.47984 6.21484 11.9993 6.21484C13.5288 6.21484 14.9203 6.79184 15.9798 7.73434L18.8083 4.90584C17.0223 3.24134 14.6333 2.21484 11.9993 2.21484C8.15834 2.21484 4.82734 4.38334 3.15234 7.56034Z" fill="#FF3D00" />
                <path d="M12.0002 22.2152C14.5832 22.2152 16.9302 21.2267 18.7047 19.6192L15.6097 17.0002C14.5721 17.7897 13.3039 18.2166 12.0002 18.2152C9.39916 18.2152 7.19066 16.5567 6.35866 14.2422L3.09766 16.7547C4.75266 19.9932 8.11366 22.2152 12.0002 22.2152Z" fill="#4CAF50" />
                <path d="M21.8055 10.2563H21V10.2148H12V14.2148H17.6515C17.2571 15.3231 16.5467 16.2914 15.608 17.0003L15.6095 16.9993L18.7045 19.6183C18.4855 19.8173 22 17.2148 22 12.2148C22 11.5443 21.931 10.8898 21.8055 10.2563Z" fill="#1976D2" />
              </svg>
            </span>
            <span className="text-foreground text-left text-[0.875rem] tracking-[-0.2px] leading-[1.25rem]">
              Continue with Google
            </span>
          </button>
          
          <button className="whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-9 has-[>svg]:px-3 flex flex-grow cursor-pointer max-w-full bg-sm-shark items-center justify-center gap-[0.625rem] rounded-xl border-[1.5px] border-sm-white px-6 py-5 hover:bg-sm-shark-alt" data-slot="button">
            <span className="aspect-square">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" height="25" viewBox="0 0 26 25" width="26" xmlns="http://www.w3.org/2000/svg">
                <title>Github</title>
                <g clipPath="url(#clip0_2579_3356)">
                  <path clipRule="evenodd" d="M12.9635 0.214844C6.20975 0.214844 0.75 5.71484 0.75 12.5191C0.75 17.9581 4.24825 22.5621 9.10125 24.1916C9.708 24.3141 9.93025 23.9268 9.93025 23.6011C9.93025 23.3158 9.91025 22.3381 9.91025 21.3193C6.51275 22.0528 5.80525 19.8526 5.80525 19.8526C5.25925 18.4266 4.45025 18.0601 4.45025 18.0601C3.33825 17.3063 4.53125 17.3063 4.53125 17.3063C5.76475 17.3878 6.412 18.5693 6.412 18.5693C7.50375 20.4433 9.263 19.9138 9.97075 19.5878C10.0718 18.7933 10.3955 18.2433 10.7393 17.9378C8.0295 17.6526 5.1785 16.5933 5.1785 11.8671C5.1785 10.5226 5.6635 9.42259 6.432 8.56709C6.31075 8.26159 5.886 6.99834 6.5535 5.30759C6.5535 5.30759 7.58475 4.98159 9.91 6.57059C10.9055 6.30126 11.9322 6.16425 12.9635 6.16309C13.9948 6.16309 15.046 6.30584 16.0168 6.57059C18.3423 4.98159 19.3735 5.30759 19.3735 5.30759C20.041 6.99834 19.616 8.26159 19.4948 8.56709C20.2835 9.42259 20.7485 10.5226 20.7485 11.8671C20.7485 16.5933 17.8975 17.6321 15.1675 17.9378C15.6125 18.3248 15.9965 19.0581 15.9965 20.2193C15.9965 21.8693 15.9765 23.1936 15.9765 23.6008C15.9765 23.9268 16.199 24.3141 16.8055 24.1918C21.6585 22.5618 25.1568 17.9581 25.1568 12.5191C25.1768 5.71484 19.697 0.214844 12.9635 0.214844Z" fill="white" fillRule="evenodd" />
                </g>
                <defs>
                  <clipPath id="clip0_2579_3356">
                    <rect fill="white" height="24" transform="translate(0.75 0.214844)" width="24.5" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="text-foreground text-left text-[0.875rem] tracking-[-0.2px] leading-[1.25rem]">
              Continue with Github
            </span>
          </button>
        </div>
        
        <p className="md:text-[1rem] font-normal tracking-[-0.4px] text-sm-gray text-center text-xs sm:text-sm">
          By continuing, you agree to our{" "}
          <span className="inline-block">
            <a className="text-sm-white hover:underline" href="/terms-of-service">
              Terms
            </a>{" "}
            and{" "}
            <a className="text-sm-white hover:underline" href="/privacy-policy">
              Privacy Policy
            </a>
            .
          </span>
        </p>
      </div>
    </section>
  );
}
