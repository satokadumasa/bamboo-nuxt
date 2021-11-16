<template>
  <div>

  </div>
</template>
<script>
export default {
  props: {
    note_list: {}
  },
  data() {
    return {
      note_list: {},
    };
  },
  mounted() {
    this.opps = this.datas;
  },
  computed: {
    datas: {
      get() {
        return this.note_list;
      },
      set(value) {
        this.note_list = value;
      },
    },
  },
}
</script>