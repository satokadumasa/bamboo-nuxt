<template>
    <List
      :note_list="note_list.data"
      :page_name="pagename"
      :cpartners="partnerList_"
      :categoryList="categoryList"
    />
</template>

<script>
import { mapGetters } from "vuex";
import List from "~/components/Notes/list";
// import base from "~/mixins/base";

export default {
  components: {
    list // make the <FullCalendar> tag available
  },
  head() {
    return {
      title: "Note一覧",
    };
  },
  asyncData({ store, app, query }) {
    return Promise.all([
      store.dispatch('notes/notelistAsync', {
        params: { page: 1 },
      }),
    ]).then((response) => {
      return {
        note_list: _.cloneDeep(store.getters["notes/note_list"]),
      };      
    });
  }
}
</script>
