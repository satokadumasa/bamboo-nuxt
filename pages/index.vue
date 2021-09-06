<template>
  <FullCalendar
    default-view="dayGridMonth"
    :locale="locale"
    :header="calendarHeader"
    :weekends="calendarWeekends"
    :plugins="calendarPlugins"
    :events="calendarEvents"
    @dateClick="handleDateClick"
    @eventClick="editEvent"
  />
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import jaLocale from '@fullcalendar/core/locales/ja' // 日本語化用

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  setup() {
    this.fetchSchedule();
    console.log('dddddd');
  },
  data () {
    return {
      locale: jaLocale, // 日本語化
      // カレンダーヘッダーのデザイン
      calendarHeader: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      navLinks: true,
      editable: true,
      selectable: true,
      height: 'auto',
      calendarWeekends: true, // 土日を表示するか
      // カレンダーで使用するプラグイン
      calendarPlugins: [ 
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin
      ],
      
      timeFormat: { // for event elements
        '': 'h(:mm)t' // default
      },
      // カレンダーに表示するスケジュール一覧
      calendarEvents: [],
    }
  },
  methods: {
    handleDateClick(arg) {
      if (confirm('新しいスケジュールを' + arg.dateStr + 'に追加しますか ?')) {
        this.calendarEvents.push({
          title: '新規スケジュール',
          start: arg.date,
          allDay: arg.allDay
        })
      }
    },
    fetchSchedule() {
      this.$axios.get(`fetchSchedule`).then(response => {
        console.log("fetchSchedule() SUCCESS");
        console.log("fetchSchedule() response.data:" + JSON.stringify(response.data));
        this.calendarEvents = response.data;
      }).catch(error => {
        console.log("fetchSchedule() FALSE");
      }).finally(() => this.id = 0);
    },
    editEvent(info) {
      console.log('id: ' + info.event.id);
      console.log('title: ' + info.event.title);
      console.log('start: ' + info.event.start);
      console.log('allDay: ' + info.event.allDay);
      console.log('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
      console.log('View: ' + info.view.type);
      info.el.style.borderColor = 'red';
    },
  }
}
</script>
<style>
@import '~/node_modules/@fullcalendar/core/main.css';
@import '~/node_modules/@fullcalendar/daygrid/main.css';
@import '~/node_modules/@fullcalendar/timegrid/main.css';
.fc-sun {
  color: red;
  background-color: #fff0f0;
}
 
/* 土曜日 */
.fc-sat {
  color: blue;
  background-color: #f0f0ff;
}
</style>
