import type { Component } from "vue";
import type { RouteRecordRaw, RouteRecordName } from "vue-router";
import type { FunctionalPage } from "../states/pages";
import type { AttachmentSelectProvider } from "../states/attachment-selector";

export interface RouteRecordAppend {
  parentName: RouteRecordName;
  route: RouteRecordRaw;
}

export interface ExtensionPoint {
  "page:functional:create"?: () => FunctionalPage[] | Promise<FunctionalPage[]>;

  "attachment:selector:create"?: () =>
    | AttachmentSelectProvider[]
    | Promise<AttachmentSelectProvider[]>;
}

export interface PluginModule {
  /**
   * These components will be registered when plugin is activated.
   */
  components?: Record<string, Component>;

  /**
   * Activate hook will be called when plugin is activated.
   */
  activated?: () => void;

  /**
   * Deactivate hook will be called when plugin is deactivated.
   */
  deactivated?: () => void;

  routes?: RouteRecordRaw[] | RouteRecordAppend[];

  extensionPoints?: ExtensionPoint;
}
