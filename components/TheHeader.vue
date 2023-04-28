<template>
  <header class="py-8">
    <div class="grid conteiner gap-5">
      <a href="/" class="logo justify-self-center sm:justify-self-start">
        <img src="../assets/svg/logo.svg" alt="logo" />
      </a>

      <nav class="justify-self-end">
        <ul class="flex flex-wrap justify-center gap-8 md:gap-10">
          <!-- <li><a href="">Projetos</a></li>
          <li><a href="">Contato</a></li> -->
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5511983736528&text&type=phone_number&app_absent=0"
              target="_blank"
              class="cafe rounded-md"
              >Cafézinho? ☕</a
            >
          </li>
          <li class="hidden sm:block"><div class="detalhe"></div></li>
          <li>
            <a href="https://www.linkedin.com/in/okborges/" target="_blank">
              <img src="../assets/icon/link.svg" alt="Linkedin Logo" />
            </a>
          </li>
          <li>
            <a href="https://github.com/okborges" target="_blank">
              <img src="../assets/icon/git.svg" alt="Github Logo" />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5511983736528&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <img src="../assets/icon/wpp.svg" alt="WhatasApp Logo" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.conteiner {
  grid-template-columns: 1fr 3fr;
}
.cafe {
  background-color: var(--color-p-07);
  padding: 5px 10px;
}
.detalhe {
  width: 2px;
  height: 30px;
  background-color: var(--color-s-03);
}
a {
  font-size: 20px;
}

.logo {
  width: fit-content;
}

@media screen and (max-width: 1100px) {
  .conteiner {
    grid-template-columns: none;
  }
}
</style>
