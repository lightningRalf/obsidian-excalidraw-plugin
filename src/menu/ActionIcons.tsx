import * as React from "react";

export const ICONS = {
  exportLibrary: (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 190"
      fill="var(--icon-fill-color)"
    >
      <g fillRule="evenodd">
        <path strokeWidth="0" d="M50 10h20v20H50" />
        <path
          fill="none"
          stroke="var(--icon-fill-color)"
          strokeWidth="2"
          d="M50 10h20m-20 0h20m0 0v20m0-20v20m0 0H50m20 0H50m0 0V10m0 20V10"
        />
      </g>
      <g fillRule="evenodd">
        <path strokeWidth="0" d="M90 10h20v20H90" />
        <path
          fill="none"
          stroke="var(--icon-fill-color)"
          strokeWidth="2"
          d="M90 10h20m-20 0h20m0 0v20m0-20v20m0 0H90m20 0H90m0 0V10m0 20V10"
        />
      </g>
      <g fillRule="evenodd">
        <path strokeWidth="0" d="M130 10h20v20h-20" />
        <path
          fill="none"
          stroke="var(--icon-fill-color)"
          strokeWidth="2"
          d="M130 10h20m-20 0h20m0 0v20m0-20v20m0 0h-20m20 0h-20m0 0V10m0 20V10"
        />
      </g>
      <g fillRule="evenodd">
        <path strokeWidth="0" d="M170 10h20v20h-20" />
        <path
          fill="none"
          stroke="var(--icon-fill-color)"
          strokeWidth="2"
          d="M170 10h20m-20 0h20m0 0v20m0-20v20m0 0h-20m20 0h-20m0 0V10m0 20V10"
        />
      </g>
      <g fillRule="evenodd">
        <path strokeWidth="0" d="M70 50h60v80h20l-50 50-50-50h20V50" />
        <path
          fill="none"
          stroke="var(--icon-fill-color)"
          strokeWidth="2"
          d="M70 50h60m-60 0h60m0 0v80m0-80v80m0 0h20m-20 0h20m0 0-50 50m50-50-50 50m0 0-50-50m50 50-50-50m0 0h20m-20 0h20m0 0V50m0 80V50m0 0s0 0 0 0m0 0s0 0 0 0m0 0s0 0 0 0m0 0s0 0 0 0"
        />
      </g>
      <g fillRule="evenodd">
        <path strokeWidth="0" d="M10 10h20v20H10" />
        <path
          fill="none"
          stroke="var(--icon-fill-color)"
          strokeWidth="2"
          d="M10 10h20m-20 0h20m0 0v20m0-20v20m0 0H10m20 0H10m0 0V10m0 20V10"
        />
      </g>
    </svg>
  ),
  //far fa-image
  insertImage: (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="var(--icon-fill-color)"
      stroke="none"
    >
      <path 
        d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z" 
      />
    </svg>
  ),
  //far fa-file-alt
  insertMD: (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      fill="var(--icon-fill-color)"
      stroke="none"
    >
      <path d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z" />
    </svg>
  ),
  //far fa-square-root-alt
  insertLaTeX: (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      stroke="none"
      fill="var(--icon-fill-color)"
      strokeWidth="20"
    >
      <path d="M571.31 251.31l-22.62-22.62c-6.25-6.25-16.38-6.25-22.63 0L480 274.75l-46.06-46.06c-6.25-6.25-16.38-6.25-22.63 0l-22.62 22.62c-6.25 6.25-6.25 16.38 0 22.63L434.75 320l-46.06 46.06c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L480 365.25l46.06 46.06c6.25 6.25 16.38 6.25 22.63 0l22.62-22.62c6.25-6.25 6.25-16.38 0-22.63L525.25 320l46.06-46.06c6.25-6.25 6.25-16.38 0-22.63zM552 0H307.65c-14.54 0-27.26 9.8-30.95 23.87l-84.79 322.8-58.41-106.1A32.008 32.008 0 0 0 105.47 224H24c-13.25 0-24 10.74-24 24v48c0 13.25 10.75 24 24 24h43.62l88.88 163.73C168.99 503.5 186.3 512 204.94 512c17.27 0 44.44-9 54.28-41.48L357.03 96H552c13.25 0 24-10.75 24-24V24c0-13.26-10.75-24-24-24z" />
    </svg>
  ),
  //fas fa-link
  insertLink: (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      stroke="none"
      fill="var(--icon-fill-color)"
      strokeWidth="20"
    >
      <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z" />
    </svg>
  ),
  exportSVG: (
    <svg 
      viewBox="0 0 28 28"
      stroke="var(--icon-fill-color)"
      fill="var(--icon-fill-color)"
      strokeWidth="1"
    >
      <text style={{ fontSize: "28px", fontWeight: "bold" }} x="4" y="24">
        S
      </text>
    </svg>
  ),
  exportPNG: (
    <svg 
      viewBox="0 0 28 28"
      stroke="var(--icon-fill-color)"
      fill="var(--icon-fill-color)"
      strokeWidth="1"
    >
      <text style={{ fontSize: "28px", fontWeight: "bold" }} x="4" y="24">
        P
      </text>
    </svg>
  ),
  exportExcalidraw: (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      stroke="var(--icon-fill-color)"
      strokeWidth="2"
    >
      <g transform="translate(30,5)">
        <path d="M14.45 1.715c-2.723 2.148-6.915 5.797-10.223 8.93l-2.61 2.445.477 3.207c.258 1.75.738 5.176 1.031 7.582.332 2.406.66 4.668.773 4.996.145.438 0 .656-.406.656-.699 0-.734-.183 1.176 5.832.7 2.297 1.363 4.414 1.434 4.633.074.254.367.363.699.254.332-.145.515-.438.406-.691-.113-.293.074-.586.367-.696.403-.144.367-.437-.258-1.492-.992-1.64-3.53-15.64-3.675-20.164-.11-3.207-.11-3.242 1.25-5.066 1.324-1.786 4.375-4.485 9.078-7.91 1.324-.985 2.648-2.079 3.015-2.446.551-.656.809-.472 5.442 4.414 2.683 2.805 5.664 5.688 6.617 6.414l1.766 1.313-1.36 2.844c-.734 1.53-3.715 7.437-6.656 13.054-6.137 11.813-4.887 10.68-12.02 10.79l-4.632.038-1.547 1.75c-1.617 1.86-1.836 2.551-1.063 3.72.293.398.512 1.054.512 1.456 0 .656.258.766 1.73.84.918.035 1.762.145 1.875.254.11.11.258 2.371.368 5.031l.144 4.813-2.46 5.25C1.616 72.516 0 76.527 0 77.84c0 .691.148 1.273.293 1.273.367 0 .367-.035 15.332-30.988 6.95-14.363 13.531-27.89 14.633-30.113 1.101-2.227 2.094-4.266 2.168-4.559.074-.328-2.461-2.844-6.508-6.379C22.281 3.864 19.082.95 18.785.621c-.844-1.023-2.094-.695-4.336 1.094zM15.7 43.64c-1.692 3.246-1.766 3.28-6.4 3.5-4.081.218-4.152.183-4.152-.582 0-.438-.148-1.024-.332-1.313-.222-.328-.074-.914.442-1.715l.808-1.238h3.676c2.024-.04 4.34-.184 5.149-.328.808-.149 1.507-.219 1.578-.184.074.035-.293.875-.77 1.86zm-3.09 5.832c-.294.765-1.067 2.37-1.692 3.574-1.027 2.043-1.137 2.113-1.395 1.277-.148-.511-.257-2.008-.296-3.355-.036-2.66-.11-2.625 2.98-2.809l.992-.035zm0 0" />
        <path d="M15.55 10.39c-.66.473-.843.95-.843 2.153 0 1.422.11 1.64 1.102 2.039.992.402 1.25.367 2.39-.398 1.508-1.024 1.543-1.278.442-2.918-.957-1.422-1.914-1.676-3.09-.875zm2.098 1.313c.586 1.02.22 1.785-.882 1.785-.993 0-1.434-.984-.883-1.968.441-.801 1.285-.727 1.765.183zm0 0M38.602 18.594c0 .183-.22.363-.477.363-.219 0-.844 1.023-1.324 2.262-1.469 3.793-16.176 32.629-16.211 31.718 0-.472-.223-.8-.59-.8-.516 0-.59.289-.367 1.71.219 1.641.074 2.008-5.149 12.071-2.941 5.723-6.101 11.703-7.02 13.305-.956 1.68-1.69 3.5-1.765 4.265-.11 1.313.035 1.496 3.235 4.23 1.84 1.606 4.191 3.61 5.222 4.52 4.63 4.196 6.801 5.871 7.387 5.762.883-.145 14.523-14.328 14.559-15.129 0-.367-.66-5.906-1.47-12.324-1.398-10.938-2.722-23.734-2.573-24.973.109-.765-.442-4.633-.844-6.308-.332-1.313-.184-1.86 2.46-7.84 1.544-3.535 3.567-7.875 4.45-9.625.844-1.75 1.582-3.281 1.582-3.39 0-.11-.258-.18-.55-.18-.298 0-.555.144-.555.363zm-8.454 27.234c.403 2.55 1.211 8.676 1.801 13.598 1.14 9.043 2.461 19.07 2.832 21.62.219 1.278.07 1.532-2.316 4.157-4.156 4.629-8.567 9.188-10.074 10.356l-1.399 1.093-7.168-6.636c-6.617-6.051-7.168-6.672-6.765-7.403.222-.398 2.097-3.789 4.156-7.508 2.058-3.718 4.777-8.68 6.027-11.011 1.29-2.371 2.465-4.41 2.684-4.52.258-.148.332 3.535.258 11.375-.149 11.703-.11 11.739 1.066 11.485.148 0 .258-5.907.258-13.09V56.293l3.86-7.656c2.132-4.23 3.898-7.621 3.972-7.586.07.039.441 2.187.808 4.777zm0 0" />
      </g>
    </svg>
  ),
  //fa-solid fa-magnifying-glass
  search: (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      stroke="var(--icon-fill-color)"
      fill="var(--icon-fill-color)"
      strokeWidth="20"
    >
      <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
    </svg>
  ),
  ocr: (
    <svg
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--icon-fill-color)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 18 6-12 6 12"></path><path d="M8 14h8"></path><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
    </svg>
  ),
  scriptEngine: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      stroke="var(--icon-fill-color)"
      fill="var(--icon-fill-color)"
      strokeLinecap="round"
      strokeWidth="4"
    >
      <g transform="translate(-8,-8)">
        <path d="M24.318 37.983c-1.234-1.232-8.433-3.903-7.401-7.387 1.057-3.484 9.893-12.443 13.669-13.517 3.776-1.074 6.142 6.523 9.012 7.073 2.87.55 6.797-1.572 8.207-3.694 1.384-2.148-3.147-7.413.15-9.168 3.298-1.755 16.389-2.646 19.611-1.284 3.247 1.363-1.611 7.335-.151 9.483 1.46 2.148 6.067 3.746 8.836 3.38 2.769-.368 4.154-6.733 7.728-5.633 3.575 1.1 12.36 8.828 13.67 12.233 1.308 3.406-5.186 5.423-5.79 8.2-.58 2.75-.026 6.705 2.265 8.355 2.266 1.65 9.642-1.78 11.404 1.598 1.762 3.38 1.007 15.35-.806 18.651-1.787 3.353-7.753-.367-9.969 1.31-2.215 1.65-3.901 5.92-3.373 8.67.504 2.777 7.754 4.48 6.445 7.885C96.49 87.543 87.15 95.454 83.5 96.685c-3.65 1.231-4.96-4.741-7.577-5.16-2.593-.393-6.57.707-8.03 2.75-1.436 2.017 2.668 7.806-.63 9.483-3.323 1.676-15.759 2.226-19.157.655-3.373-1.598.554-7.964-1.108-10.138-1.687-2.174-6.394-3.431-9.012-2.907-2.643.55-3.273 7.282-6.747 6.103-3.499-1.126-12.788-9.535-14.172-13.019-1.36-3.484 5.437-5.108 5.966-7.858.529-2.777-.68-7.073-2.744-8.697-2.064-1.624-7.93 2.41-9.642-1.126-1.737-3.537-2.441-16.765-.654-20.118 1.787-3.3 9.062 1.598 11.429.183 2.366-1.44 2.316-7.282 2.769-8.749m.126-.104c-1.234-1.232-8.433-3.903-7.401-7.387 1.057-3.484 9.893-12.443 13.669-13.517 3.776-1.074 6.142 6.523 9.012 7.073 2.87.55 6.797-1.572 8.207-3.694 1.384-2.148-3.147-7.413.15-9.168 3.298-1.755 16.389-2.646 19.611-1.284 3.247 1.363-1.611 7.335-.151 9.483 1.46 2.148 6.067 3.746 8.836 3.38 2.769-.368 4.154-6.733 7.728-5.633 3.575 1.1 12.36 8.828 13.67 12.233 1.308 3.406-5.186 5.423-5.79 8.2-.58 2.75-.026 6.705 2.265 8.355 2.266 1.65 9.642-1.78 11.404 1.598 1.762 3.38 1.007 15.35-.806 18.651-1.787 3.353-7.753-.367-9.969 1.31-2.215 1.65-3.901 5.92-3.373 8.67.504 2.777 7.754 4.48 6.445 7.885C96.49 87.543 87.15 95.454 83.5 96.685c-3.65 1.231-4.96-4.741-7.577-5.16-2.593-.393-6.57.707-8.03 2.75-1.436 2.017 2.668 7.806-.63 9.483-3.323 1.676-15.759 2.226-19.157.655-3.373-1.598.554-7.964-1.108-10.138-1.687-2.174-6.394-3.431-9.012-2.907-2.643.55-3.273 7.282-6.747 6.103-3.499-1.126-12.788-9.535-14.172-13.019-1.36-3.484 5.437-5.108 5.966-7.858.529-2.777-.68-7.073-2.744-8.697-2.064-1.624-7.93 2.41-9.642-1.126-1.737-3.537-2.441-16.765-.654-20.118 1.787-3.3 9.062 1.598 11.429.183 2.366-1.44 2.316-7.282 2.769-8.749" fill="none" strokeWidth="2"/>
        <path d="M81.235 56.502a23.3 23.3 0 0 1-1.46 8.068 20.785 20.785 0 0 1-1.762 3.72 24.068 24.068 0 0 1-5.337 6.26 22.575 22.575 0 0 1-3.449 2.358 23.726 23.726 0 0 1-7.803 2.803 24.719 24.719 0 0 1-8.333 0 24.102 24.102 0 0 1-4.028-1.074 23.71 23.71 0 0 1-3.776-1.729 23.259 23.259 0 0 1-6.369-5.265 23.775 23.775 0 0 1-2.416-3.353 24.935 24.935 0 0 1-1.762-3.72 23.765 23.765 0 0 1-1.083-3.981 23.454 23.454 0 0 1 0-8.173c.252-1.336.604-2.698 1.083-3.956a24.935 24.935 0 0 1 1.762-3.72 22.587 22.587 0 0 1 2.416-3.378c.881-1.048 1.888-2.017 2.946-2.908a24.38 24.38 0 0 1 3.423-2.357 23.71 23.71 0 0 1 3.776-1.73 21.74 21.74 0 0 1 4.028-1.047 23.437 23.437 0 0 1 8.333 0 24.282 24.282 0 0 1 7.803 2.777 26.198 26.198 0 0 1 3.45 2.357 24.62 24.62 0 0 1 5.336 6.287 20.785 20.785 0 0 1 1.762 3.72 21.32 21.32 0 0 1 1.083 3.955c.251 1.336.302 3.405.377 4.086.05.681.05-.68 0 0" fill="none"/>
        <path d="M69.404 56.633c-6.596-3.3-13.216-6.6-19.51-9.744m19.51 9.744c-6.747-3.379-13.493-6.758-19.51-9.744m0 0v19.489m0-19.49v19.49m0 0c4.355-2.148 8.71-4.322 19.51-9.745m-19.51 9.745c3.978-1.965 7.93-3.956 19.51-9.745m0 0h0m0 0h0"/>
      </g>
    </svg>
  ),
  //fa-brands fa-markdown
  switchToMarkdown: (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      stroke="var(--icon-fill-color)"
      strokeWidth="10"      
      fill="var(--icon-fill-color)"
    >
      <path d="M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z" />
    </svg>
  ),
  //fa-solid fa-expand
  gotoFullScreen: (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      stroke="var(--icon-fill-color)"
      fill="var(--icon-fill-color)"
      strokeWidth="20"
    >
      <path d="M128 32H32C14.31 32 0 46.31 0 64v96c0 17.69 14.31 32 32 32s32-14.31 32-32V96h64c17.69 0 32-14.31 32-32S145.7 32 128 32zM416 32h-96c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32V64C448 46.31 433.7 32 416 32zM128 416H64v-64c0-17.69-14.31-32-32-32s-32 14.31-32 32v96c0 17.69 14.31 32 32 32h96c17.69 0 32-14.31 32-32S145.7 416 128 416zM416 320c-17.69 0-32 14.31-32 32v64h-64c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c17.69 0 32-14.31 32-32v-96C448 334.3 433.7 320 416 320z" />
    </svg>
  ),
  //fa-solid fa-compress
  exitFullScreen: (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      stroke="var(--icon-fill-color)"
      fill="var(--icon-fill-color)"
      strokeWidth="20"
    >
      <path d="M128 320H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32v-96C160 334.3 145.7 320 128 320zM416 320h-96c-17.69 0-32 14.31-32 32v96c0 17.69 14.31 32 32 32s32-14.31 32-32v-64h64c17.69 0 32-14.31 32-32S433.7 320 416 320zM320 192h96c17.69 0 32-14.31 32-32s-14.31-32-32-32h-64V64c0-17.69-14.31-32-32-32s-32 14.31-32 32v96C288 177.7 302.3 192 320 192zM128 32C110.3 32 96 46.31 96 64v64H32C14.31 128 0 142.3 0 160s14.31 32 32 32h96c17.69 0 32-14.31 32-32V64C160 46.31 145.7 32 128 32z" />
    </svg>
  ),
  //fa-solid fa-book-open-reader
  releaseNotes: (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      stroke="var(--icon-fill-color)"
      fill="var(--icon-fill-color)"
      strokeWidth="20"
    >
      <path d="M0 219.2v212.5c0 14.25 11.62 26.25 26.5 27C75.32 461.2 180.2 471.3 240 511.9V245.2C181.4 205.5 79.99 194.8 29.84 192C13.59 191.1 0 203.6 0 219.2zM482.2 192c-50.09 2.848-151.3 13.47-209.1 53.09C272.1 245.2 272 245.3 272 245.5v266.5c60.04-40.39 164.7-50.76 213.5-53.28C500.4 457.9 512 445.9 512 431.7V219.2C512 203.6 498.4 191.1 482.2 192zM352 96c0-53-43-96-96-96S160 43 160 96s43 96 96 96S352 149 352 96z" />
    </svg>
  ),
  rawMode: (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 60"
    >
      <path
        stroke="var(--icon-fill-color)"
        strokeWidth="4"
        d="M20 10H10m10 0H10m0 0v40m0-40v40m0 0h10m-10 0h10M40 10H30m10 0H30m0 0v40m0-40v40m0 0h10m-10 0h10M60 10h10m-10 0h10m0 0v40m0-40v40m0 0H60m10 0H60M80 10h10m-10 0h10m0 0v40m0-40v40m0 0H80m10 0H80"
      />
    </svg>
  ),
  //fa-solid fa-glasses
  parsedMode: (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      stroke="var(--icon-fill-color)"
      strokeWidth="20"
    >
      <path d="M574.1 280.4l-45.38-181.8c-5.875-23.63-21.62-44-43-55.75c-21.5-11.75-46.1-14.13-70.25-6.375l-15.25 5.125c-8.375 2.75-12.87 11.88-10 20.25l5 15.13c2.75 8.375 11.88 12.88 20.25 10.13l13.12-4.375c10.88-3.625 23-3.625 33.25 1.75c10.25 5.375 17.5 14.5 20.38 25.75l38.38 153.9c-22.12-6.875-49.75-12.5-81.13-12.5c-34.88 0-73.1 7-114.9 26.75H251.4C210.5 258.6 171.4 251.6 136.5 251.6c-31.38 0-59 5.625-81.12 12.5l38.38-153.9c2.875-11.25 10.12-20.38 20.5-25.75C124.4 79.12 136.5 79.12 147.4 82.74l13.12 4.375c8.375 2.75 17.5-1.75 20.25-10.13l5-15.13C188.6 53.49 184.1 44.37 175.6 41.62l-15.25-5.125c-23.13-7.75-48.75-5.375-70.13 6.375c-21.37 11.75-37.12 32.13-43 55.75L1.875 280.4C.6251 285.4 .0001 290.6 .0001 295.9v70.25C.0001 428.1 51.63 480 115.3 480h37.13c60.25 0 110.4-46 114.9-105.4l2.875-38.63h35.75l2.875 38.63C313.3 433.1 363.4 480 423.6 480h37.13c63.62 0 115.2-51 115.2-113.9V295.9C576 290.6 575.4 285.5 574.1 280.4zM203.4 369.7c-2 26-24.38 46.25-51 46.25H115.2C87 415.1 64 393.6 64 366.1v-37.5c18.12-6.5 43.38-13 72.62-13c23.88 0 47.25 4.375 69.88 13L203.4 369.7zM512 366.1c0 27.5-23 49.88-51.25 49.88h-37.13c-26.62 0-49-20.25-51-46.25l-3.125-41.13c22.62-8.625 46.13-13 70-13c29 0 54.38 6.5 72.5 13V366.1z" />
    </svg>
  ),
  convertFile: (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      viewBox="0 110 700 340"
      xmlns="http://www.w3.org/2000/svg"
      stroke="var(--icon-fill-color)"
      strokeWidth="20"
    >
      <path d="m593.95 239.4v-1.5742c-0.85547-1.8828-2.043-3.6016-3.5-5.0742l-52.5-52.5c-1.4688-1.457-3.1875-2.6445-5.0742-3.5h-1.5742c-1.4727-0.49219-3.0039-0.78516-4.5508-0.875h-124.25c-4.6406 0-9.0938 1.8438-12.375 5.125s-5.125 7.7344-5.125 12.375v87.5h-70v-105.88-1.0508c-0.089844-1.5469-0.38281-3.0781-0.875-4.5508v-1.5742c-0.85547-1.8828-2.043-3.6016-3.5-5.0742l-52.5-52.5c-1.4727-1.457-3.1914-2.6445-5.0742-3.5h-1.5742c-1.7031-0.875-3.5352-1.4688-5.4258-1.75h-123.55c-4.6406 0-9.0938 1.8438-12.375 5.125s-5.125 7.7344-5.125 12.375v245c0 4.6406 1.8438 9.0938 5.125 12.375s7.7344 5.125 12.375 5.125h175c4.6406 0 9.0938-1.8438 12.375-5.125s5.125-7.7344 5.125-12.375v-52.5h70v122.5c0 4.6406 1.8438 9.0938 5.125 12.375s7.7344 5.125 12.375 5.125h175c4.6406 0 9.0938-1.8438 12.375-5.125s5.125-7.7344 5.125-12.375v-192.5-1.0508c-0.14453-1.5547-0.5-3.0859-1.0508-4.5508zm-313.95 110.6h-140v-210h87.5v35c0 4.6406 1.8438 9.0938 5.125 12.375s7.7344 5.125 12.375 5.125h35v87.5h-52.5c-6.2539 0-12.031 3.3359-15.156 8.75s-3.125 12.086 0 17.5 8.9023 8.75 15.156 8.75h52.5zm140 70v-105h27.824l-5.0742 5.0742c-3.7031 3.1719-5.9141 7.7461-6.1055 12.617-0.1875 4.8711 1.668 9.6016 5.1133 13.051 3.4492 3.4453 8.1797 5.3008 13.051 5.1133 4.8711-0.19141 9.4453-2.4023 12.617-6.1055l35-35c3.2578-3.2773 5.0898-7.7148 5.0898-12.336 0-4.625-1.832-9.0586-5.0898-12.34l-35-35c-4.5078-3.8555-10.66-5.1719-16.348-3.4883-5.6875 1.6797-10.137 6.1289-11.816 11.816-1.6836 5.6914-0.37109 11.844 3.4883 16.348l5.0742 5.0742h-27.824v-69.824h87.5v35c0 4.6406 1.8438 9.0938 5.125 12.375s7.7344 5.125 12.375 5.125h35v157.5z" />
    </svg>
  ),
  cog: (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="var(--icon-fill-color)"
      stroke="none"
    >
      <path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z" />
    </svg>
  ),
  trayMode: (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      stroke="var(--icon-fill-color)"
      fill="var(--icon-fill-color)"
      strokeWidth="20"
    >
      <path d="M618.1 97.67c-13.02-4.375-27.45 .1562-35.72 11.16L464 266.7l-118.4-157.8c-8.266-11.03-22.64-15.56-35.72-11.16C296.8 102 288 114.2 288 128v256c0 17.69 14.33 32 32 32s32-14.31 32-32v-160l86.41 115.2c12.06 16.12 39.13 16.12 51.19 0L576 224v160c0 17.69 14.33 32 32 32s32-14.31 32-32v-256C640 114.2 631.2 102 618.1 97.67zM224 96.01H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h64v223.1c0 17.69 14.33 31.99 32 31.99s32-14.3 32-31.99V160h64c17.67 0 32-14.31 32-32S241.7 96.01 224 96.01z" />
    </svg>
  ),
  copyElementLink: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 260 260"
      aria-hidden="true"
      focusable="false"
      role="img"
    >
      <path
        stroke="var(--icon-fill-color)"
        fill="none"
        strokeLinecap="round"
        strokeWidth="8"
        d="M10 10h40m-40 0h40m0 0v40m0-40v40m0 0H10m40 0H10m0 0V10m0 40V10M210 10h40m-40 0h40m0 0v40m0-40v40m0 0h-40m40 0h-40m0 0V10m0 40V10M210 210h40m-40 0h40m0 0v40m0-40v40m0 0h-40m40 0h-40m0 0v-40m0 40v-40M10 210h40m-40 0h40m0 0v40m0-40v40m0 0H10m40 0H10m0 0v-40m0 40v-40M30 210V50m0 160V50M50 30h160M50 30h160M230 50v160m0-160v160M50 230h160m-160 0h160"
      />
      <path
        stroke="var(--icon-fill-color)"
        fill="none"
        strokeLinecap="round"
        strokeWidth="16"
        d="M110 90c-6.67 1.67-30 3.11-40 10-10 6.89-20 21.37-20 31.37S60 153.56 70 160c10 6.44 33.33 8.33 40 10m0-80c-6.67 1.67-30 3.11-40 10-10 6.89-20 21.37-20 31.37S60 153.56 70 160c10 6.44 33.33 8.33 40 10M150 90c6.67 1.67 30 3.11 40 10 10 6.89 20 21.37 20 31.37s-10 22.19-20 28.63c-10 6.44-33.33 8.33-40 10m0-80c6.67 1.67 30 3.11 40 10 10 6.89 20 21.37 20 31.37s-10 22.19-20 28.63c-10 6.44-33.33 8.33-40 10"
      />
      <path
        stroke="var(--icon-fill-color)"
        fill="none"
        strokeLinecap="round"
        strokeWidth="16"
        d="M89.868 130.198c13.36-.03 66.78-.17 80.13-.2m-80.13.2c13.36-.03 66.78-.17 80.13-.2"
      />
    </svg>
  ),
  importSVG: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 526 526">
      <g fillRule="evenodd" strokeLinecap="round">
        <path 
          fill="var(--input-bg-color)"
          strokeWidth="0"
          d="m133.462 71 .33-6.54.97-6.34 1.58-6.13 2.16-5.88 2.69-5.6 3.21-5.27 3.69-4.93 4.13-4.55 4.55-4.13 4.93-3.69 5.27-3.21 5.6-2.69 5.88-2.16 6.13-1.58 6.34-.97 6.54-.33h160v128l.16 3.28.49 3.18.79 3.07 1.07 2.94 1.35 2.8 1.6 2.63 1.84 2.47 2.06 2.27 2.27 2.06 2.47 1.84 2.63 1.6 2.8 1.35 2.94 1.07 3.07.79 3.18.49 3.28.16h128v288l-.33 6.54-.97 6.34-1.58 6.13-2.16 5.88-2.69 5.6-3.21 5.27-3.69 4.93-4.13 4.55-4.55 4.13-4.93 3.69-5.27 3.21-5.6 2.69-5.88 2.16-6.13 1.58-6.34.97-6.54.33h-256l-6.54-.33-6.34-.97-6.13-1.58-5.88-2.16-5.6-2.69-5.27-3.21-4.93-3.69-4.55-4.13-4.13-4.55-3.69-4.93-3.21-5.27-2.69-5.6-2.16-5.88-1.58-6.13-.97-6.34-.33-6.54V343h174.1l-39 39-1.65 1.83-1.43 1.94-1.22 2.05-.99 2.13-.77 2.2-.55 2.25-.33 2.29-.11 2.3.11 2.3.33 2.28.55 2.24.77 2.19.99 2.12 1.22 2.04 1.43 1.93 1.65 1.81 1.83 1.64 1.94 1.42 2.05 1.2 2.13.99 2.2.76 2.25.56 2.29.33 2.3.11 2.3-.1 2.28-.33 2.24-.54 2.19-.77 2.12-.98 2.04-1.21 1.93-1.43 1.81-1.65 80-80 1.65-1.83 1.43-1.94 1.22-2.05.99-2.13.77-2.2.55-2.25.33-2.29.11-2.3-.11-2.3-.33-2.28-.55-2.24-.77-2.19-.99-2.12-1.22-2.04-1.43-1.93-1.65-1.81-80-80-1.83-1.65-1.94-1.43-2.05-1.22-2.13-.99-2.2-.77-2.25-.55-2.29-.33-2.3-.11-2.3.11-2.28.33-2.24.55-2.19.77-2.12.99-2.04 1.22-1.93 1.43-1.81 1.65-1.64 1.83-1.42 1.94-1.2 2.05-.99 2.13-.76 2.2-.56 2.25-.33 2.29-.11 2.3.1 2.3.33 2.28.54 2.24.77 2.19.98 2.12 1.21 2.04 1.43 1.93 1.65 1.81 39 39h-174.1V71"
        />
        <path
          fill="none"
          stroke="var(--icon-fill-color)"
          strokeWidth="18"
          d="M133.462 71s0 0 0 0m0 0s0 0 0 0m0 0 .33-6.54m-.33 6.54c.13-2.57.26-5.13.33-6.54m0 0c.36-2.33.72-4.67.97-6.34m-.97 6.34c.35-2.26.69-4.53.97-6.34m0 0c.51-1.99 1.03-3.98 1.58-6.13m-1.58 6.13c.4-1.56.81-3.12 1.58-6.13m0 0c.81-2.22 1.62-4.43 2.16-5.88m-2.16 5.88c.45-1.22.9-2.44 2.16-5.88m0 0c.72-1.51 1.45-3.01 2.69-5.6m-2.69 5.6c.69-1.45 1.39-2.9 2.69-5.6m0 0c.93-1.52 1.86-3.05 3.21-5.27m-3.21 5.27c.97-1.59 1.94-3.18 3.21-5.27m0 0c.86-1.15 1.71-2.29 3.69-4.93m-3.69 4.93c.78-1.04 1.56-2.08 3.69-4.93m0 0c1.53-1.69 3.07-3.38 4.13-4.55m-4.13 4.55c1.54-1.69 3.07-3.38 4.13-4.55m0 0c1.03-.93 2.06-1.87 4.55-4.13m-4.55 4.13c.98-.89 1.97-1.78 4.55-4.13m0 0c1.64-1.23 3.28-2.46 4.93-3.69m-4.93 3.69c1.72-1.29 3.45-2.58 4.93-3.69m0 0c1.11-.68 2.23-1.35 5.27-3.21m-5.27 3.21c1.5-.91 3.01-1.83 5.27-3.21m0 0c1.87-.89 3.73-1.79 5.6-2.69m-5.6 2.69c2.09-1 4.17-2.01 5.6-2.69m0 0c1.72-.64 3.44-1.27 5.88-2.16m-5.88 2.16c1.94-.72 3.89-1.43 5.88-2.16m0 0c2.3-.59 4.6-1.19 6.13-1.58m-6.13 1.58c2.32-.6 4.65-1.2 6.13-1.58m0 0c2.06-.31 4.12-.63 6.34-.97m-6.34.97c2.34-.36 4.69-.72 6.34-.97m0 0c2.05-.1 4.09-.21 6.54-.33m-6.54.33c2.06-.1 4.12-.21 6.54-.33m0 0h160m-160 0h160m0 0v128m0-128v128m0 0s0 0 0 0m0 0s0 0 0 0m0 0 .16 3.28m-.16-3.28c.06 1.16.12 2.32.16 3.28m0 0c.13.82.26 1.64.49 3.18m-.49-3.18c.18 1.13.35 2.26.49 3.18m0 0c.24.95.49 1.91.79 3.07m-.79-3.07c.28 1.1.56 2.2.79 3.07m0 0c.39 1.06.78 2.13 1.07 2.94m-1.07-2.94c.42 1.15.84 2.3 1.07 2.94m0 0c.38.79.76 1.57 1.35 2.8m-1.35-2.8c.4.82.79 1.64 1.35 2.8m0 0c.45.75.91 1.5 1.6 2.63m-1.6-2.63c.4.65.8 1.31 1.6 2.63m0 0c.56.76 1.13 1.52 1.84 2.47m-1.84-2.47c.58.79 1.17 1.57 1.84 2.47m0 0c.75.82 1.5 1.65 2.06 2.27m-2.06-2.27c.75.82 1.5 1.65 2.06 2.27m0 0c.74.66 1.47 1.33 2.27 2.06m-2.27-2.06c.89.81 1.78 1.61 2.27 2.06m0 0c.69.51 1.37 1.02 2.47 1.84m-2.47-1.84c.68.5 1.35 1.01 2.47 1.84m0 0c.81.49 1.62.99 2.63 1.6m-2.63-1.6c.74.45 1.47.9 2.63 1.6m0 0c.72.35 1.43.69 2.8 1.35m-2.8-1.35c.61.3 1.22.59 2.8 1.35m0 0c.85.31 1.69.62 2.94 1.07m-2.94-1.07c1.03.38 2.07.75 2.94 1.07m0 0c.83.22 1.67.43 3.07.79m-3.07-.79 3.07.79m0 0c1.07.16 2.14.33 3.18.49m-3.18-.49c1.2.18 2.39.36 3.18.49m0 0 3.28.16m-3.28-.16c.97.04 1.93.09 3.28.16m0 0h128m-128 0h128m0 0v288m0-288v288m0 0s0 0 0 0m0 0s0 0 0 0m0 0c-.1 2.02-.2 4.04-.33 6.54m.33-6.54c-.13 2.52-.26 5.05-.33 6.54m0 0c-.33 2.14-.66 4.29-.97 6.34m.97-6.34c-.32 2.06-.63 4.12-.97 6.34m0 0c-.59 2.28-1.17 4.55-1.58 6.13m1.58-6.13c-.53 2.07-1.07 4.14-1.58 6.13m0 0c-.73 1.99-1.46 3.97-2.16 5.88m2.16-5.88c-.72 1.97-1.44 3.94-2.16 5.88m0 0c-.94 1.97-1.89 3.93-2.69 5.6m2.69-5.6c-.91 1.89-1.82 3.77-2.69 5.6m0 0c-.89 1.46-1.78 2.92-3.21 5.27m3.21-5.27c-.65 1.05-1.29 2.11-3.21 5.27m0 0c-1.13 1.51-2.25 3.01-3.69 4.93m3.69-4.93c-1.29 1.72-2.58 3.44-3.69 4.93m0 0c-1.29 1.42-2.58 2.84-4.13 4.55m4.13-4.55-4.13 4.55m0 0-4.55 4.13m4.55-4.13-4.55 4.13m0 0c-1.2.9-2.41 1.8-4.93 3.69m4.93-3.69-4.93 3.69m0 0c-1.56.95-3.13 1.9-5.27 3.21m5.27-3.21c-1.99 1.21-3.98 2.42-5.27 3.21m0 0c-1.8.86-3.6 1.73-5.6 2.69m5.6-2.69c-1.34.64-2.67 1.28-5.6 2.69m0 0c-2.24.82-4.48 1.65-5.88 2.16m5.88-2.16c-1.38.51-2.77 1.02-5.88 2.16m0 0c-1.46.38-2.93.76-6.13 1.58m6.13-1.58c-1.54.4-3.09.79-6.13 1.58m0 0c-2.12.32-4.24.65-6.34.97m6.34-.97c-2.47.38-4.94.75-6.34.97m0 0c-2.23.11-4.46.22-6.54.33m6.54-.33c-1.97.1-3.93.2-6.54.33m0 0h-256m256 0h-256m0 0s0 0 0 0m0 0s0 0 0 0m0 0c-2.33-.12-4.66-.24-6.54-.33m6.54.33c-1.33-.07-2.65-.13-6.54-.33m0 0c-1.88-.29-3.77-.58-6.34-.97m6.34.97c-2.07-.32-4.14-.63-6.34-.97m0 0c-1.52-.39-3.04-.79-6.13-1.58m6.13 1.58c-2.02-.52-4.04-1.04-6.13-1.58m0 0c-1.6-.59-3.19-1.17-5.88-2.16m5.88 2.16c-1.9-.7-3.8-1.39-5.88-2.16m0 0c-1.41-.68-2.82-1.36-5.6-2.69m5.6 2.69c-1.6-.77-3.2-1.54-5.6-2.69m0 0c-1.4-.86-2.81-1.71-5.27-3.21m5.27 3.21c-2.08-1.27-4.17-2.54-5.27-3.21m0 0c-1.72-1.29-3.43-2.57-4.93-3.69m4.93 3.69c-1.79-1.34-3.57-2.67-4.93-3.69m0 0c-1.18-1.07-2.36-2.15-4.55-4.13m4.55 4.13c-1.64-1.49-3.27-2.97-4.55-4.13m0 0c-1.07-1.19-2.15-2.37-4.13-4.55m4.13 4.55c-1.46-1.61-2.93-3.23-4.13-4.55m0 0-3.69-4.93m3.69 4.93c-.88-1.17-1.76-2.35-3.69-4.93m0 0c-.83-1.37-1.67-2.75-3.21-5.27m3.21 5.27c-1.15-1.89-2.3-3.79-3.21-5.27m0 0c-1.03-2.14-2.05-4.27-2.69-5.6m2.69 5.6c-.68-1.43-1.37-2.85-2.69-5.6m0 0c-.8-2.17-1.59-4.34-2.16-5.88m2.16 5.88c-.82-2.22-1.63-4.44-2.16-5.88m0 0c-.47-1.82-.94-3.64-1.58-6.13m1.58 6.13c-.37-1.44-.74-2.88-1.58-6.13m0 0-.97-6.34m.97 6.34c-.3-1.98-.61-3.97-.97-6.34m0 0c-.13-2.54-.26-5.07-.33-6.54m.33 6.54-.33-6.54m0 0V343m0 112V343m0 0h174.1m-174.1 0h174.1m0 0-39 39m39-39-39 39m0 0s0 0 0 0m0 0s0 0 0 0m0 0c-.65.72-1.3 1.44-1.65 1.83m1.65-1.83c-.34.38-.68.76-1.65 1.83m0 0c-.35.47-.7.95-1.43 1.94m1.43-1.94c-.38.5-.75 1.01-1.43 1.94m0 0c-.32.54-.64 1.08-1.22 2.05m1.22-2.05c-.38.64-.76 1.28-1.22 2.05m0 0c-.2.45-.41.89-.99 2.13m.99-2.13c-.38.82-.76 1.64-.99 2.13m0 0c-.18.53-.36 1.05-.77 2.2m.77-2.2c-.3.88-.61 1.75-.77 2.2m0 0c-.15.61-.3 1.22-.55 2.25m.55-2.25c-.16.68-.33 1.35-.55 2.25m0 0-.33 2.29m.33-2.29c-.13.9-.26 1.79-.33 2.29m0 0-.11 2.3m.11-2.3c-.03.59-.06 1.19-.11 2.3m0 0c.03.54.05 1.08.11 2.3m-.11-2.3c.03.72.07 1.44.11 2.3m0 0c.1.71.21 1.43.33 2.28m-.33-2.28c.1.71.21 1.42.33 2.28m0 0c.22.88.44 1.77.55 2.24m-.55-2.24c.16.66.33 1.32.55 2.24m0 0c.26.72.51 1.45.77 2.19m-.77-2.19c.25.69.49 1.39.77 2.19m0 0c.33.7.65 1.4.99 2.12m-.99-2.12c.37.79.74 1.57.99 2.12m0 0c.38.63.75 1.25 1.22 2.04m-1.22-2.04c.4.67.8 1.35 1.22 2.04m0 0c.38.52.77 1.05 1.43 1.93m-1.43-1.93c.38.52.77 1.05 1.43 1.93m0 0c.46.5.91 1 1.65 1.81m-1.65-1.81c.35.39.7.77 1.65 1.81m0 0c.37.33.75.67 1.83 1.64m-1.83-1.64c.43.39.87.78 1.83 1.64m0 0c.62.45 1.25.91 1.94 1.42m-1.94-1.42c.45.32.9.65 1.94 1.42m0 0c.53.3 1.05.61 2.05 1.2m-2.05-1.2c.43.25.86.5 2.05 1.2m0 0c.78.36 1.56.72 2.13.99m-2.13-.99c.54.25 1.08.5 2.13.99m0 0c.67.23 1.33.46 2.2.76m-2.2-.76c.51.17 1.03.35 2.2.76m0 0c.87.22 1.73.43 2.25.56m-2.25-.56c.79.2 1.57.39 2.25.56m0 0 2.29.33m-2.29-.33c.58.08 1.16.16 2.29.33m0 0c.91.04 1.82.09 2.3.11m-2.3-.11c.89.04 1.79.09 2.3.11m0 0c.48-.02.96-.04 2.3-.1m-2.3.1c.73-.03 1.47-.06 2.3-.1m0 0c.61-.09 1.22-.18 2.28-.33m-2.28.33c.58-.09 1.17-.17 2.28-.33m0 0c.79-.19 1.59-.38 2.24-.54m-2.24.54c.88-.21 1.75-.42 2.24-.54m0 0c.7-.25 1.4-.49 2.19-.77m-2.19.77c.5-.18 1.01-.35 2.19-.77m0 0c.56-.26 1.13-.52 2.12-.98m-2.12.98c.69-.31 1.37-.63 2.12-.98m0 0c.63-.37 1.25-.74 2.04-1.21m-2.04 1.21c.8-.48 1.6-.95 2.04-1.21m0 0c.67-.5 1.34-.99 1.93-1.43m-1.93 1.43c.52-.39 1.05-.78 1.93-1.43m0 0c.43-.39.87-.79 1.81-1.65m-1.81 1.65c.42-.38.83-.76 1.81-1.65m0 0 80-80m-80 80 80-80m0 0s0 0 0 0m0 0s0 0 0 0m0 0c.33-.37.67-.74 1.65-1.83m-1.65 1.83c.63-.7 1.27-1.4 1.65-1.83m0 0c.3-.4.59-.79 1.43-1.94m-1.43 1.94c.42-.57.84-1.13 1.43-1.94m0 0c.4-.68.8-1.35 1.22-2.05m-1.22 2.05c.47-.79.93-1.57 1.22-2.05m0 0c.28-.62.57-1.23.99-2.13m-.99 2.13c.3-.65.6-1.31.99-2.13m0 0c.26-.74.51-1.47.77-2.2m-.77 2.2.77-2.2m0 0 .55-2.25m-.55 2.25c.2-.84.41-1.68.55-2.25m0 0 .33-2.29m-.33 2.29c.11-.75.21-1.49.33-2.29m0 0c.03-.54.05-1.08.11-2.3m-.11 2.3c.04-.91.09-1.81.11-2.3m0 0c-.03-.7-.07-1.41-.11-2.3m.11 2.3c-.04-.75-.07-1.49-.11-2.3m0 0c-.08-.52-.15-1.04-.33-2.28m.33 2.28c-.09-.63-.18-1.26-.33-2.28m0 0-.55-2.24m.55 2.24c-.19-.79-.39-1.58-.55-2.24m0 0-.77-2.19m.77 2.19c-.25-.72-.51-1.44-.77-2.19m0 0c-.23-.5-.46-.99-.99-2.12m.99 2.12c-.39-.83-.78-1.66-.99-2.12m0 0c-.42-.7-.83-1.39-1.22-2.04m1.22 2.04c-.32-.53-.64-1.06-1.22-2.04m0 0c-.47-.64-.95-1.28-1.43-1.93m1.43 1.93c-.47-.63-.94-1.27-1.43-1.93m0 0c-.44-.49-.89-.98-1.65-1.81m1.65 1.81c-.64-.7-1.28-1.4-1.65-1.81m0 0-80-80m80 80-80-80m0 0s0 0 0 0m0 0s0 0 0 0m0 0c-.72-.65-1.44-1.3-1.83-1.65m1.83 1.65c-.68-.62-1.37-1.23-1.83-1.65m0 0c-.51-.38-1.02-.75-1.94-1.43m1.94 1.43c-.58-.43-1.17-.87-1.94-1.43m0 0c-.73-.43-1.45-.86-2.05-1.22m2.05 1.22c-.77-.45-1.53-.9-2.05-1.22m0 0c-.46-.21-.93-.43-2.13-.99m2.13.99-2.13-.99m0 0c-.83-.29-1.65-.57-2.2-.77m2.2.77c-.56-.19-1.12-.39-2.2-.77m0 0c-.65-.16-1.29-.31-2.25-.55m2.25.55c-.57-.14-1.13-.27-2.25-.55m0 0c-.74-.11-1.48-.21-2.29-.33m2.29.33c-.51-.07-1.02-.15-2.29-.33m0 0c-.77-.04-1.54-.07-2.3-.11m2.3.11c-.88-.04-1.76-.08-2.3-.11m0 0c-.49.02-.98.05-2.3.11m2.3-.11c-.88.04-1.77.09-2.3.11m0 0c-.62.09-1.23.18-2.28.33m2.28-.33c-.6.09-1.2.17-2.28.33m0 0c-.45.11-.91.22-2.24.55m2.24-.55c-.79.2-1.58.39-2.24.55m0 0c-.56.2-1.12.4-2.19.77m2.19-.77c-.51.18-1.01.36-2.19.77m0 0c-.85.4-1.7.8-2.12.99m2.12-.99c-.51.24-1.02.48-2.12.99m0 0c-.6.36-1.2.71-2.04 1.22m2.04-1.22c-.46.27-.91.55-2.04 1.22m0 0c-.49.36-.99.73-1.93 1.43m1.93-1.43-1.93 1.43m0 0c-.42.38-.85.77-1.81 1.65m1.81-1.65c-.69.63-1.39 1.27-1.81 1.65m0 0-1.64 1.83m1.64-1.83c-.54.6-1.08 1.21-1.64 1.83m0 0c-.53.73-1.07 1.47-1.42 1.94m1.42-1.94c-.36.5-.73 1-1.42 1.94m0 0c-.35.61-.7 1.21-1.2 2.05m1.2-2.05c-.33.58-.67 1.15-1.2 2.05m0 0c-.26.57-.53 1.15-.99 2.13m.99-2.13c-.39.85-.78 1.69-.99 2.13m0 0c-.24.7-.48 1.4-.76 2.2m.76-2.2c-.17.51-.35 1.01-.76 2.2m0 0c-.17.68-.33 1.35-.56 2.25m.56-2.25c-.2.79-.39 1.57-.56 2.25m0 0c-.09.65-.18 1.29-.33 2.29m.33-2.29c-.06.48-.13.95-.33 2.29m0 0c-.03.71-.07 1.43-.11 2.3m.11-2.3-.11 2.3m0 0c.04.86.08 1.73.1 2.3m-.1-2.3c.03.8.07 1.6.1 2.3m0 0c.13.88.25 1.76.33 2.28m-.33-2.28c.11.73.21 1.47.33 2.28m0 0c.18.74.36 1.49.54 2.24m-.54-2.24c.15.64.31 1.28.54 2.24m0 0c.2.57.4 1.15.77 2.19m-.77-2.19c.21.58.41 1.17.77 2.19m0 0c.23.5.46 1.01.98 2.12m-.98-2.12c.35.76.71 1.53.98 2.12m0 0c.38.64.76 1.29 1.21 2.04m-1.21-2.04 1.21 2.04m0 0c.45.6.89 1.21 1.43 1.93m-1.43-1.93c.3.4.6.81 1.43 1.93m0 0 1.65 1.81m-1.65-1.81c.47.52.94 1.03 1.65 1.81m0 0 39 39m-39-39 39 39m0 0h-174.1m174.1 0h-174.1m0 0V71m0 223.9V71m0 0s0 0 0 0m0 0s0 0 0 0m0 0s0 0 0 0m0 0s0 0 0 0"
        />
      </g>
      <path
        fill="none"
        stroke="var(--icon-fill-color)"
        strokeLinecap="round"
        strokeWidth="18"
        d="M135 343.068H31m104 0H31m0 0s0 0 0 0m0 0s0 0 0 0m0 0c-.74-.04-1.48-.07-2.46-.12m2.46.12c-.77-.04-1.54-.08-2.46-.12m0 0c-.87-.14-1.75-.27-2.39-.37m2.39.37c-.55-.09-1.1-.17-2.39-.37m0 0c-.87-.22-1.74-.44-2.3-.59m2.3.59c-.62-.15-1.24-.31-2.3-.59m0 0c-.82-.29-1.64-.59-2.21-.8m2.21.8c-.52-.18-1.03-.37-2.21-.8m0 0c-.55-.26-1.09-.52-2.1-1.01m2.1 1.01c-.64-.31-1.28-.61-2.1-1.01m0 0c-.74-.45-1.48-.89-1.98-1.2m1.98 1.2c-.42-.25-.84-.51-1.98-1.2m0 0c-.7-.52-1.41-1.05-1.84-1.38m1.84 1.38c-.37-.28-.75-.56-1.84-1.38m0 0c-.4-.36-.8-.71-1.71-1.54m1.71 1.54c-.35-.31-.7-.63-1.71-1.54m0 0c-.43-.47-.85-.95-1.54-1.71m1.54 1.71c-.61-.68-1.23-1.36-1.54-1.71m0 0c-.29-.38-.58-.76-1.38-1.84m1.38 1.84c-.54-.71-1.08-1.43-1.38-1.84m0 0c-.46-.76-.92-1.52-1.2-1.98m1.2 1.98c-.45-.74-.89-1.47-1.2-1.98m0 0c-.37-.77-.74-1.53-1.01-2.1m1.01 2.1c-.3-.62-.6-1.25-1.01-2.1m0 0c-.2-.54-.39-1.07-.8-2.21m.8 2.21c-.2-.54-.4-1.09-.8-2.21m0 0c-.22-.85-.44-1.71-.59-2.3m.59 2.3c-.12-.46-.24-.92-.59-2.3m0 0c-.11-.72-.22-1.43-.37-2.39m.37 2.39c-.08-.48-.15-.96-.37-2.39m0 0c-.03-.74-.07-1.48-.12-2.46m.12 2.46c-.04-.79-.08-1.59-.12-2.46m0 0c.04-.74.07-1.49.12-2.46m-.12 2.46.12-2.46m0 0c.08-.53.16-1.07.37-2.39m-.37 2.39c.09-.56.17-1.12.37-2.39m0 0c.17-.69.35-1.38.59-2.3m-.59 2.3c.15-.61.31-1.23.59-2.3m0 0c.17-.48.34-.96.8-2.21m-.8 2.21c.2-.55.4-1.1.8-2.21m0 0c.25-.52.49-1.03 1.01-2.1m-1.01 2.1c.36-.76.73-1.52 1.01-2.1m0 0c.43-.72.87-1.44 1.2-1.98m-1.2 1.98c.27-.45.55-.91 1.2-1.98m0 0c.54-.73 1.09-1.47 1.38-1.84m-1.38 1.84c.4-.54.81-1.09 1.38-1.84m0 0c.53-.59 1.07-1.18 1.54-1.71m-1.54 1.71c.59-.66 1.19-1.32 1.54-1.71m0 0c.54-.49 1.08-.97 1.71-1.54m-1.71 1.54c.48-.43.95-.86 1.71-1.54m0 0c.46-.35.92-.7 1.84-1.38m-1.84 1.38c.5-.38 1.01-.76 1.84-1.38m0 0c.52-.32 1.04-.63 1.98-1.2m-1.98 1.2c.72-.44 1.44-.88 1.98-1.2m0 0 2.1-1.01m-2.1 1.01c.84-.4 1.67-.81 2.1-1.01m0 0c.45-.17.91-.33 2.21-.8m-2.21.8c.56-.21 1.12-.41 2.21-.8m0 0c.89-.23 1.79-.46 2.3-.59m-2.3.59c.48-.13.95-.25 2.3-.59m0 0c.51-.08 1.02-.16 2.39-.37m-2.39.37 2.39-.37m0 0c.52-.02 1.03-.05 2.46-.12m-2.46.12c.74-.03 1.48-.07 2.46-.12m0 0 103.34-.27m-103.34.27c30.04-.08 60.08-.16 103.34-.27"
      />
      <g fillRule="evenodd" strokeLinecap="round">
        <path
          fill="var(--input-bg-color)"
          strokeWidth="0"
          d="M517.462 135h-128V7l128 128"
        />
        <path
          fill="none"
          stroke="var(--icon-fill-color)"
          strokeWidth="18"
          d="M517.462 135h-128m128 0h-128m0 0V7m0 128V7m0 0 128 128m-128-128 128 128m0 0s0 0 0 0m0 0s0 0 0 0m0 0s0 0 0 0m0 0s0 0 0 0"
        />
      </g>
    </svg>
  )
};

export const stringToSVG = (svg: string) => {
  svg = svg
    .replace(/stroke\s*=\s*['"][^"']*['"]/g,"")
    .replace(/width\s*=\s*['"][^"']*['"]/g,"")
    .replace(/height\s*=\s*['"][^"']*['"]/g,"")
    .replace("<svg ",`<svg style="stroke:var(--icon-fill-color);color:var(--icon-fill-color);fill:var(--icon-fill-color)" `)
    
    return (
      <div dangerouslySetInnerHTML={{__html: svg}}></div>
    )
}