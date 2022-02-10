<template>
  <VDropdown class="status" :offset="[0, 0]" :style="style">
    <div class="status-wrapper">
      <span class="status-value">{{ status.title }}</span>
      <div class="status-mask"></div>
      <div class="status-corner">
        <div class="status-corner-shadow-container">
          <div class="status-corner-shadow"></div>
        </div>
      </div>
    </div>
    <template #popper>
      <div class="status-dropdown-container">
        <div v-show="editMode" class="status-dropdown-content">
          <div class="status-edit-mode-listing">
            <div
              draggable="true"
              v-for="(status, i) in statuses"
              :key="`status-edit-mode-item-${i}`"
              class="status-edit-mode-item"
            >
              <div class="status-edit-mode-item-wrapper">
                <div class="status-edit-mode-item-drag-icon-container">
                  <mdicon class="status-edit-mode-item-drag-icon" name="drag" />
                </div>
                <div
                  draggable="true"
                  @dragstart.prevent=""
                  style="display: flex"
                >
                  <div
                    class="status-edit-mode-item-color"
                    :style="{ backgroundColor: status.color }"
                  >
                    <mdicon
                      class="status-edit-mode-item-color-water"
                      name="water-outline"
                    />
                  </div>
                  <input
                    class="status-edit-mode-item-text"
                    v-model="status.title"
                  />
                  <div class="status-edit-mode-item-delete-icon-container">
                    <mdicon
                      class="status-edit-mode-item-delete-icon"
                      name="close-circle"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="status-edit-mode-item">
              <div class="status-edit-mode-new-label" :style="newLabelStyle">
                New label
              </div>
            </div>
          </div>
          <div class="status-default-colors">
            <div
              v-for="(color, i) in defaultColors"
              :key="`default-color${i}`"
              class="status-default-color"
              :style="{ backgroundColor: color }"
              @mouseover="newLabelBackgroundColor = color"
              @mouseleave="newLabelBackgroundColor = ''"
            ></div>
          </div>
        </div>
        <div v-show="!editMode" class="status-dropdown-content">
          <div class="status-list">
            <div
              v-for="(status, i) in statuses"
              :key="`status-item${i}`"
              class="status-item"
            >
              <div
                class="status-item-wrapper"
                :style="{ backgroundColor: status.color }"
                @click="currentStatus = status"
              >
                {{ status.title }}
              </div>
            </div>
          </div>
        </div>

        <div class="status-dropdown-footer">
          <div @click="activateEditMode" class="status-add-edit-button">
            <mdicon
              v-if="!editMode"
              class="status-add-edit-icon"
              name="pencil-outline"
            />
            <span class="status-add-edit-text">{{
              editMode ? 'Apply' : 'Add/Edit Labels'
            }}</span>
          </div>
        </div>
      </div>
    </template>
  </VDropdown>
</template>

<script>
import '@/assets/min-css/status.min.css';

export default {
  props: ['value'],
  data() {
    return {
      editMode: false,
      defaultColor: '#daf',
      currentStatus: {},
      newLabelBackgroundColor: '',
      defaultColors: [
        '#bb3354',
        '#ff642e',
        '#FFCB00',
        '#784BD1',
        '#808080',
        '#FF7575',
        '#FAA1F1',
        '#FFADAD',
        '#9AADBD',
        '#68A1BD',
        '#225091',
        '#4ECCC6',
        '#5559DF',
        '#401694',
        '#563E3E',
        '#BDA8F9',
        '#A9BEE8',
        '#D974B0',
        '#9D99B9',
        '#AD967A',
        '#A1E3F6',
        '#BD816E',
      ],
    };
  },

  computed: {
    newLabelStyle() {
      return {
        backgroundColor: this.newLabelBackgroundColor,
        color: this.newLabelBackgroundColor ? 'white' : '',
        border: this.newLabelBackgroundColor
          ? `1px solid ${this.newLabelBackgroundColor}`
          : '',
      };
    },
    status() {
      return this.statuses.find((status) => status.id == this.value);
    },
    statuses() {
      return this.$store.getters.statuses;
    },
    style() {
      return {
        backgroundColor: this.status?.color ?? this.defaultColor,
      };
    },
  },

  methods: {
    activateEditMode() {
      this.editMode = !this.editMode;
    },
  },
};
</script>
