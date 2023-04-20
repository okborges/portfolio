<template>
  <header class="py-7">
    <div class="grid conteiner mx-auto justify-between sm:flex">
      <img src="../assets/svg/logo.svg" alt="" />
      <nav>
        <ul class="flex gap-10">
          <li><a href="">projetos</a></li>
          <li><a href="">Contato</a></li>
          <li><div class="detalhe"></div></li>
          <li>
            <a href=""><img src="../assets/icon/link.svg" alt="" /></a>
          </li>
          <li>
            <a href=""><img src="../assets/icon/git.svg" alt="" /></a>
          </li>
          <li>
            <a href=""><img src="../assets/icon/wpp.svg" alt="" /></a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.detalhe {
  width: 2px;
  height: 30px;
  background-color: var(--color-s-03);
}
</style>
