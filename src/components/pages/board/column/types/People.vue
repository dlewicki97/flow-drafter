<template>
  <VDropdown class="people">
    <div class="people-container">
      <mdicon class="people-add-icon" name="plus-circle" />
      <div
        v-for="(person, i) in currentPeople.slice(0, 2)"
        :key="`people-person-${i}`"
        class="people-person"
        :style="{ backgroundColor: person.color }"
      >
        <img v-if="person.avatar" :src="person.avatar" class="people-avatar" />
        <div v-else class="people-initials">
          {{ getPersonInitials(person.name) }}
        </div>
      </div>
      <div class="people-count">+{{ currentPeople.length - 2 }}</div>
    </div>
    <template #popper>
      <div class="people-dropdown">
        <div class="people-dropdown-list">
          <div
            v-for="(person, i) in currentPeople"
            :key="`people-dropdown-list-person-${i}`"
            class="people-dropdown-list-person"
          >
            <img
              v-if="person.avatar"
              :src="person.avatar"
              class="people-dropdown-list-person-avatar"
            />
            <div
              v-else
              class="people-dropdown-list-person-initials"
              :style="{ backgroundColor: person.color }"
            >
              {{ getPersonInitials(person.name) }}
            </div>

            <div class="people-dropdown-list-person-name">
              {{ person.name }}
            </div>
            <div class="people-dropdown-list-person-delete-container">
              <mdicon class="people-dropdown-list-person-delete" name="close" />
            </div>
          </div>
        </div>
        <input
          type="text"
          class="people-dropdown-search"
          placeholder="Enter another name"
          v-model="search"
        />
        <div class="people-dropdown-separator">People</div>
        <div class="people-dropdown-search-results">
          <div
            v-for="(person, i) in searchedPeople"
            :key="`people-dropdown-search-result-${i}`"
            class="people-dropdown-search-result"
          >
            <img
              src="@/assets/img/avatar1.jpg"
              alt=""
              class="people-dropdown-search-result-avatar"
            />
            <span class="people-dropdown-search-result-name">{{
              person.name
            }}</span>
            <span class="people-dropdown-search-result-workplace"
              >({{ person.workplace }})</span
            >
          </div>
        </div>
      </div>
    </template>
  </VDropdown>
</template>

<script>
import '@/assets/min-css/people.min.css';

export default {
  props: ['value'],
  data() {
    return {
      search: '',
    };
  },
  computed: {
    people() {
      return this.$store.getters.people;
    },
    currentPeople() {
      return this.people.filter((person) => {
        return Boolean(
          this.value.find((data) => person.email == data || person.name == data)
        );
      });
    },
    peopleLeftToSearch() {
      return this.people.filter(
        (person) => !this.currentPeople.includes(person)
      );
    },
    searchedPeople() {
      return this.peopleLeftToSearch.filter((person) =>
        person.name.toLowerCase().includes(this.search.trim().toLowerCase())
      );
    },
  },
  methods: {
    getPersonInitials(name) {
      let nameArray = name.split(' ');
      let firstName = nameArray[0];
      let lastName = nameArray[1];

      return firstName[0] + lastName[0];
    },
  },
};
</script>
