<template>
  <div class="modal-mask ">
    <div class="modal-wrapper">
      <div class="modal-dialog modal-sm ">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h5 class="modal-title">Confirm Delete</h5>
          </div>
          <div class="modal-body align-middle">
            <span>
              Do you want to delete the bookmark?
            </span>
          </div>
          <div class="modal-footer border-0">
            <button
              @click="$emit('delete-bookmark')"
              type="button"
              class="btn delete-btn"
            >
              Delete
            </button>
            <button
              @click="$emit('cancel-delete')"
              type="button"
              class="btn cancel-btn"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["delete-bookmark", "cancel-delete"],
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  /* vertical-align: top; */
}

.modal-dialog {
  top: 20vh;
}

.modal-content {
  background-color: #16213e;
}

.modal-header {
  background-color: #e9445fb3;
}

.modal-content,
.modal-header,
.delete-btn,
.delete-btn:hover,
.delete-btn:focus,
.cancel-btn,
.cancel-btn:hover,
.cancel-btn:focus {
  color: #e6e6e6;
}

.delete-btn {
  background-color: #e9445fb3;
  width: 76px;
}

.delete-btn:hover,
.save-btn:focus {
  background-color: #e9445f;
  font-weight: bold;
}

.cancel-btn {
  background-color: #0f3461b3;
  width: 76px;
}

.cancel-btn:hover,
.cancel-btn:focus {
  background-color: #0f3461;
  font-weight: bold;
}
</style>
