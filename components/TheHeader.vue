<template>
  <header class="py-8">
    <div class="conteiner grid gap-5">
      <a href="/" class="logo justify-self-center sm:justify-self-start">
        <img src="../assets/svg/logo.svg" alt="logo do site okborges" width="255" />
      </a>

      <nav class="justify-self-center sm:justify-self-end">
        <ul class="flex justify-center gap-8 md:gap-10">
          <!-- <li><a href="">Projetos</a></li>
          <li><a href="">Contato</a></li> -->
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5511983736528&text&type=phone_number&app_absent=0"
              target="_blank"
              class="cafe hidden rounded-md lg:inline-block"
              >Cafézinho? ☕</a
            >
          </li>
          <li class="hidden sm:block"><div class="detalhe"></div></li>
          <li>
            <a href="https://www.linkedin.com/in/okborges/" target="_blank">
              <img src="../assets/icon/link.svg" alt="Linkedin Logo do okborges" width="29" />
            </a>
          </li>
          <li>
            <a href="https://github.com/okborges" target="_blank">
              <img src="../assets/icon/git.svg" alt="Github Logo do okborges" width="31" />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5511983736528&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <img src="../assets/icon/wpp.svg" alt="WhatasApp Logo do okborges" width="29" />
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
  padding: 0.3125rem 0.625rem;
  transition: 0.2s;
}
.cafe:hover {
  background-color: var(--color-p-08);
}
.detalhe {
  width: 0.125rem;
  height: 1.875rem;
  background-color: var(--color-s-03);
}
a {
  font-size: 1.25rem;
}

.logo {
  width: fit-content;
}

@media screen and (max-width: 1024px) {
  .conteiner {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
