<template>
  <section class="table">
    <div class="table-scroll-content">
      <div class="table-head">
        <div class="table-heading table-name">Tabela 1</div>
        <div class="table-heading">Klient</div>
        <div class="table-heading">Osoby</div>
        <div class="table-heading">Status</div>
        <div class="table-heading">Nast. kontakt</div>
        <div class="table-heading">Ost. kontakt</div>
        <div class="table-heading">Miejscowość</div>
        <div class="table-heading">Wartość</div>
        <div class="table-heading">Kontrakt</div>
        <div class="table-heading">Lokalizacja</div>
        <div class="table-heading">Osoba odpowiedzialna</div>
        <div class="table-heading">Telefon</div>
        <div class="table-heading">Obszar współpracy</div>
        <div class="table-heading">Źródło</div>
        <div class="table-heading">E-mail</div>
        <div class="table-heading">Data utworzenia</div>
      </div>
      <div class="table-body">
        <div class="table-row">
          <div class="table-cell">hotel gdańsk</div>
          <div class="table-cell"><Column type="rating" value="4" /></div>
          <div class="table-cell">
            <Column
              type="people"
              :value="[
                'd.lewicki@adawards.pl',
                'Arkadiusz Szustak',
                'k.orzechowski@adawards.pl',
                'Dariusz Kolber',
                'Monika Brzeska',
                'k.pilny@adawards.pl',
              ]"
            />
          </div>
          <div class="table-cell"><Column type="status" value="8" /></div>
          <div class="table-cell">komórka</div>
          <div class="table-cell">komórka</div>
          <div class="table-cell">komórka</div>
          <div class="table-cell">komórka</div>
          <div class="table-cell">komórka</div>
          <div class="table-cell">komórka</div>
          <div class="table-cell">komórka</div>
          <div class="table-cell">komórka</div>
          <div class="table-cell">komórka</div>
          <div class="table-cell">komórka</div>
          <div class="table-cell">komórka</div>
          <div class="table-cell">komórka</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import '@/assets/min-css/table.min.css';
// import setStickyContentOpacityEvent from '@/helpers/table/setStickyContentOpacityEvent.js';

export default {
  methods: {
    setStickyContentOpacityEvent: () =>
      import('@/helpers/table/setStickyContentOpacityEvent.js'),
  },
  components: {
    Column: () => import('@/components/pages/board/column/Column.vue'),
  },
  created() {
    this.setStickyContentOpacityEvent();
  },
};
</script>
