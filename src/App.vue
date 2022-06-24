<template>
  <div id="app">
    <v-app id="inspire">
      <v-row>
        <v-menu v-for="item in items" :key="item.title" :rounded="rounded" offset-y>
          <template v-slot:activator="{ attrs, on }">
            <v-btn class="btn" v-bind="attrs" v-on="on">
              {{ item.title }}
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="child in item.items" :key="child.title">
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>
      <div class="test">
        <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="p_colors[i]" height="100%">
              <v-row align="center" justify="center">
                <div class="text-h2">
                  {{ slide }} Slide
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="main">

      </div>
  <v-bottom-navigation
    :value="value"
    color="primary"
  >
    <v-btn>
      <span>Recents</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    colors: ['deep-purple accent-4', 'error', 'teal darken-1'],
    items: [
      {
        action: 'mdi-ticket',
        items: [{ title: 'List Item' }],
        title: 'Attractions',
      },
      {
        action: 'mdi-silverware-fork-knife',
        active: true,
        items: [
          { title: 'Breakfast & brunch' },
          { title: 'New American' },
          { title: 'Sushi' },
        ],
        title: 'Dining',
      },
      {
        action: 'mdi-school',
        items: [{ title: 'List Item' }],
        title: 'Education',
      },
      {
        action: 'mdi-human-male-female-child',
        items: [{ title: 'List Item' }],
        title: 'Family',
      },
      {
        action: 'mdi-bottle-tonic-plus',
        items: [{ title: 'List Item' }],
        title: 'Health',
      },
      {
        action: 'mdi-briefcase',
        items: [{ title: 'List Item' }],
        title: 'Office',
      },
      {
        action: 'mdi-tag',
        items: [{ title: 'List Item' }],
        title: 'Promotions',
      },
    ],
    p_colors: [
      'indigo',
      'warning',
      'pink darken-2',
      'red lighten-1',
      'deep-purple accent-4',
    ],
    slides: [
      'First',
      'Second',
      'Third',
      'Fourth',
      'Fifth',
    ],
  }),
  methods: {

  },
}
</script>
<style>
.btn {
  margin-top: 40px;
  margin-left: 40px;
}

.row {
  height: 100px !important;
  width: 100%;
}
.main{
  height: 400px !important;
  width: 100%;
}
</style>>