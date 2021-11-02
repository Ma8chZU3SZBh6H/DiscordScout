//redux

import { AxiosError } from "axios";

export interface UserState {
  token: string | null;
  loggedin: boolean;
  data: User | null;
}

export interface RouterState {
  page: string;
}

export interface UserAction {
  type: string;
  payload?: User | string | null;
}

// export interface UserDataAction {
//   type: string;
//   payload?: User;
// }

export interface RouterAction {
  type: string;
  payload?: string;
}

//forms

export interface LoginForm {
  login: { value: string };
  password: { value: string };
  remember: { checked: boolean };
}

export interface MfaForm {
  code: { value: string };
}

//dashboard

export interface DashboardChannel {
  name: string | null;
  friend: string | null;
  id: string;
}

//axios

export interface Response<T = null> {
  data: T;
  error: AxiosError;
}

export interface LoginResponse {
  mfa: boolean;
  sms: boolean;
  ticket: string | null;
  token: string | null;
}

export interface LoginResponseSuccessful {
  token: string;
  user_settings: {
    locale: string;
    theme: string;
  };
}

//electron

export interface LoginHandlerResponse {
  success: boolean;
  msg: string | null;
  user: User | null;
}

// export interface ReqUser {
//   id: string | number;
//   token: string;
// }

//DISCORD USER TYPE

export interface User {
  v: number;
  users: UserElement[];
  user_settings_proto: string;
  user_settings: UserSettings;
  user_guild_settings: UserGuildSettings;
  user: PurpleUser;
  tutorial: null;
  session_id: string;
  relationships: Relationship[];
  read_state: ReadState;
  private_channels: PrivateChannel[];
  merged_members: Array<MergedMember[]>;
  guilds: Guild[];
  guild_join_requests: GuildJoinRequest[];
  guild_experiments: Array<
    Array<
      | Array<
          | Array<
              Array<
                Array<
                  | Array<
                      | Array<Array<number | string> | number | null | string>
                      | PurpleGuildExperiment
                    >
                  | number
                >
              >
            >
          | FluffyGuildExperiment
        >
      | number
      | null
    >
  >;
  geo_ordered_rtc_regions: string[];
  friend_suggestion_count: number;
  experiments: Array<number[]>;
  country_code: string;
  consents: Consents;
  connected_accounts: ConnectedAccount[];
  analytics_token: string;
  _trace: string[];
}

export interface ConnectedAccount {
  visibility: number;
  verified: boolean;
  type: string;
  show_activity: boolean;
  revoked: boolean;
  name: string;
  id: string;
  friend_sync: boolean;
  access_token: string;
}

export interface Consents {
  personalization: Personalization;
}

export interface Personalization {
  consented: boolean;
}

export interface PurpleGuildExperiment {
  s: number;
  e: number;
}

export interface FluffyGuildExperiment {
  k: string[];
  b: number;
}

export interface GuildJoinRequest {
  user_id: string;
  rejection_reason: null;
  last_seen: null;
  guild_id: string;
  created_at: null;
  application_status: string;
}

export interface Guild {
  large: boolean;
  premium_subscription_count: number;
  vanity_url_code: null | string;
  name: string;
  description: null | string;
  guild_scheduled_events: any[];
  max_video_channel_users: number;
  icon: null | string;
  mfa_level: number;
  verification_level: number;
  channels: Channel[];
  lazy: boolean;
  preferred_locale: Locale;
  features: string[];
  premium_tier: number;
  premium_progress_bar_enabled: boolean;
  explicit_content_filter: number;
  splash: null | string;
  afk_timeout: number;
  application_id: null;
  nsfw: boolean;
  roles: Role[];
  owner_id: string;
  joined_at: Date;
  default_message_notifications: number;
  guild_hashes: GuildHashes;
  nsfw_level: number;
  application_command_counts: { [key: string]: number };
  system_channel_id: null | string;
  threads: any[];
  region: string;
  emojis: Emoji[];
  stage_instances: any[];
  rules_channel_id: null | string;
  banner: null | string;
  public_updates_channel_id: null | string;
  id: string;
  stickers: Sticker[];
  afk_channel_id: null | string;
  member_count: number;
  system_channel_flags: number;
  discovery_splash: null | string;
  application_command_count?: number;
  max_members: number;
}

export interface Channel {
  type: number;
  topic?: null | string;
  rate_limit_per_user?: number;
  position: number;
  permission_overwrites: PermissionOverwrite[];
  parent_id?: null | string;
  nsfw?: boolean;
  name: string;
  last_message_id?: null | string;
  id: string;
  user_limit?: number;
  rtc_region?: null | string;
  bitrate?: number;
  last_pin_timestamp?: Date | null;
  guild_id?: string;
  video_quality_mode?: number;
  default_auto_archive_duration?: number;
}

export interface PermissionOverwrite {
  type: number;
  id: string;
  deny: string;
  allow: string;
}

export interface Emoji {
  roles: string[];
  require_colons: boolean;
  name: string;
  managed: boolean;
  id: string;
  available: boolean;
  animated: boolean;
}

export interface GuildHashes {
  version: number;
  roles: Channels;
  metadata: Channels;
  channels: Channels;
}

export interface Channels {
  omitted: boolean;
  hash: string;
}

export enum Locale {
  EnUS = "en-US",
}

export interface Role {
  unicode_emoji?: null | string;
  position: number;
  permissions: string;
  name: string;
  mentionable: boolean;
  managed: boolean;
  id: string;
  icon?: null | string;
  hoist: boolean;
  color: number;
  tags?: Tags;
}

export interface Tags {
  bot_id?: string;
  premium_subscriber?: null;
  integration_id?: string;
}

export interface Sticker {
  type: number;
  tags: string;
  name: string;
  id: string;
  guild_id: string;
  format_type: number;
  description: null | string;
  available: boolean;
  asset: string;
}

export interface MergedMember {
  user_id: string;
  roles: string[];
  premium_since?: null;
  pending?: boolean;
  nick?: null | string;
  mute: boolean;
  joined_at: Date;
  is_pending?: boolean;
  hoisted_role: null | string;
  deaf: boolean;
  avatar?: null;
  guild_id?: string;
}

export interface PrivateChannel {
  type: number;
  recipient_ids: string[];
  last_pin_timestamp?: Date;
  last_message_id: null | string;
  id: string;
  owner_id?: string;
  name?: null | string;
  icon?: null | string;
}

export interface ReadState {
  version: number;
  partial: boolean;
  entries: ReadStateEntry[];
}

export interface ReadStateEntry {
  mention_count: number;
  last_pin_timestamp: Date;
  last_message_id: string;
  id: string;
}

export interface Relationship {
  user_id: string;
  type: number;
  nickname: null;
  id: string;
}

export interface PurpleUser {
  verified: boolean;
  username: string;
  purchased_flags: number;
  premium: boolean;
  phone: string;
  nsfw_allowed: boolean;
  mobile: boolean;
  mfa_enabled: boolean;
  id: string;
  flags: number;
  email: string;
  discriminator: string;
  desktop: boolean;
  bio: string;
  banner_color: string;
  banner: null;
  avatar: string;
  accent_color: number;
}

export interface UserGuildSettings {
  version: number;
  partial: boolean;
  entries: UserGuildSettingsEntry[];
}

export interface UserGuildSettingsEntry {
  version: number;
  suppress_roles: boolean;
  suppress_everyone: boolean;
  muted: boolean;
  mute_config: null;
  mobile_push: boolean;
  message_notifications: number;
  hide_muted_channels: boolean;
  guild_id: null | string;
  channel_overrides: ChannelOverride[];
}

export interface ChannelOverride {
  muted: boolean;
  mute_config: MuteConfig | null;
  message_notifications: number;
  collapsed: boolean;
  channel_id: string;
}

export interface MuteConfig {
  selected_time_window: number | null;
  end_time: Date | null;
}

export interface UserSettings {
  inline_attachment_media: boolean;
  show_current_game: boolean;
  friend_source_flags: FriendSourceFlags;
  view_nsfw_guilds: boolean;
  enable_tts_command: boolean;
  render_reactions: boolean;
  gif_auto_play: boolean;
  stream_notifications_enabled: boolean;
  animate_emoji: boolean;
  afk_timeout: number;
  detect_platform_accounts: boolean;
  status: string;
  explicit_content_filter: number;
  custom_status: CustomStatus;
  default_guilds_restricted: boolean;
  theme: string;
  allow_accessibility_detection: boolean;
  locale: Locale;
  native_phone_integration_enabled: boolean;
  guild_positions: string[];
  timezone_offset: number;
  friend_discovery_flags: number;
  contact_sync_enabled: boolean;
  disable_games_tab: boolean;
  guild_folders: GuildFolder[];
  inline_embed_media: boolean;
  developer_mode: boolean;
  render_embeds: boolean;
  animate_stickers: number;
  message_display_compact: boolean;
  convert_emoticons: boolean;
  passwordless: boolean;
  restricted_guilds: any[];
}

export interface CustomStatus {
  text: string;
  expires_at: Date;
  emoji_name: string;
  emoji_id: null;
}

export interface FriendSourceFlags {
  all: boolean;
}

export interface GuildFolder {
  name: null;
  id: number | null | string;
  guild_ids: string[];
  color: null;
}

export interface UserElement {
  username: string;
  public_flags?: number;
  id: string;
  discriminator: string;
  avatar: null | string;
  bot?: boolean;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toUser(json: string): User {
    return cast(JSON.parse(json), r("User"));
  }

  public static userToJson(value: User): string {
    return JSON.stringify(uncast(value, r("User")), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any = ""): never {
  if (key) {
    throw Error(
      `Invalid value for key "${key}". Expected type ${JSON.stringify(
        typ
      )} but got ${JSON.stringify(val)}`
    );
  }
  throw Error(
    `Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`
  );
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ""): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases, val);
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue("array", val);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue("Date", val);
    }
    return d;
  }

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any
  ): any {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue("object", val);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key)
        ? val[key]
        : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, prop.key);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key);
      }
    });
    return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val);
  }
  if (typ === false) return invalidValue(typ, val);
  while (typeof typ === "object" && typ.ref !== undefined) {
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
    return typ.hasOwnProperty("unionMembers")
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty("arrayItems")
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty("props")
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  User: o(
    [
      { json: "v", js: "v", typ: 0 },
      { json: "users", js: "users", typ: a(r("UserElement")) },
      { json: "user_settings_proto", js: "user_settings_proto", typ: "" },
      { json: "user_settings", js: "user_settings", typ: r("UserSettings") },
      {
        json: "user_guild_settings",
        js: "user_guild_settings",
        typ: r("UserGuildSettings"),
      },
      { json: "user", js: "user", typ: r("PurpleUser") },
      { json: "tutorial", js: "tutorial", typ: null },
      { json: "session_id", js: "session_id", typ: "" },
      { json: "relationships", js: "relationships", typ: a(r("Relationship")) },
      { json: "read_state", js: "read_state", typ: r("ReadState") },
      {
        json: "private_channels",
        js: "private_channels",
        typ: a(r("PrivateChannel")),
      },
      {
        json: "merged_members",
        js: "merged_members",
        typ: a(a(r("MergedMember"))),
      },
      { json: "guilds", js: "guilds", typ: a(r("Guild")) },
      {
        json: "guild_join_requests",
        js: "guild_join_requests",
        typ: a(r("GuildJoinRequest")),
      },
      {
        json: "guild_experiments",
        js: "guild_experiments",
        typ: a(
          a(
            u(
              a(
                u(
                  a(
                    a(
                      a(
                        u(
                          a(
                            u(
                              a(u(a(u(0, "")), 0, null, "")),
                              r("PurpleGuildExperiment")
                            )
                          ),
                          0
                        )
                      )
                    )
                  ),
                  r("FluffyGuildExperiment")
                )
              ),
              0,
              null
            )
          )
        ),
      },
      {
        json: "geo_ordered_rtc_regions",
        js: "geo_ordered_rtc_regions",
        typ: a(""),
      },
      {
        json: "friend_suggestion_count",
        js: "friend_suggestion_count",
        typ: 0,
      },
      { json: "experiments", js: "experiments", typ: a(a(0)) },
      { json: "country_code", js: "country_code", typ: "" },
      { json: "consents", js: "consents", typ: r("Consents") },
      {
        json: "connected_accounts",
        js: "connected_accounts",
        typ: a(r("ConnectedAccount")),
      },
      { json: "analytics_token", js: "analytics_token", typ: "" },
      { json: "_trace", js: "_trace", typ: a("") },
    ],
    false
  ),
  ConnectedAccount: o(
    [
      { json: "visibility", js: "visibility", typ: 0 },
      { json: "verified", js: "verified", typ: true },
      { json: "type", js: "type", typ: "" },
      { json: "show_activity", js: "show_activity", typ: true },
      { json: "revoked", js: "revoked", typ: true },
      { json: "name", js: "name", typ: "" },
      { json: "id", js: "id", typ: "" },
      { json: "friend_sync", js: "friend_sync", typ: true },
      { json: "access_token", js: "access_token", typ: "" },
    ],
    false
  ),
  Consents: o(
    [
      {
        json: "personalization",
        js: "personalization",
        typ: r("Personalization"),
      },
    ],
    false
  ),
  Personalization: o(
    [{ json: "consented", js: "consented", typ: true }],
    false
  ),
  PurpleGuildExperiment: o(
    [
      { json: "s", js: "s", typ: 0 },
      { json: "e", js: "e", typ: 0 },
    ],
    false
  ),
  FluffyGuildExperiment: o(
    [
      { json: "k", js: "k", typ: a("") },
      { json: "b", js: "b", typ: 0 },
    ],
    false
  ),
  GuildJoinRequest: o(
    [
      { json: "user_id", js: "user_id", typ: "" },
      { json: "rejection_reason", js: "rejection_reason", typ: null },
      { json: "last_seen", js: "last_seen", typ: null },
      { json: "guild_id", js: "guild_id", typ: "" },
      { json: "created_at", js: "created_at", typ: null },
      { json: "application_status", js: "application_status", typ: "" },
    ],
    false
  ),
  Guild: o(
    [
      { json: "large", js: "large", typ: true },
      {
        json: "premium_subscription_count",
        js: "premium_subscription_count",
        typ: 0,
      },
      { json: "vanity_url_code", js: "vanity_url_code", typ: u(null, "") },
      { json: "name", js: "name", typ: "" },
      { json: "description", js: "description", typ: u(null, "") },
      {
        json: "guild_scheduled_events",
        js: "guild_scheduled_events",
        typ: a("any"),
      },
      {
        json: "max_video_channel_users",
        js: "max_video_channel_users",
        typ: 0,
      },
      { json: "icon", js: "icon", typ: u(null, "") },
      { json: "mfa_level", js: "mfa_level", typ: 0 },
      { json: "verification_level", js: "verification_level", typ: 0 },
      { json: "channels", js: "channels", typ: a(r("Channel")) },
      { json: "lazy", js: "lazy", typ: true },
      { json: "preferred_locale", js: "preferred_locale", typ: r("Locale") },
      { json: "features", js: "features", typ: a("") },
      { json: "premium_tier", js: "premium_tier", typ: 0 },
      {
        json: "premium_progress_bar_enabled",
        js: "premium_progress_bar_enabled",
        typ: true,
      },
      {
        json: "explicit_content_filter",
        js: "explicit_content_filter",
        typ: 0,
      },
      { json: "splash", js: "splash", typ: u(null, "") },
      { json: "afk_timeout", js: "afk_timeout", typ: 0 },
      { json: "application_id", js: "application_id", typ: null },
      { json: "nsfw", js: "nsfw", typ: true },
      { json: "roles", js: "roles", typ: a(r("Role")) },
      { json: "owner_id", js: "owner_id", typ: "" },
      { json: "joined_at", js: "joined_at", typ: Date },
      {
        json: "default_message_notifications",
        js: "default_message_notifications",
        typ: 0,
      },
      { json: "guild_hashes", js: "guild_hashes", typ: r("GuildHashes") },
      { json: "nsfw_level", js: "nsfw_level", typ: 0 },
      {
        json: "application_command_counts",
        js: "application_command_counts",
        typ: m(0),
      },
      { json: "system_channel_id", js: "system_channel_id", typ: u(null, "") },
      { json: "threads", js: "threads", typ: a("any") },
      { json: "region", js: "region", typ: "" },
      { json: "emojis", js: "emojis", typ: a(r("Emoji")) },
      { json: "stage_instances", js: "stage_instances", typ: a("any") },
      { json: "rules_channel_id", js: "rules_channel_id", typ: u(null, "") },
      { json: "banner", js: "banner", typ: u(null, "") },
      {
        json: "public_updates_channel_id",
        js: "public_updates_channel_id",
        typ: u(null, ""),
      },
      { json: "id", js: "id", typ: "" },
      { json: "stickers", js: "stickers", typ: a(r("Sticker")) },
      { json: "afk_channel_id", js: "afk_channel_id", typ: u(null, "") },
      { json: "member_count", js: "member_count", typ: 0 },
      { json: "system_channel_flags", js: "system_channel_flags", typ: 0 },
      { json: "discovery_splash", js: "discovery_splash", typ: u(null, "") },
      {
        json: "application_command_count",
        js: "application_command_count",
        typ: u(undefined, 0),
      },
      { json: "max_members", js: "max_members", typ: 0 },
    ],
    false
  ),
  Channel: o(
    [
      { json: "type", js: "type", typ: 0 },
      { json: "topic", js: "topic", typ: u(undefined, u(null, "")) },
      {
        json: "rate_limit_per_user",
        js: "rate_limit_per_user",
        typ: u(undefined, 0),
      },
      { json: "position", js: "position", typ: 0 },
      {
        json: "permission_overwrites",
        js: "permission_overwrites",
        typ: a(r("PermissionOverwrite")),
      },
      { json: "parent_id", js: "parent_id", typ: u(undefined, u(null, "")) },
      { json: "nsfw", js: "nsfw", typ: u(undefined, true) },
      { json: "name", js: "name", typ: "" },
      {
        json: "last_message_id",
        js: "last_message_id",
        typ: u(undefined, u(null, "")),
      },
      { json: "id", js: "id", typ: "" },
      { json: "user_limit", js: "user_limit", typ: u(undefined, 0) },
      { json: "rtc_region", js: "rtc_region", typ: u(undefined, u(null, "")) },
      { json: "bitrate", js: "bitrate", typ: u(undefined, 0) },
      {
        json: "last_pin_timestamp",
        js: "last_pin_timestamp",
        typ: u(undefined, u(Date, null)),
      },
      { json: "guild_id", js: "guild_id", typ: u(undefined, "") },
      {
        json: "video_quality_mode",
        js: "video_quality_mode",
        typ: u(undefined, 0),
      },
      {
        json: "default_auto_archive_duration",
        js: "default_auto_archive_duration",
        typ: u(undefined, 0),
      },
    ],
    false
  ),
  PermissionOverwrite: o(
    [
      { json: "type", js: "type", typ: 0 },
      { json: "id", js: "id", typ: "" },
      { json: "deny", js: "deny", typ: "" },
      { json: "allow", js: "allow", typ: "" },
    ],
    false
  ),
  Emoji: o(
    [
      { json: "roles", js: "roles", typ: a("") },
      { json: "require_colons", js: "require_colons", typ: true },
      { json: "name", js: "name", typ: "" },
      { json: "managed", js: "managed", typ: true },
      { json: "id", js: "id", typ: "" },
      { json: "available", js: "available", typ: true },
      { json: "animated", js: "animated", typ: true },
    ],
    false
  ),
  GuildHashes: o(
    [
      { json: "version", js: "version", typ: 0 },
      { json: "roles", js: "roles", typ: r("Channels") },
      { json: "metadata", js: "metadata", typ: r("Channels") },
      { json: "channels", js: "channels", typ: r("Channels") },
    ],
    false
  ),
  Channels: o(
    [
      { json: "omitted", js: "omitted", typ: true },
      { json: "hash", js: "hash", typ: "" },
    ],
    false
  ),
  Role: o(
    [
      {
        json: "unicode_emoji",
        js: "unicode_emoji",
        typ: u(undefined, u(null, "")),
      },
      { json: "position", js: "position", typ: 0 },
      { json: "permissions", js: "permissions", typ: "" },
      { json: "name", js: "name", typ: "" },
      { json: "mentionable", js: "mentionable", typ: true },
      { json: "managed", js: "managed", typ: true },
      { json: "id", js: "id", typ: "" },
      { json: "icon", js: "icon", typ: u(undefined, u(null, "")) },
      { json: "hoist", js: "hoist", typ: true },
      { json: "color", js: "color", typ: 0 },
      { json: "tags", js: "tags", typ: u(undefined, r("Tags")) },
    ],
    false
  ),
  Tags: o(
    [
      { json: "bot_id", js: "bot_id", typ: u(undefined, "") },
      {
        json: "premium_subscriber",
        js: "premium_subscriber",
        typ: u(undefined, null),
      },
      { json: "integration_id", js: "integration_id", typ: u(undefined, "") },
    ],
    false
  ),
  Sticker: o(
    [
      { json: "type", js: "type", typ: 0 },
      { json: "tags", js: "tags", typ: "" },
      { json: "name", js: "name", typ: "" },
      { json: "id", js: "id", typ: "" },
      { json: "guild_id", js: "guild_id", typ: "" },
      { json: "format_type", js: "format_type", typ: 0 },
      { json: "description", js: "description", typ: u(null, "") },
      { json: "available", js: "available", typ: true },
      { json: "asset", js: "asset", typ: "" },
    ],
    false
  ),
  MergedMember: o(
    [
      { json: "user_id", js: "user_id", typ: "" },
      { json: "roles", js: "roles", typ: a("") },
      { json: "premium_since", js: "premium_since", typ: u(undefined, null) },
      { json: "pending", js: "pending", typ: u(undefined, true) },
      { json: "nick", js: "nick", typ: u(undefined, u(null, "")) },
      { json: "mute", js: "mute", typ: true },
      { json: "joined_at", js: "joined_at", typ: Date },
      { json: "is_pending", js: "is_pending", typ: u(undefined, true) },
      { json: "hoisted_role", js: "hoisted_role", typ: u(null, "") },
      { json: "deaf", js: "deaf", typ: true },
      { json: "avatar", js: "avatar", typ: u(undefined, null) },
      { json: "guild_id", js: "guild_id", typ: u(undefined, "") },
    ],
    false
  ),
  PrivateChannel: o(
    [
      { json: "type", js: "type", typ: 0 },
      { json: "recipient_ids", js: "recipient_ids", typ: a("") },
      {
        json: "last_pin_timestamp",
        js: "last_pin_timestamp",
        typ: u(undefined, Date),
      },
      { json: "last_message_id", js: "last_message_id", typ: u(null, "") },
      { json: "id", js: "id", typ: "" },
      { json: "owner_id", js: "owner_id", typ: u(undefined, "") },
      { json: "name", js: "name", typ: u(undefined, u(null, "")) },
      { json: "icon", js: "icon", typ: u(undefined, u(null, "")) },
    ],
    false
  ),
  ReadState: o(
    [
      { json: "version", js: "version", typ: 0 },
      { json: "partial", js: "partial", typ: true },
      { json: "entries", js: "entries", typ: a(r("ReadStateEntry")) },
    ],
    false
  ),
  ReadStateEntry: o(
    [
      { json: "mention_count", js: "mention_count", typ: 0 },
      { json: "last_pin_timestamp", js: "last_pin_timestamp", typ: Date },
      { json: "last_message_id", js: "last_message_id", typ: "" },
      { json: "id", js: "id", typ: "" },
    ],
    false
  ),
  Relationship: o(
    [
      { json: "user_id", js: "user_id", typ: "" },
      { json: "type", js: "type", typ: 0 },
      { json: "nickname", js: "nickname", typ: null },
      { json: "id", js: "id", typ: "" },
    ],
    false
  ),
  PurpleUser: o(
    [
      { json: "verified", js: "verified", typ: true },
      { json: "username", js: "username", typ: "" },
      { json: "purchased_flags", js: "purchased_flags", typ: 0 },
      { json: "premium", js: "premium", typ: true },
      { json: "phone", js: "phone", typ: "" },
      { json: "nsfw_allowed", js: "nsfw_allowed", typ: true },
      { json: "mobile", js: "mobile", typ: true },
      { json: "mfa_enabled", js: "mfa_enabled", typ: true },
      { json: "id", js: "id", typ: "" },
      { json: "flags", js: "flags", typ: 0 },
      { json: "email", js: "email", typ: "" },
      { json: "discriminator", js: "discriminator", typ: "" },
      { json: "desktop", js: "desktop", typ: true },
      { json: "bio", js: "bio", typ: "" },
      { json: "banner_color", js: "banner_color", typ: "" },
      { json: "banner", js: "banner", typ: null },
      { json: "avatar", js: "avatar", typ: "" },
      { json: "accent_color", js: "accent_color", typ: 0 },
    ],
    false
  ),
  UserGuildSettings: o(
    [
      { json: "version", js: "version", typ: 0 },
      { json: "partial", js: "partial", typ: true },
      { json: "entries", js: "entries", typ: a(r("UserGuildSettingsEntry")) },
    ],
    false
  ),
  UserGuildSettingsEntry: o(
    [
      { json: "version", js: "version", typ: 0 },
      { json: "suppress_roles", js: "suppress_roles", typ: true },
      { json: "suppress_everyone", js: "suppress_everyone", typ: true },
      { json: "muted", js: "muted", typ: true },
      { json: "mute_config", js: "mute_config", typ: null },
      { json: "mobile_push", js: "mobile_push", typ: true },
      { json: "message_notifications", js: "message_notifications", typ: 0 },
      { json: "hide_muted_channels", js: "hide_muted_channels", typ: true },
      { json: "guild_id", js: "guild_id", typ: u(null, "") },
      {
        json: "channel_overrides",
        js: "channel_overrides",
        typ: a(r("ChannelOverride")),
      },
    ],
    false
  ),
  ChannelOverride: o(
    [
      { json: "muted", js: "muted", typ: true },
      { json: "mute_config", js: "mute_config", typ: u(r("MuteConfig"), null) },
      { json: "message_notifications", js: "message_notifications", typ: 0 },
      { json: "collapsed", js: "collapsed", typ: true },
      { json: "channel_id", js: "channel_id", typ: "" },
    ],
    false
  ),
  MuteConfig: o(
    [
      {
        json: "selected_time_window",
        js: "selected_time_window",
        typ: u(0, null),
      },
      { json: "end_time", js: "end_time", typ: u(Date, null) },
    ],
    false
  ),
  UserSettings: o(
    [
      {
        json: "inline_attachment_media",
        js: "inline_attachment_media",
        typ: true,
      },
      { json: "show_current_game", js: "show_current_game", typ: true },
      {
        json: "friend_source_flags",
        js: "friend_source_flags",
        typ: r("FriendSourceFlags"),
      },
      { json: "view_nsfw_guilds", js: "view_nsfw_guilds", typ: true },
      { json: "enable_tts_command", js: "enable_tts_command", typ: true },
      { json: "render_reactions", js: "render_reactions", typ: true },
      { json: "gif_auto_play", js: "gif_auto_play", typ: true },
      {
        json: "stream_notifications_enabled",
        js: "stream_notifications_enabled",
        typ: true,
      },
      { json: "animate_emoji", js: "animate_emoji", typ: true },
      { json: "afk_timeout", js: "afk_timeout", typ: 0 },
      {
        json: "detect_platform_accounts",
        js: "detect_platform_accounts",
        typ: true,
      },
      { json: "status", js: "status", typ: "" },
      {
        json: "explicit_content_filter",
        js: "explicit_content_filter",
        typ: 0,
      },
      { json: "custom_status", js: "custom_status", typ: r("CustomStatus") },
      {
        json: "default_guilds_restricted",
        js: "default_guilds_restricted",
        typ: true,
      },
      { json: "theme", js: "theme", typ: "" },
      {
        json: "allow_accessibility_detection",
        js: "allow_accessibility_detection",
        typ: true,
      },
      { json: "locale", js: "locale", typ: r("Locale") },
      {
        json: "native_phone_integration_enabled",
        js: "native_phone_integration_enabled",
        typ: true,
      },
      { json: "guild_positions", js: "guild_positions", typ: a("") },
      { json: "timezone_offset", js: "timezone_offset", typ: 0 },
      { json: "friend_discovery_flags", js: "friend_discovery_flags", typ: 0 },
      { json: "contact_sync_enabled", js: "contact_sync_enabled", typ: true },
      { json: "disable_games_tab", js: "disable_games_tab", typ: true },
      { json: "guild_folders", js: "guild_folders", typ: a(r("GuildFolder")) },
      { json: "inline_embed_media", js: "inline_embed_media", typ: true },
      { json: "developer_mode", js: "developer_mode", typ: true },
      { json: "render_embeds", js: "render_embeds", typ: true },
      { json: "animate_stickers", js: "animate_stickers", typ: 0 },
      {
        json: "message_display_compact",
        js: "message_display_compact",
        typ: true,
      },
      { json: "convert_emoticons", js: "convert_emoticons", typ: true },
      { json: "passwordless", js: "passwordless", typ: true },
      { json: "restricted_guilds", js: "restricted_guilds", typ: a("any") },
    ],
    false
  ),
  CustomStatus: o(
    [
      { json: "text", js: "text", typ: "" },
      { json: "expires_at", js: "expires_at", typ: Date },
      { json: "emoji_name", js: "emoji_name", typ: "" },
      { json: "emoji_id", js: "emoji_id", typ: null },
    ],
    false
  ),
  FriendSourceFlags: o([{ json: "all", js: "all", typ: true }], false),
  GuildFolder: o(
    [
      { json: "name", js: "name", typ: null },
      { json: "id", js: "id", typ: u(0, null, "") },
      { json: "guild_ids", js: "guild_ids", typ: a("") },
      { json: "color", js: "color", typ: null },
    ],
    false
  ),
  UserElement: o(
    [
      { json: "username", js: "username", typ: "" },
      { json: "public_flags", js: "public_flags", typ: u(undefined, 0) },
      { json: "id", js: "id", typ: "" },
      { json: "discriminator", js: "discriminator", typ: "" },
      { json: "avatar", js: "avatar", typ: u(null, "") },
      { json: "bot", js: "bot", typ: u(undefined, true) },
    ],
    false
  ),
  Locale: ["en-US"],
};
