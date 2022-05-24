<template>
  <header class="max-w-6xl mx-auto">
    <div class="mx-8 xl:mx-0">
      <div class="flex items-center justify-between pt-12">
        <a href="/" class="logo">BØRGES</a>

        <div class="flex items-center space-x-7">
          <nav class="hidden sm:flex">
            <ul class="nav space-x-4 flex font-bold">
              <li><a href="#sobreMim" class="p-2">Sobre</a></li>
              <li><NuxtLink to="#projetos" class="p-2">Projetos</NuxtLink></li>
              <li>
                <NuxtLink to="#" class="p-2">Contato</NuxtLink>
              </li>
            </ul>
          </nav>

          <span class="linha-vertical hidden sm:block"></span>
          <div class="flex items-center space-x-4">
            <a href="https://github.com/okborges" target="_blank"
              ><svg
                class="icones h-6 w-6 cursor-pointer fill-current"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5576 0C5.03462 0 0.557617 4.484 0.557617 10.017C0.557617 14.442 3.42262 18.197 7.39662 19.521C7.89662 19.613 8.07862 19.304 8.07862 19.038C8.07862 18.801 8.07062 18.17 8.06562 17.335C5.28362 17.94 4.69662 15.992 4.69662 15.992C4.24262 14.834 3.58662 14.526 3.58662 14.526C2.67862 13.906 3.65562 13.918 3.65562 13.918C4.65862 13.988 5.18662 14.95 5.18662 14.95C6.07862 16.48 7.52762 16.038 8.09662 15.782C8.18862 15.135 8.44662 14.694 8.73262 14.444C6.51262 14.191 4.17762 13.331 4.17762 9.493C4.17762 8.4 4.56762 7.505 5.20662 6.805C5.10362 6.552 4.76062 5.533 5.30462 4.155C5.30462 4.155 6.14462 3.885 8.05462 5.181C8.87038 4.95851 9.71205 4.84519 10.5576 4.844C11.4076 4.848 12.2626 4.959 13.0616 5.181C14.9706 3.885 15.8086 4.154 15.8086 4.154C16.3546 5.533 16.0106 6.552 15.9086 6.805C16.5486 7.505 16.9366 8.4 16.9366 9.493C16.9366 13.341 14.5976 14.188 12.3706 14.436C12.7296 14.745 13.0486 15.356 13.0486 16.291C13.0486 17.629 13.0366 18.71 13.0366 19.038C13.0366 19.306 13.2166 19.618 13.7246 19.52C15.7159 18.8521 17.447 17.5753 18.6731 15.87C19.8992 14.1648 20.5585 12.1173 20.5576 10.017C20.5576 4.484 16.0796 0 10.5576 0Z"
                ></path>
              </svg>
            </a>
            <a href="https://linkedin.com/in/okborges" target="_blank"
              ><svg
                class="icones h-6 w-6 cursor-pointer fill-current"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.0046 20.452H17.4506V14.883C17.4506 13.555 17.4236 11.846 15.5986 11.846C13.7456 11.846 13.4626 13.291 13.4626 14.785V20.452H9.90862V9H13.3226V10.561H13.3686C13.8456 9.661 15.0056 8.711 16.7386 8.711C20.3396 8.711 21.0056 11.081 21.0056 14.166V20.452H21.0046ZM5.89462 7.433C4.75062 7.433 3.83162 6.507 3.83162 5.368C3.83162 4.23 4.75162 3.305 5.89462 3.305C7.03462 3.305 7.95862 4.23 7.95862 5.368C7.95862 6.507 7.03362 7.433 5.89462 7.433ZM7.67662 20.452H4.11262V9H7.67662V20.452ZM22.7826 0H2.32862C1.34962 0 0.557617 0.774 0.557617 1.729V22.271C0.557617 23.227 1.34962 24 2.32862 24H22.7796C23.7576 24 24.5576 23.227 24.5576 22.271V1.729C24.5576 0.774 23.7576 0 22.7796 0H22.7826Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <nav class="pt-2 sm:hidden">
        <ul class="nav space-x-4 flex">
          <li><a href="#sobreMim">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  font-family: "DM Serif Display";
  font-style: italic;
  font-weight: 400;
  font-size: 36px;
  color: #ff3d00;
}
.logo:hover {
  color: #dd2c00;
  cursor: pointer;
  transition-duration: 0.3s;
}

.nav a:hover {
  cursor: pointer;
  color: #dd2c00;
  transition-duration: 0.2s;
}

.linha-vertical {
  height: 30px;
  border-right: 3px solid red;
}

.icones:hover {
  color: #dd2c00;
  transition-duration: 0.3s;
}
</style>
