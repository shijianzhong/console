import {
  BasicLayout,
  BlankLayout,
  definePlugin,
  PluginLayout,
} from "@halo-dev/admin-shared";
import PluginList from "./PluginList.vue";
import PluginSetting from "./PluginSetting.vue";
import PluginDetail from "./PluginDetail.vue";
import { IconPlug } from "@halo-dev/components";

export default definePlugin({
  name: "pluginModule",
  components: [],
  routes: [
    {
      path: "/plugins",
      component: BlankLayout,
      children: [
        {
          path: "",
          component: BasicLayout,
          children: [
            {
              path: "",
              name: "Plugins",
              component: PluginList,
              meta: {
                permissions: ["system:plugins:view"],
              },
            },
          ],
        },
        {
          path: ":name",
          component: PluginLayout,
          children: [
            {
              path: "detail",
              name: "PluginDetail",
              component: PluginDetail,
            },
            {
              path: "settings/:group",
              name: "PluginSetting",
              component: PluginSetting,
            },
          ],
        },
      ],
    },
  ],
  menus: [
    {
      name: "系统",
      items: [
        {
          name: "插件",
          path: "/plugins",
          icon: IconPlug,
        },
      ],
    },
  ],
});