<template>
  <section :class="['navigation-menu', { active: showNavigationMenu }]">
    <div
      class="open-close-arrow-container"
      @click="showNavigationMenu = !showNavigationMenu"
    >
      <mdicon name="chevron-right" />
    </div>
    <div class="content">
      <div class="add-board">
        <input type="text" v-model="boardTitle" placeholder="Nazwa tablicy" />
        <button @click="createBoard">Add</button>
      </div>
      <div class="list">
        <div
          v-for="(item, i) in list"
          :key="`navigation-menu-list-item-${i}`"
          :class="['item', { active: isItemSelected(item) }]"
        >
          <router-link
            :to="getItemLink(item)"
            v-tooltip.top="item.title"
            style="width: 100%"
          >
            <mdicon class="item-icon" :name="getItemIcon(item.type)" />
            <span class="item-title">{{ item.title }}</span>
          </router-link>
          <VDropdown>
            <mdicon
              class="item-options"
              name="dots-horizontal"
              @click.prevent=""
            />

            <template #popper>
              <div class="items-options-wrapper" style="padding: 0.3rem">
                <div
                  @click="deleteItem(item)"
                  class="item-option"
                  style="cursor: pointer"
                >
                  <mdicon class="item-delete" name="delete" />
                  <span>Delete</span>
                </div>
              </div>
            </template>
          </VDropdown>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      boardTitle: '',
      showNavigationMenu: false,
      icons: {
        board: 'table',
        dashboard: 'chart-areaspline',
        folder: 'chevron-right',
      },
    };
  },
  computed: {
    list() {
      let elements = {
        board: this.boards,
      };

      let list = [];

      for (let type in elements) {
        list.push(
          ...elements[type].reduce((t, i) => {
            i.type = type;
            return [...t, i];
          }, [])
        );
      }

      return list;
    },
    boards() {
      return this.$store.getters.boards;
    },
  },

  methods: {
    deleteItem(item) {
      if (!confirm(`Czy na pewno chcesz usunąć "${item.title}?"`)) return;

      axios.delete(`${item.type}s/destroy/${item.id}`);
    },
    createBoard() {
      axios.post('boards/create', { title: this.boardTitle });
    },
    isItemSelected(item) {
      let currentType = this.$route.name.toLowerCase();
      return (
        item.type == currentType &&
        this.$route.params[`${currentType}Id`] == item.id
      );
    },
    getItemIcon(type) {
      return this.icons[type];
    },
    getItemLink(item) {
      let link = {};
      switch (item.type) {
        case 'dashboard':
          link = { name: 'Dashboard', params: { dashboardId: item?.id } };
          break;
        case 'board':
          link = { name: 'Board', params: { boardId: item?.id } };
          break;
        default:
          link = '';
          break;
      }

      return link;
    },
  },

  mounted() {
    this.$store.dispatch('boards');
    this.$echo.channel('boards').listen('.boards.create', () => {
      this.$store.dispatch('boards');
      console.log('board created');
    });
    this.$echo.channel('boards').listen('.boards.destroy', () => {
      this.$store.dispatch('boards');
      console.log('board destroyed');
    });
  },
};
</script>
